var express = require('express'),
	socket = require('socket.io'),
	database = require('./datamodule'),
	app = express();

app.use(express.directory(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

var server = app.listen(8000),
	io = socket.listen(server),
	socketList = [];

function dispatch(socket, event, data) {
	socket.emit(event, data);
}

function dispatchAll(event, data) {
	socketList.forEach(function (socket) {
		dispatch(socket, event, data);
	});
}

io.sockets.on('connection', function (socket) {
	socketList.push(socket);

	database.getData(function (allData) {
		dispatch(socket, 'change', allData);
	});

	socket.on('input', function (inputData) {
		dispatchAll('inputInfo', inputData);
	});

	socket.on('save', function (inputData) {
		database.write(inputData.input, function (newAllData) {
			dispatchAll('change', newAllData);
		});
	});
});