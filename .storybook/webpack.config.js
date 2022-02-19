const path = require('path');
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = async ({ config, mode }) => {

    const tsPaths = new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, "../tsconfig.json"),
    });
  
    config.resolve.plugins
      ? config.resolve.plugins.push(tsPaths)
      : (config.resolve.plugins = [tsPaths]);

    return config;
  };