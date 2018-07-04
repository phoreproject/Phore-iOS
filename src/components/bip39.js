import bip39 from 'react-native-bip39';

// const generateMnemonic = function() {
	
// 		var mcode = JSON.stringify(bip39.generateMnemonic() + bip39.generateMnemonic());
// 		return mcode

	
// }

const generateMnemonic = async () => {
  try {
    return await bip39.generateMnemonic(256) // default to 128
  } catch(e) {
    return false
  }
}



const generateSeedHex = function(mcode, password) {
	var seedHex = bip39.mnemonicToSeedHex(mcode, password);
	return seedHex
}



const generateSeed = function(mcode, password) {
	var seed = bip39.mnemonicToSeed(mcode, password);
	return seed
}

module.exports.generateMnemonic = generateMnemonic;
module.exports.generateSeedHex = generateSeedHex;
module.exports.generateSeed = generateSeed;