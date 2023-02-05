// Bitcoin Improvement Proposal 39 (BIP39) is a wallet standard that lays
// out how mnemonic seed phrases are to be generated for the creation of deterministic wallets.

const {
  generateMnemonic,
  mnemonicToSeedSync,
  mnemonicToEntropy,
} = require("ethereum-cryptography/bip39");

const { wordlist } = require("ethereum-cryptography/bip39/wordlists/english");

const { bytesToHex, hexToBytes } = require("ethereum-cryptography/utils");

console.log(generateMnemonic(wordlist));

console.log(
  "Entropy",
  bytesToHex(mnemonicToEntropy(generateMnemonic(wordlist), wordlist))
);

console.log(
  "Master Seed",
  bytesToHex(mnemonicToSeedSync(generateMnemonic(wordlist)))
);
