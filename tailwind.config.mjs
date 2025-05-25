/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e5f0ff',
          200: '#b3d4ff',
          300: '#80b8ff',
          400: '#4d9cff',
          500: '#1a80ff',
          600: '#0066ff',
          700: '#0052cc',
          800: '#003d99',
          900: '#002966',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['Amiri', 'serif'],
        heading: ['Amiri', 'serif'],
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
