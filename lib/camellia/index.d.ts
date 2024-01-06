declare module "lib/camellia" {
  interface CAMELLIAEncryptionResult {
    (data: Buffer | string, password: string, extra?: string | null): Buffer | string;
  }

  interface CAMELLIADecryptionResult {
    (encryptedData: Buffer | string, password: string, extra?: string | null): Buffer | string;
  }

  // CAMELLIA-128 Algorithm
  const encryptCAMELLIA128: CAMELLIAEncryptionResult;
  const decryptCAMELLIA128: CAMELLIADecryptionResult;

  const encryptCAMELLIA128CBC: CAMELLIAEncryptionResult;
  const decryptCAMELLIA128CBC: CAMELLIADecryptionResult;

  const encryptCAMELLIA128CFB: CAMELLIAEncryptionResult;
  const decryptCAMELLIA128CFB: CAMELLIADecryptionResult;

  const encryptCAMELLIA128CFB1: CAMELLIAEncryptionResult;
  const decryptCAMELLIA128CFB1: CAMELLIADecryptionResult;

  const encryptCAMELLIA128CFB8: CAMELLIAEncryptionResult;
  const decryptCAMELLIA128CFB8: CAMELLIADecryptionResult;

  const encryptCAMELLIA128CTR: CAMELLIAEncryptionResult;
  const decryptCAMELLIA128CTR: CAMELLIADecryptionResult;

  const encryptCAMELLIA128ECB: CAMELLIAEncryptionResult;
  const decryptCAMELLIA128ECB: CAMELLIADecryptionResult;

  const encryptCAMELLIA128OFB: CAMELLIAEncryptionResult;
  const decryptCAMELLIA128OFB: CAMELLIADecryptionResult;

  // CAMELLIA-192 Algorithm
  const encryptCAMELLIA192: CAMELLIAEncryptionResult;
  const decryptCAMELLIA192: CAMELLIADecryptionResult;

  const encryptCAMELLIA192CBC: CAMELLIAEncryptionResult;
  const decryptCAMELLIA192CBC: CAMELLIADecryptionResult;

  const encryptCAMELLIA192CFB: CAMELLIAEncryptionResult;
  const decryptCAMELLIA192CFB: CAMELLIADecryptionResult;

  const encryptCAMELLIA192CFB1: CAMELLIAEncryptionResult;
  const decryptCAMELLIA192CFB1: CAMELLIADecryptionResult;

  const encryptCAMELLIA192CFB8: CAMELLIAEncryptionResult;
  const decryptCAMELLIA192CFB8: CAMELLIADecryptionResult;

  const encryptCAMELLIA192CTR: CAMELLIAEncryptionResult;
  const decryptCAMELLIA192CTR: CAMELLIADecryptionResult;

  const encryptCAMELLIA192ECB: CAMELLIAEncryptionResult;
  const decryptCAMELLIA192ECB: CAMELLIADecryptionResult;

  const encryptCAMELLIA192OFB: CAMELLIAEncryptionResult;
  const decryptCAMELLIA192OFB: CAMELLIADecryptionResult;

  // CAMELLIA-256 Algorithm
  const encryptCAMELLIA256: CAMELLIAEncryptionResult;
  const decryptCAMELLIA256: CAMELLIADecryptionResult;

  const encryptCAMELLIA256CBC: CAMELLIAEncryptionResult;
  const decryptCAMELLIA256CBC: CAMELLIADecryptionResult;

  const encryptCAMELLIA256CFB: CAMELLIAEncryptionResult;
  const decryptCAMELLIA256CFB: CAMELLIADecryptionResult;

  const encryptCAMELLIA256CFB1: CAMELLIAEncryptionResult;
  const decryptCAMELLIA256CFB1: CAMELLIADecryptionResult;

  const encryptCAMELLIA256CFB8: CAMELLIAEncryptionResult;
  const decryptCAMELLIA256CFB8: CAMELLIADecryptionResult;

  const encryptCAMELLIA256CTR: CAMELLIAEncryptionResult;
  const decryptCAMELLIA256CTR: CAMELLIADecryptionResult;

  const encryptCAMELLIA256ECB: CAMELLIAEncryptionResult;
  const decryptCAMELLIA256ECB: CAMELLIADecryptionResult;

  const encryptCAMELLIA256OFB: CAMELLIAEncryptionResult;
  const decryptCAMELLIA256OFB: CAMELLIADecryptionResult;

  export {
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
    encryptCAMELLIA256OFB, decryptCAMELLIA256OFB
  };
}
