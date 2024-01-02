const assert = require("assert");
const { decrypt } = require("../../index");

/*********************************************************
 *                         SM4                           *
 *********************************************************/
describe("Decryption data buffer string test using SM4", function () {
  it("should decrypt data buffer string using SM4 algorithm", function () {
    const algorithm = "sm4";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 08 61 eb b7 16 2f 56 9c 75 6e 78 50 8e 6f 2e 79 86 27 1e 7c f6 5b 5d 39 41 e1 64 6b ac cb ef 49 5f bf 05 72 a8 2d 2f 86>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using SM4-CBC algorithm", function () {
    const algorithm = "sm4-cbc";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 6c fc 39 21 d6 2c 46 a8 67 47 b5 81 81 d0 9b c7 3a fc 17 d0 55 b5 d6 d2 8a 9c 46 da 60 7b 09 0c 96 c8 08 a2 77 29 90 4e>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using SM4-CFB algorithm", function () {
    const algorithm = "sm4-cfb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 93 66 77 c9 1a ce 6d d1 f5 61 ea 8d 80 9b af f2 b4 cb 4c 81 41 f3 b8 c1 fe 06 a7 0a 92 27 bf 7f 84 19 ff 03 b6>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using SM4-CTR algorithm", function () {
    const algorithm = "sm4-ctr";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 64 cc 7d cf ff 56 1b 27 72 d1 a3 df 27 c6 7f d2 0c 74 e2 a3 1d a2 7c e1 57 d6 95 07 c3 60 35 6f 46 d9 5e 00 72>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using SM4-ECB algorithm", function () {
    const algorithm = "sm4-ecb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 3b 01 0c a3 57 81 f5 8f 42 36 65 78 13 00 aa b8 88 99 e2 ee 69 11 4b 30>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using SM4-OFB algorithm", function () {
    const algorithm = "sm4-ofb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 21 f3 a4 b8 14 26 50 0c 9c 89 7b e1 25 be d6 49 c5 fd f9 95 22 c5 94 01 03 db c9 f9 49 d1 27 ea 57 2b 1b 8c e0>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});
