declare module "lib/id" {
  interface IDAESEncryptionResult {
    (data: Buffer | string, password: string, extra?: string | null): Buffer | string;
  }

  interface IDAESDecryptionResult {
    (encryptedData: Buffer | string, password: string, extra?: string | null): Buffer | string;
  }

  // ID-AES-128
  const encryptIDAES128CCM: IDAESEncryptionResult;
  const decryptIDAES128CCM: IDAESDecryptionResult;

  const encryptIDAES128GCM: IDAESEncryptionResult;
  const decryptIDAES128GCM: IDAESDecryptionResult;

  // ID-AES-192
  const encryptIDAES192CCM: IDAESEncryptionResult;
  const decryptIDAES192CCM: IDAESDecryptionResult;

  const encryptIDAES192GCM: IDAESEncryptionResult;
  const decryptIDAES192GCM: IDAESDecryptionResult;

  // ID-AES-256
  const encryptIDAES256CCM: IDAESEncryptionResult;
  const decryptIDAES256CCM: IDAESDecryptionResult;

  const encryptIDAES256GCM: IDAESEncryptionResult;
  const decryptIDAES256GCM: IDAESDecryptionResult;

  export {
    IDAESEncryptionResult, IDAESDecryptionResult,
    encryptIDAES128CCM, decryptIDAES128CCM,
    encryptIDAES128GCM, decryptIDAES128GCM,
    encryptIDAES192CCM, decryptIDAES192CCM,
    encryptIDAES192GCM, decryptIDAES192GCM,
    encryptIDAES256CCM, decryptIDAES256CCM,
    encryptIDAES256GCM, decryptIDAES256GCM
  };
}
