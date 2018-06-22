import Realm from 'realm';

const AddressSchema = {
	name: 'Address',
	primaryKey: 'address',
	properties: {
		address: 'string',
		label: 'string'
	}
}

// Initialize a Realm with models

let realmSchema = new Realm({schema: [AddressSchema]});

export default realmSchema;