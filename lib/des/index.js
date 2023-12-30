const { encryptDESCBC, decryptDESCBC } = require("./des-cbc");
const { encryptDESCFB, decryptDESCFB } = require("./des-cfb");
const { encryptDESCFB1, decryptDESCFB1 } = require("./des-cfb1");
const { encryptDESCFB8, decryptDESCFB8 } = require("./des-cfb8");
const { encryptDESECB, decryptDESECB } = require("./des-ecb");
const { encryptDESEDECBC, decryptDESEDECBC } = require("./des-ede-cbc");
const { encryptDESEDECFB, decryptDESEDECFB } = require("./des-ede-cfb");
const { encryptDESEDEECB, decryptDESEDEECB } = require("./des-ede-ecb");
const { encryptDESEDEOFB, decryptDESEDEOFB } = require("./des-ede-ofb");
const { encryptDESEDE, decryptDESEDE } = require("./des-ede");
const { encryptDESEDE3CBC, decryptDESEDE3CBC } = require("./des-ede3-cbc");
const { encryptDESEDE3CFB, decryptDESEDE3CFB } = require("./des-ede3-cfb");
const { encryptDESEDE3CFB1, decryptDESEDE3CFB1 } = require("./des-ede3-cfb1");
const { encryptDESEDE3CFB8, decryptDESEDE3CFB8 } = require("./des-ede3-cfb8");
const { encryptDESEDE3ECB, decryptDESEDE3ECB } = require("./des-ede3-ecb");
const { encryptDESEDE3OFB, decryptDESEDE3OFB } = require("./des-ede3-ofb");
const { encryptDESEDE3, decryptDESEDE3 } = require("./des-ede3");
const { encryptDESOFB, decryptDESOFB } = require("./des-ofb");
const { encryptDES, decryptDES } = require("./des");
const { encryptDES3, decryptDES3 } = require("./des3");
const { encryptDESXCBC, decryptDESXCBC } = require("./desx-cbc");
const { encryptDESX, decryptDESX } = require("./desx");

module.exports = {
  encryptDES, decryptDES,
  encryptDESCBC, decryptDESCBC,
  encryptDESCFB, decryptDESCFB,
  encryptDESCFB1, decryptDESCFB1,
  encryptDESCFB8, decryptDESCFB8,
  encryptDESECB, decryptDESECB,
  encryptDESOFB, decryptDESOFB,
  encryptDESEDE, decryptDESEDE,
  encryptDESEDECBC, decryptDESEDECBC,
  encryptDESEDECFB, decryptDESEDECFB,
  encryptDESEDEECB, decryptDESEDEECB,
  encryptDESEDEOFB, decryptDESEDEOFB,
  encryptDESEDE3, decryptDESEDE3,
  encryptDESEDE3CBC, decryptDESEDE3CBC,
  encryptDESEDE3CFB, decryptDESEDE3CFB,
  encryptDESEDE3CFB1, decryptDESEDE3CFB1,
  encryptDESEDE3CFB8, decryptDESEDE3CFB8,
  encryptDESEDE3ECB, decryptDESEDE3ECB,
  encryptDESEDE3OFB, decryptDESEDE3OFB,
  encryptDES3, decryptDES3,
  encryptDESX, decryptDESX,
  encryptDESXCBC, decryptDESXCBC
};
