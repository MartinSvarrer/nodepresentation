// Outputs one file combinig all js files in current folder.

var fs = require('fs'),
	outputPath = 'output.js';

fs.readdir('.', function (err, files) {
	if (err)
		throw err;

	var buildString = '//File build by custom file builder.\n';

	files.forEach(function (filePath) {
		var isJsFile = filePath.lastIndexOf('.js') !== -1;
		if (isJsFile && filePath !== outputPath)
			buildString += fs.readFileSync(filePath, 'utf8');
	})

	fs.writeFile(outputPath, buildString, function (err) {
		if (err)
			throw err;
	});
});