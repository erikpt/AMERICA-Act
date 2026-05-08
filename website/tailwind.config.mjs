import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#1B3A6B',
        'navy-light': '#2A5298',
        'navy-dark': '#122850',
        teal: '#2A9D8F',
        gold: '#E9C46A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-headings': theme('colors.navy'),
            '--tw-prose-links': theme('colors.teal'),
            '--tw-prose-bold': theme('colors.navy'),
            maxWidth: 'none',
            h1: { color: theme('colors.navy'), fontWeight: '700' },
            h2: {
              color: theme('colors.navy'),
              fontWeight: '700',
              borderBottom: `2px solid ${theme('colors.teal')}`,
              paddingBottom: '0.4em',
              marginTop: '2em',
            },
            h3: { color: theme('colors.navy'), fontWeight: '700' },
            h4: { color: theme('colors.navy'), fontWeight: '600' },
            a: { color: theme('colors.teal') },
            strong: { color: theme('colors.navy') },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
