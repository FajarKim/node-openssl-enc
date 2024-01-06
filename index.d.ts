const { AESEncryptionResult, AESDecryptionResult } = require("./lib/aes/index");
const { ARIAEncryptionResult, ARIADecryptionResult } = require("./lib/aria/index");
const { CAMELLIAEncryptionResult, CAMELLIADecryptionResult } = require("./lib/camellia/index");
const { DESEncryptionResult, DESDecryptionResult } = require("./lib/des/index");
const { IDAESEncryptionResult, IDAESDecryptionResult } = require("./lib/id/index");
const { SEEDEncryptionResult, SEEDDecryptionResult } = require("./lib/seed/index");
const { SM4EncryptionResult, SM4DecryptionResult } = require("./lib/sm4/index");

declare module "@fajarkim/node-openssl-enc" {
  type Algorithm =
    | "aes128"
    | "aes-128-cbc"
    | "aes-128-ccm"
    | "aes-128-cfb"
    | "aes-128-cfb1"
    | "aes-128-cfb8"
    | "aes-128-ctr"
    | "aes-128-ecb"
    | "aes-128-gcm"
    | "aes-128-ocb"
    | "aes-128-ofb"
    | "aes192"
    | "aes-192-cbc"
    | "aes-192-ccm"
    | "aes-192-cfb"
    | "aes-192-cfb1"
    | "aes-192-cfb8"
    | "aes-192-ctr"
    | "aes-192-ecb"
    | "aes-192-gcm"
    | "aes-192-ocb"
    | "aes-192-ofb"
    | "aes256"
    | "aes-256-cbc"
    | "aes-256-ccm"
    | "aes-256-cfb"
    | "aes-256-cfb1"
    | "aes-256-cfb8"
    | "aes-256-ctr"
    | "aes-256-ecb"
    | "aes-256-gcm"
    | "aes-256-ocb"
    | "aes-256-ofb"
    | "aria128"
    | "aria-128-cbc"
    | "aria-128-ccm"
    | "aria-128-cfb"
    | "aria-128-cfb1"
    | "aria-128-cfb8"
    | "aria-128-ctr"
    | "aria-128-ecb"
    | "aria-128-gcm"
    | "aria-128-ofb"
    | "aria192"
    | "aria-192-cbc"
    | "aria-192-ccm"
    | "aria-192-cfb"
    | "aria-192-cfb1"
    | "aria-192-cfb8"
    | "aria-192-ctr"
    | "aria-192-ecb"
    | "aria-192-gcm"
    | "aria-192-ofb"
    | "aria256"
    | "aria-256-cbc"
    | "aria-256-ccm"
    | "aria-256-cfb"
    | "aria-256-cfb1"
    | "aria-256-cfb8"
    | "aria-256-ctr"
    | "aria-256-ecb"
    | "aria-256-gcm"
    | "aria-256-ofb"
    | "camellia128"
    | "camellia-128-cbc"
    | "camellia-128-cfb"
    | "camellia-128-cfb1"
    | "camellia-128-cfb8"
    | "camellia-128-ctr"
    | "camellia-128-ecb"
    | "camellia-128-ofb"
    | "camellia192"
    | "camellia-192-cbc"
    | "camellia-192-cfb"
    | "camellia-192-cfb1"
    | "camellia-192-cfb8"
    | "camellia-192-ctr"
    | "camellia-192-ecb"
    | "camellia-192-ofb"
    | "camellia256"
    | "camellia-256-cbc"
    | "camellia-256-cfb"
    | "camellia-256-cfb1"
    | "camellia-256-cfb8"
    | "camellia-256-ctr"
    | "camellia-256-ecb"
    | "camellia-256-ofb"
    | "des"
    | "des-cbc"
    | "des-cfb"
    | "des-cfb1"
    | "des-cfb8"
    | "des-ecb"
    | "des-ofb"
    | "des-ede"
    | "des-ede-cbc"
    | "des-ede-cfb"
    | "des-ede-ecb"
    | "des-ede-ofb"
    | "des-ede3"
    | "des-ede3-cbc"
    | "des-ede3-cfb"
    | "des-ede3-cfb1"
    | "des-ede3-cfb8"
    | "des-ede3-ecb"
    | "des-ede3-ofb"
    | "des3"
    | "desx"
    | "desx-cbc"
    | "id-aes128-ccm"
    | "id-aes128-gcm"
    | "id-aes192-ccm"
    | "id-aes192-gcm"
    | "id-aes256-ccm"
    | "id-aes256-gcm"
    | "sm4"
    | "sm4-cbc"
    | "sm4-cfb"
    | "sm4-ctr"
    | "sm4-ecb"
    | "sm4-ofb";

  type AlgorithmSupported = Algorithm[];
  type AlgorithmUnsupported = string[];

  type EncryptionResult = Buffer | string;
  type DecryptionResult = Buffer | string;

  interface AlgorithmList {
    algorithmSupported: AlgorithmSupported;
    algorithmUnsupported: AlgorithmUnsupported;
  }

  interface Encrypt {
    (algorithm: Algorithm, data: Buffer | string, password: string, extra?: string | null): EncryptionResult;
  }

  interface Decrypt {
    (algorithm: Algorithm, data: Buffer | string, password: string, extra?: string | null): DecryptionResult;
  }

  interface EncryptBase64 {
    (data: Buffer | string): string;
  }

  interface DecryptBase64 {
    (data: string): Buffer | string;
  }

  interface EncryptZlib {
    (data: Buffer | string): Buffer;
  }

  interface DecryptZlib {
    (data: Buffer): Buffer | string;
  }

  const algorithmList: AlgorithmList;

  const encrypt: Encrypt;
  const decrypt: Decrypt;

  export {
    Algorithm,
    AlgorithmList,
    algorithmList,
    AlgorithmSupported, AlgorithmUnsupported,
    algorithmSupported, algorithmUnsupported,
    Encrypt, Decrypt,
    EncryptionResult, DecryptionResult,
    encrypt, decrypt,
    AESEncryptionResult, AESDecryptionResult,
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
    ARIAEncryptionResult, ARIADecryptionResult,
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
    CAMELLIAEncryptionResult, CAMELLIADecryptionResult,
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
    DESEncryptionResult, DESDecryptionResult,
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
    IDAESEncryptionResult, IDAESDecryptionResult,
    encryptIDAES128CCM, decryptIDAES128CCM,
    encryptIDAES128GCM, decryptIDAES128GCM,
    encryptIDAES192CCM, decryptIDAES192CCM,
    encryptIDAES192GCM, decryptIDAES192GCM,
    encryptIDAES256CCM, decryptIDAES256CCM,
    encryptIDAES256GCM, decryptIDAES256GCM,
    SEEDEncryptionResult, SEEDDecryptionResult,
    encryptSEED, decryptSEED,
    encryptSEEDCBC, decryptSEEDCBC,
    encryptSEEDCFB, decryptSEEDCFB,
    encryptSEEDECB, decryptSEEDECB,
    encryptSEEDOFB, decryptSEEDOFB,
    SM4EncryptionResult, SM4DecryptionResult,
    encryptSM4, decryptSM4,
    encryptSM4CBC, decryptSM4CBC,
    encryptSM4CFB, decryptSM4CFB,
    encryptSM4CTR, decryptSM4CTR,
    encryptSM4ECB, decryptSM4ECB,
    encryptSM4OFB, decryptSM4OFB,
    EncryptBase64, DecryptBase64,
    encryptBase64, decryptBase64,
    EncryptZlib, DecryptZlib,
    encryptZlib, decryptZlib
  };
}
