var express = require('express'),
	app = express();

app.use(express.directory(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.post('/save', function (req, res) {
	console.log(req.body.input);

	res.writeHead('200', { 'Content-Type': 'text/plain' });
	res.end('OK\n');
});

app.listen(8000);