'use strict';

// jshint node:true

module.exports = function(grunt) {
  var files = [
    'src/load-dependency.js',
    'src/ui-sortable-loader.js'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'uglify': {
      'options': {
        'banner': '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      'build': {
        'src': files,
        'dest': 'build/ui-sortable-loader.min.js'
      }
    },
    'concat': {
      'options': {
        separator: '\n',
      },
      'build': {
        src: files,
        dest: 'build/ui-sortable-loader.js',
      }
    },
    'gh-pages': {
      'options': {
        'base': 'build'
      },
      'deploy': {
        'src': ['index.html', 'ui-sortable-loader.js', 'ui-sortable-loader.min.js']
      }
    },
    'jshint': {
      'options': {
        'jshintrc': true,
        'reporter': require('jshint-stylish')
      },
      'src': {
        'files': {
          'src': ['*.js', '!*.min.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('default', ['jshint:src', 'concat:build', 'uglify:build']);
  grunt.registerTask('deploy', ['default', 'gh-pages:deploy']);
};
