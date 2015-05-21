module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'public/javascripts/app.js': ['client/app.js']
        }
      },
      options: {
        transform: ['traceurify']
      }
    },

    watch: {
      scripts: {
        files: ['client/**/*.js'],
        tasks: ['browserify']
      },
    },
  });

  grunt.registerTask('default', []);
  grunt.registerTask('build', ['browserify']);
};