(function () {

	var input = document.querySelector('.todoinput'),
		submit = document.querySelector('.submit'),
		socket = io.connect('http://localhost:8000');

	function submitValue(val) {
		socket.emit('save', { input: val });
	}

	socket.on('change', function (data) {
		input.value = data.input;
	});


	// UI EVENT HANDLERS
	input.addEventListener('focus', function () {
		input.value = '';
	});

	input.addEventListener('input', function (e) {
		submitValue(input.value);
	});

	submit.addEventListener('click', function () {
		submitValue(input.value);
	});

})();