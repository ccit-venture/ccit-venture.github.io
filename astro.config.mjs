// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx()],
  
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },

  // Konfigurasi untuk GitHub Pages (username.github.io)
  // Tidak perlu base path karena ini user/organization site
  site: 'https://ccit-venture.github.io',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
