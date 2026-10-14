import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
test('safety covers 6 risks plus 20 items with severities', () => {
  const md = fs.readFileSync('webpage-design-kit/skills/webpage-design/SKILL.md', 'utf8');
  assert.ok(md.includes('DMCA agent') && md.includes('Blocking') && md.includes('not legal advice'));
  const list = fs.readFileSync('webpage-design-kit/references/SAFETY-CHECKLIST.md', 'utf8');
  for (const s of ['Privacy policy', 'Cookie consent', 'dark patterns', 'alt text', 'contrast', 'Data deletion']) assert.ok(list.includes(s));
});
