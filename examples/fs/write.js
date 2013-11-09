// Write a file called 'log' with some content (a date string).

var fs = require('fs');

fs.writeFile('log', new Date(), function (err) {
	if (err)
		throw err;
});