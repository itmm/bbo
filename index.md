# Browser-based Operating System
* run all the programs you need in a single browser window

```
@Def(file: build/index.html)
	<!doctype html>
	<html lang="end">
		<head>
			@put(head)
		</head>
		<body>
			@put(body)
			@put(after body)
		</body>
	</html>
@End(file: build/index.html)
```
* structure of a HTML 5 page

```
@def(head)
	<title>Browser-based
		Operating System</title>
	<meta charset="utf-8" />
@end(head)
```
* title and encoding

```
@def(body)
	<div class="window">
		@put(startup message)
	</div>
@end(body)
```
* start with one single window

```
@def(startup message)
	<h1>Startup Message</h1>
	<div class="content">
		<div class="note"><p>Welcome to
			the browser-based Operating
		System.</p><p>Press control
			to trigger one of the
			following
		actions:</p><ul>
			@put(startup actions)
		</ul></div>
	</div>
@end(startup message)
```
* title and simple text content

```
@def(startup actions)
	<li><a href="#" onclick="fns.open_commandlet()"><div class="with-ctrl">
		ctrl+Enter
	</div>Open Commandlet</a></li>
@end(startup actions)
```
* most important action

```
@Def(file: build/bbo.css)
	@put(styles)
@End(file: build/bbo.css)
```
* file with style definitions

```
@def(styles)
	body {
		background-color: #336;
		color: #ddf;
	}
@end(styles)
```
* style desktop

```
@add(styles)
	.window {
		margin: 20px;
		border: solid 1px #ddf;
		display: inline-block;
	}
@end(styles)
```
* windows have a solid border

```
@add(styles)
	.window h1 {
		margin: 0;
		padding: 2px 6px;
		display: block;
		background-color: #ddf;
		color: #000;
		font-size: medium;
	}
	.window .content {
		margin: 8px;
	}
@end(styles)
```
* title bar and content

```
@add(styles)
	a, a:visited {
		position: relative;
		color: #bbf;
	}
	a:active {
		color: #ffa;
	}
@end(styles)
```
* color links
* and allow better position of tooltips

```
@add(styles)
	.with-ctrl {
		display: none;
	}
	.ctrl .with-ctrl {
		@put(tooltip)
	}
@end(styles)
```
* allow tooltips to be positioned over links

```
@def(tooltip)
	position: absolute;
	display: block;
	white-space: nowrap;
	z-index: 5;
	left: 50%;
	top: 50%;
@end(tooltip)
```
* position tooltip

```
@add(tooltip)
	background-color:
		rgba(80, 80, 0, 0.8);
	color: #ff0;
	border: solid 1px #ff0;
	font-size: smaller;
	padding: 0 4px;
	border-radius: 4px;
@end(tooltip)
```
* style tooltip

```
@add(head)
	<link rel="stylesheet"
		type="text/css"
		href="bbo.css" />
@end(head)
```
* use stylesheet

```
@Def(file: build/bbo.js)
	'use strict';
	let fns = {};
	window.addEventListener(
		'load', evt => {
			@put(on load)
		}
	);
@End(file: build/bbo.js)
```
* action after page loading
* global variable `fns` for functions used in links

```
@def(after body)
	<script src="bbo.js"></script>
@end(after body)
```
* add script

```
@def(on load)
	const $body =
		document.getElementsByTagName(
			'BODY'
		)[0];
	$body.addEventListener(
		'keydown', evt => {
			@put(on key down)
		}
	);
@end(on load)
```
* register keydown action on body

```
@def(on key down)
	if (evt.ctrlKey) {
		$body.classList.add('ctrl');
	}
@end(on key down)
```
* add class when control key is pressed

```
@add(on load)
	$body.addEventListener(
		'keyup', evt => {
			@put(on key up)
		}
	);
@end(on load)
```
* register keyup action on body

```
@def(on key up)
	$body.classList.remove('ctrl');
@end(on key up)
```
* remove class when control key is lifted

```
@add(on load)
	fns.open_commandlet = evt => {
		@put(open commandlet)
	};
	let actions = [{
		ctrlKey: true,
		key: "Enter",
		action: fns.open_commandlet
	}];
@end(on load)
```
* list with global actions

```
@def(open commandlet)
	alert("open commandlet");
@end(open commandlet)
```
* dummy implementation

```
@add(on load)
	const find_action = evt => {
		for (const a of actions) {
			if (a.ctrlKey == evt.ctrlKey
				&& a.key == evt.key
			) {
				return a;
			}
		}
	};
@end(on load)
```
* return action with matching key and modifiers

```
@add(on key down)
	if (find_action(evt)) {
		evt.preventDefault();
	}
@end(on key down)
```
* prevent default handling of keyboard shortcuts

```
@add(on key up)
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
@end(on key up)
```
* process keyboard shortcut

