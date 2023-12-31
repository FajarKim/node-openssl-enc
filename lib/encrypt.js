const {
  algorithmSupported,
  algorithmUnsupported
} = require("./algorithmList");
const {
  encryptAES128,
  encryptAES128CBC,
  encryptAES128CCM,
  encryptAES128CFB,
  encryptAES128CFB1,
  encryptAES128CFB8,
  encryptAES128CTR,
  encryptAES128ECB,
  encryptAES128GCM,
  encryptAES128OCB,
  encryptAES128OFB,
  encryptAES192,
  encryptAES192CBC,
  encryptAES192CCM,
  encryptAES192CFB,
  encryptAES192CFB1,
  encryptAES192CFB8,
  encryptAES192CTR,
  encryptAES192ECB,
  encryptAES192GCM,
  encryptAES192OCB,
  encryptAES192OFB,
  encryptAES256,
  encryptAES256CBC,
  encryptAES256CCM,
  encryptAES256CFB,
  encryptAES256CFB1,
  encryptAES256CFB8,
  encryptAES256CTR,
  encryptAES256ECB,
  encryptAES256GCM,
  encryptAES256OCB,
  encryptAES256OFB
} = require("./aes/index");
const {
  encryptARIA128,
  encryptARIA128CBC,
  encryptARIA128CCM,
  encryptARIA128CFB,
  encryptARIA128CFB1,
  encryptARIA128CFB8,
  encryptARIA128CTR,
  encryptARIA128ECB,
  encryptARIA128GCM,
  encryptARIA128OFB,
  encryptARIA192,
  encryptARIA192CBC,
  encryptARIA192CCM,
  encryptARIA192CFB,
  encryptARIA192CFB1,
  encryptARIA192CFB8,
  encryptARIA192CTR,
  encryptARIA192ECB,
  encryptARIA192GCM,
  encryptARIA192OFB,
  encryptARIA256,
  encryptARIA256CBC,
  encryptARIA256CCM,
  encryptARIA256CFB,
  encryptARIA256CFB1,
  encryptARIA256CFB8,
  encryptARIA256CTR,
  encryptARIA256ECB,
  encryptARIA256GCM,
  encryptARIA256OFB
} = require("./aria/index");
const {
  encryptCAMELLIA128,
  encryptCAMELLIA128CBC,
  encryptCAMELLIA128CFB,
  encryptCAMELLIA128CFB1,
  encryptCAMELLIA128CFB8,
  encryptCAMELLIA128CTR,
  encryptCAMELLIA128ECB,
  encryptCAMELLIA128OFB,
  encryptCAMELLIA192,
  encryptCAMELLIA192CBC,
  encryptCAMELLIA192CFB,
  encryptCAMELLIA192CFB1,
  encryptCAMELLIA192CFB8,
  encryptCAMELLIA192CTR,
  encryptCAMELLIA192ECB,
  encryptCAMELLIA192OFB,
  encryptCAMELLIA256,
  encryptCAMELLIA256CBC,
  encryptCAMELLIA256CFB,
  encryptCAMELLIA256CFB1,
  encryptCAMELLIA256CFB8,
  encryptCAMELLIA256CTR,
  encryptCAMELLIA256ECB,
  encryptCAMELLIA256OFB
} = require("./camellia/index");
const {
  encryptDES,
  encryptDESCBC,
  encryptDESCFB,
  encryptDESCFB1,
  encryptDESCFB8,
  encryptDESECB,
  encryptDESOFB,
  encryptDESEDE,
  encryptDESEDECBC,
  encryptDESEDECFB,
  encryptDESEDEECB,
  encryptDESEDEOFB,
  encryptDESEDE3,
  encryptDESEDE3CBC,
  encryptDESEDE3CFB,
  encryptDESEDE3CFB1,
  encryptDESEDE3CFB8,
  encryptDESEDE3ECB,
  encryptDESEDE3OFB,
  encryptDES3,
  encryptDESX,
  encryptDESXCBC
} = require("./des/index");
const {
  encryptIDAES128CCM,
  encryptIDAES128GCM,
  encryptIDAES192CCM,
  encryptIDAES192GCM,
  encryptIDAES256CCM,
  encryptIDAES256GCM
} = require("./id/index");
const {
  encryptSM4,
  encryptSM4CBC,
  encryptSM4CFB,
  encryptSM4CTR,
  encryptSM4ECB,
  encryptSM4OFB
} = require("./sm4/index");

