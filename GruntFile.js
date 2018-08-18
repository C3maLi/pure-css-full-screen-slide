module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    package: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [
          {
            expand: true,
            cwd: 'public/assets/scss',
            src: ['**/*.scss'],
            dest: 'public/assets/css',
            ext: '.css'
          }
        ]
      }
    },

    watch: {
      sass: {
        files: ['public/assets/scss/*.scss'],
        tasks: ['newer:sass:dist'],
        options: {
          livereload: true
        }
      },
      livereload: {
        options: { livereload: true },
        files: ['public/**/*']
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'public/assets/**/*.css',
            'public/*.html',
            'public/assets/**/*.js',
            'public/assets/**/*.jpg',
            'public/assets/**/*.png'
          ]
        },
        options: {
          watchTask: true,
          server: './public'
        }
      }
    }
  });

  // Start web server
  grunt.registerTask('sync', ['browserSync', 'watch']);
};
