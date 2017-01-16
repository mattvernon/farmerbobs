/* jshint node: true */
/* global $: true */
'use strict';

var gulp 		= require('gulp');
var browserSync = require('browser-sync').create();
var liveReload  = require('gulp-livereload');
var dist = 'dist/';

// Livereload
gulp.task('watch', function () {
	liveReload.listen();

	gulp.watch(
		dist + '**/*.{jpg,png,svg,webp,css,js,html}'
	).on('change', function (file) {
		liveReload.changed(file.path);
	});
});

// Serve
gulp.task('serve', ['watch'], function() {
		browserSync.init({
			ghostMode: false,
			server: {
				baseDir: dist
			}
	});
	gulp.watch(dist + '**/*.{jpg,png,svg,webp,css,js,html}').on('change', browserSync.reload);
});
