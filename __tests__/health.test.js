import { getHealthStatus } from '../src/health.js';

test('healthy', () => {
  expect(getHealthStatus({ health: 90 })).toBe('healthy');
});

test('wounded', () => {
  expect(getHealthStatus({ health: 30 })).toBe('wounded');
});

test('critical', () => {
  expect(getHealthStatus({ health: 10 })).toBe('critical');
});
