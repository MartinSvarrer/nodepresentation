var express = require('express'),
	socket = require('socket.io'),
	app = express();

app.use(express.directory(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

var server = app.listen(8000),
	io = socket.listen(server),
	socketList = [];

io.sockets.on('connection', function (socket) {
	socketList.push(socket);

	socket.on('save', function (data) {
		socketList.forEach(function (socket) {
			socket.emit('change', data);
		});
	});
});