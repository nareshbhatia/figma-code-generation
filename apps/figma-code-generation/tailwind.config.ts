import type { Config } from 'tailwindcss';

const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        elevation1: 'hsl(var(--elevation1))',
        foreground: 'hsl(var(--foreground))',
      },
      fontFamily: {
        /*
         * Customize the `sans` to font Inter
         * Sets `font-family: var(--font-inter)` on the `html` element
         */
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
