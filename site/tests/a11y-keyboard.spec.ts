import { test, expect } from '@playwright/test';

const pages = ['/', '/about', '/curriculum', '/pilots', '/get-involved', '/partners', '/resources', '/contact'];

test.describe('Keyboard accessibility', () => {
  test('each page has exactly one h1', async ({ page }) => {
    for (const url of pages) {
      await page.goto(url);
      const h1Count = await page.locator('h1').count();
      expect(h1Count, `${url} should have exactly 1 h1, found ${h1Count}`).toBe(1);
    }
  });

  test('heading hierarchy has no skipped levels', async ({ page }) => {
    for (const url of pages) {
      await page.goto(url);
      const headings = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => {
          return parseInt(h.tagName.charAt(1));
        });
      });

      // Check no level is skipped (e.g., h1 -> h3 without h2)
      for (let i = 1; i < headings.length; i++) {
        const diff = headings[i] - headings[i - 1];
        expect(
          diff <= 1,
          `${url}: heading level jumps from h${headings[i - 1]} to h${headings[i]} at position ${i}`
        ).toBeTruthy();
      }
    }
  });

  test('skip-to-content link is accessible on focus', async ({ page }, testInfo) => {
    // Keyboard Tab tests are unreliable on tablet/mobile emulation
    const viewport = page.viewportSize();
    if (!viewport || viewport.width > 500) {
      if (viewport && viewport.width < 1024) { testInfo.skip(); return; }
    }

    await page.goto('/');
    await page.keyboard.press('Tab');
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeFocused();
  });

  test('focus-visible outline is applied to interactive elements', async ({ page }, testInfo) => {
    const viewport = page.viewportSize();
    if (!viewport || viewport.width > 500) {
      if (viewport && viewport.width < 1024) { testInfo.skip(); return; }
    }

    await page.goto('/');
    await page.keyboard.press('Tab'); // skip link
    await page.keyboard.press('Tab'); // logo link

    const logoLink = page.getByLabel('Context Commons home');
    const outline = await logoLink.evaluate((el) =>
      window.getComputedStyle(el).outlineStyle
    );
    expect(outline).not.toBe('none');
  });
});

test.describe('Reduced motion compliance', () => {
  test('no invisible elements under prefers-reduced-motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });

    for (const url of pages) {
      await page.goto(url);

      // No element should have opacity 0 (which would hide content)
      const hiddenAnimated = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('[data-animate]')).filter(el => {
          const style = window.getComputedStyle(el);
          return parseFloat(style.opacity) < 0.1;
        }).length;
      });
      expect(hiddenAnimated, `${url} has ${hiddenAnimated} invisible animated elements`).toBe(0);
    }
  });
});
