const { NODE_ENV } = process.env;

const isProd = NODE_ENV === 'production';

module.exports = {
  isProd,
  isDev: !isProd
}