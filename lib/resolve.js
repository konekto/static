const glob = require('glob');
const path = require('path')

module.exports = resolve;

// find jsx files in src and resolve to be build dest files
function resolve(src, dest) {

  const files = glob.sync(src + '/**/index.jsx', {})

  return files.map((file) => {

    const basename = path.basename(file, path.extname(file));
    const dirname = path.dirname(file);
    const rel = path.relative(src, dirname);
    const output = path.resolve(dest, rel, basename + '.html');

    return {
      input: file,
      output
    }
  })
}