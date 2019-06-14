const assert = require('assert');
const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');
const { remove } = require('fs-extra');
const { existsSync } = fs;
const { readFile } = fs.promises;
const static = require('../lib/index');

const src = path.resolve(__dirname, 'src/pages');
const dest = path.resolve(__dirname, 'build/pages');

describe('static', function () {

  this.timeout(10000);

  beforeEach(async () => {
    await remove(dest)
  })

  it('should build files', async () => {

    await static({ src, dest });

    const indexHtmlPath = path.resolve(dest, 'index.html');
    const indexJsPath = path.resolve(dest, 'client.js');
    const indexCssPath = path.resolve(dest, 'client.css');

    assert(existsSync(indexHtmlPath));
    assert(existsSync(indexJsPath));
    assert(existsSync(indexCssPath));

    const $ = cheerio.load(await readFile(indexHtmlPath));
    assert.equal($('#root').length, 1);
    assert.equal($('title').text(), 'Hi');
    assert.equal($('meta[name="description"]').attr('content'), 'index page');
    assert.equal($('h1').text(), 'Hello World!');

    const css = await readFile(indexCssPath);
    assert(/body/.test(css));

    const js = await readFile(indexJsPath);
    assert(/hydrate/.test(js));
  })

  it.only('should serve pages', async () => {

    await static({ src, dest, serve: true });
  })

})

