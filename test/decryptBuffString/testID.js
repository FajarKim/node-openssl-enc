const assert = require("assert");
const { decrypt } = require("../../index");

/*********************************************************
 *                       ID-AES128                         *
 *********************************************************/
describe("Decryption data buffer string test using ID-AES128", function () {
  it("should decrypt data buffer string using ID-AES128-CCM algorithm", function () {
    const algorithm = "id-aes128-ccm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 29 62 18 74 f1 35 3b 53 0d c4 39 ad 7f 6a 94 6a 6a 1e 6d e5 3d ea 3b cb 25 47 6a 80 fc e4 7d 55 89 80 e3 79 53 0f 1c 68 59 76 39 f8 02>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ID-AES128-GCM algorithm", function () {
    const algorithm = "id-aes128-gcm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 06 06 11 a3 68 36 26 03 49 14 d0 73 ef 92 5e e6 1c ed 7d cf 49 04 8e 6a 7e 3e e0 f9 9d f3 23 77 4f f3 e5 31 1a 26 85 0c 64 4f a3 b8 b2>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});

/*********************************************************
 *                       ID-AES192                         *
 *********************************************************/
describe("Decryption data buffer string test using ID-AES192", function () {
  it("should decrypt data buffer string using ID-AES192-CCM algorithm", function () {
    const algorithm = "id-aes192-ccm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 0e a6 67 59 e8 ea d5 28 10 dd 6d e4 4c 97 36 31 3b ff bf b9 09 4e 8f 73 5d 61 09 ea 8f cc 94 f7 c8 b5 36 b8 d4 c4 bd be 6f 6e 2f 4c fa>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ID-AES192-GCM algorithm", function () {
    const algorithm = "id-aes192-gcm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 8d 8c 91 b2 be 77 64 75 93 87 a6 1a e1 7a 08 5d eb eb 87 4b 27 93 a1 33 74 e2 be 2b ae 21 2b 0d a6 e9 74 3b 11 ca fe c1 89 b4 b5 97 d0>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});

/*********************************************************
 *                       ID-AES256                         *
 *********************************************************/
describe("Decryption data buffer string test using ID-AES256", function () {
  it("should decrypt data buffer string using ID-AES256-CCM algorithm", function () {
    const algorithm = "id-aes256-ccm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 39 a8 01 48 9f 76 c5 3f 16 97 55 32 04 6b 23 a8 e4 50 1d 86 22 ac 9f 3f 51 d0 5c 2f da c6 17 30 d5 19 b7 0f 13 ac f0 45 bc 47 1f 24 35>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ID-AES256-GCM algorithm", function () {
    const algorithm = "id-aes256-gcm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 54 2c 6a b4 61 6c 90 32 6d 5e e2 67 62 17 ea 7e 24 c0 15 56 51 2b b0 4f 8a b7 84 65 bb 39 39 27 94 75 67 8d 2a cf fa 1c de d8 b1 83 46>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});
