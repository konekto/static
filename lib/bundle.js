const bundle = require('@konekto/bundle');
const { isDev } = require('./config');

module.exports = compile;

function compile(options) {

  const { src, dest } = options;

  return bundle.compile({
    mode: isDev ? 'development' : 'production',
    sources: ['**/client.jsx'],
    cwd: src,
    destination: dest,
    loader: true,
    watch: false
  })
}