const withTM = require('next-transpile-modules')([
  'drei',
  'three',
  'postprocessing',
])

module.exports = withTM({
  target: 'serverless',
  async rewrites() {
    return [
      // Rewrite everything else to use `pages/index`
      {
        source: '/:any*',
        destination: '/',
      },
    ]
  },
})
