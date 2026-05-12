import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = ['/', '/about', '/curriculum', '/pilots', '/get-involved', '/partners', '/resources', '/contact'];

test.describe('Gate 5: WCAG 2.1 AA accessibility', () => {
  test.use({ reducedMotion: 'reduce' });
  for (const path of pages) {
    test(`${path} has no WCAG AA violations`, async ({ page }) => {
      await page.goto(path, { waitUntil: 'networkidle' });

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();

      const violations = results.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        description: v.description,
        nodes: v.nodes.length,
      }));

      expect(violations, `Accessibility violations on ${path}:\n${JSON.stringify(violations, null, 2)}`).toHaveLength(0);
    });
  }
});
