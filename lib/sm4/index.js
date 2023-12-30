const { encryptSM4, decryptSM4 } = require("./sm4");
const { encryptSM4CBC, decryptSM4CBC } = require("./sm4-cbc");
const { encryptSM4CFB, decryptSM4CFB } = require("./sm4-cfb");
const { encryptSM4CTR, decryptSM4CTR } = require("./sm4-ctr");
const { encryptSM4ECB, decryptSM4ECB } = require("./sm4-ecb");
const { encryptSM4OFB, decryptSM4OFB } = require("./sm4-ofb");

module.exports = {
  encryptSM4, decryptSM4,
  encryptSM4CBC, decryptSM4CBC,
  encryptSM4CFB, decryptSM4CFB,
  encryptSM4CTR, decryptSM4CTR,
  encryptSM4ECB, decryptSM4ECB,
  encryptSM4OFB, decryptSM4OFB
};
