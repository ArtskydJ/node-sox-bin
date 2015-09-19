module.exports = {
	win32: __dirname + '\\vendor\\windows\\sox.exe',
	darwin: __dirname + '/vendor/osx/sox'
}[process.platform]

if (!module.exports) throw new Error(process.platform + ' is not supported. Please make a pull request.')
