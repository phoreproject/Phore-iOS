import Realm from 'realm';

/*export const ADDRESSBOOK_SCHEMA = "AddressList";*/
export const ADDRESS_SCHEMA = "Address";

export const AddressSchema = {
	name: ADDRESS_SCHEMA,
	primaryKey: 'address',
	properties: {
		
		label: { type: 'string', indexed: true },
		address: { type: 'string', indexed: true}, // primary key
	}
};




const databaseOptions = {
	path: 'phoreApp.realm',
	schema: [AddressSchema],
	schemaVersion: 0, //optional
}

export const insertNewAddress = newAddress => new Promise ((resolve, reject) => {
	Realm.open(databaseOptions).then(realm => {

		realm.write(() => {
			realm.create(ADDRESS_SCHEMA, newAddress);
			resolve(newAddress)
		})

	}).catch((error) => reject(error));

});

export const updateAddress = Address => new Promise ((resolve, reject) => {
	Realm.open(databaseOptions).then(realm => {

		realm.write(() => {
			let updatingAddress = realm.objectForPrimaryKey(ADDRESS_SCHEMA, Address.address);
			updatingAddress.label = Address.label;
			resolve();
		})

	}).catch((error) => reject(error));

});

export const deleteAddress = AddressAddress => new Promise ((resolve, reject) => {
	Realm.open(databaseOptions).then(realm => {

		realm.write(() => {
			let deletingAddress = realm.objectForPrimaryKey(ADDRESS_SCHEMA, Address.address);
			realm.delete(deletingAddress)
			resolve();
		})

	}).catch((error) => reject(error));

});

export const getAllAddresses = () => new Promise ((resolve, reject) => {
	Realm.open(databaseOptions).then(realm => {

		let allAddresses = realm.objects(ADDRESS_SCHEMA);
			resolve(allAddresses);
		

	}).catch((error) => reject(error));

});

export default new Realm(databaseOptions);