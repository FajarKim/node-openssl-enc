const assert = require("assert");
const { encrypt, decrypt } = require("../index");

/*********************************************************
 *                      ARIA-128                         *
 *********************************************************/
describe("Encryption and Decryption data test using ARIA-128", function () {
  // ARIA128 algorithm
  it("should encrypt and decrypt data using ARIA128 algorithm", function () {
    const algorithm = "aria128";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA128 algorithm with Base64", function () {
    const algorithm = "aria128";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA128 algorithm with Binary", function () {
    const algorithm = "aria128";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA128 algorithm with Hex", function () {
    const algorithm = "aria128";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA128 algorithm with Zlib", function () {
    const algorithm = "aria128";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-128-CBC algorithm
  it("should encrypt and decrypt data using ARIA-128-CBC algorithm", function () {
    const algorithm = "aria-128-cbc";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CBC algorithm with Base64", function () {
    const algorithm = "aria-128-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CBC algorithm with Binary", function () {
    const algorithm = "aria-128-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CBC algorithm with Hex", function () {
    const algorithm = "aria-128-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CBC algorithm with Zlib", function () {
    const algorithm = "aria-128-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-128-CCM algorithm
  it("should encrypt and decrypt data using ARIA-128-CCM algorithm", function () {
    const algorithm = "aria-128-ccm";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CCM algorithm with Base64", function () {
    const algorithm = "aria-128-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CCM algorithm with Binary", function () {
    const algorithm = "aria-128-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CCM algorithm with Hex", function () {
    const algorithm = "aria-128-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CCM algorithm with Zlib", function () {
    const algorithm = "aria-128-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-128-CFB algorithm
  it("should encrypt and decrypt data using ARIA-128-CFB algorithm", function () {
    const algorithm = "aria-128-cfb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CFB algorithm with Base64", function () {
    const algorithm = "aria-128-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CFB algorithm with Binary", function () {
    const algorithm = "aria-128-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CFB algorithm with Hex", function () {
    const algorithm = "aria-128-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CFB algorithm with Zlib", function () {
    const algorithm = "aria-128-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-128-CFB1 algorithm
  it("should encrypt and decrypt data using ARIA-128-CFB1 algorithm", function () {
    const algorithm = "aria-128-cfb1";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CFB1 algorithm with Base64", function () {
    const algorithm = "aria-128-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CFB1 algorithm with Binary", function () {
    const algorithm = "aria-128-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CFB1 algorithm with Hex", function () {
    const algorithm = "aria-128-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CFB1 algorithm with Zlib", function () {
    const algorithm = "aria-128-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-128-CFB8 algorithm
  it("should encrypt and decrypt data using ARIA-128-CFB8 algorithm", function () {
    const algorithm = "aria-128-cfb8";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CFB8 algorithm with Base64", function () {
    const algorithm = "aria-128-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CFB8 algorithm with Binary", function () {
    const algorithm = "aria-128-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CFB8 algorithm with Hex", function () {
    const algorithm = "aria-128-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CFB8 algorithm with Zlib", function () {
    const algorithm = "aria-128-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-128-CTR algorithm
  it("should encrypt and decrypt data using ARIA-128-CTR algorithm", function () {
    const algorithm = "aria-128-ctr";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CTR algorithm with Base64", function () {
    const algorithm = "aria-128-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CTR algorithm with Binary", function () {
    const algorithm = "aria-128-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CTR algorithm with Hex", function () {
    const algorithm = "aria-128-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-CTR algorithm with Zlib", function () {
    const algorithm = "aria-128-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-128-ECB algorithm
  it("should encrypt and decrypt data using ARIA-128-ECB algorithm", function () {
    const algorithm = "aria-128-ecb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-ECB algorithm with Base64", function () {
    const algorithm = "aria-128-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-ECB algorithm with Binary", function () {
    const algorithm = "aria-128-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-ECB algorithm with Hex", function () {
    const algorithm = "aria-128-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-ECB algorithm with Zlib", function () {
    const algorithm = "aria-128-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-128-GCM algorithm
  it("should encrypt and decrypt data using ARIA-128-GCM algorithm", function () {
    const algorithm = "aria-128-gcm";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-GCM algorithm with Base64", function () {
    const algorithm = "aria-128-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-GCM algorithm with Binary", function () {
    const algorithm = "aria-128-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-GCM algorithm with Hex", function () {
    const algorithm = "aria-128-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-GCM algorithm with Zlib", function () {
    const algorithm = "aria-128-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-128-OFB algorithm
  it("should encrypt and decrypt data using ARIA-128-OFB algorithm", function () {
    const algorithm = "aria-128-ofb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-OFB algorithm with Base64", function () {
    const algorithm = "aria-128-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-OFB algorithm with Binary", function () {
    const algorithm = "aria-128-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-OFB algorithm with Hex", function () {
    const algorithm = "aria-128-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-128-OFB algorithm with Zlib", function () {
    const algorithm = "aria-128-ofb";
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
 *                      ARIA-192                         *
 *********************************************************/
describe("Encryption and Decryption data test using ARIA-192", function () {
  // ARIA192 algorithm
  it("should encrypt and decrypt data using ARIA192 algorithm", function () {
    const algorithm = "aria192";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA192 algorithm with Base64", function () {
    const algorithm = "aria192";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA192 algorithm with Binary", function () {
    const algorithm = "aria192";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA192 algorithm with Hex", function () {
    const algorithm = "aria192";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA192 algorithm with Zlib", function () {
    const algorithm = "aria192";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-192-CBC algorithm
  it("should encrypt and decrypt data using ARIA-192-CBC algorithm", function () {
    const algorithm = "aria-192-cbc";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CBC algorithm with Base64", function () {
    const algorithm = "aria-192-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CBC algorithm with Binary", function () {
    const algorithm = "aria-192-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CBC algorithm with Hex", function () {
    const algorithm = "aria-192-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CBC algorithm with Zlib", function () {
    const algorithm = "aria-192-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-192-CCM algorithm
  it("should encrypt and decrypt data using ARIA-192-CCM algorithm", function () {
    const algorithm = "aria-192-ccm";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CCM algorithm with Base64", function () {
    const algorithm = "aria-192-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CCM algorithm with Binary", function () {
    const algorithm = "aria-192-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CCM algorithm with Hex", function () {
    const algorithm = "aria-192-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CCM algorithm with Zlib", function () {
    const algorithm = "aria-192-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-192-CFB algorithm
  it("should encrypt and decrypt data using ARIA-192-CFB algorithm", function () {
    const algorithm = "aria-192-cfb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CFB algorithm with Base64", function () {
    const algorithm = "aria-192-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CFB algorithm with Binary", function () {
    const algorithm = "aria-192-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CFB algorithm with Hex", function () {
    const algorithm = "aria-192-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CFB algorithm with Zlib", function () {
    const algorithm = "aria-192-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-192-CFB1 algorithm
  it("should encrypt and decrypt data using ARIA-192-CFB1 algorithm", function () {
    const algorithm = "aria-192-cfb1";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CFB1 algorithm with Base64", function () {
    const algorithm = "aria-192-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CFB1 algorithm with Binary", function () {
    const algorithm = "aria-192-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CFB1 algorithm with Hex", function () {
    const algorithm = "aria-192-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CFB1 algorithm with Zlib", function () {
    const algorithm = "aria-192-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-192-CFB8 algorithm
  it("should encrypt and decrypt data using ARIA-192-CFB8 algorithm", function () {
    const algorithm = "aria-192-cfb8";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CFB8 algorithm with Base64", function () {
    const algorithm = "aria-192-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CFB8 algorithm with Binary", function () {
    const algorithm = "aria-192-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CFB8 algorithm with Hex", function () {
    const algorithm = "aria-192-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CFB8 algorithm with Zlib", function () {
    const algorithm = "aria-192-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-192-CTR algorithm
  it("should encrypt and decrypt data using ARIA-192-CTR algorithm", function () {
    const algorithm = "aria-192-ctr";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CTR algorithm with Base64", function () {
    const algorithm = "aria-192-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CTR algorithm with Binary", function () {
    const algorithm = "aria-192-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CTR algorithm with Hex", function () {
    const algorithm = "aria-192-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-CTR algorithm with Zlib", function () {
    const algorithm = "aria-192-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-192-ECB algorithm
  it("should encrypt and decrypt data using ARIA-192-ECB algorithm", function () {
    const algorithm = "aria-192-ecb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-ECB algorithm with Base64", function () {
    const algorithm = "aria-192-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-ECB algorithm with Binary", function () {
    const algorithm = "aria-192-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-ECB algorithm with Hex", function () {
    const algorithm = "aria-192-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-ECB algorithm with Zlib", function () {
    const algorithm = "aria-192-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-192-GCM algorithm
  it("should encrypt and decrypt data using ARIA-192-GCM algorithm", function () {
    const algorithm = "aria-192-gcm";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-GCM algorithm with Base64", function () {
    const algorithm = "aria-192-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-GCM algorithm with Binary", function () {
    const algorithm = "aria-192-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-GCM algorithm with Hex", function () {
    const algorithm = "aria-192-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-GCM algorithm with Zlib", function () {
    const algorithm = "aria-192-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-192-OFB algorithm
  it("should encrypt and decrypt data using ARIA-192-OFB algorithm", function () {
    const algorithm = "aria-192-ofb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-OFB algorithm with Base64", function () {
    const algorithm = "aria-192-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-OFB algorithm with Binary", function () {
    const algorithm = "aria-192-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-OFB algorithm with Hex", function () {
    const algorithm = "aria-192-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-192-OFB algorithm with Zlib", function () {
    const algorithm = "aria-192-ofb";
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
 *                      ARIA-256                         *
 *********************************************************/
describe("Encryption and Decryption data test using ARIA-256", function () {
  // ARIA256 algorithm
  it("should encrypt and decrypt data using ARIA256 algorithm", function () {
    const algorithm = "aria256";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA256 algorithm with Base64", function () {
    const algorithm = "aria256";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA256 algorithm with Binary", function () {
    const algorithm = "aria256";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA256 algorithm with Hex", function () {
    const algorithm = "aria256";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA256 algorithm with Zlib", function () {
    const algorithm = "aria256";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-256-CBC algorithm
  it("should encrypt and decrypt data using ARIA-256-CBC algorithm", function () {
    const algorithm = "aria-256-cbc";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CBC algorithm with Base64", function () {
    const algorithm = "aria-256-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CBC algorithm with Binary", function () {
    const algorithm = "aria-256-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CBC algorithm with Hex", function () {
    const algorithm = "aria-256-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CBC algorithm with Zlib", function () {
    const algorithm = "aria-256-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-256-CCM algorithm
  it("should encrypt and decrypt data using ARIA-256-CCM algorithm", function () {
    const algorithm = "aria-256-ccm";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CCM algorithm with Base64", function () {
    const algorithm = "aria-256-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CCM algorithm with Binary", function () {
    const algorithm = "aria-256-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CCM algorithm with Hex", function () {
    const algorithm = "aria-256-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CCM algorithm with Zlib", function () {
    const algorithm = "aria-256-ccm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-256-CFB algorithm
  it("should encrypt and decrypt data using ARIA-256-CFB algorithm", function () {
    const algorithm = "aria-256-cfb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CFB algorithm with Base64", function () {
    const algorithm = "aria-256-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CFB algorithm with Binary", function () {
    const algorithm = "aria-256-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CFB algorithm with Hex", function () {
    const algorithm = "aria-256-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CFB algorithm with Zlib", function () {
    const algorithm = "aria-256-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-256-CFB1 algorithm
  it("should encrypt and decrypt data using ARIA-256-CFB1 algorithm", function () {
    const algorithm = "aria-256-cfb1";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CFB1 algorithm with Base64", function () {
    const algorithm = "aria-256-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CFB1 algorithm with Binary", function () {
    const algorithm = "aria-256-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CFB1 algorithm with Hex", function () {
    const algorithm = "aria-256-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CFB1 algorithm with Zlib", function () {
    const algorithm = "aria-256-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-256-CFB8 algorithm
  it("should encrypt and decrypt data using ARIA-256-CFB8 algorithm", function () {
    const algorithm = "aria-256-cfb8";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CFB8 algorithm with Base64", function () {
    const algorithm = "aria-256-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CFB8 algorithm with Binary", function () {
    const algorithm = "aria-256-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CFB8 algorithm with Hex", function () {
    const algorithm = "aria-256-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CFB8 algorithm with Zlib", function () {
    const algorithm = "aria-256-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-256-CTR algorithm
  it("should encrypt and decrypt data using ARIA-256-CTR algorithm", function () {
    const algorithm = "aria-256-ctr";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CTR algorithm with Base64", function () {
    const algorithm = "aria-256-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CTR algorithm with Binary", function () {
    const algorithm = "aria-256-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CTR algorithm with Hex", function () {
    const algorithm = "aria-256-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-CTR algorithm with Zlib", function () {
    const algorithm = "aria-256-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-256-ECB algorithm
  it("should encrypt and decrypt data using ARIA-256-ECB algorithm", function () {
    const algorithm = "aria-256-ecb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-ECB algorithm with Base64", function () {
    const algorithm = "aria-256-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-ECB algorithm with Binary", function () {
    const algorithm = "aria-256-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-ECB algorithm with Hex", function () {
    const algorithm = "aria-256-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-ECB algorithm with Zlib", function () {
    const algorithm = "aria-256-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-256-GCM algorithm
  it("should encrypt and decrypt data using ARIA-256-GCM algorithm", function () {
    const algorithm = "aria-256-gcm";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-GCM algorithm with Base64", function () {
    const algorithm = "aria-256-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-GCM algorithm with Binary", function () {
    const algorithm = "aria-256-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-GCM algorithm with Hex", function () {
    const algorithm = "aria-256-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-GCM algorithm with Zlib", function () {
    const algorithm = "aria-256-gcm";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // ARIA-256-OFB algorithm
  it("should encrypt and decrypt data using ARIA-256-OFB algorithm", function () {
    const algorithm = "aria-256-ofb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-OFB algorithm with Base64", function () {
    const algorithm = "aria-256-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-OFB algorithm with Binary", function () {
    const algorithm = "aria-256-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-OFB algorithm with Hex", function () {
    const algorithm = "aria-256-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using ARIA-256-OFB algorithm with Zlib", function () {
    const algorithm = "aria-256-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });
});
