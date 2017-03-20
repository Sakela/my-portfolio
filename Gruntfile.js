module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    var mozjpeg = require('imagemin-mozjpeg');

    grunt.initConfig({
		concat_css: {
			dist: {
                src: ["src/css/style.css" , "src/css/responsive.css"],
                dest: "src/css/styles.css"
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
              'img/animal-card.jpg': 'src/images/animal-card.jpg',
              'img/ice-cream-recipe.jpg': 'src/images/ice-cream-recipe.jpg',
              'img/flipboard.jpg': 'src/images/flipboard.jpg',
              'img/cover.jpg' : 'src/images/cover.jpg' // 'destination': 'source'
            }
          }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/styles.min.css': 'src/css/styles.css'
                }
            }
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                                   // Dictionary of files
                'index.html': 'src/index.html'    // 'destination': 'source'
              }
            }
          }
	});

    grunt.registerTask('default', [
        'htmlmin',
        'cssmin',
		'concat_css',
        'imagemin'
	]);
};
