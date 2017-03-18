module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    var mozjpeg = require('imagemin-mozjpeg');

    grunt.initConfig({
		concat_css: {
			dist: {
                src: ["css/style.css" , "css/responsive.css"],
                dest: "dist/css/styles.css"
			}
		},
        imagemin: {                          // Task
          static: {                          // Target
            options: {                       // Target options
              optimizationLevel: 3,
              svgoPlugins: [{ removeViewBox: false }],
              use: [mozjpeg()]
            },
            files: {                         // Dictionary of files
              'dist/animal-card-small.jpg': 'images/animal-card.jpg',
              'dist/ice-cream-recipe-small.jpg': 'images/ice-cream-recipe.jpg',
              'dist/flipboard-small.jpg': 'images/flipboard.jpg',
              'dist/cover-small.jpg' : 'images/cover.jpg' // 'destination': 'source'
            }
          }
        }
	});

    grunt.registerTask('default', [
		'concat_css',
        'imagemin'
	]);
};
