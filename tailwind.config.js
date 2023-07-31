/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        sidedrop: '50% 1.25rem 50% 50%',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
