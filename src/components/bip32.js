import "../../shim";

let Buffer = require('safe-buffer').Buffer
var bs58check = require('bs58check')
let crypto = require('react-native-crypto')
let typeforce = require('typeforce')
let ecc = require('tiny-secp256k1')

let UINT256_TYPE = typeforce.BufferN(32)

function BIP32 (d, Q, chainCode, network) {
  typeforce(NETWORK_TYPE, network)

  this.__d = d || null
  this.__Q = Q || null

  this.chainCode = chainCode
  this.depth = 0
  this.index = 0
  this.network = network
  this.parentFingerprint = 0x00000000
}

// Private === not neutered
// Public === neutered
BIP32.prototype.isNeutered = function () {
  return this.__d === null
}

BIP32.prototype.neutered = function () {
  let neutered = fromPublicKey(this.publicKey, this.chainCode, this.network)
  neutered.depth = this.depth
  neutered.index = this.index
  neutered.parentFingerprint = this.parentFingerprint
  return neutered
}

BIP32.prototype.toBase58 = function () {
  let network = this.network
  let version = (!this.isNeutered()) ? network.bip32.private : network.bip32.public
  let buffer = Buffer.allocUnsafe(78)

  // 4 bytes: version bytes
  buffer.writeUInt32BE(version, 0)

  // 1 byte: depth: 0x00 for master nodes, 0x01 for level-1 descendants, ....
  buffer.writeUInt8(this.depth, 4)

  // 4 bytes: the fingerprint of the parent's key (0x00000000 if master key)
  buffer.writeUInt32BE(this.parentFingerprint, 5)

  // 4 bytes: child number. This is the number i in xi = xpar/i, with xi the key being serialized.
  // This is encoded in big endian. (0x00000000 if master key)
  buffer.writeUInt32BE(this.index, 9)

  // 32 bytes: the chain code
  this.chainCode.copy(buffer, 13)

  // 33 bytes: the public key or private key data
  if (!this.isNeutered()) {
    // 0x00 + k for private keys
    buffer.writeUInt8(0, 45)
    this.privateKey.copy(buffer, 46)

  // 33 bytes: the public key
  } else {
    // X9.62 encoding for public keys
    this.publicKey.copy(buffer, 45)
  }

  return bs58check.encode(buffer)
}

function fromBase58 (string, network) {
  let buffer = bs58check.decode(string)
  if (buffer.length !== 78) throw new TypeError('Invalid buffer length')
  network = network || BITCOIN

  // 4 bytes: version bytes
  let version = buffer.readUInt32BE(0)
  if (version !== network.bip32.private &&
    version !== network.bip32.public) throw new TypeError('Invalid network version')

  // 1 byte: depth: 0x00 for master nodes, 0x01 for level-1 descendants, ...
  let depth = buffer[4]

  // 4 bytes: the fingerprint of the parent's key (0x00000000 if master key)
  let parentFingerprint = buffer.readUInt32BE(5)
  if (depth === 0) {
    if (parentFingerprint !== 0x00000000) throw new TypeError('Invalid parent fingerprint')
  }

  // 4 bytes: child number. This is the number i in xi = xpar/i, with xi the key being serialized.
  // This is encoded in MSB order. (0x00000000 if master key)
  let index = buffer.readUInt32BE(9)
  if (depth === 0 && index !== 0) throw new TypeError('Invalid index')

  // 32 bytes: the chain code
  let chainCode = buffer.slice(13, 45)
  let hd

  // 33 bytes: private key data (0x00 + k)
  if (version === network.bip32.private) {
    if (buffer.readUInt8(45) !== 0x00) throw new TypeError('Invalid private key')
    let k = buffer.slice(46, 78)

    hd = fromPrivateKey(k, chainCode, network)

  // 33 bytes: public key data (0x02 + X or 0x03 + X)
  } else {
    let X = buffer.slice(45, 78)

    hd = fromPublicKey(X, chainCode, network)
  }

  hd.depth = depth
  hd.index = index
  hd.parentFingerprint = parentFingerprint
  return hd
}

function fromPrivateKey (privateKey, chainCode, network) {
  typeforce({
    privateKey: UINT256_TYPE,
    chainCode: UINT256_TYPE
  }, { privateKey, chainCode })
  network = network || BITCOIN

  if (!ecc.isPrivate(privateKey)) throw new TypeError('Private key not in range [1, n)')
  return new BIP32(privateKey, null, chainCode, network)
}

function fromPublicKey (publicKey, chainCode, network) {
  typeforce({
    publicKey: typeforce.BufferN(33),
    chainCode: UINT256_TYPE
  }, { publicKey, chainCode })
  network = network || BITCOIN

  // verify the X coordinate is a point on the curve
  if (!ecc.isPoint(publicKey)) throw new TypeError('Point is not on the curve')
  return new BIP32(null, publicKey, chainCode, network)
}

function fromSeed (seed, network) {
  typeforce(typeforce.Buffer, seed)
  if (seed.length < 16) throw new TypeError('Seed should be at least 128 bits')
  if (seed.length > 64) throw new TypeError('Seed should be at most 512 bits')
  network = network || BITCOIN

  let I = crypto.hmacSHA512('Bitcoin seed', seed)
  let IL = I.slice(0, 32)
  let IR = I.slice(32)

  return fromPrivateKey(IL, IR, network)
}

module.exports = {
  fromBase58,
  fromPrivateKey,
  fromPublicKey,
  fromSeed
}



