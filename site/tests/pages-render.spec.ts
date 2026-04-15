import { test, expect } from '@playwright/test';

const pages = [
  { path: '/', h1: 'Every community deserves its own printing press.' },
  { path: '/about', h1: 'About Context Commons' },
  { path: '/curriculum', h1: 'Curriculum' },
  { path: '/pilots', h1: 'Pilot Programs' },
  { path: '/get-involved', h1: 'Get Involved' },
  { path: '/partners', h1: 'Partners' },
  { path: '/resources', h1: 'Resources' },
  { path: '/contact', h1: 'Contact' },
];

test.describe('Gate 2: All pages render', () => {
  for (const { path, h1 } of pages) {
    test(`${path} loads and has correct h1`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);

      const heading = page.locator('h1').first();
      await expect(heading).toBeVisible();
      await expect(heading).toHaveText(h1);
    });
  }
});
