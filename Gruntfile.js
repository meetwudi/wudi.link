module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'public/javascripts/app.js': ['app/app.js']
        }
      }
    },

    watch: {
      scripts: {
        files: ['app/**/*.js'],
        tasks: ['browserify']
      },
    },
  });

  grunt.registerTask('default', []);
};