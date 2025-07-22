/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inconsolata', 'monospace'],
        'mono': ['Inconsolata', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          900: '#1e3a8a',
        },
        dark: {
          800: '#1f2937',
          900: '#111827',
        }
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}




