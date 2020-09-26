
	'use strict';
	let fns = {};
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
	} else if (evt.ctrlKey) {
		const $tips = document.getElementsByClassName('with-ctrl');
		for (let i = 0; i < $tips.length; ++i) {
			const $tip = $tips[i];
			const text = $tip.innerText.trim();
			console.log('tip: [' + text + ']', $tip);
			if (text == 'ctrl+' + evt.key) {
				evt.preventDefault();
				$tip.parentElement.dispatchEvent(new Event('click'));
			}
		}
	}

		}
	);

	fns.open_commandlet = evt => {
		
	alert("open commandlet");

	};
	let actions = [{
		ctrlKey: true,
		key: "xEnter",
		action: fns.open_commandlet
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
