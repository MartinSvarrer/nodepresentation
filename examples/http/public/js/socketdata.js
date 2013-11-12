(function () {

	var input = document.querySelector('.todoinput'),
		submit = document.querySelector('.submit'),
		dataList = document.querySelector('.dataList'),
		inputInfo = document.querySelector('.inputInfo'),
		socket = io.connect('http://localhost:8000');

	function submitValue(val) {
		socket.emit('save', { input: val });
	}

	function updateInputInfo (val) {
		socket.emit('input', { input: val});
	}

	socket.on('change', function (data) {
		dataList.innerHTML = '';
		data.d.forEach(function (inputObj) {
			dataList.innerHTML += '<li>' + inputObj.text + '</li>\n';
		});
	});

	socket.on('inputInfo', function (data) {
		inputInfo.innerHTML = data.input;
	});

	// UI EVENT HANDLERS
	input.addEventListener('focus', function () {
		input.value = '';
	});

	input.addEventListener('input', function () {
		updateInputInfo(input.value);
	});

	input.addEventListener('keydown', function (e) {
		if (e.which === 13)
			submitValue(input.value);
	});

	submit.addEventListener('click', function () {
		submitValue(input.value);
	});

})();