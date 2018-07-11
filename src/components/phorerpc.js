const url = 'https://rpc.phore.io/rpc';
const options = {
	method: 'POST',
	headers: {'content type': 'application/json'}
}

// const datastring = `{"jsonrpc":"2.0","id":"estimateFee","method":"estimatefee","params":[${params}]}`

const sendRawTransaction1 = function(params) {

	const body = `{"jsonrpc":"2.0","id":"sendrawtransaction","method":"sendrawtransaction","params":[${params}]}`
	let options = options

	return fetch(url, options, body).then(response => response.json()).then((responseJSON) => {return JSON.parse(body).result})



}

const sendRawTransaction = function(params) {

	const datastring = `body: {"jsonrpc":"2.0","id":"sendrawtransaction","method":"sendrawtransaction","params":[${params}]}`
	let options = options

	return fetch(url, options, datastring).then(response => response.json()).then(data => console.log(data))

}

module.exports.sendRawTransaction = sendRawTransaction;