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


class Xpub {}

class Xpriv {}

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
		WalletSeed
		],
	schemaVersion: 7
	}
);