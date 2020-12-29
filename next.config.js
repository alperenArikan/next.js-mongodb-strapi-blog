// const withSass = require('@zeit/next-sass');
// const withImages = require('next-images');
// const withLess = require('@zeit/next-less')
// const withCSS = require('@zeit/next-css')

// module.exports = withCSS(withLess(withImages(withSass({
//   env: {
//     ANY_ENV_KEY: "ANY_ENV_VARIABLE"
//   }
// }))));
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}