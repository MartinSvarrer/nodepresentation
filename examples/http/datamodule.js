var fs = require('fs'),
	databasePath = 'data/data.json';

// 
fs.readFile(databasePath, 'utf8', function (err, data) {
	if (err) {
		var scaffold = {
			d: []
		}

		fs.writeFile(databasePath, JSON.stringify(scaffold), function (err) {
			if (err)
				throw 'cannot find or create database at ' + databasePath;
		});
	}
});

function write (text, callback) {
	getData(function (json) {
		try {
			json.d.push({ text: text });
		} catch (e) {
			console.log(e);
		}
		
		fs.writeFile(databasePath, JSON.stringify(json), function (err) {
			if (err)
				throw err;

			if (callback)
				callback.call(null, json);
		});
	});
}

function getData (callback) {
	fs.readFile(databasePath, 'utf8', function (err, data) {
		var json = JSON.parse(data);
		if (callback)
			callback.call(null, json);
	});
}

exports.write = write;
exports.getData = getData;
