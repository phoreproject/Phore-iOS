
var WIF = "Kxthj3A9VDrqYPpUWQ93sdaAAXDhZSmEEvSvddJxgzEKtcVS4RyM";
var publicKey = "031ad4979a41db45377a2ed1d16063c4fa5b41e30c66a24a3ddc039d4213cbcb31";
var xpub = "xpub661MyMwAqRbcGNAauxKGaXRfXjerNWtPAxwfJSf3t35cLYUjkzw66ogMUvQ6xxWDYbMUagmBm96TYXp7Q4p1hg3ssu4n91rSF5A3uW5Ntzy";

var addresses = [{id: 0, label: 'own', address: 'PCsoSCx3nF6FAxk8duewpgRT48pPzB5YC9'}];

var mnemonic = 'skill foil fashion head blouse donate dirt scheme define puppy rebel mimicadmit deposit vendor twin they smart stereo hat general pledge rent foster';

var password = "templatePhoreW";

var HDMaster = {"keyPair":{"d":{"0":57470857,"1":49222359,"2":25125063,"3":18314411,"4":11687481,"5":16047485,"6":23465197,"7":23416743,"8":625612,"9":1729196,"t":10,"s":0},"compressed":true,"network":{"messagePrefix":"\u0018DarkNet Signed Message:\n","bip32":{"public":36513075,"private":87393172},"pubKeyHash":55,"scriptHash":13,"wif":128}},"chainCode":{"type":"Buffer","data":[183,25,244,141,37,254,82,137,193,240,57,68,198,96,105,101,194,56,71,137,111,82,190,95,23,196,134,30,41,190,2,119]},"depth":0,"index":0,"parentFingerprint":0}

var seed = "��� �;�3���@�������(BG��9��ځ��z�/Y�=���ὼ�:#���++�H�{@�M1";

var recaddress = 'PCsoSCx3nF6FAxk8duewpgRT48pPzB5YC9';

var transactions = [{type: 'receive', txId: 'ced189f026de1932db96d69af3fc8a7cb04a5f3b41dde312fb609d014580856c', amt: '300000000', date: '2018-06-26 03:28', outn: 1}];

var xpriv = 'xprv9s21ZrQH143K3t67ovnGDPUvyhpMy4AXok24W4FSKhYdTk9bDTcqZ1MsdeoT626PYdRAx26LvBdRxAu687puV3thUUB3LoiVMjRFzh58kXj';

module.exports.WIF = WIF;
module.exports.xpub = xpub;
module.exports.addresses = addresses;
module.exports.mnemonic = mnemonic;
module.exports.password = password;
module.exports.recaddress = recaddress;
module.exports.transactions = transactions;
module.exports.xpriv = xpriv;