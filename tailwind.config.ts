import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{tsx,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
