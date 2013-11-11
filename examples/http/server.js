// Start a server

var http = require('http');

var server = http.createServer(function (request, response) {
	response.writeHead('200', { 'Content-Type': 'text/plain' });
	response.end('Hello world\n');
})

server.listen(8000, '127.0.0.1');
console.log('Server running at 127.0.0.1:8000');