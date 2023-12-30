const assert = require("assert");
const { encrypt, decrypt } = require("../index");

/*********************************************************
 *                     CAMELLIA-128                      *
 *********************************************************/
describe("Encryption and Decryption data test using CAMELLIA-128", function () {
  // CAMELLIA128 algorithm
  it("should encrypt and decrypt and decrypt data using CAMELLIA128 algorithm", function () {
    const algorithm = "camellia128";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA128 algorithm with Base64", function () {
    const algorithm = "camellia128";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA128 algorithm with Binary", function () {
    const algorithm = "camellia128";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA128 algorithm with Hex", function () {
    const algorithm = "camellia128";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA128 algorithm with Zlib", function () {
    const algorithm = "camellia128";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-128-CBC algorithm
  it("should encrypt and decrypt data using CAMELLIA-128-CBC algorithm", function () {
    const algorithm = "camellia-128-cbc";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CBC algorithm with Base64", function () {
    const algorithm = "camellia-128-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CBC algorithm with Binary", function () {
    const algorithm = "camellia-128-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CBC algorithm with Hex", function () {
    const algorithm = "camellia-128-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CBC algorithm with Zlib", function () {
    const algorithm = "camellia-128-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-128-CFB algorithm
  it("should encrypt and decrypt data using CAMELLIA-128-CFB algorithm", function () {
    const algorithm = "camellia-128-cfb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CFB algorithm with Base64", function () {
    const algorithm = "camellia-128-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CFB algorithm with Binary", function () {
    const algorithm = "camellia-128-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CFB algorithm with Hex", function () {
    const algorithm = "camellia-128-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CFB algorithm with Zlib", function () {
    const algorithm = "camellia-128-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-128-CFB1 algorithm
  it("should encrypt and decrypt data using CAMELLIA-128-CFB1 algorithm", function () {
    const algorithm = "camellia-128-cfb1";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CFB1 algorithm with Base64", function () {
    const algorithm = "camellia-128-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CFB1 algorithm with Binary", function () {
    const algorithm = "camellia-128-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CFB1 algorithm with Hex", function () {
    const algorithm = "camellia-128-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CFB1 algorithm with Zlib", function () {
    const algorithm = "camellia-128-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-128-CFB8 algorithm
  it("should encrypt and decrypt data using CAMELLIA-128-CFB8 algorithm", function () {
    const algorithm = "camellia-128-cfb8";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CFB8 algorithm with Base64", function () {
    const algorithm = "camellia-128-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CFB8 algorithm with Binary", function () {
    const algorithm = "camellia-128-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CFB8 algorithm with Hex", function () {
    const algorithm = "camellia-128-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CFB8 algorithm with Zlib", function () {
    const algorithm = "camellia-128-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-128-CTR algorithm
  it("should encrypt and decrypt data using CAMELLIA-128-CTR algorithm", function () {
    const algorithm = "camellia-128-ctr";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CTR algorithm with Base64", function () {
    const algorithm = "camellia-128-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CTR algorithm with Binary", function () {
    const algorithm = "camellia-128-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CTR algorithm with Hex", function () {
    const algorithm = "camellia-128-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-CTR algorithm with Zlib", function () {
    const algorithm = "camellia-128-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-128-ECB algorithm
  it("should encrypt and decrypt data using CAMELLIA-128-ECB algorithm", function () {
    const algorithm = "camellia-128-ecb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-ECB algorithm with Base64", function () {
    const algorithm = "camellia-128-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-ECB algorithm with Binary", function () {
    const algorithm = "camellia-128-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-ECB algorithm with Hex", function () {
    const algorithm = "camellia-128-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-ECB algorithm with Zlib", function () {
    const algorithm = "camellia-128-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-128-OFB algorithm
  it("should encrypt and decrypt data using CAMELLIA-128-OFB algorithm", function () {
    const algorithm = "camellia-128-ofb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-OFB algorithm with Base64", function () {
    const algorithm = "camellia-128-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-OFB algorithm with Binary", function () {
    const algorithm = "camellia-128-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-OFB algorithm with Hex", function () {
    const algorithm = "camellia-128-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-128-OFB algorithm with Zlib", function () {
    const algorithm = "camellia-128-ofb";
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
 *                     CAMELLIA-192                      *
 *********************************************************/
describe("Encryption and Decryption data test using CAMELLIA-192", function () {
  // CAMELLIA192 algorithm
  it("should encrypt and decrypt and decrypt data using CAMELLIA192 algorithm", function () {
    const algorithm = "camellia192";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA192 algorithm with Base64", function () {
    const algorithm = "camellia192";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA192 algorithm with Binary", function () {
    const algorithm = "camellia192";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA192 algorithm with Hex", function () {
    const algorithm = "camellia192";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA192 algorithm with Zlib", function () {
    const algorithm = "camellia192";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-192-CBC algorithm
  it("should encrypt and decrypt data using CAMELLIA-192-CBC algorithm", function () {
    const algorithm = "camellia-192-cbc";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CBC algorithm with Base64", function () {
    const algorithm = "camellia-192-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CBC algorithm with Binary", function () {
    const algorithm = "camellia-192-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CBC algorithm with Hex", function () {
    const algorithm = "camellia-192-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CBC algorithm with Zlib", function () {
    const algorithm = "camellia-192-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-192-CFB algorithm
  it("should encrypt and decrypt data using CAMELLIA-192-CFB algorithm", function () {
    const algorithm = "camellia-192-cfb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CFB algorithm with Base64", function () {
    const algorithm = "camellia-192-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CFB algorithm with Binary", function () {
    const algorithm = "camellia-192-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CFB algorithm with Hex", function () {
    const algorithm = "camellia-192-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CFB algorithm with Zlib", function () {
    const algorithm = "camellia-192-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-192-CFB1 algorithm
  it("should encrypt and decrypt data using CAMELLIA-192-CFB1 algorithm", function () {
    const algorithm = "camellia-192-cfb1";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CFB1 algorithm with Base64", function () {
    const algorithm = "camellia-192-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CFB1 algorithm with Binary", function () {
    const algorithm = "camellia-192-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CFB1 algorithm with Hex", function () {
    const algorithm = "camellia-192-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CFB1 algorithm with Zlib", function () {
    const algorithm = "camellia-192-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-192-CFB8 algorithm
  it("should encrypt and decrypt data using CAMELLIA-192-CFB8 algorithm", function () {
    const algorithm = "camellia-192-cfb8";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CFB8 algorithm with Base64", function () {
    const algorithm = "camellia-192-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CFB8 algorithm with Binary", function () {
    const algorithm = "camellia-192-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CFB8 algorithm with Hex", function () {
    const algorithm = "camellia-192-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CFB8 algorithm with Zlib", function () {
    const algorithm = "camellia-192-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-192-CTR algorithm
  it("should encrypt and decrypt data using CAMELLIA-192-CTR algorithm", function () {
    const algorithm = "camellia-192-ctr";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CTR algorithm with Base64", function () {
    const algorithm = "camellia-192-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CTR algorithm with Binary", function () {
    const algorithm = "camellia-192-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CTR algorithm with Hex", function () {
    const algorithm = "camellia-192-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-CTR algorithm with Zlib", function () {
    const algorithm = "camellia-192-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-192-ECB algorithm
  it("should encrypt and decrypt data using CAMELLIA-192-ECB algorithm", function () {
    const algorithm = "camellia-192-ecb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-ECB algorithm with Base64", function () {
    const algorithm = "camellia-192-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-ECB algorithm with Binary", function () {
    const algorithm = "camellia-192-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-ECB algorithm with Hex", function () {
    const algorithm = "camellia-192-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-ECB algorithm with Zlib", function () {
    const algorithm = "camellia-192-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-192-OFB algorithm
  it("should encrypt and decrypt data using CAMELLIA-192-OFB algorithm", function () {
    const algorithm = "camellia-192-ofb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-OFB algorithm with Base64", function () {
    const algorithm = "camellia-192-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-OFB algorithm with Binary", function () {
    const algorithm = "camellia-192-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-OFB algorithm with Hex", function () {
    const algorithm = "camellia-192-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-192-OFB algorithm with Zlib", function () {
    const algorithm = "camellia-192-ofb";
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
 *                     CAMELLIA-256                      *
 *********************************************************/
describe("Encryption and Decryption data test using CAMELLIA-256", function () {
  // CAMELLIA256 algorithm
  it("should encrypt and decrypt and decrypt data using CAMELLIA256 algorithm", function () {
    const algorithm = "camellia256";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA256 algorithm with Base64", function () {
    const algorithm = "camellia256";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA256 algorithm with Binary", function () {
    const algorithm = "camellia256";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA256 algorithm with Hex", function () {
    const algorithm = "camellia256";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA256 algorithm with Zlib", function () {
    const algorithm = "camellia256";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-256-CBC algorithm
  it("should encrypt and decrypt data using CAMELLIA-256-CBC algorithm", function () {
    const algorithm = "camellia-256-cbc";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CBC algorithm with Base64", function () {
    const algorithm = "camellia-256-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CBC algorithm with Binary", function () {
    const algorithm = "camellia-256-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CBC algorithm with Hex", function () {
    const algorithm = "camellia-256-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CBC algorithm with Zlib", function () {
    const algorithm = "camellia-256-cbc";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-256-CFB algorithm
  it("should encrypt and decrypt data using CAMELLIA-256-CFB algorithm", function () {
    const algorithm = "camellia-256-cfb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CFB algorithm with Base64", function () {
    const algorithm = "camellia-256-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CFB algorithm with Binary", function () {
    const algorithm = "camellia-256-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CFB algorithm with Hex", function () {
    const algorithm = "camellia-256-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CFB algorithm with Zlib", function () {
    const algorithm = "camellia-256-cfb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-256-CFB1 algorithm
  it("should encrypt and decrypt data using CAMELLIA-256-CFB1 algorithm", function () {
    const algorithm = "camellia-256-cfb1";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CFB1 algorithm with Base64", function () {
    const algorithm = "camellia-256-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CFB1 algorithm with Binary", function () {
    const algorithm = "camellia-256-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CFB1 algorithm with Hex", function () {
    const algorithm = "camellia-256-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CFB1 algorithm with Zlib", function () {
    const algorithm = "camellia-256-cfb1";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-256-CFB8 algorithm
  it("should encrypt and decrypt data using CAMELLIA-256-CFB8 algorithm", function () {
    const algorithm = "camellia-256-cfb8";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CFB8 algorithm with Base64", function () {
    const algorithm = "camellia-256-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CFB8 algorithm with Binary", function () {
    const algorithm = "camellia-256-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CFB8 algorithm with Hex", function () {
    const algorithm = "camellia-256-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CFB8 algorithm with Zlib", function () {
    const algorithm = "camellia-256-cfb8";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-256-CTR algorithm
  it("should encrypt and decrypt data using CAMELLIA-256-CTR algorithm", function () {
    const algorithm = "camellia-256-ctr";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CTR algorithm with Base64", function () {
    const algorithm = "camellia-256-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CTR algorithm with Binary", function () {
    const algorithm = "camellia-256-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CTR algorithm with Hex", function () {
    const algorithm = "camellia-256-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-CTR algorithm with Zlib", function () {
    const algorithm = "camellia-256-ctr";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-256-ECB algorithm
  it("should encrypt and decrypt data using CAMELLIA-256-ECB algorithm", function () {
    const algorithm = "camellia-256-ecb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-ECB algorithm with Base64", function () {
    const algorithm = "camellia-256-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-ECB algorithm with Binary", function () {
    const algorithm = "camellia-256-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-ECB algorithm with Hex", function () {
    const algorithm = "camellia-256-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-ECB algorithm with Zlib", function () {
    const algorithm = "camellia-256-ecb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  // CAMELLIA-256-OFB algorithm
  it("should encrypt and decrypt data using CAMELLIA-256-OFB algorithm", function () {
    const algorithm = "camellia-256-ofb";
    const data = "Hello, World!";
    const password = "secret";

    const encryptedData = encrypt(algorithm, data, password);
    const decryptedData = decrypt(algorithm, encryptedData, password);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-OFB algorithm with Base64", function () {
    const algorithm = "camellia-256-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "base64";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-OFB algorithm with Binary", function () {
    const algorithm = "camellia-256-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "binary";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-OFB algorithm with Hex", function () {
    const algorithm = "camellia-256-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "hex";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });

  it("should encrypt and decrypt and decrypt data using CAMELLIA-256-OFB algorithm with Zlib", function () {
    const algorithm = "camellia-256-ofb";
    const data = "Hello, World!";
    const password = "secret";
    const extra = "zlib";

    const encryptedData = encrypt(algorithm, data, password, extra);
    const decryptedData = decrypt(algorithm, encryptedData, password, extra);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });
});
