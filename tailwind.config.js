module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: '#fff389',
        'theme-700': '#bdb03b',
      },
      cursor: {
        grab: 'grab',
      },
      width: {
        'screen-20': '20vw',
      },
      height: {
        'screen-20': '20vh',
      },
    },
  },
  variants: {},
  plugins: [],
}
