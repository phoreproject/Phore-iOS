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

// Initialize a Realm with models

export const realm = new Realm({
	schema: [
		AddressItem
	]
})