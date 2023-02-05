// Bitcoin Improvement Proposal 32 (BIP32) is a wallet standard
// that describes how to derive private and public keys of a wallet
//  from a binary master seed (m) and an ordered set of indices.

// Wallets that are BIP32 compliant are called Hierarchical Deterministic (HD) wallets.

// BIP32 was mainly designed with a goal to create a tree of key pairs
//  utilising  single seed only and deriving wallet structure based on these key pairs.
//   BIP32 compliant HD wallets offer several advantages in terms of backup, security , portability etc.
const { HDKey } = require("ethereum-cryptography/hdkey");

const { bytesToHex, hexToBytes } = require("ethereum-cryptography/utils");

seed = hexToBytes(
  "aba95e0851419e1e67a4d9c47017ce85117115fe0c0dc266f6f000d44e1d7f8c0618df2e127f51538ef62d389c1ffa4ee0b02ba9d9efc376606b37095299a20d"
);

const hdkey1 = HDKey.fromMasterSeed(seed);

console.log(bytesToHex(hdkey1.derive("m/0/0/0").privateKey));

console.log(bytesToHex(hdkey1.derive("m/0/0/0").publicKey));

console.log(bytesToHex(hdkey1.derive("m/0/0/1").privateKey));

console.log(bytesToHex(hdkey1.derive("m/0/0/1").publicKey));

const messageHash =
  "e25bb8f8f0d1598b5f25853f92813cbae8fcab2848c3135e244e796ccfc7edd8";

const sig = hdkey1.sign(hexToBytes(messageHash));

console.log(hdkey1.verify(hexToBytes(messageHash), sig));
