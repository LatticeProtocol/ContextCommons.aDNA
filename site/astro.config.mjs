import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://contextcommons.org',
  output: 'static',
  adapter: vercel({
    imageService: true,
    webAnalytics: { enabled: true },
  }),
  integrations: [mdx(), sitemap()],
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
