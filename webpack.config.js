const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  // Client-side configuration
  {
    entry: './app/index.jsx', // Entry point for your client-side code
    output: {
      filename: 'client_bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/static/' // Important for dynamic imports to know where to fetch bundles
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    mode: 'development'
  },

  // Server-side configuration
  {
    entry: './server.jsx',
    target: 'node', // Compiles for node.js environment
    externals: [nodeExternals()], // Excludes node_modules from the server bundle
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/static/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    mode: 'development'
  }
];