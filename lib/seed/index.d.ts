declare module "lib/seed" {
  interface SEEDEncryptionResult {
    (data: Buffer | string, password: string, extra?: string | null): Buffer | string;
  }

  interface SEEDDecryptionResult {
    (encryptedData: Buffer | string, password: string, extra?: string | null): Buffer | string;
  }

  // SEED Algorithm
  const encryptSEED: SEEDEncryptionResult;
  const decryptSEED: SEEDDecryptionResult;

  const encryptSEEDCBC: SEEDEncryptionResult;
  const decryptSEEDCBC: SEEDDecryptionResult;

  const encryptSEEDCFB: SEEDEncryptionResult;
  const decryptSEEDCFB: SEEDDecryptionResult;

  const encryptSEEDECB: SEEDEncryptionResult;
  const decryptSEEDECB: SEEDDecryptionResult;

  const encryptSEEDOFB: SEEDEncryptionResult;
  const decryptSEEDOFB: SEEDDecryptionResult;

  export {
    SEEDEncryptionResult, SEEDDecryptionResult,
    encryptSEED, decryptSEED,
    encryptSEEDCBC, decryptSEEDCBC,
    encryptSEEDCFB, decryptSEEDCFB,
    encryptSEEDECB, decryptSEEDECB,
    encryptSEEDOFB, decryptSEEDOFB
  };
}
