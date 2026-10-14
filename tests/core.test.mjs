import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
test('core loop sections exist with plan-gate rule', () => {
  const md = fs.readFileSync('webpage-design-kit/skills/webpage-design/SKILL.md', 'utf8');
  for (const h of ['## Ask', '## Playback', '## Plan-gate', '## Boundaries', '## Memory']) assert.ok(md.includes(h));
  assert.ok(md.includes('No code before approval'));
  assert.ok(md.includes('hands-off') && md.includes('written override'));
});
