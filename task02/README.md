23 July 2014, Task 03 Requirements
==================================

1) Make the original repository upstream remote for your local

cd projects
git clone https://github.com/tushardemo/frontendninja
(tushardemo is demo participants for demo purposes)
cd frontendninja

One time setting:
cd frontendninja
git remote add upstream https://github.com/tusharvjoshi/frontendninja

To get updates from the source repository of tusharvjoshi
git fetch upstream
git merge upstream/master master
git push

2) Use bootstrap 3 and make grid layout

Understand the working of Bootstrap 3 grids
http://www.helloerik.com/the-subtle-magic-behind-why-the-bootstrap-3-grid-works

Grid example:
http://getbootstrap.com/examples/grid/

Complete the index.html file with following layout
Use desktop columns that is col-md-* classes
Check with CTRL+SHIFT+M in Firefox

+--------------------------------------------------------+
|  Banner                                                |
+--------------------------------------------------------+
+-------------+-----------------------------+------------+
| Left Bar    |  Main content               | right bar  |
|             |                             |            |
|             |                             |            |
|             |                             |            |
|             |                             |            |
|             |                             |            |
|             |                             |            |
|             |                             |            |
|             |                             |            |
+-------------+-----------------------------+------------+
+--------------------------------------------------------+
|  Footer                                                |
+--------------------------------------------------------+
+-----------+----------------+-------------+-------------+
| Section 1 |  Section 2     | Section 3   | Section 4   |
|           |                |             |             |
|           |                |             |             |
|           |                |             |             |
|           |                |             |             |
|           |                |             |             |
+-----------+----------------+-------------+-------------+

The content of each box shall be as follows: 
(replace [[Some Text]] with actual name given in the boxes above)

<h4>[[Some Text]]</h4>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.</p>

Commit your index.html back to your repository.

3) Getting familiar with npm

mkdir npmtest
cd npmtest
npm init
> name: (npmtest): ENTER
> version: (0.0.0) ENTER
> description: first npm init ENTER
> entry point: (index.js) ENTER
> test command: ENTER
> git repository: https://github.com/tushardemo/frontendninja ENTER
> keywords: ENTER
> license: (ISC) MIT ENTER
> Is this ok? (yes) ENTER

Check created package.json file and it shall look like below:

{
  "name": "npmtest",
  "version": "0.0.0",
  "description": "first npm init",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/tushardemo/frontendninja"
  },
  "author": "'Tushar",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/tushardemo/frontendninja/issues"
  },
  "homepage": "https://github.com/tushardemo/frontendninja"
}

- Create spec folder
mkdir spec
- Create test.js file in spec folder with the following content:

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

- Install gulp globally
npm install -g gulp

- Install gulp locally
npm install --save-dev gulp

- Install gulp-jasmine locally
npm install --save-dev gulp-jasmine

- Create gulpfile.js in npmdemo folder with the following contents

var gulp = require('gulp')
	jasmine = require('gulp-jasmine');
	
gulp.task('default', function () {
    gulp.src('spec/test.js')
        .pipe(jasmine());
});

- Run gulp command to get output similar to below:

[09:38:08] Using gulpfile D:\MyProjects\tushardemo\npmtest\gulpfile.js
[09:38:08] Starting 'default'...
[09:38:08] Finished 'default' after 28 ms
.

Finished in 0.003 seconds
1 test, 1 assertion, 0 failures

- The final folder contents will be

npmtest
|   gulpfile.js
|   package.json
|   
+---node_modules
|   +--- (lot of folders and files)
|                                       
\---spec
        test.js
