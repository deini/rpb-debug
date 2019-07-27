import babel from 'rollup-plugin-babel';

import pkg from './package.json';

module.exports = {
  input: 'src/Button',
  output: [{ file: pkg.main, format: 'cjs' }],
  external: ['styled-components'],
  plugins: [
    babel()
  ]
};
