const assert = require("assert");
const { encrypt, decrypt, algorithmSupported } = require("../index");

for (let i = 0; i < algorithmSupported.length; i += 1) {
  const cipher = algorithmSupported[i];

  describe(`Encryption and Decryption data test using ${cipher.toUpperCase()}`, function () {
    it(`should encrypt and decrypt data using ${cipher.toUpperCase()} algorithm`, function () {
      const algorithm = cipher;
      const data = "Hello, World!";
      const password = "secret";

      const encryptedData = encrypt(algorithm, data, password);
      const decryptedData = decrypt(algorithm, encryptedData, password);

      assert.ok(encryptedData);
      assert.ok(decryptedData);
    });

    it(`should encrypt and decrypt data using ${cipher.toUpperCase()} algorithm with Base64`, function () {
      const algorithm = cipher;
      const data = "Hello, World!";
      const password = "secret";
      const extra = "base64";

      const encryptedData = encrypt(algorithm, data, password, extra);
      const decryptedData = decrypt(algorithm, encryptedData, password, extra);

      assert.ok(encryptedData);
      assert.ok(decryptedData);
    });

    it(`should encrypt and decrypt data using ${cipher.toUpperCase()} algorithm with Binary`, function () {
      const algorithm = cipher;
      const data = "Hello, World!";
      const password = "secret";
      const extra = "binary";

      const encryptedData = encrypt(algorithm, data, password);
      const decryptedData = decrypt(algorithm, encryptedData, password);

      assert.ok(encryptedData);
      assert.ok(decryptedData);
    });

    it(`should encrypt and decrypt data using ${cipher.toUpperCase()} algorithm with Hex`, function () {
      const algorithm = cipher;
      const data = "Hello, World!";
      const password = "secret";
      const extra = "hex";

      const encryptedData = encrypt(algorithm, data, password);
      const decryptedData = decrypt(algorithm, encryptedData, password);

      assert.ok(encryptedData);
      assert.ok(decryptedData);
    });

    it(`should encrypt and decrypt data using ${cipher.toUpperCase()} algorithm with Zlib`, function () {
      const algorithm = cipher;
      const data = "Hello, World!";
      const password = "secret";
      const extra = "zlib";

      const encryptedData = encrypt(algorithm, data, password);
      const decryptedData = decrypt(algorithm, encryptedData, password);

      assert.ok(encryptedData);
      assert.ok(decryptedData);
    });
  });
}
