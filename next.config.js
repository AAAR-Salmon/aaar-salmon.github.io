module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.txt$/,
      use: [
        {
          loader: './lib/txt-loader.js'
        }
      ]
    })
    return config
  }
}
