# sox-bin

> Get [SoX](http://sox.sourceforge.net/) as a binary

| Platform | SoX Version | Status   |
|----------|-------------|----------|
| Windows  | 14.4.2      | Tested   |
| OSX      | 14.4.2      | Tested   |
| FreeBSD  | 14.4.1-5    | Untested |
| Linux    | 14.4.1-5    | Untested |

# example

```js
var soxPath = require('sox-bin')
var cp = require('child_process')

var command = soxPath + ' --version'
cp.exec(command, function (err, stdout) {
	if (err) {
		throw err
	} else {
		console.log(stdout.toString())
	}
})
```

# api

```js
var soxPath = require('sox-bin')
```

`soxPath` is a string of the path to the SoX binary. On my machine it is `C:\Users\Michael\Github\sox-bin\vendor\windows\sox.exe`

# license

[VOL](http://veryopenlicense.com)
