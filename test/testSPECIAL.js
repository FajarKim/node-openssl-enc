const assert = require("assert");
const {
  encryptBase64, decryptBase64,
  encryptZlib, decryptZlib
} = require("../index");

/*********************************************************
 *                       BASE64                          *
 *********************************************************/
describe("Encryption and Decryption Special data test using BASE64", function () {
  it("should encrypt and decryption data using BASE64", function () {
    const data = "Hello, World!";

    const encryptedData = encryptBase64(data);
    const decryptedData = decryptBase64(encryptedData);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });
});

/*********************************************************
 *                        ZLIB                           *
 *********************************************************/
describe("Encryption and Decryption Special data test using ZLIB", function () {
  it("should encrypt and decryption data using ZLIB", function () {
    const data = "Hello, World!";

    const encryptedData = encryptZlib(data);
    const decryptedData = decryptZlib(encryptedData);

    assert.ok(encryptedData);
    assert.ok(decryptedData);
  });
});
