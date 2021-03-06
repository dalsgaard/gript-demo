/*jslint node: true */

'use strict';

var gulp = require('gulp');

require('gript')(gulp);

// Set the config to use across the gulp build
gulp.config = {
  repository: 'https://github.com/dalsgaard/gript-demo.git',
  app: {
    module: 'griptDemoApp',
    constantsFile: 'app/constants.json'
  },
  partials: ['app/components/**/*.html'],
  server: {
    port: 8080,
    host: 'localhost',
    livereload: {
      port: 35729
    },
    middleware: function () {
      return [require('http-proxy-middleware')(
        [
          '/foo/',
          '/bar/baz/'
        ],
        {
          target: 'http://localhost:3000'
        }
      )];
    }
  },
  serverDist: {
    port: 8080,
    host: 'localhost'
  },
  proxy: {
    port: 8001,
    hostHeader: 'localhost',
    targetURL: 'http://localhost:8340'
  },
  /*
  mocks: {
    stubby: {
      location: 'localhost',
      stubs: 8050,
      tls: 8443,
      admin: 8051,
      relativeFilesPath: true,
      files: [
        'mocks/*.{json,yaml,js}'
      ]
    },
    multimocks: {
      src: 'multiMocks'
    }
  },
  */
  typeScript: {
    compilerOptions: {
      noImplicitAny: true,
      target: "es5",
      sourceMap: true,
      declarationFiles: true,
      noExternalResolve: false,
      sortOutput: true,
      removeComments: false,
      preserveConstEnums: true
    }
  },
  minification: {
    html: {
      removeEmptyAttributes: false,
      collapseBooleanAttributes: false,
      collapseWhitespace: true,
      caseSensitive: true
    },
    css: {
      safe: true,
      autoprefixer: false,
      discardUnused: false,
      reduceIdents: false,
      mergeIdents: false
    },
    javascript: {
      mangle: true,
      preserveComments: false
    }
  },
  modernizr: {
    classPrefix: 'has-',
    options: [
      'addTest',
      'html5printshiv',
      'testProp',
      'fnBind',
      'setClasses'
    ],
    'feature-detects': []
  },
  fontsScan: [
    'bower_components/font-awesome',
    'bower_components/bootstrap-sass-official'
  ]
};
