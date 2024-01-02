const assert = require("assert");
const { decrypt } = require("../../index");

/*********************************************************
 *                         SEED                          *
 *********************************************************/
describe("Decryption data buffer string test using SEED", function () {
  it("should decrypt data buffer string using SEED algorithm", function () {
    const algorithm = "seed";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 90 7d 9e 9e 22 35 fb 3d 60 c1 4f a3 0f b3 1b 6a 73 b4 f0 3f 62 e7 74 42 37 27 fc 87 e1 4f cb 76 e2 66 08 d3 9d eb f3 20>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using SEED-CBC algorithm", function () {
    const algorithm = "seed-cbc";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 9f 0e bb 27 e0 d2 40 84 9a 89 4c 89 fd fa 3f ed 8d 27 1b 6c c4 5c e6 27 34 ad f2 ce 1c 7d c2 78 85 f1 20 3e 86 7e 77 19>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using SEED-CFB algorithm", function () {
    const algorithm = "seed-cfb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f a3 3a e0 f8 de cd 07 a6 15 80 43 1f e0 55 bf 5e 82 ea e6 5f 17 ef 18 57 24 fe 38 df 20 28 e2 e8 fb 52 3c 88 19>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using SEED-ECB algorithm", function () {
    const algorithm = "seed-ecb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f c8 d3 87 ed 25 90 04 2c b5 30 c6 2a 97 f1 83 82 ff 15 b7 41 75 a3 5a fd>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using SEED-OFB algorithm", function () {
    const algorithm = "seed-ofb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 28 ec c9 7a 9c c0 9c 8a fe d7 04 e8 06 f9 e9 0b 93 a6 38 dd ac 8e 78 ee 13 4d 2b 70 af 71 be 52 e4 8a 23 64 92>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});
