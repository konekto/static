#!/usr/bin/env node
const sade = require('sade');
const path = require('path')
const pkg = require('../package');
const static = require('../lib');
const prog = sade('static');

const cwd = process.cwd();

prog
  .version(pkg.version)
  .command('build <src> <dest>')
  .describe('create a production build')
  .action(build)
  .parse(process.argv);


function build(src, dest, opts) {

  src = path.resolve(cwd, src);
  dest = path.resolve(cwd, dest);

  return static({ src, dest, build: true, mode: 'production', ...opts });
}


