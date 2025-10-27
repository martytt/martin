/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00A651',
          dark: '#008542',
          light: '#00C962',
        },
        accent: {
          DEFAULT: '#FDB913',
          dark: '#E5A40F',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          lighter: '#2A2A2A',
          light: '#3A3A3A',
        },
      },
    },
  },
  plugins: [],
}
