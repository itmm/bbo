
	'use strict';
	window.addEventListener(
		'load', evt => {
			
	let $body =
		document.getElementsByTagName(
			'BODY'
		)[0];
	$body.addEventListener(
		'keydown', evt => {
			
	if (evt.ctrlKey) {
		$body.classList.add('ctrl');
	}

		}
	);

	$body.addEventListener(
		'keyup', evt => {
			
	$body.classList.remove('ctrl');

		}
	);

		}
	);
