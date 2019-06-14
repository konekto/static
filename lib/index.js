const bundle = require('./bundle');
const render = require('./render');
const serve = require('./serve');

const defaultOptions = {
  build: true,
  watch: false,
  serve: false
}

// exports
module.exports = static;

async function static(options) {

  options = { ...defaultOptions, ...options };

  await render(options);

  const bundler = await bundle(options);

  options.serve && serve({ ...options, bundler });
}


