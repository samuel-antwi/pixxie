/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '@/formkit.config.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0E475C',
        'secondary': '#E75461',
        'light-blue': '#027FB0',
        'link': '#027FB0',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },

}
