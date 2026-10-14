import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
test('shelf and vibe pinned with licenses', () => {
  const md = fs.readFileSync('webpage-design-kit/skills/webpage-design/SKILL.md', 'utf8');
  for (const s of ['react-three-fiber', 'liquid-glass', 'shadergradient', 'refero', 'cult', 'watermelon', 'cari', 'artvee', 'gurafiku']) assert.ok(md.toLowerCase().includes(s));
  const attr = fs.readFileSync('webpage-design-kit/ATTRIBUTION.md', 'utf8');
  assert.ok(attr.includes('MIT') && attr.includes('Apache-2.0'));
  assert.ok(md.toLowerCase().includes('verify') && md.toLowerCase().includes('proprietary'));
});
