import { test, expect } from '@playwright/test';
import { execSync } from 'node:child_process';

test.describe('Gate 1: Build succeeds', () => {
  test('npm run build exits with code 0', () => {
    const result = execSync('npm run build', {
      cwd: new URL('..', import.meta.url).pathname,
      timeout: 60_000,
    });
    expect(result).toBeDefined();
  });
});
