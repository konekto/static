const assert = require('assert');
const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');
const { remove } = require('fs-extra');
const { existsSync } = fs;
const { readFile } = fs.promises;
const { build } = require('../lib/index');

const src = path.resolve(__dirname, 'src/pages');
const dest = path.resolve(__dirname, 'build/pages');

describe('static', function () {

  this.timeout(10000);


  beforeEach(async () => {
    await remove(dest)
  })

  it('should build files', async () => {

    await build({ src, dest });

    const startIndexPath = path.resolve(dest, 'start/index.html');
    const startJsPath = path.resolve(dest, 'start/client.js');
    const startCssPath = path.resolve(dest, 'start/client.css');

    assert(existsSync(startIndexPath));
    assert(existsSync(startJsPath));
    assert(existsSync(startCssPath));

    const $ = cheerio.load(await readFile(startIndexPath));
    assert.equal($('#root').length, 1);
    assert.equal($('title').text(), 'Hi');
    assert.equal($('meta[name="description"]').attr('content'), 'start page');
    assert.equal($('h1').text(), 'Hello World!');

    const css = await readFile(startCssPath);
    assert(/body/.test(css));

    const js = await readFile(startJsPath);
    assert(/hydrate/.test(js));
  })

})

