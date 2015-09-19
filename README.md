# sox-bin

> Get [SoX](http://sox.sourceforge.net/) as a binary

### platform support

| Platform | Status |
|----------|--------|
| Windows  | Tested |
| OSX      | Untested |
| Linux    | Unsupported - accepting PR |

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
