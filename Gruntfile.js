module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect : {
			devserver : {
				options: {
					port: 8800,
					hostname: '0.0.0.0',
					base : '.',
					keepalive: true
				}
			}
		}
	});

	grunt.registerTask('webserver',['connect:devserver']);
	grunt.registerTask('default',['webserver']);
}