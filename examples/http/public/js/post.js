(function () {

	var input = document.querySelector('.todoinput'),
		submit = document.querySelector('.submit');

	function submitValue(val) {
		var xhr = new XMLHttpRequest(),
			params = { input: val };
		
		xhr.onload = function (e) {
			console.log(xhr.response);
		}

		xhr.open('POST', '/save', true);
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.send(JSON.stringify(params));
	}

	// UI EVENT HANDLERS
	input.addEventListener('focus', function () {
		input.value = '';
	});

	input.addEventListener('keydown', function (e) {
		if (e.which === 13)
			submitValue(input.value);
	});

	submit.addEventListener('click', function () {
		submitValue(input.value);
	});

})();