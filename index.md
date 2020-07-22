# Browser-based Operating System

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

```
@def(head)
	<title>Browser-based
		Operating System</title>
	<meta charset="utf-8" />
@end(head)
```

```
@def(body)
	<div class="window">
		<h1>Startup Message</h1>
		<div class="content">
			<div class="note"><p>Welcome
				to the browser-based
				Operating
			System.</p><p>Press control
				to trigger one of the
				following
			actions:</p><ul>
				<li>Open Commandlet</li>
			</ul></div>
		</div>
	</div>
@end(body)
```

```
@Def(file: build/bbo.css)
	body {
		background-color: #336;
		color: #ddf;
	}
	.window {
		margin: 20px;
		border: solid 1px #ddf;
		display: inline-block;
	}
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

@End(file: build/bbo.css)
```

```
@add(head)
	<link rel="stylesheet"
		type="text/css"
		href="bbo.css" />
@end(head)
```

```
@Def(file: build/bbo.js)
	'use strict';
	window.addEventListener(
		'load', evt => {
			@put(on load)
		}
	);
@End(file: build/bbo.js)
```

```
@def(after body)
	<script src="bbo.js"></script>
@end(after body)
```

```
@def(on load)
	let $body =
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

```
@def(on key down)
	if (evt.ctrlKey) {
		$body.classList.add('ctrl');
	}
@end(on key down)
```

```
@add(on load)
	$body.addEventListener(
		'keyup', evt => {
			@put(on key up)
		}
	);
@end(on load)
```

```
@def(on key up)
	$body.classList.remove('ctrl');
@end(on key up)
