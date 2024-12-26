var test = require('tape')
var soxPath = require('./index.js')
var cp = require('child_process')

test('returned file path', function (t) {
	t.equal(typeof soxPath, 'string')
	t.ok(/vendor.+sox/.test(soxPath), 'found "vendor" and "sox" in the path')
	t.notEqual(soxPath[0], '.', 'path is not relative')
	t.end()
})

test('sox executable works', function (t) {
	cp.exec(soxPath + ' --version', function (err, stdout, stderr) {
		t.notOk(err, err ? err.message : 'no error')

		t.ok(stdout.length, 'something returned on stdout')
		t.notOk(stderr.length, 'nothing returned on stderr')
		t.ok(/sox/i.test(stdout.toString()), 'the string "sox" is found in stdout')
		t.end()
	})
})
