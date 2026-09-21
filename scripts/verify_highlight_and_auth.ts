import { findHighlightMatches, buildNormalizedMapping } from '../src/utils/textHighlighting';
import { HighYieldPoint } from '../src/types/features';

console.log('=== TEST SUITE 1: HIGHLIGHTING & TEXT MATCHING ===');

let testsPassed = 0;
let testsFailed = 0;

function assert(condition: boolean, msg: string) {
  if (condition) {
    console.log(`  ✓ ${msg}`);
    testsPassed++;
  } else {
    console.error(`  ✗ FAIL: ${msg}`);
    testsFailed++;
  }
}

// 1. Exact match test
const mockHl1: HighYieldPoint = {
  id: 'h1',
  chapterNumber: 1,
  chapterTitle: 'Ch 1',
  text: 'matter and energy',
  category: 'Core Concept',
  tagColor: 'yellow',
  createdAt: new Date().toISOString()
};

const m1 = findHighlightMatches('All things in the universe consist of matter and energy.', [mockHl1]);
assert(m1.length === 1, 'Finds exact match');
assert(m1[0]?.start === 38 && m1[0]?.end === 55, 'Accurate character boundaries');

// 2. Smart quotes vs straight quotes
const mockHl2: HighYieldPoint = {
  id: 'h2',
  chapterNumber: 1,
  chapterTitle: 'Ch 1',
  text: 'Einstein\'s equation "E = mc²"',
  category: 'Formula / Law',
  tagColor: 'green',
  createdAt: new Date().toISOString()
};

const textWithSmartQuotes = 'This is governed by Einstein’s equation “E = mc²” in modern physics.';
const m2 = findHighlightMatches(textWithSmartQuotes, [mockHl2]);
assert(m2.length === 1, 'Matches across smart single and double quotes');
assert(textWithSmartQuotes.substring(m2[0].start, m2[0].end).includes('Einstein’s'), 'Slices original text preserving original smart quotes');

// 3. Dashes & non-breaking spaces
const mockHl3: HighYieldPoint = {
  id: 'h3',
  chapterNumber: 1,
  chapterTitle: 'Ch 1',
  text: 'alpha emitter - 2.0 to 2.3 mSv/yr',
  category: 'Radiation Protection',
  tagColor: 'purple',
  createdAt: new Date().toISOString()
};

const textWithEmDashAndNbsp = 'Radon gas is an alpha emitter\u00A0—\u00A02.0 to 2.3 mSv/yr under normal conditions.';
const m3 = findHighlightMatches(textWithEmDashAndNbsp, [mockHl3]);
assert(m3.length === 1, 'Matches across em-dashes and non-breaking spaces (\\u00A0)');

// 4. Short radiology acronyms (kVp, mAs)
const mockHlShort: HighYieldPoint = {
  id: 'hShort',
  chapterNumber: 5,
  chapterTitle: 'Ch 5',
  text: 'kVp',
  category: 'Technique',
  tagColor: 'blue',
  createdAt: new Date().toISOString()
};
const mShort = findHighlightMatches('Adjust the kVp setting before exposure.', [mockHlShort]);
assert(mShort.length === 1, 'Matches short 3-letter high-yield abbreviations (kVp)');

// 5. Multi-line / Cross-paragraph split selection
const mockHlMultiPara: HighYieldPoint = {
  id: 'hMulti',
  chapterNumber: 7,
  chapterTitle: 'Ch 7',
  text: 'x-rays are produced at the target.\n\nCharacteristic radiation requires K-shell ionization.',
  category: 'Core Concept',
  tagColor: 'yellow',
  createdAt: new Date().toISOString()
};

const para1 = 'Projectiles strike the anode where x-rays are produced at the target.';
const para2 = 'Characteristic radiation requires K-shell ionization and high energy.';
const mPara1 = findHighlightMatches(para1, [mockHlMultiPara]);
const mPara2 = findHighlightMatches(para2, [mockHlMultiPara]);
assert(mPara1.length === 1, 'Paragraph 1 successfully matches its slice of multi-paragraph highlight');
assert(mPara2.length === 1, 'Paragraph 2 successfully matches its slice of multi-paragraph highlight');
assert(para1.substring(mPara1[0].start, mPara1[0].end) === 'x-rays are produced at the target.', 'Paragraph 1 extracted exact text');
assert(para2.substring(mPara2[0].start, mPara2[0].end) === 'Characteristic radiation requires K-shell ionization', 'Paragraph 2 extracted exact text');

// 6. Overlap deduplication
const mockHlOver1: HighYieldPoint = {
  id: 'hOver1',
  chapterNumber: 2,
  chapterTitle: 'Ch 2',
  text: 'Compton scattering effect',
  category: 'Core Concept',
  tagColor: 'yellow',
  createdAt: new Date().toISOString()
};
const mockHlOver2: HighYieldPoint = {
  id: 'hOver2',
  chapterNumber: 2,
  chapterTitle: 'Ch 2',
  text: 'scattering effect in tissue',
  category: 'Exam Trap',
  tagColor: 'red',
  createdAt: new Date().toISOString()
};

const mOver = findHighlightMatches('Understanding Compton scattering effect in tissue is critical.', [mockHlOver1, mockHlOver2]);
assert(mOver.length > 0, 'Handles overlapping highlights safely');
// Ensure no ranges cross each other
let noOverlap = true;
for (let i = 0; i < mOver.length - 1; i++) {
  if (mOver[i].end > mOver[i + 1].start) noOverlap = false;
}
assert(noOverlap, 'Merged ranges are strictly non-overlapping');

