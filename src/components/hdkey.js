import "../../shim";
const HDKey = require('hdkey')

const rnHDKey = function(seed) {
	return HDKey.fromMasterSeed(seed)
}





module.exports.rnHDKey = rnHDKey
