/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018-2019.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = {
  tmpCloudflare: {
    files: {
      'tmp/css/css-elements-for-cloudflare-custom-pages.min.css': [
        'node_modules/epfl-elements/css/base.css',
        'node_modules/epfl-elements/css/vendors.min.css',
        'src/css/utilities.css'
      ]
    }
  },
  dist: {
    files: {
      'dist/css/elements.min.css': [
        'node_modules/epfl-elements/css/base.css',
        'node_modules/epfl-elements/css/vendors.min.css',
        'tmp/css/fonts.css',
        'src/css/layout.css',
        'src/css/utilities.css',
        'src/css/errors.css'
      ]
    }
  }
};
