
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cryo-lab.github.io/supersim-doc',
  base: '/supersim-doc/',
  output: 'static',
  integrations: [starlight({
    title: 'SuperSIM Docs',
    social: {
      github: 'https://github.com/cryo-lab/supersim-doc',
    },
    sidebar: [
      {
        label: 'Introduction',
        items: [
          { label: 'Introduction', slug: 'introduction/01_Introduction' },
          { label: 'Installation', slug: 'introduction/02_Installation' },
        ],
      },
      {
        label: 'Getting Started',
        items: [
          { label: 'Quick Start', slug: 'getting_started/03_Quick_Start' },
          { label: 'Usage Guide', slug: 'getting_started/04_Usage_Guide' },
          { label: 'Advanced Features', slug: 'getting_started/04_advanced_features' },

        ],
      },
      {
        label: 'Support',
        items: [
          { label: 'Troubleshooting and FAQs', slug: 'support/06_Troubleshooting_FAQs' },
          { label: 'Support and Contributions', slug: 'support/07_Support_Contributions' },
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