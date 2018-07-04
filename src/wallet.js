import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

import '../shim.js';

const bitcoin = require('bitcoinjs-lib');

let phore = bitcoin.networks.phore;

let txb = new bitcoin.TransactionBuilder(phore);

const generateHDMaster = function(seed) {
	var HDMaster = bitcoin.HDNode.fromSeedBuffer(seed, phore);
	return HDMaster
}

const generateKeyPairFromMaster = function(HDMaster, iteration) {
	var key = HDMaster.derivePath(`m/${iteration}`)
	return key

}

const getWIFfromKeyPair = function(keyPairIteration) {
	var WIF = keyPairIteration.keyPair.toWIF();
	return WIF
}

const getPubKeyFromKeyPair = function(keyPairIteration) {
	var pubKey = keyPairIteration.getPublicKeyBuffer().toString('hex')
	return pubKey
}

const getAddressFromKeyPair = function(keyPairIteration) {
	var address = keyPairIteration.getAddress();
	return address
}

module.exports.generateHDMaster = generateHDMaster;
module.exports.generateKeyPairFromMaster = generateKeyPairFromMaster;
module.exports.getWIFfromKeyPair = getWIFfromKeyPair;
module.exports.getPubKeyFromKeyPair = getPubKeyFromKeyPair;
module.exports.getAddressFromKeyPair = getAddressFromKeyPair;

