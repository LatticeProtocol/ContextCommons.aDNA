import { test, expect } from '@playwright/test';

// MCP-1 atom-level coverage for the 8 Civic Press scaffolding components.
// Fixture page: /__scaffolding-atoms/
// Assertions favour resolved CSS values (getComputedStyle) over class-name
// matching, sidestepping the Tailwind v4 arbitrary-value class flakiness
// documented in M08 finding #2.

const FIXTURE = '/scaffolding-atoms/';

test.describe('MCP-1: scaffolding components atom tests', () => {
  test('Masthead renders wordmark, edition strip, and 8 nav links', async ({ page }) => {
    await page.goto(FIXTURE);

    const masthead = page.locator('#atom-masthead');
    await expect(masthead.getByLabel('Context Commons — home')).toBeVisible();

    const nav = masthead.getByRole('navigation', { name: 'Site navigation' });
    await expect(nav).toBeVisible();
    await expect(nav.getByRole('link')).toHaveCount(8);

    const wordmarkFont = await masthead
      .getByLabel('Context Commons — home')
      .locator('span')
      .evaluate((el) => getComputedStyle(el).fontFamily);
    expect(wordmarkFont).toContain('Fraunces');
  });

  test('PageOpener has h1 with aria-describedby pointing to the standfirst id', async ({ page }) => {
    await page.goto(FIXTURE);

    const opener = page.locator('#atom-page-opener');
    const h1 = opener.getByRole('heading', { level: 1 });
    await expect(h1).toBeVisible();

    const describedBy = await h1.getAttribute('aria-describedby');
    expect(describedBy).toBe('atom-standfirst');

    const standfirst = opener.locator(`#${describedBy}`);
    await expect(standfirst).toBeVisible();

    const fontStyle = await standfirst.evaluate((el) => getComputedStyle(el).fontStyle);
    expect(fontStyle).toBe('italic');
  });

  test('SectionOpener editorial variant renders kicker, h2, and hairline rule', async ({ page }) => {
    await page.goto(FIXTURE);

    const section = page.locator('#atom-section-opener-editorial');
    const header = section.locator('header').first();
    await expect(header).toBeVisible();
    await expect(header.getByRole('heading', { level: 2 })).toHaveText('Who runs the press');

    const borderBottomWidth = await header.evaluate(
      (el) => getComputedStyle(el).borderBottomWidth,
    );
    expect(borderBottomWidth).toBe('1px');
  });

  test('SectionOpener plate variant exposes plate as role=img with alt label', async ({ page }) => {
    await page.goto(FIXTURE);

    const section = page.locator('#atom-section-opener-plate');
    const header = section.locator('header').first();
    const img = header.getByRole('img', { name: 'Pixel-art plate placeholder' });
    await expect(img).toBeVisible();
    await expect(header.getByRole('heading', { level: 2 })).toHaveText('Grand Rapids');
  });

  test('PullQuote uses blockquote + cite and renders an oversized opening glyph via ::before', async ({
    page,
  }) => {
    await page.goto(FIXTURE);

    const quote = page.locator('#atom-pull-quote blockquote');
    await expect(quote).toBeVisible();
    await expect(quote.locator('cite')).toBeVisible();

    const beforeContent = await quote.evaluate(
      (el) => getComputedStyle(el, '::before').content,
    );
    expect(beforeContent).not.toBe('none');
    expect(beforeContent).not.toBe('');

    const beforeColor = await quote.evaluate(
      (el) => getComputedStyle(el, '::before').color,
    );
    expect(beforeColor).toBe('rgb(200, 50, 28)');
  });

  test('Marginalia is an <aside> with a mono label', async ({ page }) => {
    await page.goto(FIXTURE);

    const aside = page.locator('#atom-marginalia aside');
    await expect(aside).toBeVisible();
    await expect(aside).toHaveText(/Editor's note/);

    const labelFont = await aside
      .locator('> div')
      .first()
      .evaluate((el) => getComputedStyle(el).fontFamily);
    expect(labelFont).toContain('JetBrains Mono');
  });

  test('StatusChip default variant uses mono font and ink border', async ({ page }) => {
    await page.goto(FIXTURE);

    const chip = page.locator('#atom-status-chip-default span').first();
    await expect(chip).toBeVisible();
    await expect(chip).toHaveText('Q3 2026');

    const fontFamily = await chip.evaluate((el) => getComputedStyle(el).fontFamily);
    expect(fontFamily).toContain('JetBrains Mono');

    const borderColor = await chip.evaluate((el) => getComputedStyle(el).borderTopColor);
    expect(borderColor).toBe('rgb(26, 23, 20)');
  });

  test('StatusChip draft variant carries aria-label and press-red border', async ({ page }) => {
    await page.goto(FIXTURE);

    const chip = page.locator('#atom-status-chip-draft span').first();
    await expect(chip).toBeVisible();
    await expect(chip).toHaveAttribute('aria-label', 'Draft status');

    const borderColor = await chip.evaluate((el) => getComputedStyle(el).borderTopColor);
    expect(borderColor).toBe('rgb(200, 50, 28)');
  });

  test('LibraryCatalogueCard renders press-red call number and 3 meta rows', async ({ page }) => {
    await page.goto(FIXTURE);

    const card = page.locator('#atom-library-card article');
    await expect(card).toBeVisible();

    const callNumber = card.locator('span').first();
    await expect(callNumber).toHaveText('[A]');
    const callColor = await callNumber.evaluate((el) => getComputedStyle(el).color);
    expect(callColor).toBe('rgb(200, 50, 28)');

    await expect(card.getByRole('heading', { level: 3 })).toHaveText(
      'Three-track curriculum framework',
    );

    await expect(card.locator('dt')).toHaveCount(3);
    await expect(card.locator('dd')).toHaveCount(3);
    await expect(card.locator('dt').first()).toHaveText('TRACK');
  });

  test('ColophonFooter renders dedicatory line, language list, and colophon note', async ({
    page,
  }) => {
    await page.goto(FIXTURE);

    const footer = page.locator('#atom-colophon-footer footer');
    await expect(footer).toBeVisible();
    await expect(footer).toContainText('Michael Brooks');
    await expect(footer).toContainText('TRANSLATIONS IN PREPARATION');
    await expect(footer).toContainText('ESPAÑOL');
    await expect(footer).toContainText('SWAHILI');
    await expect(footer).toContainText('Fraunces');
  });

  test('Marginalia floats right at desktop and inlines on mobile', async ({ page }, testInfo) => {
    await page.goto(FIXTURE);

    const viewport = page.viewportSize();
    const isDesktop = !!viewport && viewport.width >= 768;
    const aside = page.locator('#atom-marginalia aside');

    const floatValue = await aside.evaluate((el) => getComputedStyle(el).cssFloat);
    if (isDesktop) {
      expect(floatValue).toBe('right');
    } else {
      expect(floatValue).toBe('none');
    }
  });

  test('Masthead nav supports keyboard navigation across all 8 links', async ({
    page,
  }, testInfo) => {
    // Webkit / mobile devices have inconsistent Tab semantics — skip those projects.
    const viewport = page.viewportSize();
    if (!viewport || viewport.width < 1024) {
      testInfo.skip();
      return;
    }

    await page.goto(FIXTURE);

    const nav = page.locator('#atom-masthead').getByRole('navigation', { name: 'Site navigation' });
    const links = nav.getByRole('link');
    const total = await links.count();
    expect(total).toBe(8);

    await links.first().focus();
    const firstFocused = await page.evaluate(
      () => (document.activeElement as HTMLAnchorElement | null)?.getAttribute('href'),
    );
    expect(firstFocused).toBe('/');

    const visited: string[] = [firstFocused ?? ''];
    for (let i = 1; i < total; i++) {
      await page.keyboard.press('Tab');
      const href = await page.evaluate(
        () => (document.activeElement as HTMLAnchorElement | null)?.getAttribute('href'),
      );
      visited.push(href ?? '');
    }

    expect(visited).toEqual([
      '/',
      '/about',
      '/curriculum',
      '/pilots',
      '/get-involved',
      '/partners',
      '/resources',
      '/contact',
    ]);
  });
});
