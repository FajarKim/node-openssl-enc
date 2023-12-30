const {
  algorithmSupported,
  algorithmUnsupported
} = require("./algorithmList");
const {
  decryptAES128,
  decryptAES128CBC,
  decryptAES128CCM,
  decryptAES128CFB,
  decryptAES128CFB1,
  decryptAES128CFB8,
  decryptAES128CTR,
  decryptAES128ECB,
  decryptAES128GCM,
  decryptAES128OCB,
  decryptAES128OFB,
  decryptAES192,
  decryptAES192CBC,
  decryptAES192CCM,
  decryptAES192CFB,
  decryptAES192CFB1,
  decryptAES192CFB8,
  decryptAES192CTR,
  decryptAES192ECB,
  decryptAES192GCM,
  decryptAES192OCB,
  decryptAES192OFB,
  decryptAES256,
  decryptAES256CBC,
  decryptAES256CCM,
  decryptAES256CFB,
  decryptAES256CFB1,
  decryptAES256CFB8,
  decryptAES256CTR,
  decryptAES256ECB,
  decryptAES256GCM,
  decryptAES256OCB,
  decryptAES256OFB
} = require("./aes/index");
const {
  decryptARIA128,
  decryptARIA128CBC,
  decryptARIA128CCM,
  decryptARIA128CFB,
  decryptARIA128CFB1,
  decryptARIA128CFB8,
  decryptARIA128CTR,
  decryptARIA128ECB,
  decryptARIA128GCM,
  decryptARIA128OFB,
  decryptARIA192,
  decryptARIA192CBC,
  decryptARIA192CCM,
  decryptARIA192CFB,
  decryptARIA192CFB1,
  decryptARIA192CFB8,
  decryptARIA192CTR,
  decryptARIA192ECB,
  decryptARIA192GCM,
  decryptARIA192OFB,
  decryptARIA256,
  decryptARIA256CBC,
  decryptARIA256CCM,
  decryptARIA256CFB,
  decryptARIA256CFB1,
  decryptARIA256CFB8,
  decryptARIA256CTR,
  decryptARIA256ECB,
  decryptARIA256GCM,
  decryptARIA256OFB
} = require("./aria/index");
const {
  decryptCAMELLIA128,
  decryptCAMELLIA128CBC,
  decryptCAMELLIA128CFB,
  decryptCAMELLIA128CFB1,
  decryptCAMELLIA128CFB8,
  decryptCAMELLIA128CTR,
  decryptCAMELLIA128ECB,
  decryptCAMELLIA128OFB,
  decryptCAMELLIA192,
  decryptCAMELLIA192CBC,
  decryptCAMELLIA192CFB,
  decryptCAMELLIA192CFB1,
  decryptCAMELLIA192CFB8,
  decryptCAMELLIA192CTR,
  decryptCAMELLIA192ECB,
  decryptCAMELLIA192OFB,
  decryptCAMELLIA256,
  decryptCAMELLIA256CBC,
  decryptCAMELLIA256CFB,
  decryptCAMELLIA256CFB1,
  decryptCAMELLIA256CFB8,
  decryptCAMELLIA256CTR,
  decryptCAMELLIA256ECB,
  decryptCAMELLIA256OFB
} = require("./camellia/index");
const {
  decryptDES,
  decryptDESCBC,
  decryptDESCFB,
  decryptDESCFB1,
  decryptDESCFB8,
  decryptDESECB,
  decryptDESOFB,
  decryptDESEDE,
  decryptDESEDECBC,
  decryptDESEDECFB,
  decryptDESEDEECB,
  decryptDESEDEOFB,
  decryptDESEDE3,
  decryptDESEDE3CBC,
  decryptDESEDE3CFB,
  decryptDESEDE3CFB1,
  decryptDESEDE3CFB8,
  decryptDESEDE3ECB,
  decryptDESEDE3OFB,
  decryptDES3,
  decryptDESX,
  decryptDESXCBC
} = require("./des/index");
const {
  decryptIDAES128CCM,
  decryptIDAES128GCM,
  decryptIDAES192CCM,
  decryptIDAES192GCM,
  decryptIDAES256CCM,
  decryptIDAES256GCM
} = require("./id/index");
const {
  decryptSM4,
  decryptSM4CBC,
  decryptSM4CFB,
  decryptSM4CTR,
  decryptSM4ECB,
  decryptSM4OFB
} = require("./sm4/index");

