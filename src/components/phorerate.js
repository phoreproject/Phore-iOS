import * as _ from 'underscore'

const getPhoreBalance = function(address) {

	return fetch(`https://chainz.cryptoid.info/phr/api.dws?q=getbalance&a=${address}`).then(function(response) { return response.json()});
}

const getPhoreRate = async function(fc) {
	let tickerjsondata = await fetch('https://api.coinmarketcap.com/v1/ticker/phore/').then(response => response.json())
	
	let ratesjsondata = await fetch('https://bitpay.com/rates').then(response => response.json()).then(data => data.data)
	
	let phorebtcbody = tickerjsondata[0].price_btc

	let fiatfiltered = _.where(ratesjsondata, {code: fc})

	let fiatrate = fiatfiltered[0].rate
	
	let phore2fiat = phorebtcbody * fiatrate
	
	
	

	return phore2fiat
}

module.exports.getPhoreBalance = getPhoreBalance
module.exports.getPhoreRate = getPhoreRate