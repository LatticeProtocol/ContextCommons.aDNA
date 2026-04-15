import { test, expect } from '@playwright/test';

test.describe('ContactPathCard components on contact page', () => {
  test('renders 4 contact path cards with correct headings', async ({ page }) => {
    await page.goto('/contact');

    await expect(page.getByRole('heading', { name: 'My community wants to participate' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'I want to mentor' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'My organization wants to partner' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'General inquiry' })).toBeVisible();
  });

  test('each contact card has an SVG icon', async ({ page }) => {
    await page.goto('/contact');

    // Each card heading's parent container should have an svg icon
    const titles = ['My community wants to participate', 'I want to mentor', 'My organization wants to partner', 'General inquiry'];
    for (const title of titles) {
      const card = page.getByRole('heading', { name: title }).locator('..');
      await expect(card.locator('svg').first()).toBeVisible();
    }
  });

  test('each contact card has a mailto link', async ({ page }) => {
    await page.goto('/contact');

    const mailtoLinks = page.locator('a[href^="mailto:"]');
    // 4 card CTAs + 1 footer email link
    const count = await mailtoLinks.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });

  test('contact cards have shadow visual treatment', async ({ page }) => {
    await page.goto('/contact');

    const card = page.getByRole('heading', { name: 'I want to mentor' }).locator('..');
    const classes = await card.getAttribute('class');
    expect(classes).toContain('shadow-');
    expect(classes).toContain('border-t-2');
  });

  test('community card includes youth guidance', async ({ page }) => {
    await page.goto('/contact');

    await expect(page.getByText('young person interested in joining')).toBeVisible();
  });

  test('mentor card describes concrete responsibilities', async ({ page }) => {
    await page.goto('/contact');

    await expect(page.getByText('co-facilitate sessions')).toBeVisible();
    await expect(page.getByText('peer cohort')).toBeVisible();
  });

  test('partner card lists partnership types', async ({ page }) => {
    await page.goto('/contact');

    await expect(page.getByText('Technology, academic, community, or fiscal sponsor')).toBeVisible();
  });
});

test.describe('DetailSection components on get-involved page', () => {
  test('renders 4 detail sections with correct headings', async ({ page }) => {
    await page.goto('/get-involved');

    await expect(page.getByRole('heading', { name: 'For Builders' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'For Stewards' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'For Partners' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'For Mentors' })).toBeVisible();
  });

  test('each detail section has correct id for anchor linking', async ({ page }) => {
    await page.goto('/get-involved');

    await expect(page.locator('#builder-detail')).toBeVisible();
    await expect(page.locator('#steward-detail')).toBeVisible();
    await expect(page.locator('#partner-detail')).toBeVisible();
    await expect(page.locator('#mentor-detail')).toBeVisible();
  });

  test('detail sections have shadow visual treatment', async ({ page }) => {
    await page.goto('/get-involved');

    const section = page.locator('#builder-detail');
    const classes = await section.getAttribute('class');
    expect(classes).toContain('shadow-');
    expect(classes).toContain('border-t-2');
  });

  test('each detail section has 3 sub-columns', async ({ page }) => {
    await page.goto('/get-involved');

    const builderGrid = page.locator('#builder-detail .grid');
    const columns = builderGrid.locator('> div');
    await expect(columns).toHaveCount(3);
  });

  test('steward veto power language is present', async ({ page }) => {
    await page.goto('/get-involved');

    await expect(page.getByText('your decision is final')).toBeVisible();
  });

  test('partner exit language is present', async ({ page }) => {
    await page.goto('/get-involved');

    await expect(page.getByText('exit is not failure')).toBeVisible();
  });

  test('mentor support structures are described', async ({ page }) => {
    await page.goto('/get-involved');

    await expect(page.getByText('Peer cohort with other mentors')).toBeVisible();
  });
});

test.describe('PersonaCard detail links on get-involved page', () => {
  test('each persona card has a detail link', async ({ page }) => {
    await page.goto('/get-involved');

    await expect(page.getByText('See what you\'ll do')).toBeVisible();
    await expect(page.getByText('See the full role')).toBeVisible();
    await expect(page.getByText('See partnership details')).toBeVisible();
    await expect(page.getByText('See requirements')).toBeVisible();
  });

  test('detail links point to correct anchor targets', async ({ page }) => {
    await page.goto('/get-involved');

    await expect(page.locator('a[href="#builder-detail"]')).toBeVisible();
    await expect(page.locator('a[href="#steward-detail"]')).toBeVisible();
    await expect(page.locator('a[href="#partner-detail"]')).toBeVisible();
    await expect(page.locator('a[href="#mentor-detail"]')).toBeVisible();
  });
});
