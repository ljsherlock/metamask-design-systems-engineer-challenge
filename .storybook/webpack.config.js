const path = require('path');

module.exports = async ({ config }) => {
  // console.log(config.module.rules)
  // styles
  config.module.rules.push({
    test: /\.(sass|scss)$/,
    use: ['resolve-url-loader'],
    include: path.resolve(__dirname, '../')
  });

  // fonts
  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    use: [
      {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  });

  config.module.rules[8] = {
    include: path.resolve(__dirname, "../src"),
    test: /\.tsx$/,
    enforce: 'pre',
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
      quiet: true,
      emitError: false,
      emitWarning: false,
      failOnWarning: false,
      failOnError: false, 
    },
  };

  return config;
};