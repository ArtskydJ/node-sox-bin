var soxPath = require('./index.js')
var cp = require('child_process')

if (!/vendor.+sox/.test(soxPath)) throw new Error('unexpected soxPath')

cp.exec(soxPath + ' --version', function (err, stdout, stderr) {
	if (err) {
		throw err
	} else if (stderr.length) {
		throw new Error('stderr: ' + stderr)
	} else if (!stdout.length) {
		throw new Error('no stdout')
	}
})
