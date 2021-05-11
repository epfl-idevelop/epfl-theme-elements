/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = {
  options: {
    beautify: false,
    mangle: false,
    compress: false,
    output: {
      comments: /^!/
    }
  },
  dist: {
    files: {
      'dist/js/elements.min.js': [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/epfl-elements/js/vendors.min.js',
        'node_modules/epfl-elements/js/vendors.bundle.js',
        'node_modules/epfl-elements/js/app.bundle.js'
      ]
    }
  }
};
