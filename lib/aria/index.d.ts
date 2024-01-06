declare module "lib/aria" {
  interface ARIAEncryptionResult {
    (data: Buffer | string, password: string, extra?: string | null): Buffer | string;
  }

  interface ARIADecryptionResult {
    (encryptedData: Buffer | string, password: string, extra?: string | null): Buffer | string;
  }

  // ARIA-128 Algorithm
  const encryptARIA128: ARIAEncryptionResult;
  const decryptARIA128: ARIADecryptionResult;

  const encryptARIA128CBC: ARIAEncryptionResult;
  const decryptARIA128CBC: ARIADecryptionResult;

  const encryptARIA128CCM: ARIAEncryptionResult;
  const decryptARIA128CCM: ARIADecryptionResult;

  const encryptARIA128CFB: ARIAEncryptionResult;
  const decryptARIA128CFB: ARIADecryptionResult;

  const encryptARIA128CFB1: ARIAEncryptionResult;
  const decryptARIA128CFB1: ARIADecryptionResult;

  const encryptARIA128CFB8: ARIAEncryptionResult;
  const decryptARIA128CFB8: ARIADecryptionResult;

  const encryptARIA128CTR: ARIAEncryptionResult;
  const decryptARIA128CTR: ARIADecryptionResult;

  const encryptARIA128ECB: ARIAEncryptionResult;
  const decryptARIA128ECB: ARIADecryptionResult;

  const encryptARIA128GCM: ARIAEncryptionResult;
  const decryptARIA128GCM: ARIADecryptionResult;

  const encryptARIA128OFB: ARIAEncryptionResult;
  const decryptARIA128OFB: ARIADecryptionResult;

  // ARIA-192 Algorithm
  const encryptARIA192: ARIAEncryptionResult;
  const decryptARIA192: ARIADecryptionResult;

  const encryptARIA192CBC: ARIAEncryptionResult;
  const decryptARIA192CBC: ARIADecryptionResult;

  const encryptARIA192CCM: ARIAEncryptionResult;
  const decryptARIA192CCM: ARIADecryptionResult;

  const encryptARIA192CFB: ARIAEncryptionResult;
  const decryptARIA192CFB: ARIADecryptionResult;

  const encryptARIA192CFB1: ARIAEncryptionResult;
  const decryptARIA192CFB1: ARIADecryptionResult;

  const encryptARIA192CFB8: ARIAEncryptionResult;
  const decryptARIA192CFB8: ARIADecryptionResult;

  const encryptARIA192CTR: ARIAEncryptionResult;
  const decryptARIA192CTR: ARIADecryptionResult;

  const encryptARIA192ECB: ARIAEncryptionResult;
  const decryptARIA192ECB: ARIADecryptionResult;

  const encryptARIA192GCM: ARIAEncryptionResult;
  const decryptARIA192GCM: ARIADecryptionResult;

  const encryptARIA192OFB: ARIAEncryptionResult;
  const decryptARIA192OFB: ARIADecryptionResult;

  // ARIA-256 Algorithm
  const encryptARIA256: ARIAEncryptionResult;
  const decryptARIA256: ARIADecryptionResult;

  const encryptARIA256CBC: ARIAEncryptionResult;
  const decryptARIA256CBC: ARIADecryptionResult;

  const encryptARIA256CCM: ARIAEncryptionResult;
  const decryptARIA256CCM: ARIADecryptionResult;

  const encryptARIA256CFB: ARIAEncryptionResult;
  const decryptARIA256CFB: ARIADecryptionResult;

  const encryptARIA256CFB1: ARIAEncryptionResult;
  const decryptARIA256CFB1: ARIADecryptionResult;

  const encryptARIA256CFB8: ARIAEncryptionResult;
  const decryptARIA256CFB8: ARIADecryptionResult;

  const encryptARIA256CTR: ARIAEncryptionResult;
  const decryptARIA256CTR: ARIADecryptionResult;

  const encryptARIA256ECB: ARIAEncryptionResult;
  const decryptARIA256ECB: ARIADecryptionResult;

  const encryptARIA256GCM: ARIAEncryptionResult;
  const decryptARIA256GCM: ARIADecryptionResult;

  const encryptARIA256OFB: ARIAEncryptionResult;
  const decryptARIA256OFB: ARIADecryptionResult;

  export {
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
    encryptARIA256OFB, decryptARIA256OFB
  };
}
