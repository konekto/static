#!/usr/bin/env node
const sade = require('sade');
const path = require('path')
const pkg = require('../package');
const static = require('..');
const prog = sade('static');

const cwd = process.cwd();

prog
  .version(pkg.version)
  .command('build <src> <dest>')
  .describe('create a production build')
  .action(build)
  .command('serve <src> <dest>')
  .describe('serve a development build')
  .action(serve)
  .parse(process.argv);


function build(src, dest, opts) {

  src = path.resolve(cwd, src);
  dest = path.resolve(cwd, dest);

  return static({ src, dest, build: true, mode: 'production', ...opts });
}


function serve(src, dest, opts) {

  src = path.resolve(cwd, src);
  dest = path.resolve(cwd, dest);

  return static({ src, dest, serve: true, mode: 'development', ...opts });
}

