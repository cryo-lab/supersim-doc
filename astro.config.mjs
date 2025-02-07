
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cryo-lab.github.io/adhd',
  base: '/adhd/',
  output: 'static',
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
        label: 'AQFP Basics',
        items: [
          { label: 'Superconductivity', slug: 'aqfp-basics/superconductivity' },
          { label: 'Superconductive Electronic', slug: 'aqfp-basics/sce' },
          { label: 'AQFP Basics', slug: 'aqfp-basics/aqfp-basics' },
        ],
      },
      {
        label: 'Hacks',
        items: [
          { label: 'Examples', slug: 'hacks/example' },
          { label: 'Optimization Techniques', slug: 'hacks/optimization' },
          { label: 'Tool Setup', slug: 'hacks/tool-setup' },
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