const SQLite = require('react-native-sqlite-storage');

const okCallback = () => {
	console.log('okCallback');
};

const errorCallback = (e) => {
	console.log('errorCallback', e);
};

const preloadPhoreDb = () => {
	return SQLite.openDatabase({name: 'phoreDB', createFromLocation: 'default'}, okCallback, errorCallback); //or location
};


//return and array of addresses with labels

const getAddressData = (queryObj) => {
	const db = preloadPhoreDb();
	return new Promise((resolve, reject) => {		
		db.transaction((tx) => {
			tx.executeSql(queryObj.getSql(), [], (tx, results) => {
				// tx.executeSql("SELECT label, address FROM addresses WHERE id=?", [this.state.id], (tx, results) => { 
					console.log('Query returned for: ', queryObj.getSql());

					const rows = results.rows.raw();

					resolve(rows);


			})
		})
})
}

//insert address data into addresses

const putAddressData = (label, address) => {
	const db = preloadPhoreDb();
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql("INSERT INTO addresses (label, address) VALUES (?, ?)", [label, address], (tx, results) => {
				console.log('Put new address with label: ' + label + ' and address: ' + address);
				const rows = results.rows.raw();
				resolve(rows);
			})
		})
	})
}

export { preloadPhoreDb, getAddressData, putAddressData };