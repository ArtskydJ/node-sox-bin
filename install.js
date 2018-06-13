var fs = require('fs')
var os = require('os')
var soxBinPath = require('./index.js')

if (os.platform() === 'darwin') {
	fs.stat(soxBinPath, function (err, stats) {
		if (err) throw err

		fs.chmod(soxBinPath, stats.mode | 0o111, function (err) {
			if (err) throw err	
		})
	})
}
