// Reads a file if present, otherwise creates a new file, and appends content to that file.
var fs = require('fs');

fs.appendFile('log', new Date(), function (err) {
	if (err)
		throw err;
});