const { compileScripts, webpack } = require('@konekto/bundle');

const defaultOptions = {
  mode: 'development'
};

module.exports = compile;

function compile(options) {

  options = { ...defaultOptions, ...options };

  const { src, dest, mode, serve } = options;
  const includes = serve ? [require.resolve("webpack-hot-middleware/client")] : [];
  const plugins = serve ? webpack.hotPlugins : [];

  const bundleOptions = {
    includes,
    mode,
    sources: ['**/client.jsx'],
    cwd: src,
    destination: dest,
    loader: true,
    watch: false,
  };

  const scriptsConfig = compileScripts.getWebpackConfig(bundleOptions);

  scriptsConfig.plugins = [
    ...scriptsConfig.plugins,
    ...plugins
  ]

  return webpack([scriptsConfig], bundleOptions);
} 