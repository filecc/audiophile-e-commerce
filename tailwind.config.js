/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#191919',
        'dark-secondary': '#101010',
        'primary': '#D87D4A',
        'light-gray': '#979797',
        'mute': '#F1F1F1',
        'body-bg': '#F1F1F1'

      }
    },
    screens: {
      'sm': '600px',
      'md': '768px',
      'lg': '1000px',
      'xl': '1100px',
      '2xl': '1536px',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
