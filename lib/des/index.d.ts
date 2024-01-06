declare module "lib/des" {
  interface DESEncryptionResult {
    (data: Buffer | string, password: string, extra?: string | null): Buffer | string;
  }

  interface DESDecryptionResult {
    (encryptedData: Buffer | string, password: string, extra?: string | null): Buffer | string;
  }

  // DES Algorithm
  const encryptDES: DESEncryptionResult;
  const decryptDES: DESDecryptionResult;

  const encryptDESCBC: DESEncryptionResult;
  const decryptDESCBC: DESDecryptionResult;

  const encryptDESCFB: DESEncryptionResult;
  const decryptDESCFB: DESDecryptionResult;

  const encryptDESCFB1: DESEncryptionResult;
  const decryptDESCFB1: DESDecryptionResult;

  const encryptDESCFB8: DESEncryptionResult;
  const decryptDESCFB8: DESDecryptionResult;

  const encryptDESECB: DESEncryptionResult;
  const decryptDESECB: DESDecryptionResult;

  const encryptDESOFB: DESEncryptionResult;
  const decryptDESOFB: DESDecryptionResult;

  // DES-EDE Algorithm
  const encryptDESEDE: DESEncryptionResult;
  const decryptDESEDE: DESDecryptionResult;

  const encryptDESEDECBC: DESEncryptionResult;
  const decryptDESEDECBC: DESDecryptionResult;

  const encryptDESEDECFB: DESEncryptionResult;
  const decryptDESEDECFB: DESDecryptionResult;

  const encryptDESEDEECB: DESEncryptionResult;
  const decryptDESEDEECB: DESDecryptionResult;

  const encryptDESEDEOFB: DESEncryptionResult;
  const decryptDESEDEOFB: DESDecryptionResult;

  // DES-EDE3 Algorithm
  const encryptDESEDE3: DESEncryptionResult;
  const decryptDESEDE3: DESDecryptionResult;

  const encryptDESEDE3CBC: DESEncryptionResult;
  const decryptDESEDE3CBC: DESDecryptionResult;

  const encryptDESEDE3CFB: DESEncryptionResult;
  const decryptDESEDE3CFB: DESDecryptionResult;

  const encryptDESEDE3CFB1: DESEncryptionResult;
  const decryptDESEDE3CFB1: DESDecryptionResult;

  const encryptDESEDE3CFB8: DESEncryptionResult;
  const decryptDESEDE3CFB8: DESDecryptionResult;

  const encryptDESEDE3ECB: DESEncryptionResult;
  const decryptDESEDE3ECB: DESDecryptionResult;

  const encryptDESEDE3OFB: DESEncryptionResult;
  const decryptDESEDE3OFB: DESDecryptionResult;

  // DES3 Algorithm
  const encryptDES3: DESEncryptionResult;
  const decryptDES3: DESDecryptionResult;

  // DESX Algorithm
  const encryptDESX: DESEncryptionResult;
  const decryptDESX: DESDecryptionResult;

  const encryptDESXCBC: DESEncryptionResult;
  const decryptDESXCBC: DESDecryptionResult;

  export {
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
    encryptDESXCBC, decryptDESXCBC
  };
}
