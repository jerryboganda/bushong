import fs from 'fs';
import zlib from 'zlib';

function createPng(width, height, isMaskable = false) {
  // CRC32 table
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    crcTable[n] = c;
  }

  function crc32(buf) {
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcVal = crc32(Buffer.concat([typeBuf, data]));
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crcVal, 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 6; // color type: RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdr = makeChunk('IHDR', ihdrData);

  // Generate image pixels (Dark rich blue background with glowing cyan and gold atomic crest)
  const rowLen = 1 + width * 4;
  const rawData = Buffer.alloc(rowLen * height);

  const cx = width / 2;
  const cy = height / 2;
  const maxR = Math.min(width, height) / 2;
  const cornerR = isMaskable ? 0 : width * 0.22;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowLen;
    rawData[rowOffset] = 0; // filter byte 0

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;

      // Distance from center
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Check rounded corner clip if not maskable
      let alpha = 255;
      if (!isMaskable) {
        // Rounded rect distance
        const qx = Math.max(Math.abs(dx) - (width / 2 - cornerR), 0);
        const qy = Math.max(Math.abs(dy) - (height / 2 - cornerR), 0);
        const cornerDist = Math.sqrt(qx * qx + qy * qy);
        if (cornerDist > cornerR) {
          alpha = 0;
        } else if (cornerDist > cornerR - 1) {
          alpha = Math.round(255 * (cornerR - cornerDist));
        }
      }

      if (alpha === 0) {
        rawData[pxOffset] = 0;
        rawData[pxOffset + 1] = 0;
        rawData[pxOffset + 2] = 0;
        rawData[pxOffset + 3] = 0;
        continue;
      }

      // Base gradient (Deep Navy to Sapphire)
      const gradT = (x + y) / (width + height);
      let r = Math.round(9 + gradT * (15 - 9));
      let g = Math.round(20 + gradT * (43 - 20));
      let b = Math.round(40 + gradT * (92 - 40));

      // Central core glow (atom/nucleus)
      const nucleusDist = Math.sqrt(dx * dx + (dy + height * 0.08) * (dy + height * 0.08));
      if (nucleusDist < maxR * 0.15) {
        // Pure bright core
        const coreIntensity = 1 - nucleusDist / (maxR * 0.15);
        r = Math.round(r + (255 - r) * coreIntensity);
        g = Math.round(g + (255 - g) * coreIntensity);
        b = Math.round(b + (255 - b) * coreIntensity);
      } else if (nucleusDist < maxR * 0.35) {
        const glow = 1 - (nucleusDist - maxR * 0.15) / (maxR * 0.2);
        r = Math.round(r + (56 - r) * glow * 0.8);
        g = Math.round(g + (189 - g) * glow * 0.8);
        b = Math.round(b + (248 - b) * glow * 0.8);
      }

      // Elliptical orbits (3 loops at -30, 30, 90 deg)
      const angles = [Math.PI / 6, -Math.PI / 6, Math.PI / 2];
      const a = maxR * 0.65;
      const bRad = maxR * 0.22;
      const orbitY = dy + height * 0.08;

      for (const ang of angles) {
        const cosA = Math.cos(ang);
        const sinA = Math.sin(ang);
        const rotX = dx * cosA + orbitY * sinA;
        const rotY = -dx * sinA + orbitY * cosA;
        const ellipseEq = (rotX * rotX) / (a * a) + (rotY * rotY) / (bRad * bRad);
        const distFromRing = Math.abs(Math.sqrt(ellipseEq) - 1.0) * bRad;

        if (distFromRing < maxR * 0.035) {
          const ringAlpha = 1 - distFromRing / (maxR * 0.035);
          r = Math.round(r * (1 - ringAlpha) + 56 * ringAlpha);
          g = Math.round(g * (1 - ringAlpha) + 189 * ringAlpha);
          b = Math.round(b * (1 - ringAlpha) + 248 * ringAlpha);
        }
      }

      // Book icon at bottom
      const bookDy = dy - height * 0.28;
      if (Math.abs(bookDy) < maxR * 0.18 && Math.abs(dx) < maxR * 0.45) {
        const isLeftPage = dx < -2;
        const isRightPage = dx > 2;
        if (isLeftPage || isRightPage) {
          const pageShade = isLeftPage ? 245 : 230;
          r = pageShade;
          g = pageShade;
          b = pageShade;
          // Lines on page
          if (Math.abs(Math.sin(bookDy * 0.35)) > 0.6 && Math.abs(dx) > maxR * 0.08 && Math.abs(dx) < maxR * 0.38) {
            r = 14;
            g = 116;
            b = 144;
          }
        } else if (Math.abs(dx) <= 2) {
          // Gold ribbon
          r = 245;
          g = 158;
          b = 11;
        }
      }

      // Top Cross (Medical icon in Gold)
      const crossDy = dy + height * 0.34;
      if (Math.abs(crossDy) < maxR * 0.08 && Math.abs(dx) < maxR * 0.025 ||
          Math.abs(crossDy) < maxR * 0.025 && Math.abs(dx) < maxR * 0.08) {
        r = 245;
        g = 158;
        b = 11;
      }

      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = alpha;
    }
  }

  const compressedData = zlib.deflateSync(rawData);
  const idat = makeChunk('IDAT', compressedData);
  const iend = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdr, idat, iend]);
}

// Generate files in public/
fs.writeFileSync('public/pwa-192x192.png', createPng(192, 192, false));
fs.writeFileSync('public/pwa-512x512.png', createPng(512, 512, false));
fs.writeFileSync('public/pwa-maskable-512x512.png', createPng(512, 512, true));
fs.writeFileSync('public/apple-touch-icon.png', createPng(180, 180, false));
fs.writeFileSync('public/favicon.ico', createPng(64, 64, false));

console.log('PWA icon assets generated successfully.');
