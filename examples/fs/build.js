// Outputs one file combinig all js files in current folder.

var fs = require('fs'),
	outputName = 'output.js',
	buildDir = process.argv[2];

if (!buildDir)
	throw 'No build directory argument found';

fs.readdir(buildDir, function (err, files) {
	if (err)
		throw err;
	
	var buildString = '//File build by custom file builder.\n';

	files.forEach(function (fileName) {
		var isJsFile = fileName.lastIndexOf('.js') !== -1;
		if (isJsFile && fileName !== outputName)
			buildString += fs.readFileSync(buildDir + fileName, 'utf8');
	})

	fs.writeFile(buildDir + outputName, buildString, function (err) {
		if (err)
			throw err;
	});
});