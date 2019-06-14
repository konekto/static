const browserSync = require('browser-sync');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const isNotHot = /^(?!.*(hot)).*/;

const defaultOptions = {
  port: 3010,
  notify: false,
  ghostMode: false,
  logLevel: 'debug',
  open: false,
  reload: false,
  watchOptions: {
    ignoreInitial: true
  },
};

module.exports = serve;


function serve(options) {

  const { dest, bundler } = options;

  const bs = browserSync({

    ...defaultOptions,
    server: {
      baseDir: dest,
      directory: false
    },
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: '/',
        writeToDisk: (f) => isNotHot.test(f),
        stats: { colors: true }
      }),
      webpackHotMiddleware(bundler)
    ]
  });

  return bs;
}


