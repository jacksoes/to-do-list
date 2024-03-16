
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js' ,  // Entry point of your React application
  output: {
    filename: 'bundle.js', // Output bundle filename
    path: path.resolve(__dirname, '../dist'), // Output directory
    publicPath: '/', // Public path for assets
  },
  mode: 'development', // Development mode
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for JavaScript transpilation
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets
          },
        },
      },
      {
        test: /\.css$/, // Process .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
      {
        test: /\.scss$/, // Process .scss files
        use: ['sass-loader', 'style-loader', 'css-loader'], // Use style-loader, css-loader, and sass-loader
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template file
      filename: 'index.html', // Output HTML filename
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve .js and .jsx extensions
  },
  devServer: {
    historyApiFallback: true, // Enable history API fallback for React Router
  },
};