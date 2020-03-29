module.exports = {
  configureWebpack: (config) => {
    config.module.rules = [
      {
        test: /\.worker\.js$/i,
        use: [
          {
            loader: 'comlink-loader',
            options: {
              singleton: true
            }
          }
        ]
      },
      ...config.module.rules
    ]
  }
}
