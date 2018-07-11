import Realm from 'realm';

class AddressItem {
	static schema = {
		name: 'AddressItem',
		primaryKey: 'address',
		properties: {
			address: 'string',
			label: 'string'
		}
	}

	static get() {
		return Array.from(realm.objects('AddressItem'))
	}
}

export const createAddressItem = (address) => {
	if (getAddress(address.address) !== undefined)
		return;
	realm.write(() => {
		realm.create(AddressItem.schema.name, {
			address: address.address,
			label: address.label,
		});
	});
}

export const getAddress = (address) => {
	const item = realm.objectForPrimaryKey(AddressItem, address);
	return item;
}

export const getAddresses = () => {
	return AddressItem.get();
}

class Currency {
	static schema = {
		name: 'Currency',
		primaryKey: 'code',
		properties: {
			
			code: 'string', //eg USD
			name: 'string'
			// rate: 'string'
		}
	}
	static get() {
		return Array.from(realm.objects('Currency'))
	}
}

export const createPreferredCurrency = (currency) => {
	
	realm.write(() => {
		
		realm.create('Currency', {
			code: currency
		});
	});
}



export const updatePreferredCurrency = (currency) => {
	
	realm.write(() => {
		let updatingCurrency = realm.objects(Currency)[0];
		updatingCurrency.code = currency.code;
		realm.create(Currency.schema.name, {
			code: currency
		});
	});
}

export const getPreferredCurrency = () => {
	const item = realm.objects(Currency)[0];
	return item;
}

export const checkPreferredCurrencyExists = () => {
	let currencyLength = realm.objects(Currency);
	if (currencyLength.length > 0) {
		return true
	}
	else {
		return false
	}
}

class TransactionItem {}

class WalletSeed { 
	static schema = {
		name: 'WalletSeed',
		primaryKey: 'seed',
		properties: {
			
			seed: 'string'
			
		}
	}
	static get() {
		return Array.from(realm.objects('WalletSeed'))
	}
}

export const createWalletSeed= (seed) => {

	realm.write(() => {
		realm.create('WalletSeed', {seed: seed})
	})
	}

export const getWalletSeed = (index) => {

	const seed = Array.from(realm.objects(WalletSeed))[index]['seed'];
	return seed;
	}

class TheWalletSeed { 
	static schema = {
		name: 'TheWalletSeed',
		primaryKey: 'seed',
		properties: {
			
			seed: 'string'
			
		}
	}
	static get() {
		return Array.from(realm.objects('TheWalletSeed'))
	}
}

export const createTheWalletSeed= (seed) => {

	realm.write(() => {
		realm.create('TheWalletSeed', {seed: seed})
	})
	}

export const getTheWalletSeed = (index) => {

	const seed = Array.from(realm.objects(TheWalletSeed))[index]['seed'];
	return seed;
	}

class ReceivingAddress { 
	static schema = {
		name: 'ReceivingAddress',
		primaryKey: 'address',
		properties: {
			
			address: 'string'
			
		}
	}
	static get() {
		return Array.from(realm.objects('ReceivingAddress'))
	}
}

export const createReceivingAddress = (address) => {

	realm.write(() => {
		realm.create('ReceivingAddress', {address: address})
	})
	}

export const getReceivingAddress = (index) => {

	const address = Array.from(realm.objects(ReceivingAddress))[index]['address'];
	return address;
	}

export const checkReceivingAddress = () => {

	const address = Array.from(realm.objects(ReceivingAddress));
	if (address.length > 0) {
		message = true
	}
	else {
		message = false
	}
	return message;
	}

class HDMaster { 
	static schema = {
		name: 'HDMaster',
		primaryKey: 'key',
		properties: {
			
			key: 'string'
			
		}
	}
	static get() {
		return Array.from(realm.objects('HDMaster'))
	}
}

export const createHDMaster = (key) => {

	realm.write(() => {
		realm.create('HDMaster', {key: key})
	})
	}

export const getHDMaster = (index) => {

	const key = Array.from(realm.objects(HDMaster))[index]['key'];
	return key;
	}



