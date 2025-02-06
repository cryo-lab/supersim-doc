
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // base: '/docs/',
  integrations: [starlight({
    title: 'AQFP Development Hack & Docs (ADHD)',
    social: {
      github: 'https://github.com/cryo-lab/adhd',
    },
    sidebar: [
      {
        label: 'Introduction',
        items: [
          { label: 'Welcome', slug: 'introduction/welcome' },
          { label: 'Why AQFP', slug: 'introduction/whyaqfp' },
        ],
      },
      {
        label: 'Guides',
        items: [
          { label: 'AQFP Design Basics', slug: 'guides/aqfp-basics' },
          { label: 'Optimization Techniques', slug: 'guides/optimization' },
          { label: 'Tool Setup', slug: 'guides/tool-setup' },
        ],
      },
      {
        label: 'Reference',
        autogenerate: { directory: 'reference' }, // 自动从 reference 目录生成
      },
    ],
  }), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});