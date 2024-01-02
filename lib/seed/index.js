const { encryptSEED, decryptSEED } = require("./seed");
const { encryptSEEDCBC, decryptSEEDCBC } = require("./seed-cbc");
const { encryptSEEDCFB, decryptSEEDCFB } = require("./seed-cfb");
const { encryptSEEDECB, decryptSEEDECB } = require("./seed-ecb");
const { encryptSEEDOFB, decryptSEEDOFB } = require("./seed-ofb");

module.exports = {
  encryptSEED, decryptSEED,
  encryptSEEDCBC, decryptSEEDCBC,
  encryptSEEDCFB, decryptSEEDCFB,
  encryptSEEDECB, decryptSEEDECB,
  encryptSEEDOFB, decryptSEEDOFB
};