class KeyPair { 
	static schema = {
		name: 'KeyPair',
		primaryKey: 'keypairiteration',
		properties: {
			
			keypairiteration: 'string'
			
		}
	}
	static get() {
		return Array.from(realm.objects('KeyPair'))
	}
}

export const createKeyPair = (keypairiteration) => {

	realm.write(() => {
		realm.create('KeyPair', {keypairiteration: keypairiteration})
	})
	}

export const getKeyPair = (index) => {

	const keypairiteration = Array.from(realm.objects(KeyPair))[index]['keypairiteration'];
	return keypairiteration;
	}

class WIF { 
	static schema = {
		name: 'WIF',
		primaryKey: 'wifkey',
		properties: {
			
			wifkey: 'string'
			
		}
	}
	static get() {
		return Array.from(realm.objects('WIF'))
	}
}

export const createWIF = (wifkey) => {

	realm.write(() => {
		realm.create('WIF', {wifkey: wifkey})
	})
	}

export const getWIF = (index) => {

	const wifkey = Array.from(realm.objects(WIF))[index]['wifkey'];
	return wifkey;
	}

class PublicKey { 
	static schema = {
		name: 'PublicKey',
		primaryKey: 'pubkey',
		properties: {
			
			pubkey: 'string'
			
		}
	}
	static get() {
		return Array.from(realm.objects('PublicKey'))
	}
}

export const createPublicKey = (pubkey) => {

	realm.write(() => {
		realm.create('PublicKey', {pubkey: pubkey})
	})
	}

export const getPublicKey = (index) => {

	const pubkey = Array.from(realm.objects(PublicKey))[index]['pubkey'];
	return pubkey;
	}


class WalletItem {
	static schema = {
		name: 'WalletItem',
		primaryKey: 'id',
		properties: {
			id: 'string',
			seed: 'data',
			

		}
	}

	static get() {
		return Array.from(realm.objects('AddressItem'))
	}
}

export const createWalletItemShortened = (id, seed) => {

	realm.write(() => {
		realm.create('WalletItem', {id: id, seed: seed})
	})
	}

export const getWalletRecAddress = (index) => {

	const address = Array.from(realm.objects(PublicKey))[index]['recaddress'];
	return address;
	}


class WalletIteration {
	static schema = {
		name: 'WalletIteration',
		primaryKey: 'id',
		properties: {
			id: 'string',
			seed: 'data',
			HDMaster: 'data',
			keypair: 'data',
			WIF: 'string',
			pubkey: 'string',
			recaddress: 'string'
			

		}
	}

	static get() {
		return Array.from(realm.objects('WalletIteration'))
	}
}

export const createWalletIteration = (id, seed, hdmaster, keypair, wif, pubkey, recaddress) => {

	realm.write(() => {
		realm.create('WalletIteration', {id: id, seed: seed, HDMaster: hdmaster, keypair: keypair, WIF: wif, pubkey: pubkey, recaddress: recaddress})
	})
	}

export const getWalletIterationRecAddress = (index) => {

	const address = Array.from(realm.objects(PublicKey))[index]['recaddress'];
	return address;
	}


class Xpub {}

class Xpriv {}

class WalletMaster {
	static schema = {
		name: 'WalletMaster',
		primaryKey: 'id',
		properties: {
			id: 'string',
			hdmaster: 'data',
			

		}
	}

	static get() {
		return Array.from(realm.objects('WalletMaster'))
	}
}

export const createWalletMaster = (id, hdmaster) => {

	realm.write(() => {
		realm.create('WalletMaster', {id: id, hdmaster: hdmaster})
	})
	}

// Initialize a Realm with models

export const realm = new Realm({
	schema: [
		AddressItem,
		Currency,
		ReceivingAddress,
		HDMaster,
		KeyPair,
		WIF,
		PublicKey,
		WalletSeed,
		WalletItem,
		TheWalletSeed,
		WalletIteration,
		WalletMaster
		
		],
	schemaVersion: 12
	}
);