declare module "lib/sm4" {
  interface SM4EncryptionResult {
    (data: Buffer | string, password: string, extra?: string | null): Buffer | string;
  }

  interface SM4DecryptionResult {
    (encryptedData: Buffer | string, password: string, extra?: string | null): Buffer | string;
  }

  // SM4 Algorithm
  const encryptSM4: SM4EncryptionResult;
  const decryptSM4: SM4DecryptionResult;

  const encryptSM4CBC: SM4EncryptionResult;
  const decryptSM4CBC: SM4DecryptionResult;

  const encryptSM4CFB: SM4EncryptionResult;
  const decryptSM4CFB: SM4DecryptionResult;

  const encryptSM4CTR: SM4EncryptionResult;
  const decryptSM4CTR: SM4DecryptionResult;

  const encryptSM4ECB: SM4EncryptionResult;
  const decryptSM4ECB: SM4DecryptionResult;

  const encryptSM4OFB: SM4EncryptionResult;
  const decryptSM4OFB: SM4DecryptionResult;

  export {
    SM4EncryptionResult, SM4DecryptionResult,
    encryptSM4, decryptSM4,
    encryptSM4CBC, decryptSM4CBC,
    encryptSM4CFB, decryptSM4CFB,
    encryptSM4CTR, decryptSM4CTR,
    encryptSM4ECB, decryptSM4ECB,
    encryptSM4OFB, decryptSM4OFB
  };
}
