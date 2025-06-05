/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1D4ED8', // blue-700
          secondary: '#9333EA', // purple-600
          accent: '#F59E0B', // amber-500
          background: '#F3F4F6', // gray-100
          textPrimary: '#111827', // gray-900
          textSecondary: '#6B7280', // gray-500
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
      },
    },
    plugins: [],
  }
