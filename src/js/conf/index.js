import _default from './default';

const env = typeof process.env.NODE_ENV === 'undefined' ? 'development' : process.env.NODE_ENV;
let envConf = null;
try {
  envConf = require(`./${env}.js`).default;
} catch (e) {
  console.error(` ${env} config file is not found. use default `);
}

export default envConf || _default;
