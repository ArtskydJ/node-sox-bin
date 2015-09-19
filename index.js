module.exports = {
	win32_ia32: __dirname + '\\vendor\\windows\\sox.exe',
	win32_x64: __dirname + '\\vendor\\windows\\sox.exe',
	darwin_ia32: __dirname + '/vendor/osx/sox',
	darwin_x64: __dirname + '/vendor/osx/sox',
	freebsd_ia32: __dirname + '/vendor/freebsd/i386/sox',
	freebsd_x64: __dirname + '/vendor/freebsd/amd64/sox',
	linux_ia32: __dirname + '/vendor/fedora/i686/sox',
	linux_x64: __dirname + '/vendor/fedora/x86_64/sox'
}[process.platform + '_' + process.arch]

if (!module.exports) throw new Error(process.platform + ' ' + process.arch + ' is not supported. Please make a pull request.')
