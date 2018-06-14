# sox-bin

> Get [SoX](http://sox.sourceforge.net/) as a binary

| Platform | SoX Version | Status     |
|----------|-------------|------------|
| Windows  | 14.4.2      | [![Windows Build Status](https://ci.appveyor.com/api/projects/status/dyg7v0yv1jyvmcmr?svg=true)](https://ci.appveyor.com/project/ArtskydJ/sox-bin) |
| macOS    | 14.4.2      | [![macOS Build Status](https://travis-ci.org/ArtskydJ/sox-bin.svg)](https://travis-ci.org/ArtskydJ/sox-bin) |
| FreeBSD  | 14.4.1-5    | Untested   |
| Linux    | 14.4.1-5    | [![Linux Build Status](https://circleci.com/gh/ArtskydJ/sox-bin.svg?style=shield)](https://circleci.com/gh/ArtskydJ/sox-bin) |

## example

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

## api

```js
var soxPath = require('sox-bin')
```

#### `soxPath`

`soxPath` is a string of the path to the SoX binary.

```js
console.log(soxPath) // => "C:\Users\Joseph\Github\sox-bin\vendor\windows\sox.exe"
```

## license

[VOL](http://veryopenlicense.com)
