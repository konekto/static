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
  watchOptions: {
    ignoreInitial: true
  },
};

module.exports = serve;


function serve(options, webpack) {

  const { dest } = options;

  const bs = browserSync({

    ...defaultOptions,
    server: {
      baseDir: dest,
      directory: true
    },
    middleware: [
      webpackDevMiddleware(webpack, {
        publicPath: '/',
        writeToDisk: (f) => isNotHot.test(f),
        stats: { colors: true }
      }),
      webpackHotMiddleware(webpack)
    ]
  });

  return bs;
}


