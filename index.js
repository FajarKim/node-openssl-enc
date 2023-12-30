const {
  encryptAES128, decryptAES128,
  encryptAES128CBC, decryptAES128CBC,
  encryptAES128CCM, decryptAES128CCM,
  encryptAES128CFB, decryptAES128CFB,
  encryptAES128CFB1, decryptAES128CFB1,
  encryptAES128CFB8, decryptAES128CFB8,
  encryptAES128CTR, decryptAES128CTR,
  encryptAES128ECB, decryptAES128ECB,
  encryptAES128GCM, decryptAES128GCM,
  encryptAES128OCB, decryptAES128OCB,
  encryptAES128OFB, decryptAES128OFB,
  encryptAES192, decryptAES192,
  encryptAES192CBC, decryptAES192CBC,
  encryptAES192CCM, decryptAES192CCM,
  encryptAES192CFB, decryptAES192CFB,
  encryptAES192CFB1, decryptAES192CFB1,
  encryptAES192CFB8, decryptAES192CFB8,
  encryptAES192CTR, decryptAES192CTR,
  encryptAES192ECB, decryptAES192ECB,
  encryptAES192GCM, decryptAES192GCM,
  encryptAES192OCB, decryptAES192OCB,
  encryptAES192OFB, decryptAES192OFB,
  encryptAES256, decryptAES256,
  encryptAES256CBC, decryptAES256CBC,
  encryptAES256CCM, decryptAES256CCM,
  encryptAES256CFB, decryptAES256CFB,
  encryptAES256CFB1, decryptAES256CFB1,
  encryptAES256CFB8, decryptAES256CFB8,
  encryptAES256CTR, decryptAES256CTR,
  encryptAES256ECB, decryptAES256ECB,
  encryptAES256GCM, decryptAES256GCM,
  encryptAES256OCB, decryptAES256OCB,
  encryptAES256OFB, decryptAES256OFB
} = require("./lib/aes/index");
const {
  encryptARIA128, decryptARIA128,
  encryptARIA128CBC, decryptARIA128CBC,
  encryptARIA128CCM, decryptARIA128CCM,
  encryptARIA128CFB, decryptARIA128CFB,
  encryptARIA128CFB1, decryptARIA128CFB1,
  encryptARIA128CFB8, decryptARIA128CFB8,
  encryptARIA128CTR, decryptARIA128CTR,
  encryptARIA128ECB, decryptARIA128ECB,
  encryptARIA128GCM, decryptARIA128GCM,
  encryptARIA128OFB, decryptARIA128OFB,
  encryptARIA192, decryptARIA192,
  encryptARIA192CBC, decryptARIA192CBC,
  encryptARIA192CCM, decryptARIA192CCM,
  encryptARIA192CFB, decryptARIA192CFB,
  encryptARIA192CFB1, decryptARIA192CFB1,
  encryptARIA192CFB8, decryptARIA192CFB8,
  encryptARIA192CTR, decryptARIA192CTR,
  encryptARIA192ECB, decryptARIA192ECB,
  encryptARIA192GCM, decryptARIA192GCM,
  encryptARIA192OFB, decryptARIA192OFB,
  encryptARIA256, decryptARIA256,
  encryptARIA256CBC, decryptARIA256CBC,
  encryptARIA256CCM, decryptARIA256CCM,
  encryptARIA256CFB, decryptARIA256CFB,
  encryptARIA256CFB1, decryptARIA256CFB1,
  encryptARIA256CFB8, decryptARIA256CFB8,
  encryptARIA256CTR, decryptARIA256CTR,
  encryptARIA256ECB, decryptARIA256ECB,
  encryptARIA256GCM, decryptARIA256GCM,
  encryptARIA256OFB, decryptARIA256OFB
} = require("./lib/aria/index");
const {
  encryptCAMELLIA128, decryptCAMELLIA128,
  encryptCAMELLIA128CBC, decryptCAMELLIA128CBC,
  encryptCAMELLIA128CFB, decryptCAMELLIA128CFB,
  encryptCAMELLIA128CFB1, decryptCAMELLIA128CFB1,
  encryptCAMELLIA128CFB8, decryptCAMELLIA128CFB8,
  encryptCAMELLIA128CTR, decryptCAMELLIA128CTR,
  encryptCAMELLIA128ECB, decryptCAMELLIA128ECB,
  encryptCAMELLIA128OFB, decryptCAMELLIA128OFB,
  encryptCAMELLIA192, decryptCAMELLIA192,
  encryptCAMELLIA192CBC, decryptCAMELLIA192CBC,
  encryptCAMELLIA192CFB, decryptCAMELLIA192CFB,
  encryptCAMELLIA192CFB1, decryptCAMELLIA192CFB1,
  encryptCAMELLIA192CFB8, decryptCAMELLIA192CFB8,
  encryptCAMELLIA192CTR, decryptCAMELLIA192CTR,
  encryptCAMELLIA192ECB, decryptCAMELLIA192ECB,
  encryptCAMELLIA192OFB, decryptCAMELLIA192OFB,
  encryptCAMELLIA256, decryptCAMELLIA256,
  encryptCAMELLIA256CBC, decryptCAMELLIA256CBC,
  encryptCAMELLIA256CFB, decryptCAMELLIA256CFB,
  encryptCAMELLIA256CFB1, decryptCAMELLIA256CFB1,
  encryptCAMELLIA256CFB8, decryptCAMELLIA256CFB8,
  encryptCAMELLIA256CTR, decryptCAMELLIA256CTR,
  encryptCAMELLIA256ECB, decryptCAMELLIA256ECB,
  encryptCAMELLIA256OFB, decryptCAMELLIA256OFB
} = require("./lib/camellia/index");
const {
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
  encryptDESEDE3ECB, decryptDESEDE3ECB,
  encryptDESEDE3CFB, decryptDESEDE3CFB,
  encryptDESEDE3CFB1, decryptDESEDE3CFB1,
  encryptDESEDE3CFB8, decryptDESEDE3CFB8,
  encryptDESEDE3OFB, decryptDESEDE3OFB,
  encryptDES3, decryptDES3,
  encryptDESX, decryptDESX,
  encryptDESXCBC, decryptDESXCBC
} = require("./lib/des/index");
const {
  encryptIDAES128CCM, decryptIDAES128CCM,
  encryptIDAES128GCM, decryptIDAES128GCM,
  encryptIDAES192CCM, decryptIDAES192CCM,
  encryptIDAES192GCM, decryptIDAES192GCM,
  encryptIDAES256CCM, decryptIDAES256CCM,
  encryptIDAES256GCM, decryptIDAES256GCM
} = require("./lib/id/index");
const {
  encryptSM4, decryptSM4,
  encryptSM4CBC, decryptSM4CBC,
  encryptSM4CFB, decryptSM4CFB,
  encryptSM4CTR, decryptSM4CTR,
  encryptSM4ECB, decryptSM4ECB,
  encryptSM4OFB, decryptSM4OFB
} = require("./lib/sm4/index");
const {
  encryptBase64, decryptBase64,
  encryptZlib, decryptZlib
} = require("./lib/special");
const encrypt = require("./lib/encrypt");
const decrypt = require("./lib/decrypt");
const {
  algorithmSupported,
  algorithmUnsupported
} = require("./lib/algorithmList");

