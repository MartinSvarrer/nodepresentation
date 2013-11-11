var foo = require('./foo'),
	Bar = require('./bar');

// Output: bar
console.log(foo.getBar());


// Output: bazqux
console.log(new Bar().hotStuff());
