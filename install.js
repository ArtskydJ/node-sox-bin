var fs = require('fs')
var os = require('os')
var soxBinPath = require('./index.js')

if (os.platform() !== 'win32') {
	fs.stat(soxBinPath, function (err, stats) {
		if (err) throw err

		var modeWithExecutePermissions = stats.mode | parseInt('111', 8)
		
		fs.chmod(soxBinPath, modeWithExecutePermissions, function (err) {
			if (err) throw err
		})
	})
}
