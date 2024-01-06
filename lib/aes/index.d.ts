declare module "lib/aes" {
  interface AESEncryptionResult {
    (data: Buffer | string, password: string, extra?: string | null): Buffer | string;
  }

  interface AESDecryptionResult {
    (encryptedData: Buffer | string, password: string, extra?: string | null): Buffer | string;
  }

  // AES-128 Algorithm
  const encryptAES128: AESEncryptionResult;
  const decryptAES128: AESDecryptionResult;

  const encryptAES128CBC: AESEncryptionResult;
  const decryptAES128CBC: AESDecryptionResult;

  const encryptAES128CCM: AESEncryptionResult;
  const decryptAES128CCM: AESDecryptionResult;

  const encryptAES128CFB: AESEncryptionResult;
  const decryptAES128CFB: AESDecryptionResult;

  const encryptAES128CFB1: AESEncryptionResult;
  const decryptAES128CFB1: AESDecryptionResult;

  const encryptAES128CFB8: AESEncryptionResult;
  const decryptAES128CFB8: AESDecryptionResult;

  const encryptAES128CTR: AESEncryptionResult;
  const decryptAES128CTR: AESDecryptionResult;

  const encryptAES128ECB: AESEncryptionResult;
  const decryptAES128ECB: AESDecryptionResult;

  const encryptAES128GCM: AESEncryptionResult;
  const decryptAES128GCM: AESDecryptionResult;

  const encryptAES128OCB: AESEncryptionResult;
  const decryptAES128OCB: AESDecryptionResult;

  const encryptAES128OFB: AESEncryptionResult;
  const decryptAES128OFB: AESDecryptionResult;

  // AES-192 Algorithm
  const encryptAES192: AESEncryptionResult;
  const decryptAES192: AESDecryptionResult;

  const encryptAES192CBC: AESEncryptionResult;
  const decryptAES192CBC: AESDecryptionResult;

  const encryptAES192CCM: AESEncryptionResult;
  const decryptAES192CCM: AESDecryptionResult;

  const encryptAES192CFB: AESEncryptionResult;
  const decryptAES192CFB: AESDecryptionResult;

  const encryptAES192CFB1: AESEncryptionResult;
  const decryptAES192CFB1: AESDecryptionResult;

  const encryptAES192CFB8: AESEncryptionResult;
  const decryptAES192CFB8: AESDecryptionResult;

  const encryptAES192CTR: AESEncryptionResult;
  const decryptAES192CTR: AESDecryptionResult;

  const encryptAES192ECB: AESEncryptionResult;
  const decryptAES192ECB: AESDecryptionResult;

  const encryptAES192GCM: AESEncryptionResult;
  const decryptAES192GCM: AESDecryptionResult;

  const encryptAES192OCB: AESEncryptionResult;
  const decryptAES192OCB: AESDecryptionResult;

  const encryptAES192OFB: AESEncryptionResult;
  const decryptAES192OFB: AESDecryptionResult;

  // AES-256 Algorithm
  const encryptAES256: AESEncryptionResult;
  const decryptAES256: AESDecryptionResult;

  const encryptAES256CBC: AESEncryptionResult;
  const decryptAES256CBC: AESDecryptionResult;

  const encryptAES256CCM: AESEncryptionResult;
  const decryptAES256CCM: AESDecryptionResult;

  const encryptAES256CFB: AESEncryptionResult;
  const decryptAES256CFB: AESDecryptionResult;

  const encryptAES256CFB1: AESEncryptionResult;
  const decryptAES256CFB1: AESDecryptionResult;

  const encryptAES256CFB8: AESEncryptionResult;
  const decryptAES256CFB8: AESDecryptionResult;

  const encryptAES256CTR: AESEncryptionResult;
  const decryptAES256CTR: AESDecryptionResult;

  const encryptAES256ECB: AESEncryptionResult;
  const decryptAES256ECB: AESDecryptionResult;

  const encryptAES256GCM: AESEncryptionResult;
  const decryptAES256GCM: AESDecryptionResult;

  const encryptAES256OCB: AESEncryptionResult;
  const decryptAES256OCB: AESDecryptionResult;

  const encryptAES256OFB: AESEncryptionResult;
  const decryptAES256OFB: AESDecryptionResult;

  export {
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
  };
}
