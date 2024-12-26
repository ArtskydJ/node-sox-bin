var t = require('node:assert')
var soxPath = require('./index.js')
var cp = require('child_process')

let done = false

t.equal(typeof soxPath, 'string')
t.ok(/vendor.+sox/.test(soxPath), 'found "vendor" and "sox" in the path')
t.notEqual(soxPath[0], '.', 'path is not relative')

cp.exec(soxPath + ' --version', function (err, stdout, stderr) {
	t.equal(err, null, err ? err.message : 'no error')

	t.notEqual(stdout.length, 0, 'something returned on stdout')
	t.equal(stderr.length, 0, 'nothing returned on stderr')
	t.ok(/sox/i.test(stdout.toString()), 'the string "sox" is found in stdout')

	done = true
})

process.on('exit', function () {
	t.ok(done, 'test completed')
})
