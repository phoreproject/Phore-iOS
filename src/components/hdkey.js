import "../../shim";
const HDKey = require('hdkey')

const rnHDKey = function(seed) {
	return HDKey.fromMasterSeed(seed)
}

const xpriv = function(hdkey) {
	return HDKey.privateExtendedKey(hdkey)
}

const xpub = function(hdkey) {
	return HDKey.publicExtendedKey(hdkey)
}

module.exports.rnHDKey = rnHDKey
module.exports.xpriv = xpriv
module.exports.xpub = xpub