/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018-2020.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = {
  icons: {
    files: [{
      expand: true,
      flatten: true,
      cwd: 'node_modules/epfl-elements/',
      src: [
        'icons/*.svg',
        'svg/epfl-logo.svg',
        'svg/epfl-logo-negative.svg',
        'favicons/apple-touch-icon.png',
        'favicons/favicon-16.png',
        'favicons/favicon-32.png',
        'favicons/favicon.ico'
      ],
      dest: 'dist/icons/',
      nonull: true
    }, {
      expand: true,
      cwd: 'src/',
      src: ['icons/**'],
      dest: 'dist/',
      nonull: true
    }]
  },
  release: {
    files: [{
      expand: true,
      cwd: 'dist/',
      src: ['**'],
      dest: 'release/',
      nonull: true
    }]
  },
  robots: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['robots.txt'],
      dest: 'release/',
      nonull: true
    }]
  }
};