/**
 * Encrypts data using the specified algorithm.
 *
 * @param {string} algorithm - The encryption algorithm.
 * @param {string} data - The data to be encrypted.
 * @param {string} password - The password used for key derivation.
 * @param {string|null} extra - Additional options for encryption (e.g., 'base64', 'binary', 'hex', or 'zlib').
 * @returns {Buffer|string} - The encrypted data.
 */
function encrypt(algorithm, data, password, extra = null) {
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
    return encryptAES128(data, password, extra);
  } else if (algorithm === "aes-128-cbc") {
    return encryptAES128CBC(data, password, extra);
  } else if (algorithm === "aes-128-ccm") {
    return encryptAES128CCM(data, password, extra);
  } else if (algorithm === "aes-128-cfb") {
    return encryptAES128CFB(data, password, extra);
  } else if (algorithm === "aes-128-cfb1") {
    return encryptAES128CFB1(data, password, extra);
  } else if (algorithm === "aes-128-cfb8") {
    return encryptAES128CFB8(data, password, extra);
  } else if (algorithm === "aes-128-ctr") {
    return encryptAES128CTR(data, password, extra);
  } else if (algorithm === "aes-128-ecb") {
    return encryptAES128ECB(data, password, extra);
  } else if (algorithm === "aes-128-gcm") {
    return encryptAES128GCM(data, password, extra);
  } else if (algorithm === "aes-128-ocb") {
    return encryptAES128OCB(data, password, extra);
  } else if (algorithm === "aes-128-ofb") {
    return encryptAES128OFB(data, password, extra);
  }

  /*****************************************************
   *                    AES-192                        *
   *****************************************************/
  if (algorithm === "aes192") {
    return encryptAES192(data, password, extra);
  } else if (algorithm === "aes-192-cbc") {
    return encryptAES192CBC(data, password, extra);
  } else if (algorithm === "aes-192-ccm") {
    return encryptAES192CCM(data, password, extra);
  } else if (algorithm === "aes-192-cfb") {
    return encryptAES192CFB(data, password, extra);
  } else if (algorithm === "aes-192-cfb1") {
    return encryptAES192CFB1(data, password, extra);
  } else if (algorithm === "aes-192-cfb8") {
    return encryptAES192CFB8(data, password, extra);
  } else if (algorithm === "aes-192-ctr") {
    return encryptAES192CTR(data, password, extra);
  } else if (algorithm === "aes-192-ecb") {
    return encryptAES192ECB(data, password, extra);
  } else if (algorithm === "aes-192-gcm") {
    return encryptAES192GCM(data, password, extra);
  } else if (algorithm === "aes-192-ocb") {
    return encryptAES192OCB(data, password, extra);
  } else if (algorithm === "aes-192-ofb") {
    return encryptAES192OFB(data, password, extra);
  }

  /*****************************************************
   *                    AES-256                        *
   *****************************************************/
  if (algorithm === "aes256") {
    return encryptAES256(data, password, extra);
  } else if (algorithm === "aes-256-cbc") {
    return encryptAES256CBC(data, password, extra);
  } else if (algorithm === "aes-256-ccm") {
    return encryptAES256CCM(data, password, extra);
  } else if (algorithm === "aes-256-cfb") {
    return encryptAES256CFB(data, password, extra);
  } else if (algorithm === "aes-256-cfb1") {
    return encryptAES256CFB1(data, password, extra);
  } else if (algorithm === "aes-256-cfb8") {
    return encryptAES256CFB8(data, password, extra);
  } else if (algorithm === "aes-256-ctr") {
    return encryptAES256CTR(data, password, extra);
  } else if (algorithm === "aes-256-ecb") {
    return encryptAES256ECB(data, password, extra);
  } else if (algorithm === "aes-256-gcm") {
    return encryptAES256GCM(data, password, extra);
  } else if (algorithm === "aes-256-ocb") {
    return encryptAES256OCB(data, password, extra);
  } else if (algorithm === "aes-256-ofb") {
    return encryptAES256OFB(data, password, extra);
  }

  /*****************************************************
   *                    ARIA-128                       *
   *****************************************************/
  if (algorithm === "aria128") {
    return encryptARIA128(data, password, extra);
  } else if (algorithm === "aria-128-cbc") {
    return encryptARIA128CBC(data, password, extra);
  } else if (algorithm === "aria-128-ccm") {
    return encryptARIA128CCM(data, password, extra);
  } else if (algorithm === "aria-128-cfb") {
    return encryptARIA128CFB(data, password, extra);
  } else if (algorithm === "aria-128-cfb1") {
    return encryptARIA128CFB1(data, password, extra);
  } else if (algorithm === "aria-128-cfb8") {
    return encryptARIA128CFB8(data, password, extra);
  } else if (algorithm === "aria-128-ctr") {
    return encryptARIA128CTR(data, password, extra);
  } else if (algorithm === "aria-128-ecb") {
    return encryptARIA128ECB(data, password, extra);
  } else if (algorithm === "aria-128-gcm") {
    return encryptARIA128GCM(data, password, extra);
  } else if (algorithm === "aria-128-ofb") {
    return encryptARIA128OFB(data, password, extra);
  }

  /*****************************************************
   *                    ARIA-192                       *
   *****************************************************/
  if (algorithm === "aria192") {
    return encryptARIA192(data, password, extra);
  } else if (algorithm === "aria-192-cbc") {
    return encryptARIA192CBC(data, password, extra);
  } else if (algorithm === "aria-192-ccm") {
    return encryptARIA192CCM(data, password, extra);
  } else if (algorithm === "aria-192-cfb") {
    return encryptARIA192CFB(data, password, extra);
  } else if (algorithm === "aria-192-cfb1") {
    return encryptARIA192CFB1(data, password, extra);
  } else if (algorithm === "aria-192-cfb8") {
    return encryptARIA192CFB8(data, password, extra);
  } else if (algorithm === "aria-192-ctr") {
    return encryptARIA192CTR(data, password, extra);
  } else if (algorithm === "aria-192-ecb") {
    return encryptARIA192ECB(data, password, extra);
  } else if (algorithm === "aria-192-gcm") {
    return encryptARIA192GCM(data, password, extra);
  } else if (algorithm === "aria-192-ofb") {
    return encryptARIA192OFB(data, password, extra);
  }

  /*****************************************************
   *                    ARIA-256                       *
   *****************************************************/
  if (algorithm === "aria256") {
    return encryptARIA256(data, password, extra);
  } else if (algorithm === "aria-256-cbc") {
    return encryptARIA256CBC(data, password, extra);
  } else if (algorithm === "aria-256-ccm") {
    return encryptARIA256CCM(data, password, extra);
  } else if (algorithm === "aria-256-cfb") {
    return encryptARIA256CFB(data, password, extra);
  } else if (algorithm === "aria-256-cfb1") {
    return encryptARIA256CFB1(data, password, extra);
  } else if (algorithm === "aria-256-cfb8") {
    return encryptARIA256CFB8(data, password, extra);
  } else if (algorithm === "aria-256-ctr") {
    return encryptARIA256CTR(data, password, extra);
  } else if (algorithm === "aria-256-ecb") {
    return encryptARIA256ECB(data, password, extra);
  } else if (algorithm === "aria-256-gcm") {
    return encryptARIA256GCM(data, password, extra);
  } else if (algorithm === "aria-256-ofb") {
    return encryptARIA256OFB(data, password, extra);
  }

  /*****************************************************
   *                  CAMELLIA-128                     *
   *****************************************************/
  if (algorithm === "camellia128") {
    return encryptCAMELLIA128(data, password, extra);
  } else if (algorithm === "camellia-128-cbc") {
    return encryptCAMELLIA128CBC(data, password, extra);
  } else if (algorithm === "camellia-128-cfb") {
    return encryptCAMELLIA128CFB(data, password, extra);
  } else if (algorithm === "camellia-128-cfb1") {
    return encryptCAMELLIA128CFB1(data, password, extra);
  } else if (algorithm === "camellia-128-cfb8") {
    return encryptCAMELLIA128CFB8(data, password, extra);
  } else if (algorithm === "camellia-128-ctr") {
    return encryptCAMELLIA128CTR(data, password, extra);
  } else if (algorithm === "camellia-128-ecb") {
    return encryptCAMELLIA128ECB(data, password, extra);
  } else if (algorithm === "camellia-128-ofb") {
    return encryptCAMELLIA128OFB(data, password, extra);
  }

  /*****************************************************
   *                  CAMELLIA-192                     *
   *****************************************************/
  if (algorithm === "camellia192") {
    return encryptCAMELLIA192(data, password, extra);
  } else if (algorithm === "camellia-192-cbc") {
    return encryptCAMELLIA192CBC(data, password, extra);
  } else if (algorithm === "camellia-192-cfb") {
    return encryptCAMELLIA192CFB(data, password, extra);
  } else if (algorithm === "camellia-192-cfb1") {
    return encryptCAMELLIA192CFB1(data, password, extra);
  } else if (algorithm === "camellia-192-cfb8") {
    return encryptCAMELLIA192CFB8(data, password, extra);
  } else if (algorithm === "camellia-192-ctr") {
    return encryptCAMELLIA192CTR(data, password, extra);
  } else if (algorithm === "camellia-192-ecb") {
    return encryptCAMELLIA192ECB(data, password, extra);
  } else if (algorithm === "camellia-192-ofb") {
    return encryptCAMELLIA192OFB(data, password, extra);
  }

  /*****************************************************
   *                  CAMELLIA-256                     *
   *****************************************************/
  if (algorithm === "camellia256") {
    return encryptCAMELLIA256(data, password, extra);
  } else if (algorithm === "camellia-256-cbc") {
    return encryptCAMELLIA256CBC(data, password, extra);
  } else if (algorithm === "camellia-256-cfb") {
    return encryptCAMELLIA256CFB(data, password, extra);
  } else if (algorithm === "camellia-256-cfb1") {
    return encryptCAMELLIA256CFB1(data, password, extra);
  } else if (algorithm === "camellia-256-cfb8") {
    return encryptCAMELLIA256CFB8(data, password, extra);
  } else if (algorithm === "camellia-256-ctr") {
    return encryptCAMELLIA256CTR(data, password, extra);
  } else if (algorithm === "camellia-256-ecb") {
    return encryptCAMELLIA256ECB(data, password, extra);
  } else if (algorithm === "camellia-256-ofb") {
    return encryptCAMELLIA256OFB(data, password, extra);
  }

  /*****************************************************
   *                      DES                          *
   *****************************************************/
  if (algorithm === "des") {
    return encryptDES(data, password, extra);
  } else if (algorithm === "des-cbc") {
    return encryptDESCBC(data, password, extra);
  } else if (algorithm === "des-cfb") {
    return encryptDESCFB(data, password, extra);
  } else if (algorithm === "des-cfb1") {
    return encryptDESCFB1(data, password, extra);
  } else if (algorithm === "des-cfb8") {
    return encryptDESCFB8(data, password, extra);
  } else if (algorithm === "des-ecb") {
    return encryptDESECB(data, password, extra);
  } else if (algorithm === "des-ofb") {
    return encryptDESOFB(data, password, extra);
  }

  /*****************************************************
   *                    DES-EDE                        *
   *****************************************************/
  if (algorithm === "des-ede") {
    return encryptDESEDE(data, password, extra);
  } else if (algorithm === "des-ede-cbc") {
    return encryptDESEDECBC(data, password, extra);
  } else if (algorithm === "des-ede-cfb") {
    return encryptDESEDECFB(data, password, extra);
  } else if (algorithm === "des-ede-ecb") {
    return encryptDESEDEECB(data, password, extra);
  } else if (algorithm === "des-ede-ofb") {
    return encryptDESEDEOFB(data, password, extra);
  }

  /*****************************************************
   *                   DES-EDE3                        *
   *****************************************************/
  if (algorithm === "des-ede3") {
    return encryptDESEDE3(data, password, extra);
  } else if (algorithm === "des-ede3-cbc") {
    return encryptDESEDE3CBC(data, password, extra);
  } else if (algorithm === "des-ede3-cfb") {
    return encryptDESEDE3CFB(data, password, extra);
  } else if (algorithm === "des-ede3-cfb1") {
    return encryptDESEDE3CFB1(data, password, extra);
  } else if (algorithm === "des-ede3-cfb8") {
    return encryptDESEDE3CFB8(data, password, extra);
  } else if (algorithm === "des-ede3-ecb") {
    return encryptDESEDE3ECB(data, password, extra);
  } else if (algorithm === "des-ede3-ofb") {
    return encryptDESEDE3OFB(data, password, extra);
  }

  /*****************************************************
   *                      DES3                         *
   *****************************************************/
  if (algorithm === "des3") {
    return encryptDES3(data, password, extra);
  }

  /*****************************************************
   *                      DESX                         *
   *****************************************************/
  if (algorithm === "desx") {
    return encryptDESX(data, password, extra);
  } else if (algorithm === "desx-cbc") {
    return encryptDESXCBC(data, password, extra);
  }

  /*****************************************************
   *                   ID-AES128                       *
   *****************************************************/
  if (algorithm === "id-aes128-ccm") {
    return encryptIDAES128CCM(data, password, extra);
  } else if (algorithm === "id-aes128-gcm") {
    return encryptIDAES128GCM(data, password, extra);
  }

  /*****************************************************
   *                   ID-AES192                       *
   *****************************************************/
  if (algorithm === "id-aes192-ccm") {
    return encryptIDAES192CCM(data, password, extra);
  } else if (algorithm === "id-aes192-gcm") {
    return encryptIDAES192GCM(data, password, extra);
  }

  /*****************************************************
   *                   ID-AES256                       *
   *****************************************************/
  if (algorithm === "id-aes256-ccm") {
    return encryptIDAES256CCM(data, password, extra);
  } else if (algorithm === "id-aes256-gcm") {
    return encryptIDAES256GCM(data, password, extra);
  }

  /*****************************************************
   *                      SM4                          *
   *****************************************************/
  if (algorithm === "sm4") {
    return encryptSM4(data, password, extra);
  } else if (algorithm === "sm4-cbc") {
    return encryptSM4CBC(data, password, extra);
  } else if (algorithm === "sm4-cfb") {
    return encryptSM4CTR(data, password, extra);
  } else if (algorithm === "sm4-ctr") {
    return encryptSM4CTR(data, password, extra);
  } else if (algorithm === "sm4-ecb") {
    return encryptSM4ECB(data, password, extra);
  } else if (algorithm === "sm4-ofb") {
    return encryptSM4OFB(data, password, extra);
  }
}

module.exports = encrypt;
