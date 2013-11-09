// Read file.
// Modify the content.
// Save it.

var fs = require('fs'),
	path = 'log';

fs.readFile(path, 'utf8', function (err, data) {
	if (err)
		throw err;
	
	data += '\n' + new Date();

	fs.writeFile(path, data, function (err) {
		if (err)
			throw err;
	});
});