// 7. Short 2-letter radiology acronyms (kV, mA, Pb, Al)
const mockHl2Letter: HighYieldPoint = {
  id: 'h2Letter',
  chapterNumber: 4,
  chapterTitle: 'Ch 4',
  text: 'Pb',
  category: 'Radiation Protection',
  tagColor: 'purple',
  createdAt: new Date().toISOString()
};
const m2Letter = findHighlightMatches('Primary barrier requires 1.6 mm Pb equivalent.', [mockHl2Letter]);
assert(m2Letter.length === 1, 'Matches short 2-letter radiation symbols (Pb)');
assert(m2Letter[0].start === 32 && m2Letter[0].end === 34, 'Accurate 2-letter symbol boundary');

// 8. Greek letters & mathematical symbols
const mockHlGreek: HighYieldPoint = {
  id: 'hGreek',
  chapterNumber: 3,
  chapterTitle: 'Ch 3',
  text: 'c = f × λ',
  category: 'Formula',
  tagColor: 'green',
  createdAt: new Date().toISOString()
};
const mGreek = findHighlightMatches('Wave velocity formula: c = f × λ holds in vacuum.', [mockHlGreek]);
assert(mGreek.length === 1, 'Preserves and matches Greek letters (λ, μ, α, β)');

// 9. Multi-paragraph selection containing short middle paragraph (length < 10, e.g. "E = mc²")
const mockHlShortMiddle: HighYieldPoint = {
  id: 'hShortMid',
  chapterNumber: 1,
  chapterTitle: 'Ch 1',
  text: 'Conservation of matter and energy.\n\nE = mc²\n\nAll matter has mass.',
  category: 'Core Concept',
  tagColor: 'yellow',
  createdAt: new Date().toISOString()
};
const middlePara = 'E = mc²';
const mMid = findHighlightMatches(middlePara, [mockHlShortMiddle]);
assert(mMid.length === 1, 'Matches short fully contained paragraphs in multi-paragraph selections');

console.log('\n=== TEST SUITE 2: BETTER AUTH & BACKEND API ===');

import { auth, startServer } from '../server';

// Start test server instance
const testServer = startServer(3002);

// 1. Sign up new test user via HTTP endpoint
const testEmail = `rad_tester_${Date.now()}@polytronx.com`;
const testPassword = 'SecureBushongPassword2026!';

const signupHttpRes = await fetch('http://localhost:3002/api/auth/sign-up/email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: testEmail,
    password: testPassword,
    name: 'RadSci Tester'
  })
});
assert(signupHttpRes.status === 200, 'Better Auth HTTP sign-up succeeds with 200');
const signupData = await signupHttpRes.json();
assert(!!signupData.user, 'Better Auth sign-up returns user object');
assert(signupData.user.email === testEmail, 'User email matches registered email');
assert(signupData.user.name === 'RadSci Tester', 'User name matches');

// 2. Sign in via HTTP endpoint and extract signed session cookie
const signinHttpRes = await fetch('http://localhost:3002/api/auth/sign-in/email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: testEmail,
    password: testPassword
  })
});
assert(signinHttpRes.status === 200, 'Better Auth HTTP sign-in succeeds with 200');
const setCookieHeader = signinHttpRes.headers.get('set-cookie');
assert(!!setCookieHeader, 'Set-Cookie header received from sign-in');
const sessionCookie = setCookieHeader ? setCookieHeader.split(';')[0] : '';
assert(sessionCookie.includes('better-auth.session_token='), 'Contains signed session_token cookie');

// 3. Sign in with wrong password via HTTP endpoint
const badLoginRes = await fetch('http://localhost:3002/api/auth/sign-in/email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: testEmail,
    password: 'WrongPassword!'
  })
});
assert(badLoginRes.status === 401, 'Better Auth rejects invalid password with 401 Unauthorized');

// 4. Cloud Highlights API Sync Roundtrip
const postHlRes = await fetch('http://localhost:3002/api/user/highlights', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Cookie': sessionCookie
  },
  body: JSON.stringify({
    highlights: [mockHlGreek, mockHl2Letter]
  })
});
assert(postHlRes.status === 200, 'POST /api/user/highlights returns 200 OK');
const postJson = await postHlRes.json();
assert(postJson.success === true && postJson.count === 2, 'POST /api/user/highlights saved 2 highlights');

const getHlRes = await fetch('http://localhost:3002/api/user/highlights', {
  method: 'GET',
  headers: {
    'Cookie': sessionCookie
  }
});
assert(getHlRes.status === 200, 'GET /api/user/highlights returns 200 OK');
const getJson = await getHlRes.json();
assert(Array.isArray(getJson.highlights) && getJson.highlights.length === 2, 'GET /api/user/highlights retrieved 2 cloud highlights');
assert(getJson.highlights[0].id === 'hGreek', 'Retrieved cloud highlight preserves data integrity');

testServer.stop();

console.log(`\n========================================`);
console.log(`RESULTS: ${testsPassed} passed, ${testsFailed} failed`);
if (testsFailed > 0) {
  process.exit(1);
} else {
  console.log('ALL VERIFICATION TESTS PASSED SUCCESSFULLY!');
  process.exit(0);
}
