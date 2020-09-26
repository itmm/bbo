
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
		key: "Enter",
		action: fns.open_commandlet
	}];

	fns.show_time = evt => {
		
	const $wnd = document.createElement('DIV');
	$wnd.classList.add('window');
	const $h1 = document.createElement('H1');
	$h1.innerText = "Time";
	const $content = document.createElement('DIV');
	$content.classList.add('content');
	const $p = document.createElement('P');
	const now = new Date();
	const date = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
	const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	var dateTime = date+' '+time;
	$p.innerText = dateTime;
	$content.appendChild($p);
	$wnd.appendChild($h1);
	$wnd.appendChild($content);
	document.getElementsByTagName('BODY')[0].appendChild($wnd);
;
	};

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
