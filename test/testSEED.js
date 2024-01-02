const assert = require("assert");
const { encrypt, decrypt } = require("../index");

/*********************************************************
 *                         SEED                          *
 *********************************************************/
describe("Encryption and Decryption data test using SEED", function () {
  // SEED algorithm
  it("should encrypt and decrypt data using SEED algorithm", function () {
    const algorithm = "seed";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED algorithm with Base64", function () {
    const algorithm = "seed";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED algorithm with Binary", function () {
    const algorithm = "seed";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED algorithm with Hex", function () {
    const algorithm = "seed";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED algorithm with Zlib", function () {
    const algorithm = "seed";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // SEED-CBC algorithm
  it("should encrypt and decrypt data using SEED-CBC algorithm", function () {
    const algorithm = "seed-cbc";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED-CBC algorithm with Base64", function () {
    const algorithm = "seed-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED-CBC algorithm with Binary", function () {
    const algorithm = "seed-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED-CBC algorithm with Hex", function () {
    const algorithm = "seed-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED-CBC algorithm with Zlib", function () {
    const algorithm = "seed-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // SEED-CFB algorithm
  it("should encrypt and decrypt data using SEED-CFB algorithm", function () {
    const algorithm = "seed-cfb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED-CFB algorithm with Base64", function () {
    const algorithm = "seed-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED-CFB algorithm with Binary", function () {
    const algorithm = "seed-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED-CFB algorithm with Hex", function () {
    const algorithm = "seed-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED-CFB algorithm with Zlib", function () {
    const algorithm = "seed-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // SEED-ECB algorithm
  it("should encrypt and decrypt data using SEED-ECB algorithm", function () {
    const algorithm = "seed-ecb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED-ECB algorithm with Base64", function () {
    const algorithm = "seed-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED-ECB algorithm with Binary", function () {
    const algorithm = "seed-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED-ECB algorithm with Hex", function () {
    const algorithm = "seed-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED-ECB algorithm with Zlib", function () {
    const algorithm = "seed-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // SEED-OFB algorithm
  it("should encrypt and decrypt data using SEED-OFB algorithm", function () {
    const algorithm = "seed-ofb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED-OFB algorithm with Base64", function () {
    const algorithm = "seed-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED-OFB algorithm with Binary", function () {
    const algorithm = "seed-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED-OFB algorithm with Hex", function () {
    const algorithm = "seed-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt data using SEED-OFB algorithm with Zlib", function () {
    const algorithm = "seed-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });
});
