const { writeFile, mkdir } = require('fs').promises;
const path = require('path');
const { renderToString: _renderToString } = require('@konekto/reenact');
const resolve = require('./resolve');
const document = require('../document');

module.exports = render;
module.exports.renderFile = renderFile;


async function render(options) {

  const { src, dest } = options;

  const resolvedFiles = resolve(src, dest);
  const jobs = resolvedFiles.map(renderFile);
  await Promise.all(jobs);
}

async function renderFile(file) {

  const { input, output } = file;

  const html = renderHTML(input);
  await mkdir(path.dirname(output), { recursive: true })
  await writeFile(output, html);
}

function renderHTML(file) {
  return html({ body: renderToString(file) })
}

function renderToString(file) {
  return _renderToString({ file, isDev: true })
}

function html(options) {
  const { body } = options;
  const { htmlAttributes, title, meta, link, bodyAttributes } = document.collectStatic();

  return `<!doctype html>
<html ${htmlAttributes}>
  <head>
    ${title}
    ${meta}
    ${link}
    <link rel="stylesheet" type="text/css" href="client.css">
  </head>
  <body ${bodyAttributes}>
    <div id="root">${body}</div>
    <script src="client.js"></script>
  </body>
</html>`;
}