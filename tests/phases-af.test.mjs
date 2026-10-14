import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
test('kill-generic and fidelity reference upstream without vendoring', () => {
  const md = fs.readFileSync('webpage-design-kit/skills/webpage-design/SKILL.md', 'utf8');
  for (const s of ['design-taste-frontend', 'web-design-guidelines', 'image-to-code', 'playwright-cli', 'review-animations', 'impeccable']) assert.ok(md.toLowerCase().includes(s));
  assert.ok(md.includes('SKIP'));
  assert.ok(md.toLowerCase().includes('detect-then-adapt') && md.toLowerCase().includes('minimalist'));
});
