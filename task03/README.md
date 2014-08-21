25 July 2014 - Task 04
======================

Workflow for a web application development

1) create a new project in task04 folder using the following commands

- npm init
- npm install --save-dev gulp
- npm install --save-dev gulp-util
- npm install --save-dev gulp-less
- npm install --save-dev path
- npm install --save-dev gulp-coffee
- npm install --save-dev gulp-concat
- npm install --save-dev gulp-uglify
- npm install --save-dev gulp-livereload
- npm install --save-dev tiny-lr

2) Make folder structure like follows

components
  coffee
    script.coffee
  less
    main.less
  lib
  scripts
    common.js
    page1.js
css
js
index.html
package.json
gulpfile.js


3) Watch the recording and create the contents of the files.  The content kept below will help you complete the files.

index.html
----------

<!doctype html>
<html lang="en">
<head>

  <meta charset="UTF-8">
  <title>Workflow</title>
  <link rel="stylesheet" href="css/style.css" >
</head>
<body>
<h1>Change Next</h1>
<p>Lorem ipsum</p>
<script src="js/script.js"></script>
<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
</body>
</html>

main.less
----------

@primary-color: #e1b283

h1 {
	color: @primary-color
}


script.coffee
-------------

process = ->
	"Hello There. Same here"
	
$ ->
	$('h1').append('Hello There')
	

gulpfile.js
-----------

var gulp = require('gulp'),
	gutil = require('gulp-util'),
	uglify = require('gulp-uglify'),
	less = require('gulp-less'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	path = require('path'),
	livereload = require('gulp-livereload'),
	lr = require('tiny-lr'),
	server = lr();

var coffeeSources = [
	'components/coffee/*.coffee'
];
	
var jsSources = [
	'components/lib/jquery.js',
	'components/scripts/*.js'
];

var lessSources = [
	'components/less/*.less'
];

gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({ bare: true})
			.on( 'error', gutil.log))
		.pipe(gulp.dest('components/scripts'));
});

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(uglify())
		.pipe(concat('script.js'))
		.pipe(gulp.dest('js'))
});

gulp.task('less', function () {
	gulp.src(lessSources)
		.pipe(less({
			paths: [ path.join(__dirname, 'components/less')]
		}))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('css'))
		.pipe(livereload());
});

gulp.task('watch', function() {
	var server = livereload();
	gulp.watch(jsSources, ['js']);
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(lessSources, ['less']);
	gulp.watch(['js/script.js', '*.html'], function(e) {
		server.changed(e.path);
	});
});

gulp.task('default', ['less', 'js', 'coffee', 'watch']);

4) Watch the presentations for LESS and CoffeeScript

LESS 
Website
http://lesscss.org/
presentation
https://speakerdeck.com/bermonpainter/css-pre-processors-stylus-less-and-sass

CoffeeScript
Website
http://coffeescript.org/
Presentation
https://speakerdeck.com/zdennis/intro-to-coffeescript

	
			