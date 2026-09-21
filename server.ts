import { betterAuth } from 'better-auth';
import { Database } from 'bun:sqlite';
import fs from 'fs';
import path from 'path';

// Ensure data directory exists
const dbPath = process.env.DATABASE_PATH || './data/bushong_auth.db';
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Initialize SQLite database
const db = new Database(dbPath);

// Ensure Better Auth tables and User Highlights table exist
db.run(`
CREATE TABLE IF NOT EXISTS user (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    emailVerified INTEGER NOT NULL DEFAULT 0,
    image TEXT,
    createdAt INTEGER NOT NULL,
    updatedAt INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS session (
    id TEXT PRIMARY KEY,
    expiresAt INTEGER NOT NULL,
    token TEXT NOT NULL UNIQUE,
    createdAt INTEGER NOT NULL,
    updatedAt INTEGER NOT NULL,
    ipAddress TEXT,
    userAgent TEXT,
    userId TEXT NOT NULL REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS account (
    id TEXT PRIMARY KEY,
    accountId TEXT NOT NULL,
    providerId TEXT NOT NULL,
    userId TEXT NOT NULL REFERENCES user(id),
    accessToken TEXT,
    refreshToken TEXT,
    idToken TEXT,
    accessTokenExpiresAt INTEGER,
    refreshTokenExpiresAt INTEGER,
    scope TEXT,
    password TEXT,
    createdAt INTEGER NOT NULL,
    updatedAt INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS verification (
    id TEXT PRIMARY KEY,
    identifier TEXT NOT NULL,
    value TEXT NOT NULL,
    expiresAt INTEGER NOT NULL,
    createdAt INTEGER,
    updatedAt INTEGER
);

CREATE TABLE IF NOT EXISTS user_highlights (
    userId TEXT PRIMARY KEY REFERENCES user(id),
    data TEXT NOT NULL,
    updatedAt INTEGER NOT NULL
);
`);

const baseURL = process.env.BETTER_AUTH_URL || 'http://localhost:3000';
const secret = process.env.BETTER_AUTH_SECRET || 'bushong_radsci_super_secret_key_2026_xray_vault';

export const auth = betterAuth({
  baseURL,
  secret,
  database: db,
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false
  },
  trustedOrigins: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:5173',
    'https://bushong.polytronx.com',
    'http://bushong.polytronx.com'
  ]
});

const PORT = Number(process.env.PORT) || 3001;

export function startServer(port = PORT) {
  console.log(`[Bushong Server] Starting on port ${port}...`);
  console.log(`[Bushong Server] Better Auth configured with baseURL: ${baseURL}`);

  const server = Bun.serve({
    port,
    async fetch(req: Request) {
      const url = new URL(req.url);

      // Set CORS headers
      const origin = req.headers.get('origin');
      const corsHeaders: Record<string, string> = {
        'Access-Control-Allow-Origin': origin || '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Cookie',
        'Access-Control-Allow-Credentials': 'true',
      };

      if (req.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: corsHeaders });
      }

      // Health check endpoint
      if (url.pathname === '/api/health') {
        return Response.json(
          { status: 'ok', service: 'bushong-auth-api', time: new Date().toISOString() },
          { headers: corsHeaders }
        );
      }

      // Better Auth API routes (/api/auth/*)
      if (url.pathname.startsWith('/api/auth')) {
        const response = await auth.handler(req);
        const newHeaders = new Headers(response.headers);
        Object.entries(corsHeaders).forEach(([k, v]) => newHeaders.set(k, v));
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders
        });
      }

      // User Highlights Cloud Sync API
      if (url.pathname === '/api/user/highlights') {
        try {
          const session = await auth.api.getSession({ headers: req.headers });
          if (!session || !session.user) {
            return Response.json({ error: 'Unauthorized' }, { status: 401, headers: corsHeaders });
          }

          if (req.method === 'GET') {
            const row = db.query('SELECT data, updatedAt FROM user_highlights WHERE userId = ?').get(session.user.id) as { data: string; updatedAt: number } | null;
            return Response.json(
              { highlights: row ? JSON.parse(row.data) : null, updatedAt: row?.updatedAt || null },
              { headers: corsHeaders }
            );
          }

          if (req.method === 'POST') {
            const body = await req.json();
            const highlights = body.highlights || [];
            db.run(
              `INSERT INTO user_highlights (userId, data, updatedAt) VALUES (?, ?, ?)
               ON CONFLICT(userId) DO UPDATE SET data = excluded.data, updatedAt = excluded.updatedAt`,
              [session.user.id, JSON.stringify(highlights), Date.now()]
            );
            return Response.json({ success: true, count: highlights.length }, { headers: corsHeaders });
          }
        } catch (err: any) {
          return Response.json({ error: err.message || 'Internal Server Error' }, { status: 500, headers: corsHeaders });
        }
      }

      return new Response('Not Found', { status: 404, headers: corsHeaders });
    }
  });

  console.log(`[Bushong Server] Listening on http://localhost:${server.port}`);
  return server;
}

if (import.meta.main) {
  startServer();
}
