module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
		concat_css: {
			dist: {
                src: ["css/style.css" , "css/responsive.css"],
                dest: "dist/css/styles.css"
			}
		}
	});

    grunt.registerTask('default', [
		'concat_css'
	]);
};
