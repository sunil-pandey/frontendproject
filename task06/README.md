01 September 2014 - Task 06
===========================

## 1) Learn the following concepts, using the articles mentioned in the accompanying like.  You can search more for new articles to go into depth.

  - JavaScript Module Pattern  
	http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

  - JavaScript Closures explained  
	http://skilldrick.co.uk/2011/04/closures-explained-with-javascript/

  - JavaScript IIFE explained  
	http://benalman.com/news/2010/11/immediately-invoked-function-expression/
	
## 2) The task06 folder has following files

  <pre><code>
  task06
    spec
      test.js
    js
      counter.js (empty file to be completed)
    package.json
    gulpfile.js
  </code></pre>

### 2.1) Install all required modules by running command (This is exactly what we did in task 03 step by step, now can be done by one command using the same package.json file)

  $ npm install (this command will use package.json and install all dependencies)

### 2.2) Write counter.js file and complete the following requirements:

  Counter shall be object available created using module pattern  
  Counter object shall contain methods below  

  - get() -> returns number
  - increment() -> increments number internally
  - reset() -> resets number to 0

  - value shall be a private variable to the module, not available publicly

  - Typical usage will be:

    <pre><code>
    var number = Counter.get(); // returns 0

    Counter.increment(); // internally increments number

    number = Counter.get() // now returns 1

    Counter.reset(); // internally resets to 0

    number = Counter.get(); // now returns 0
    </code></pre>

  When you run gulp command these things will be tested using the test.js spec  
  Objective is to pass all tests in the spec to ensure we have created exactly what is expected.  

  NOTE: Do not add and commit node_modules folder, it is not needed and can be installed back anytime.  

  when you have package.json already having dev dependencies defined, and when you run npm install command all those modules are installed again if not present  

  Summary:
    1. Complete the task06/js/counter.js file
    2. Run gulp command
    3. There shall be no failures