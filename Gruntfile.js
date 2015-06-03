module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		mochaTest: {
			src: [
				'tests/loaders/factory/*',
				'tests/loaders/literal/*',
				'tests/loaders/singleton/*',
				'tests/loaders/constructor/*'
			]
		}
	});

	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.registerTask('test', [
		'mochaTest'
	]);
};
