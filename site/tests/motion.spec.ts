import { test, expect } from '@playwright/test';

test.describe('Motion and animation', () => {
  test('data-animate elements become visible when scrolled into view', async ({ page }) => {
    await page.goto('/');

    const animated = page.locator('[data-animate]');
    const count = await animated.count();
    expect(count).toBeGreaterThan(0);

    // Scroll each element into view to trigger IntersectionObserver
    for (let i = 0; i < count; i++) {
      await animated.nth(i).scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);
    }

    // All should now have is-visible class
    for (let i = 0; i < count; i++) {
      await expect(animated.nth(i)).toHaveClass(/is-visible/);
    }
  });

  test('reduced-motion: all animated elements are immediately visible', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');

    const animated = page.locator('[data-animate]');
    const count = await animated.count();
    expect(count).toBeGreaterThan(0);

    // With reduced motion, observer applies is-visible immediately (no scroll needed)
    for (let i = 0; i < count; i++) {
      await expect(animated.nth(i)).toHaveClass(/is-visible/);
    }

    // Verify no element is invisible (opacity should not be 0)
    for (let i = 0; i < count; i++) {
      const opacity = await animated.nth(i).evaluate((el) =>
        window.getComputedStyle(el).opacity
      );
      expect(opacity).toBe('1');
    }
  });
});