module.exports = {
  encrypt, decrypt,
  encryptAES128, decryptAES128,
  encryptAES128CBC, decryptAES128CBC,
  encryptAES128CCM, decryptAES128CCM,
  encryptAES128CFB, decryptAES128CFB,
  encryptAES128CFB1, decryptAES128CFB1,
  encryptAES128CFB8, decryptAES128CFB8,
  encryptAES128CTR, decryptAES128CTR,
  encryptAES128ECB, decryptAES128ECB,
  encryptAES128GCM, decryptAES128GCM,
  encryptAES128OCB, decryptAES128OCB,
  encryptAES128OFB, decryptAES128OFB,
  encryptAES192, decryptAES192,
  encryptAES192CBC, decryptAES192CBC,
  encryptAES192CCM, decryptAES192CCM,
  encryptAES192CFB, decryptAES192CFB,
  encryptAES192CFB1, decryptAES192CFB1,
  encryptAES192CFB8, decryptAES192CFB8,
  encryptAES192CTR, decryptAES192CTR,
  encryptAES192ECB, decryptAES192ECB,
  encryptAES192GCM, decryptAES192GCM,
  encryptAES192OCB, decryptAES192OCB,
  encryptAES192OFB, decryptAES192OFB,
  encryptAES256, decryptAES256,
  encryptAES256CBC, decryptAES256CBC,
  encryptAES256CCM, decryptAES256CCM,
  encryptAES256CFB, decryptAES256CFB,
  encryptAES256CFB1, decryptAES256CFB1,
  encryptAES256CFB8, decryptAES256CFB8,
  encryptAES256CTR, decryptAES256CTR,
  encryptAES256ECB, decryptAES256ECB,
  encryptAES256GCM, decryptAES256GCM,
  encryptAES256OCB, decryptAES256OCB,
  encryptAES256OFB, decryptAES256OFB,
  encryptARIA128, decryptARIA128,
  encryptARIA128CBC, decryptARIA128CBC,
  encryptARIA128CCM, decryptARIA128CCM,
  encryptARIA128CFB, decryptARIA128CFB,
  encryptARIA128CFB1, decryptARIA128CFB1,
  encryptARIA128CFB8, decryptARIA128CFB8,
  encryptARIA128CTR, decryptARIA128CTR,
  encryptARIA128ECB, decryptARIA128ECB,
  encryptARIA128GCM, decryptARIA128GCM,
  encryptARIA128OFB, decryptARIA128OFB,
  encryptARIA192, decryptARIA192,
  encryptARIA192CBC, decryptARIA192CBC,
  encryptARIA192CCM, decryptARIA192CCM,
  encryptARIA192CFB, decryptARIA192CFB,
  encryptARIA192CFB1, decryptARIA192CFB1,
  encryptARIA192CFB8, decryptARIA192CFB8,
  encryptARIA192CTR, decryptARIA192CTR,
  encryptARIA192ECB, decryptARIA192ECB,
  encryptARIA192GCM, decryptARIA192GCM,
  encryptARIA192OFB, decryptARIA192OFB,
  encryptARIA256, decryptARIA256,
  encryptARIA256CBC, decryptARIA256CBC,
  encryptARIA256CCM, decryptARIA256CCM,
  encryptARIA256CFB, decryptARIA256CFB,
  encryptARIA256CFB1, decryptARIA256CFB1,
  encryptARIA256CFB8, decryptARIA256CFB8,
  encryptARIA256CTR, decryptARIA256CTR,
  encryptARIA256ECB, decryptARIA256ECB,
  encryptARIA256GCM, decryptARIA256GCM,
  encryptARIA256OFB, decryptARIA256OFB,
  encryptCAMELLIA128, decryptCAMELLIA128,
  encryptCAMELLIA128CBC, decryptCAMELLIA128CBC,
  encryptCAMELLIA128CFB, decryptCAMELLIA128CFB,
  encryptCAMELLIA128CFB1, decryptCAMELLIA128CFB1,
  encryptCAMELLIA128CFB8, decryptCAMELLIA128CFB8,
  encryptCAMELLIA128CTR, decryptCAMELLIA128CTR,
  encryptCAMELLIA128ECB, decryptCAMELLIA128ECB,
  encryptCAMELLIA128OFB, decryptCAMELLIA128OFB,
  encryptCAMELLIA192, decryptCAMELLIA192,
  encryptCAMELLIA192CBC, decryptCAMELLIA192CBC,
  encryptCAMELLIA192CFB, decryptCAMELLIA192CFB,
  encryptCAMELLIA192CFB1, decryptCAMELLIA192CFB1,
  encryptCAMELLIA192CFB8, decryptCAMELLIA192CFB8,
  encryptCAMELLIA192CTR, decryptCAMELLIA192CTR,
  encryptCAMELLIA192ECB, decryptCAMELLIA192ECB,
  encryptCAMELLIA192OFB, decryptCAMELLIA192OFB,
  encryptCAMELLIA256, decryptCAMELLIA256,
  encryptCAMELLIA256CBC, decryptCAMELLIA256CBC,
  encryptCAMELLIA256CFB, decryptCAMELLIA256CFB,
  encryptCAMELLIA256CFB1, decryptCAMELLIA256CFB1,
  encryptCAMELLIA256CFB8, decryptCAMELLIA256CFB8,
  encryptCAMELLIA256CTR, decryptCAMELLIA256CTR,
  encryptCAMELLIA256ECB, decryptCAMELLIA256ECB,
  encryptCAMELLIA256OFB, decryptCAMELLIA256OFB,
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
  encryptDESXCBC, decryptDESXCBC,
  encryptIDAES128CCM, decryptIDAES128CCM,
  encryptIDAES128GCM, decryptIDAES128GCM,
  encryptIDAES192CCM, decryptIDAES192CCM,
  encryptIDAES192GCM, decryptIDAES192GCM,
  encryptIDAES256CCM, decryptIDAES256CCM,
  encryptIDAES256GCM, decryptIDAES256GCM,
  encryptSM4, decryptSM4,
  encryptSM4CBC, decryptSM4CBC,
  encryptSM4CFB, decryptSM4CFB,
  encryptSM4CTR, decryptSM4CTR,
  encryptSM4ECB, decryptSM4ECB,
  encryptSM4OFB, decryptSM4OFB,
  encryptBase64, decryptBase64,
  encryptZlib, decryptZlib,
  algorithmSupported, algorithmUnsupported
};
