module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    minified : {
      files: {
        src: [
          'src/lib.js',
          'src/lib_colors.js',
          'src/lib_f.js',
          'src/lib_fs.js',
          'src/lib_message_manager.js',
          'src/lib_preference_manager.js',
          'src/lib_storage.js',
          'src/lib_storage_chrome.js',
          'src/lib_storage_local.js',
          'src/lib_storage_memory.js',
          'src/lib_test_manager.js',
          'src/lib_utf8.js'
        ],
        dest: 'dist/'
      },
      options : {
        allinone: true,
        dest_filename: 'libdot.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-minified');
  grunt.registerTask('default', ['minified']);

};
