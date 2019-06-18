
module.exports = {
  mode: 'production',
  entry: './lib/document.jsx',
  output: {
    path: __dirname,
    filename: 'document.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [require.resolve('@konekto/preset-react')]
          }
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react'
  }
}