/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = {
  options: {
    configFile: '.eslintrc.json'
  },
  target: [
    '**/*.js',
    '!node_modules/**/*.js',
    '!dist/**/*.js',
    '!release/**/*.js'
  ]
};
