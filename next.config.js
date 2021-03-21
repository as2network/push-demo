const { resolve } = require('path')

module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: {},
    })

    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    })

    config.resolve.modules.push(resolve('./'))
    return config
  },
}
