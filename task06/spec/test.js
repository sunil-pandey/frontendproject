window = {};

eval(require('fs').readFileSync('js/counter.js', 'utf8')); 

/* example spec */
describe("A suite", function() {
	/* expectation 1 */
  	it("contains spec with an expectation", function() {
    	expect(true).toBe(true);
  	});

	/* expectation 2 and so on  */
  	it("contains spec with an expectation", function() {
    	expect(true).toBe(true);
  	});
});

describe("Counter checks", function() {
  	it("Counter exists", function() {
    	expect(Counter ).not.toBe(undefined);
  	});

  	it("Counter is not global object", function() {
    	expect(window.Counter).toBe(undefined);
  	});

  	it("Counter has value 0", function() {
    	expect(Counter.get()).toBe(0);
  	});

  	it("Counter direct value undefined", function() {
    	expect(Counter.value).toBe(undefined);
  	});
	

  	it("Counter resets to 0", function() {
		Counter.increment();
		Counter.increment();
		Counter.increment();
		Counter.reset();
    	expect(Counter.get() ).toBe(0);
  	});

  	it("Counter increment works", function() {
		Counter.increment();
    	expect(Counter.get()).toBe(1);
		Counter.increment();
	    expect(Counter.get()).toBe(2);
  	});
});