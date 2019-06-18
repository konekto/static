const bundle = require('./lib/bundle');
const render = require('./lib/render');
const serve = require('./lib/serve');

const defaultOptions = {
  build: true,
  serve: false
}

// exports
module.exports = static;

async function static(options) {

  options = { ...defaultOptions, ...options };

  await render(options);

  const bundler = await bundle(options);

  if (options.serve) {
    return await serve({ ...options, bundler });
  }

  return bundler;
}


