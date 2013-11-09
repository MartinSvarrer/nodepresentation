// Read a file called 'log'.

var fs = require('fs');

fs.readFile('log', 'utf8', function (err, data) {
	if (err)
		throw err;
	console.log(data);
});