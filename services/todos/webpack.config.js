const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/scripts/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Todo',
          template: 'src/assets/index.html',
      }),
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
}
