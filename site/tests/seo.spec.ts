import { test, expect } from '@playwright/test';

const pages = ['/', '/about', '/curriculum', '/pilots', '/get-involved', '/partners', '/resources', '/contact'];

test.describe('Gate 7: SEO elements present', () => {
  for (const path of pages) {
    test(`${path} has title`, async ({ page }) => {
      await page.goto(path);
      const title = await page.title();
      expect(title.length, `Missing or empty title on ${path}`).toBeGreaterThan(0);
    });

    test(`${path} has meta description`, async ({ page }) => {
      await page.goto(path);
      const desc = page.locator('meta[name="description"]');
      await expect(desc).toHaveAttribute('content', /.+/);
    });

    test(`${path} has og:title`, async ({ page }) => {
      await page.goto(path);
      const og = page.locator('meta[property="og:title"]');
      await expect(og).toHaveAttribute('content', /.+/);
    });

    test(`${path} has JSON-LD`, async ({ page }) => {
      await page.goto(path);
      const jsonld = page.locator('script[type="application/ld+json"]');
      const count = await jsonld.count();
      expect(count, `No JSON-LD on ${path}`).toBeGreaterThan(0);

      const text = await jsonld.first().textContent();
      expect(() => JSON.parse(text!)).not.toThrow();
    });
  }
});
