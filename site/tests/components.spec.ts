import { test, expect } from '@playwright/test';

test.describe('VignetteCard components on home page', () => {
  test('renders 3 vignette cards with titles', async ({ page }) => {
    await page.goto('/');

    const cards = page.locator('h3', { hasText: /Elder Medicare Navigation|Immigration Paperwork Navigator|Community Care Coordination/ });
    await expect(cards).toHaveCount(3);
  });

  test('each vignette card has a location badge', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText('Grand Rapids', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('Los Angeles', { exact: true })).toBeVisible();
    await expect(page.getByText('Both pilots', { exact: true })).toBeVisible();
  });

  test('each vignette card has an outcome section', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText('Pilot target: 20+ elders')).toBeVisible();
    await expect(page.getByText('Pilot target: families across')).toBeVisible();
    await expect(page.getByText('Built to last: community-maintained')).toBeVisible();
  });

  test('vignette cards have visual treatment (border, shadow)', async ({ page }) => {
    await page.goto('/');

    const card = page.locator('h3', { hasText: 'Elder Medicare Navigation' }).locator('..');
    await expect(card).toBeVisible();

    const classes = await card.getAttribute('class');
    expect(classes).toContain('shadow-');
    expect(classes).toContain('border-t-2');
  });
});
