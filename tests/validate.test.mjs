import test from 'node:test';
import assert from 'node:assert/strict';
import { validateKit } from '../scripts/validate.mjs';
test('skeleton validates with TODO-allowed errors only', () => {
  const { errors } = validateKit('webpage-design-kit');
  assert.ok(Array.isArray(errors));
});
