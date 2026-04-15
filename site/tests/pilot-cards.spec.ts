import { test, expect } from '@playwright/test';

test.describe('PilotCard components on home page', () => {
  test('renders 2 pilot cards with city headings', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Grand Rapids, MI' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Los Angeles, CA' })).toBeVisible();
  });

  test('each pilot card has a pilot label', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText('Pilot A', { exact: false }).first()).toBeVisible();
    await expect(page.getByText('Pilot B', { exact: false }).first()).toBeVisible();
  });

  test('pilot cards have shadow visual treatment', async ({ page }) => {
    await page.goto('/');

    const grCard = page.getByRole('heading', { name: 'Grand Rapids, MI' }).locator('..');
    const classes = await grCard.getAttribute('class');
    expect(classes).toContain('shadow-');
  });

  test('pilot cards have links to /pilots', async ({ page }) => {
    await page.goto('/');

    const pilotLinks = page.locator('a[href="/pilots"]', { hasText: 'Read the full pilot plan' });
    await expect(pilotLinks).toHaveCount(2);
  });

  test('pilot cards have outcome text', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText('Testing depth')).toBeVisible();
    await expect(page.getByText('Testing breadth')).toBeVisible();
  });
});

test.describe('PilotGlanceCard components on pilots page', () => {
  test('Grand Rapids glance card has 6 fact items', async ({ page }) => {
    await page.goto('/pilots');

    const grSection = page.locator('section', { hasText: 'Grand Rapids, Michigan' });
    const dtElements = grSection.locator('dt');
    await expect(dtElements).toHaveCount(6);
  });

  test('Los Angeles glance card has 6 fact items', async ({ page }) => {
    await page.goto('/pilots');

    const laSection = page.locator('section', { hasText: 'Los Angeles, California' });
    const dtElements = laSection.locator('dt');
    await expect(dtElements).toHaveCount(6);
  });

  test('glance cards have shadow treatment', async ({ page }) => {
    await page.goto('/pilots');

    const glanceCard = page.getByRole('heading', { name: 'At a glance' }).first().locator('..');
    const classes = await glanceCard.getAttribute('class');
    expect(classes).toContain('shadow-');
  });

  test('glance cards display key facts', async ({ page }) => {
    await page.goto('/pilots');

    await expect(page.getByText("Peter\u2019s Church").first()).toBeVisible();
    await expect(page.getByText('LAUSD, Venice Beach Book Club, UCLA').first()).toBeVisible();
    await expect(page.getByText('July').first()).toBeVisible();
    await expect(page.getByText('October 2026').first()).toBeVisible();
  });
});
