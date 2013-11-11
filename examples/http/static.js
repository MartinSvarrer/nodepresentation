// Always serve same simple html page no matter what is requested.
// __dirname is a special built-in variable containing the path where the code is running.


var http = require('http'),
	fs = require('fs');

var server = http.createServer(function (request, response) {
	
	var indexFilePath = __dirname + '/public/simple.html';
	fs.readFile(indexFilePath, function (err, data) {
		if (err)
			throw err;

		response.writeHead('200', { 'Content-Type': 'text/html' });
		response.end(data);
	});
})

server.listen(8000, '127.0.0.1');