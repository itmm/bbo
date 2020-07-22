
	'use strict';
	window.addEventListener(
		'load', evt => {
			
	const $body =
		document.getElementsByTagName(
			'BODY'
		)[0];
	$body.addEventListener(
		'keydown', evt => {
			
	if (evt.ctrlKey) {
		$body.classList.add('ctrl');
	}

	if (find_action(evt)) {
		evt.preventDefault();
	}

		}
	);

	$body.addEventListener(
		'keyup', evt => {
			
	$body.classList.remove('ctrl');

	const a = find_action(evt);
	if (a) {
		evt.preventDefault();
		a.action(evt);
	}

		}
	);

	let actions = [{
		ctrlKey: true,
		key: "Enter",
		action: evt => {
			
	alert("open commandlet");

		}
	}];

	const find_action = evt => {
		for (const a of actions) {
			if (a.ctrlKey == evt.ctrlKey
				&& a.key == evt.key
			) {
				return a;
			}
		}
	};

		}
	);