/**
 * decrypts data using the specified algorithm.
 *
 * @param {string} algorithm - The decryption algorithm.
 * @param {string} data - The data to be decrypted.
 * @param {string} password - The password used for key derivation.
 * @param {string|null} extra - Additional options for decryption (e.g., 'base64', 'binary', 'hex', or 'zlib').
 * @returns {Buffer|string} - The decrypted data.
 */

function decrypt(algorithm, data, password, extra = null) {
  var algorithm = algorithm.toLowerCase();
  if (algorithmUnsupported.includes(algorithm)) {
    console.error(`Error: \`${algorithm}' is not supported in this tool`);
    process.exit(1)
  } else if (! algorithmSupported.includes(algorithm)) {
    console.error(`Error: \`${algorithm}' is not cipher`);
    process.exit(1)
  }

  /*****************************************************
   *                    AES-128                        *
   *****************************************************/
  if (algorithm === "aes128") {
    return decryptAES128(data, password, extra);
  } else if (algorithm === "aes-128-cbc") {
    return decryptAES128CBC(data, password, extra);
  } else if (algorithm === "aes-128-ccm") {
    return decryptAES128CCM(data, password, extra);
  } else if (algorithm === "aes-128-cfb") {
    return decryptAES128CFB(data, password, extra);
  } else if (algorithm === "aes-128-cfb1") {
    return decryptAES128CFB1(data, password, extra);
  } else if (algorithm === "aes-128-cfb8") {
    return decryptAES128CFB8(data, password, extra);
  } else if (algorithm === "aes-128-ctr") {
    return decryptAES128CTR(data, password, extra);
  } else if (algorithm === "aes-128-ecb") {
    return decryptAES128ECB(data, password, extra);
  } else if (algorithm === "aes-128-gcm") {
    return decryptAES128GCM(data, password, extra);
  } else if (algorithm === "aes-128-ocb") {
    return decryptAES128OCB(data, password, extra);
  } else if (algorithm === "aes-128-ofb") {
    return decryptAES128OFB(data, password, extra);
  }

  /*****************************************************
   *                    AES-192                        *
   *****************************************************/
  if (algorithm === "aes192") {
    return decryptAES192(data, password, extra);
  } else if (algorithm === "aes-192-cbc") {
    return decryptAES192CBC(data, password, extra);
  } else if (algorithm === "aes-192-ccm") {
    return decryptAES192CCM(data, password, extra);
  } else if (algorithm === "aes-192-cfb") {
    return decryptAES192CFB(data, password, extra);
  } else if (algorithm === "aes-192-cfb1") {
    return decryptAES192CFB1(data, password, extra);
  } else if (algorithm === "aes-192-cfb8") {
    return decryptAES192CFB8(data, password, extra);
  } else if (algorithm === "aes-192-ctr") {
    return decryptAES192CTR(data, password, extra);
  } else if (algorithm === "aes-192-ecb") {
    return decryptAES192ECB(data, password, extra);
  } else if (algorithm === "aes-192-gcm") {
    return decryptAES192GCM(data, password, extra);
  } else if (algorithm === "aes-192-ocb") {
    return decryptAES192OCB(data, password, extra);
  } else if (algorithm === "aes-192-ofb") {
    return decryptAES192OFB(data, password, extra);
  }

  /*****************************************************
   *                    AES-256                        *
   *****************************************************/
  if (algorithm === "aes256") {
    return decryptAES256(data, password, extra);
  } else if (algorithm === "aes-256-cbc") {
    return decryptAES256CBC(data, password, extra);
  } else if (algorithm === "aes-256-ccm") {
    return decryptAES256CCM(data, password, extra);
  } else if (algorithm === "aes-256-cfb") {
    return decryptAES256CFB(data, password, extra);
  } else if (algorithm === "aes-256-cfb1") {
    return decryptAES256CFB1(data, password, extra);
  } else if (algorithm === "aes-256-cfb8") {
    return decryptAES256CFB8(data, password, extra);
  } else if (algorithm === "aes-256-ctr") {
    return decryptAES256CTR(data, password, extra);
  } else if (algorithm === "aes-256-ecb") {
    return decryptAES256ECB(data, password, extra);
  } else if (algorithm === "aes-256-gcm") {
    return decryptAES256GCM(data, password, extra);
  } else if (algorithm === "aes-256-ocb") {
    return decryptAES256OCB(data, password, extra);
  } else if (algorithm === "aes-256-ofb") {
    return decryptAES256OFB(data, password, extra);
  }

  /*****************************************************
   *                    ARIA-128                       *
   *****************************************************/
  if (algorithm === "aria128") {
    return decryptARIA128(data, password, extra);
  } else if (algorithm === "aria-128-cbc") {
    return decryptARIA128CBC(data, password, extra);
  } else if (algorithm === "aria-128-ccm") {
    return decryptARIA128CCM(data, password, extra);
  } else if (algorithm === "aria-128-cfb") {
    return decryptARIA128CFB(data, password, extra);
  } else if (algorithm === "aria-128-cfb1") {
    return decryptARIA128CFB1(data, password, extra);
  } else if (algorithm === "aria-128-cfb8") {
    return decryptARIA128CFB8(data, password, extra);
  } else if (algorithm === "aria-128-ctr") {
    return decryptARIA128CTR(data, password, extra);
  } else if (algorithm === "aria-128-ecb") {
    return decryptARIA128ECB(data, password, extra);
  } else if (algorithm === "aria-128-gcm") {
    return decryptARIA128GCM(data, password, extra);
  } else if (algorithm === "aria-128-ofb") {
    return decryptARIA128OFB(data, password, extra);
  }

  /*****************************************************
   *                    ARIA-192                       *
   *****************************************************/
  if (algorithm === "aria192") {
    return decryptARIA192(data, password, extra);
  } else if (algorithm === "aria-192-cbc") {
    return decryptARIA192CBC(data, password, extra);
  } else if (algorithm === "aria-192-ccm") {
    return decryptARIA192CCM(data, password, extra);
  } else if (algorithm === "aria-192-cfb") {
    return decryptARIA192CFB(data, password, extra);
  } else if (algorithm === "aria-192-cfb1") {
    return decryptARIA192CFB1(data, password, extra);
  } else if (algorithm === "aria-192-cfb8") {
    return decryptARIA192CFB8(data, password, extra);
  } else if (algorithm === "aria-192-ctr") {
    return decryptARIA192CTR(data, password, extra);
  } else if (algorithm === "aria-192-ecb") {
    return decryptARIA192ECB(data, password, extra);
  } else if (algorithm === "aria-192-gcm") {
    return decryptARIA192GCM(data, password, extra);
  } else if (algorithm === "aria-192-ofb") {
    return decryptARIA192OFB(data, password, extra);
  }

  /*****************************************************
   *                    ARIA-256                       *
   *****************************************************/
  if (algorithm === "aria256") {
    return decryptARIA256(data, password, extra);
  } else if (algorithm === "aria-256-cbc") {
    return decryptARIA256CBC(data, password, extra);
  } else if (algorithm === "aria-256-ccm") {
    return decryptARIA256CCM(data, password, extra);
  } else if (algorithm === "aria-256-cfb") {
    return decryptARIA256CFB(data, password, extra);
  } else if (algorithm === "aria-256-cfb1") {
    return decryptARIA256CFB1(data, password, extra);
  } else if (algorithm === "aria-256-cfb8") {
    return decryptARIA256CFB8(data, password, extra);
  } else if (algorithm === "aria-256-ctr") {
    return decryptARIA256CTR(data, password, extra);
  } else if (algorithm === "aria-256-ecb") {
    return decryptARIA256ECB(data, password, extra);
  } else if (algorithm === "aria-256-gcm") {
    return decryptARIA256GCM(data, password, extra);
  } else if (algorithm === "aria-256-ofb") {
    return decryptARIA256OFB(data, password, extra);
  }

  /*****************************************************
   *                  CAMELLIA-128                     *
   *****************************************************/
  if (algorithm === "camellia128") {
    return decryptCAMELLIA128(data, password, extra);
  } else if (algorithm === "camellia-128-cbc") {
    return decryptCAMELLIA128CBC(data, password, extra);
  } else if (algorithm === "camellia-128-cfb") {
    return decryptCAMELLIA128CFB(data, password, extra);
  } else if (algorithm === "camellia-128-cfb1") {
    return decryptCAMELLIA128CFB1(data, password, extra);
  } else if (algorithm === "camellia-128-cfb8") {
    return decryptCAMELLIA128CFB8(data, password, extra);
  } else if (algorithm === "camellia-128-ctr") {
    return decryptCAMELLIA128CTR(data, password, extra);
  } else if (algorithm === "camellia-128-ecb") {
    return decryptCAMELLIA128ECB(data, password, extra);
  } else if (algorithm === "camellia-128-ofb") {
    return decryptCAMELLIA128OFB(data, password, extra);
  }

  /*****************************************************
   *                  CAMELLIA-192                     *
   *****************************************************/
  if (algorithm === "camellia192") {
    return decryptCAMELLIA192(data, password, extra);
  } else if (algorithm === "camellia-192-cbc") {
    return decryptCAMELLIA192CBC(data, password, extra);
  } else if (algorithm === "camellia-192-cfb") {
    return decryptCAMELLIA192CFB(data, password, extra);
  } else if (algorithm === "camellia-192-cfb1") {
    return decryptCAMELLIA192CFB1(data, password, extra);
  } else if (algorithm === "camellia-192-cfb8") {
    return decryptCAMELLIA192CFB8(data, password, extra);
  } else if (algorithm === "camellia-192-ctr") {
    return decryptCAMELLIA192CTR(data, password, extra);
  } else if (algorithm === "camellia-192-ecb") {
    return decryptCAMELLIA192ECB(data, password, extra);
  } else if (algorithm === "camellia-192-ofb") {
    return decryptCAMELLIA192OFB(data, password, extra);
  }

  /*****************************************************
   *                  CAMELLIA-256                     *
   *****************************************************/
  if (algorithm === "camellia256") {
    return decryptCAMELLIA256(data, password, extra);
  } else if (algorithm === "camellia-256-cbc") {
    return decryptCAMELLIA256CBC(data, password, extra);
  } else if (algorithm === "camellia-256-cfb") {
    return decryptCAMELLIA256CFB(data, password, extra);
  } else if (algorithm === "camellia-256-cfb1") {
    return decryptCAMELLIA256CFB1(data, password, extra);
  } else if (algorithm === "camellia-256-cfb8") {
    return decryptCAMELLIA256CFB8(data, password, extra);
  } else if (algorithm === "camellia-256-ctr") {
    return decryptCAMELLIA256CTR(data, password, extra);
  } else if (algorithm === "camellia-256-ecb") {
    return decryptCAMELLIA256ECB(data, password, extra);
  } else if (algorithm === "camellia-256-ofb") {
    return decryptCAMELLIA256OFB(data, password, extra);
  }

  /*****************************************************
   *                      DES                          *
   *****************************************************/
  if (algorithm === "des") {
    return decryptDES(data, password, extra);
  } else if (algorithm === "des-cbc") {
    return decryptDESCBC(data, password, extra);
  } else if (algorithm === "des-cfb") {
    return decryptDESCFB(data, password, extra);
  } else if (algorithm === "des-cfb1") {
    return decryptDESCFB1(data, password, extra);
  } else if (algorithm === "des-cfb8") {
    return decryptDESCFB8(data, password, extra);
  } else if (algorithm === "des-ecb") {
    return decryptDESECB(data, password, extra);
  } else if (algorithm === "des-ofb") {
    return decryptDESOFB(data, password, extra);
  }

  /*****************************************************
   *                    DES-EDE                        *
   *****************************************************/
  if (algorithm === "des-ede") {
    return decryptDESEDE(data, password, extra);
  } else if (algorithm === "des-ede-cbc") {
    return decryptDESEDECBC(data, password, extra);
  } else if (algorithm === "des-ede-cfb") {
    return decryptDESEDECFB(data, password, extra);
  } else if (algorithm === "des-ede-ecb") {
    return decryptDESEDEECB(data, password, extra);
  } else if (algorithm === "des-ede-ofb") {
    return decryptDESEDEOFB(data, password, extra);
  }

  /*****************************************************
   *                   DES-EDE3                        *
   *****************************************************/
  if (algorithm === "des-ede3") {
    return decryptDESEDE3(data, password, extra);
  } else if (algorithm === "des-ede3-cbc") {
    return decryptDESEDE3CBC(data, password, extra);
  } else if (algorithm === "des-ede3-cfb") {
    return decryptDESEDE3CFB(data, password, extra);
  } else if (algorithm === "des-ede3-cfb1") {
    return decryptDESEDE3CFB1(data, password, extra);
  } else if (algorithm === "des-ede3-cfb8") {
    return decryptDESEDE3CFB8(data, password, extra);
  } else if (algorithm === "des-ede3-ecb") {
    return decryptDESEDE3ECB(data, password, extra);
  } else if (algorithm === "des-ede3-ofb") {
    return decryptDESEDE3OFB(data, password, extra);
  }

  /*****************************************************
   *                      DES3                         *
   *****************************************************/
  if (algorithm === "des3") {
    return decryptDES3(data, password, extra);
  }

  /*****************************************************
   *                      DESX                         *
   *****************************************************/
  if (algorithm === "desx") {
    return decryptDESX(data, password, extra);
  } else if (algorithm === "desx-cbc") {
    return decryptDESXCBC(data, password, extra);
  }

  /*****************************************************
   *                   ID-AES128                       *
   *****************************************************/
  if (algorithm === "id-aes128-ccm") {
    return decryptIDAES128CCM(data, password, extra);
  } else if (algorithm === "id-aes128-gcm") {
    return decryptIDAES128GCM(data, password, extra);
  }

  /*****************************************************
   *                   ID-AES192                       *
   *****************************************************/
  if (algorithm === "id-aes192-ccm") {
    return decryptIDAES192CCM(data, password, extra);
  } else if (algorithm === "id-aes192-gcm") {
    return decryptIDAES192GCM(data, password, extra);
  }

  /*****************************************************
   *                   ID-AES256                       *
   *****************************************************/
  if (algorithm === "id-aes256-ccm") {
    return decryptIDAES256CCM(data, password, extra);
  } else if (algorithm === "id-aes256-gcm") {
    return decryptIDAES256GCM(data, password, extra);
  }

  /*****************************************************
   *                      SM4                          *
   *****************************************************/
  if (algorithm === "sm4") {
    return decryptSM4(data, password, extra);
  } else if (algorithm === "sm4-cbc") {
    return decryptSM4CBC(data, password, extra);
  } else if (algorithm === "sm4-cfb") {
    return decryptSM4CTR(data, password, extra);
  } else if (algorithm === "sm4-ctr") {
    return decryptSM4CTR(data, password, extra);
  } else if (algorithm === "sm4-ecb") {
    return decryptSM4ECB(data, password, extra);
  } else if (algorithm === "sm4-ofb") {
    return decryptSM4OFB(data, password, extra);
  }
}

module.exports = decrypt;
