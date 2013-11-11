var express = require('express'),
	app = express();

app.use(express.directory(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));
app.listen(8000);