import { test, expect } from '@playwright/test';

const allPages = ['/', '/about', '/curriculum', '/pilots', '/get-involved', '/partners', '/resources', '/contact'];

test.describe('Cross-page navigation', () => {
  test('all pages reachable from homepage links', async ({ page }) => {
    await page.goto('/');

    // Collect all internal links on the homepage
    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a[href^="/"]'))
        .map(a => (a as HTMLAnchorElement).getAttribute('href'))
        .filter((href): href is string => href !== null);
    });

    const uniqueLinks = [...new Set(links.map(l => l.replace(/\/$/, '') || '/'))];

    // Every page in our site should be reachable from the homepage
    for (const target of allPages) {
      expect(
        uniqueLinks,
        `${target} should be linked from the homepage`
      ).toContain(target);
    }
  });

  test('header nav contains all page links', async ({ page }, testInfo) => {
    const viewport = page.viewportSize();
    if (!viewport || viewport.width < 1024) {
      testInfo.skip();
      return;
    }

    await page.goto('/');

    const nav = page.getByRole('navigation', { name: 'Main navigation' });
    const navLinks = await nav.evaluate((el) => {
      return Array.from(el.querySelectorAll('a'))
        .map(a => a.getAttribute('href'))
        .filter((href): href is string => href !== null);
    });

    const normalizedLinks = navLinks.map(l => l.replace(/\/$/, '') || '/');

    for (const target of allPages) {
      expect(
        normalizedLinks,
        `Header nav should link to ${target}`
      ).toContain(target);
    }
  });
});
