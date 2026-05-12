import { test, expect } from '@playwright/test';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Mission M08-C — visual inspection harness.
// Captures full-page screenshots of every route at the test's project viewport,
// plus DOM scrollHeight measurements per page. The run label is the
// SCREENSHOT_LABEL env var (e.g., "baseline", "loop_02_after", "phase1_gate").
//
// Invoke per-project so each viewport (desktop / mobile / tablet) lands in its
// own subdirectory. Manifest JSON per run lets the AAR montage script line up
// before/after pairs without guessing.

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'curriculum', path: '/curriculum' },
  { name: 'pilots', path: '/pilots' },
  { name: 'get-involved', path: '/get-involved' },
  { name: 'partners', path: '/partners' },
  { name: 'resources', path: '/resources' },
  { name: 'contact', path: '/contact' },
];

const LABEL = process.env.SCREENSHOT_LABEL ?? `run_${new Date().toISOString().replace(/[:.]/g, '-')}`;

type PageMeasurement = {
  route: string;
  path: string;
  viewport: { width: number; height: number };
  scrollHeight: number;
  viewportHeight: number;
  scrollRatio: number;
  screenshot: string;
};

for (const route of ROUTES) {
  test(`visual-inspect ${route.name}`, async ({ page }, testInfo) => {
    const project = testInfo.project.name;
    const outDir = join('screenshots', LABEL, project);
    mkdirSync(outDir, { recursive: true });

    await page.goto(route.path, { waitUntil: 'networkidle' });

    const viewport = page.viewportSize() ?? { width: 0, height: 0 };
    const metrics = await page.evaluate(() => ({
      scrollHeight: document.documentElement.scrollHeight,
      viewportHeight: window.innerHeight,
    }));

    const screenshotPath = join(outDir, `${route.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    const measurement: PageMeasurement = {
      route: route.name,
      path: route.path,
      viewport,
      scrollHeight: metrics.scrollHeight,
      viewportHeight: metrics.viewportHeight,
      scrollRatio: metrics.scrollHeight / metrics.viewportHeight,
      screenshot: screenshotPath,
    };

    const manifestPath = join(outDir, `${route.name}.json`);
    writeFileSync(manifestPath, JSON.stringify(measurement, null, 2));

    // Sanity: every page must render some content above the fold.
    expect(metrics.scrollHeight).toBeGreaterThan(metrics.viewportHeight * 0.5);
  });
}
