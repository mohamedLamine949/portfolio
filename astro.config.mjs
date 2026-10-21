import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mohamedlaminekone.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});