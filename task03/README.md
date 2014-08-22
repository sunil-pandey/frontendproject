22 August 2014 - Task 03
========================

Workflow for a web application development

## 1. create a new project in task03 folder using the following commands

  - `npm init`
  - `npm install --save-dev gulp`
  - `npm install --save-dev gulp-util`
  - `npm install --save-dev gulp-less`
  - `npm install --save-dev path`
  - `npm install --save-dev gulp-coffee`
  - `npm install --save-dev gulp-concat`
  - `npm install --save-dev gulp-uglify`
  - `npm install --save-dev gulp-livereload`
  - `npm install --save-dev tiny-lr`

## 2. Make folder structure as shown below

  <pre><code>
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
  </code></pre>

##3. Watch the recording and create the contents of the files.  The content kept below will help you complete the files.

  <pre><code>
#### index.html

  &lt;!doctype html&gt;
  &lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;

    <meta charset="UTF-8">
    <title>Workflow</title>
    <link rel="stylesheet" href="css/style.css" >
  &lt;/head&gt;
  &lt;body&gt;
  &lt;h1&gt;Change Next&lt;/h1&gt;
  &lt;p&gt;Lorem ipsum&lt;/p&gt;
  &lt;script src=&quot;js/script.js&quot;&gt;&lt;/script&gt;
  &lt;script&gt;document.write(&apos;&lt;script src=&quot;http://&apos; + (location.host || &apos;localhost&apos;).split(&apos;:&apos;)[0] + &apos;:35729/livereload.js?snipver=1&quot;&gt;&lt;/&apos; + &apos;script&gt;&apos;)&lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  ----------
#### main.less

  @primary-color: #e1b283

  h1 {
  	color: @primary-color
  }

  ----------
#### script.coffee

  process = -&gt;
  	&quot;Hello There. Same here&quot;
	
  $ -&gt;
  	$(&apos;h1&apos;).append(&apos;Hello There&apos;)
	
  ----------
#### gulpfile.js

  var gulp = require(&apos;gulp&apos;),
  	gutil = require(&apos;gulp-util&apos;),
  	uglify = require(&apos;gulp-uglify&apos;),
  	less = require(&apos;gulp-less&apos;),
  	coffee = require(&apos;gulp-coffee&apos;),
  	concat = require(&apos;gulp-concat&apos;),
  	path = require(&apos;path&apos;),
  	livereload = require(&apos;gulp-livereload&apos;),
  	lr = require(&apos;tiny-lr&apos;),
  	server = lr();

  var coffeeSources = [
  	&apos;components/coffee/*.coffee&apos;
  ];
	
  var jsSources = [
  	&apos;components/lib/jquery.js&apos;,
  	&apos;components/scripts/*.js&apos;
  ];

  var lessSources = [
  	&apos;components/less/*.less&apos;
  ];

  gulp.task(&apos;coffee&apos;, function() {
  	gulp.src(coffeeSources)
  		.pipe(coffee({ bare: true})
  			.on( &apos;error&apos;, gutil.log))
  		.pipe(gulp.dest(&apos;components/scripts&apos;));
  });

  gulp.task(&apos;js&apos;, function() {
  	gulp.src(jsSources)
  		.pipe(uglify())
  		.pipe(concat(&apos;script.js&apos;))
  		.pipe(gulp.dest(&apos;js&apos;))
  });

  gulp.task(&apos;less&apos;, function () {
  	gulp.src(lessSources)
  		.pipe(less({
  			paths: [ path.join(__dirname, &apos;components/less&apos;)]
  		}))
  		.pipe(concat(&apos;style.css&apos;))
  		.pipe(gulp.dest(&apos;css&apos;))
  		.pipe(livereload());
  });

gulp.task(&apos;watch&apos;, function() {
	var server = livereload();
    gulp.watch(jsSources, [&apos;js&apos;]);
    gulp.watch(coffeeSources, [&apos;coffee&apos;]);
    gulp.watch(lessSources, [&apos;less&apos;]);
    gulp.watch([&apos;js/script.js&apos;, &apos;*.html&apos;], function(e) {
      server.changed(e.path);
    });
  });

  gulp.task(&apos;default&apos;, [&apos;less&apos;, &apos;js&apos;, &apos;coffee&apos;, &apos;watch&apos;]);
  </code></pre>
  
## 4. Watch the presentations for LESS and CoffeeScript

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

  
      