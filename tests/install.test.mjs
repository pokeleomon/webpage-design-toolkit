import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
test('install matrix covers engines without superpowers', () => {
  const readme = fs.readFileSync('webpage-design-kit/README.md', 'utf8');
  for (const s of ['npx skills', 'Claude', 'Codex', 'Cursor', 'Copilot', 'OpenCode', 'no Superpowers']) assert.ok(readme.includes(s));
});
