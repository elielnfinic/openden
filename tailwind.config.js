const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,wasm}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'openden1': '#141d37',
        'openden2': '#20536e'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}