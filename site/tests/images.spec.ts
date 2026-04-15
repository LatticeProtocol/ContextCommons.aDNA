import { test, expect } from '@playwright/test';

const pages = ['/', '/about', '/curriculum', '/pilots', '/get-involved', '/partners', '/resources', '/contact'];

test.describe('Gate 4: All images have valid src and alt', () => {
  for (const path of pages) {
    test(`images on ${path} have src and alt`, async ({ page }) => {
      await page.goto(path);

      const images = await page.locator('img').all();

      for (const img of images) {
        const src = await img.getAttribute('src');
        const alt = await img.getAttribute('alt');

        expect(src, `Image missing src on ${path}`).toBeTruthy();
        expect(alt, `Image missing alt text on ${path} (src: ${src})`).toBeTruthy();
        expect(alt!.trim().length, `Image has empty alt on ${path} (src: ${src})`).toBeGreaterThan(0);
      }
    });
  }
});
