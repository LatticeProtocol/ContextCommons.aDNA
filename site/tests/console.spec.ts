import { test, expect } from '@playwright/test';

const pages = ['/', '/about', '/curriculum', '/pilots', '/get-involved', '/partners', '/resources', '/contact'];

test.describe('Gate 10: No console errors', () => {
  for (const path of pages) {
    test(`${path} has no console errors`, async ({ page }) => {
      const errors: string[] = [];

      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const text = msg.text();
          const url = msg.location().url || '';
          // Vercel analytics/speed-insights scripts only load on deployed Vercel, not local preview
          if (text.includes('_vercel') || url.includes('_vercel')) return;
          errors.push(`${text} (${url})`);
        }
      });

      page.on('pageerror', (err) => {
        errors.push(err.message);
      });

      await page.goto(path, { waitUntil: 'networkidle' });

      expect(errors, `Console errors on ${path}:\n${errors.join('\n')}`).toHaveLength(0);
    });
  }
});
