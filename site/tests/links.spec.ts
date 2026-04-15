import { test, expect } from '@playwright/test';

const pages = ['/', '/about', '/curriculum', '/pilots', '/get-involved', '/partners', '/resources', '/contact'];

test.describe('Gate 3: No broken internal links', () => {
  for (const path of pages) {
    test(`all internal links on ${path} resolve`, async ({ page }) => {
      await page.goto(path);

      const links = await page.locator('a[href^="/"]').all();
      const hrefs = new Set<string>();

      for (const link of links) {
        const href = await link.getAttribute('href');
        if (href) {
          const route = href.split('?')[0].split('#')[0];
          if (route && route !== path) hrefs.add(route);
        }
      }

      for (const href of hrefs) {
        const response = await page.goto(href);
        expect(response?.status(), `Broken link: ${href} on ${path}`).toBeLessThan(400);
      }
    });
  }
});
