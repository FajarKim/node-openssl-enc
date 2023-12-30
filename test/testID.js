const assert = require("assert");
const { encrypt, decrypt } = require("../index");

/*********************************************************
 *                       ID-AES128                       *
 *********************************************************/
describe("Encryption and Decryption data test using ID-AES128", function () {
  // ID-AES128-CCM algorithm
  it("should encrypt and decrypt data using ID-AES128-CCM algorithm", function () {
    const algorithm = "id-aes128-ccm";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES128-CCM algorithm with Base64", function () {
    const algorithm = "id-aes128-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES128-CCM algorithm with Binary", function () {
    const algorithm = "id-aes128-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES128-CCM algorithm with Hex", function () {
    const algorithm = "id-aes128-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES128-CCM algorithm with Zlib", function () {
    const algorithm = "id-aes128-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ID-AES128-GCM algorithm
  it("should encrypt and decrypt data using ID-AES128-GCM algorithm", function () {
    const algorithm = "id-aes128-gcm";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES128-GCM algorithm with Base64", function () {
    const algorithm = "id-aes128-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES128-GCM algorithm with Binary", function () {
    const algorithm = "id-aes128-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES128-GCM algorithm with Hex", function () {
    const algorithm = "id-aes128-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES128-GCM algorithm with Zlib", function () {
    const algorithm = "id-aes128-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });
});

/*********************************************************
 *                       ID-AES192                       *
 *********************************************************/
describe("Encryption and Decryption data test using ID-AES192", function () {
  // ID-AES192-CCM algorithm
  it("should encrypt and decrypt data using ID-AES192-CCM algorithm", function () {
    const algorithm = "id-aes192-ccm";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES192-CCM algorithm with Base64", function () {
    const algorithm = "id-aes192-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES192-CCM algorithm with Binary", function () {
    const algorithm = "id-aes192-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES192-CCM algorithm with Hex", function () {
    const algorithm = "id-aes192-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES192-CCM algorithm with Zlib", function () {
    const algorithm = "id-aes192-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ID-AES192-GCM algorithm
  it("should encrypt and decrypt data using ID-AES192-GCM algorithm", function () {
    const algorithm = "id-aes192-gcm";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES192-GCM algorithm with Base64", function () {
    const algorithm = "id-aes192-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES192-GCM algorithm with Binary", function () {
    const algorithm = "id-aes192-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES192-GCM algorithm with Hex", function () {
    const algorithm = "id-aes192-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES192-GCM algorithm with Zlib", function () {
    const algorithm = "id-aes192-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });
});

/*********************************************************
 *                       ID-AES256                       *
 *********************************************************/
describe("Encryption and Decryption data test using ID-AES256", function () {
  // ID-AES256-CCM algorithm
  it("should encrypt and decrypt data using ID-AES256-CCM algorithm", function () {
    const algorithm = "id-aes256-ccm";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES256-CCM algorithm with Base64", function () {
    const algorithm = "id-aes256-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES256-CCM algorithm with Binary", function () {
    const algorithm = "id-aes256-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES256-CCM algorithm with Hex", function () {
    const algorithm = "id-aes256-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES256-CCM algorithm with Zlib", function () {
    const algorithm = "id-aes256-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ID-AES256-GCM algorithm
  it("should encrypt and decrypt data using ID-AES256-GCM algorithm", function () {
    const algorithm = "id-aes256-gcm";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES256-GCM algorithm with Base64", function () {
    const algorithm = "id-aes256-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES256-GCM algorithm with Binary", function () {
    const algorithm = "id-aes256-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES256-GCM algorithm with Hex", function () {
    const algorithm = "id-aes256-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ID-AES256-GCM algorithm with Zlib", function () {
    const algorithm = "id-aes256-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });
});
