module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npx astro preview --port 4398',
      startServerReadyPattern: 'localhost',
      url: [
        'http://localhost:4398/',
        'http://localhost:4398/about',
        'http://localhost:4398/curriculum',
        'http://localhost:4398/pilots',
        'http://localhost:4398/get-involved',
        'http://localhost:4398/partners',
        'http://localhost:4398/resources',
        'http://localhost:4398/contact',
      ],
      numberOfRuns: 1,
      settings: {
        preset: 'desktop',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.92 }],
        'categories:seo': ['error', { minScore: 0.95 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
