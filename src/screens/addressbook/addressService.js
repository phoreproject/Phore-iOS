import RealmSchemas from '../../../realm/RealmSchemas';

let addressService = {
	save: function(obj) {
		var saved = null;
		console.log('save(): ' + obj);
		RealmSchemas.write(() => {
			saved = RealmSchemas.create('Address', obj, true);
		})
		return saved;
	},

	delete: function(obj) {
		console.log('delete(): ' + obj);
		RealmSchemas.write(() => {
			RealmSchemas.delete(obj);
		})
	},

	search: function(query) {
		let list = RealmSchemas.objects('Address');
		if(query != ''){
			return list.filtered('label CONTAINS "'+ query + '" ')
		}
		return list;
	},

	findAll: function() {
		return RealmSchemas.objects('Address');
	},

	find: function(address){
		let list = RealmSchemas.objects('Address');
		return list.filtered('address = '+ address =' ')[0];
	}
}

module.exports = addressService;
