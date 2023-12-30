const assert = require("assert");
const { encrypt, decrypt } = require("../index");

/*********************************************************
 *                         SM4                           *
 *********************************************************/
describe("Encryption and Decryption data test using SM4", function () {
  // SM4 algorithm
  it("should encrypt and decrypt and decrypt data using SM4 algorithm", function () {
    const algorithm = "sm4";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4 algorithm with Base64", function () {
    const algorithm = "sm4";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4 algorithm with Binary", function () {
    const algorithm = "sm4";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4 algorithm with Hex", function () {
    const algorithm = "sm4";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4 algorithm with Zlib", function () {
    const algorithm = "sm4";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // SM4-CBC algorithm
  it("should encrypt and decrypt data using SM4-CBC algorithm", function () {
    const algorithm = "sm4-cbc";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-CBC algorithm with Base64", function () {
    const algorithm = "sm4-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-CBC algorithm with Binary", function () {
    const algorithm = "sm4-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-CBC algorithm with Hex", function () {
    const algorithm = "sm4-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-CBC algorithm with Zlib", function () {
    const algorithm = "sm4-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // SM4-CFB algorithm
  it("should encrypt and decrypt data using SM4-CFB algorithm", function () {
    const algorithm = "sm4-cfb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-CFB algorithm with Base64", function () {
    const algorithm = "sm4-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-CFB algorithm with Binary", function () {
    const algorithm = "sm4-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-CFB algorithm with Hex", function () {
    const algorithm = "sm4-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-CFB algorithm with Zlib", function () {
    const algorithm = "sm4-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // SM4-CTR algorithm
  it("should encrypt and decrypt data using SM4-CTR algorithm", function () {
    const algorithm = "sm4-ctr";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-CTR algorithm with Base64", function () {
    const algorithm = "sm4-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-CTR algorithm with Binary", function () {
    const algorithm = "sm4-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-CTR algorithm with Hex", function () {
    const algorithm = "sm4-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-CTR algorithm with Zlib", function () {
    const algorithm = "sm4-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // SM4-ECB algorithm
  it("should encrypt and decrypt data using SM4-ECB algorithm", function () {
    const algorithm = "sm4-ecb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-ECB algorithm with Base64", function () {
    const algorithm = "sm4-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-ECB algorithm with Binary", function () {
    const algorithm = "sm4-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-ECB algorithm with Hex", function () {
    const algorithm = "sm4-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-ECB algorithm with Zlib", function () {
    const algorithm = "sm4-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // SM4-OFB algorithm
  it("should encrypt and decrypt data using SM4-OFB algorithm", function () {
    const algorithm = "sm4-ofb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-OFB algorithm with Base64", function () {
    const algorithm = "sm4-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-OFB algorithm with Binary", function () {
    const algorithm = "sm4-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-OFB algorithm with Hex", function () {
    const algorithm = "sm4-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using SM4-OFB algorithm with Zlib", function () {
    const algorithm = "sm4-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });
});
