require("@babel/register")({
  babelrc: false,
  presets: [require.resolve('@konekto/preset-react')],
  extensions: [".jsx"]
});

const { writeFile, mkdir } = require('fs').promises;
const path = require('path');
const { renderToString: _renderToString } = require('@konekto/reenact');
const { isDev } = require('./config');
const resolve = require('./resolve');
const document = require('./document.jsx');


module.exports = render;


async function render(options) {

  const { src, dest } = options;

  const resolvedFiles = resolve(src, dest);
  const jobs = resolvedFiles.map(renderFile);
  await Promise.all(jobs);
}

async function renderFile(file) {

  const { input, output } = file;

  const html = await renderHTML(input);
  await mkdir(path.dirname(output), { recursive: true })
  await writeFile(output, html);
}

async function renderHTML(file) {
  return html({ body: await renderToString(file) })
}

async function renderToString(file) {
  return await _renderToString({ file, isDev })
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