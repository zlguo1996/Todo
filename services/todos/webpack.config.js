const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const mode = 'development'

module.exports = {
  entry: './src/scripts/index.tsx',
  mode: mode,
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
    extensions: [ '.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Todo',
          template: 'src/assets/index.html',
          templateParameters: {
            reactTag: `<script src="https://unpkg.com/react@16/umd/react.${mode === 'development' ? mode : 'production.min'}.js" crossorigin></script>`,
            reactDomTag: `<script src="https://unpkg.com/react-dom@16/umd/react-dom.${mode === 'development' ? mode : 'production.min'}.js" crossorigin></script>`
          }
      }),
  ],
  devServer: {
    contentBase: './dist',
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
}
