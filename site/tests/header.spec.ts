import { test, expect } from '@playwright/test';

test.describe('Header component', () => {
  test('renders logo link', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByLabel('Context Commons home')).toBeVisible();
  });

  test('desktop: active page has underline indicator', async ({ page, browserName }, testInfo) => {
    // Desktop nav is only visible at lg (1024px+)
    const viewport = page.viewportSize();
    if (!viewport || viewport.width < 1024) {
      testInfo.skip();
      return;
    }

    await page.goto('/about');
    const activeLink = page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'About' });
    await expect(activeLink).toHaveAttribute('aria-current', 'page');
    await expect(activeLink).toHaveClass(/border-b-2/);
  });

  test('desktop: navigation links are visible', async ({ page }, testInfo) => {
    const viewport = page.viewportSize();
    if (!viewport || viewport.width < 1024) {
      testInfo.skip();
      return;
    }

    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Main navigation' });
    await expect(nav).toBeVisible();
    await expect(nav.getByRole('link')).toHaveCount(8);
  });

  test('scroll shadow appears on scroll', async ({ page }) => {
    await page.goto('/');

    const header = page.locator('[data-header]');
    await expect(header).not.toHaveClass(/shadow-md/);

    await page.evaluate(() => window.scrollTo(0, 50));
    await page.waitForTimeout(100);

    await expect(header).toHaveClass(/shadow-md/);
  });

  test('mobile: menu opens and closes with hamburger', async ({ page }, testInfo) => {
    const viewport = page.viewportSize();
    if (!viewport || viewport.width >= 1024) {
      testInfo.skip();
      return;
    }

    await page.goto('/');

    const toggle = page.getByLabel('Open menu');
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');

    const closeBtn = page.getByLabel('Close menu');
    await closeBtn.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  test('mobile: Escape key closes menu and returns focus to toggle', async ({ page }, testInfo) => {
    const viewport = page.viewportSize();
    if (!viewport || viewport.width >= 1024) {
      testInfo.skip();
      return;
    }

    await page.goto('/');

    const toggle = page.getByLabel('Open menu');
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');

    await page.keyboard.press('Escape');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(toggle).toBeFocused();
  });

  test('mobile: focus trap cycles forward with Tab', async ({ page, browserName }, testInfo) => {
    const viewport = page.viewportSize();
    // Only test keyboard focus on desktop browser engine with small viewport (mobile project)
    // Tablet projects may handle Tab differently due to isMobile emulation
    if (!viewport || viewport.width >= 1024 || viewport.width > 500) {
      testInfo.skip();
      return;
    }

    await page.goto('/');
    await page.getByLabel('Open menu').click();

    const closeBtn = page.getByLabel('Close menu');
    await expect(closeBtn).toBeFocused();

    // Tab through all nav links (8 links)
    for (let i = 0; i < 8; i++) {
      await page.keyboard.press('Tab');
    }
    // Next Tab wraps back to close button
    await page.keyboard.press('Tab');
    await expect(closeBtn).toBeFocused();
  });

  test('mobile: focus trap cycles backward with Shift+Tab', async ({ page }, testInfo) => {
    const viewport = page.viewportSize();
    if (!viewport || viewport.width >= 1024 || viewport.width > 500) {
      testInfo.skip();
      return;
    }

    await page.goto('/');
    await page.getByLabel('Open menu').click();

    const closeBtn = page.getByLabel('Close menu');
    await expect(closeBtn).toBeFocused();

    // Shift+Tab from first focusable wraps to last nav link
    await page.keyboard.press('Shift+Tab');
    const mobileNav = page.getByRole('navigation', { name: 'Mobile navigation' });
    const lastLink = mobileNav.getByRole('link').last();
    await expect(lastLink).toBeFocused();
  });
});
