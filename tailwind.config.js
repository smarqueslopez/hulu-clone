module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        "3xl": "2000px"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
