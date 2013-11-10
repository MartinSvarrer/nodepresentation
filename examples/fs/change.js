// Create tmp folder and listen and log changes in that folder.

var fs = require('fs');

fs.mkdir('tmp', function (err) { });
fs.watch('tmp', function (event, filename) {
	if (filename == 'log.txt')
		return;
	fs.appendFile('tmp/log.txt', event + ' ' + filename + '\n', function (err ) { if (err) throw err; });
});