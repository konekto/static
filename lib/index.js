const bundle = require('./bundle');
const render = require('./render');

module.exports = { build, render };

async function build(options) {

  await render(options);
  await bundle(options);
}

