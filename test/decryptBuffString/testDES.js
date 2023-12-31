const assert = require("assert");
const { decrypt } = require("../../index");

/*********************************************************
 *                         DES                           *
 *********************************************************/
describe("Decryption data buffer string test using DES", function () {
  it("should decrypt data buffer string using DES algorithm", function () {
    const algorithm = "des";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 2b fa f7 e0 4e 6d 44 fb 48 37 2e 72 ea 36 ac eb 00 41 37 50 2a 25 a4 ba 5d cb 3f 9e 8a d6 e6 2b>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using DES-CBC algorithm", function () {
    const algorithm = "des-cbc";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f da ad b4 2a dd 3e a2 2d 27 e4 51 5e 5e 8c 71 66 bd 8e e8 e6 e3 49 f9 74 c3 3f 14 bd 2d 38 91 df>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using DES-CFB algorithm", function () {
    const algorithm = "des-cfb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 42 1a 5e 16 95 f3 d9 00 47 ab 29 54 9f a3 26 6c 9f 5b 79 64 a0 bb e7 fe 4d d4 9c f1 15>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using DES-CFB1 algorithm", function () {
    const algorithm = "des-cfb1";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f e8 f5 2e 8e 54 01 3d bc 72 dc b1 39 aa 0d 06 2f 8b aa 51 02 f7 43 32 ba 21 d6 1d f5 37>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using DES-CFB8 algorithm", function () {
    const algorithm = "des-cfb8";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f b7 a5 45 19 9d cb 15 2e 05 bc c3 0b 57 ea 07 97 07 1b 7f 8c ef b6 50 24 99 2f b2 9f 7e>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using DES-ECB algorithm", function () {
    const algorithm = "des-ecb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 38 c3 a6 55 17 1e 35 02 35 d6 49 53 00 b4 c8 02 be 3b 0b 1d a4 6f 3f 85>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using DES-OFB algorithm", function () {
    const algorithm = "des-ofb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f fc 18 f0 de b0 31 75 41 6e 66 4d 7d fe 62 21 d0 23 e3 29 70 8c 78 89 54 15 7b c6 7b 44>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});

/*********************************************************
 *                       DES-EDE                         *
 *********************************************************/
describe("Decryption data buffer string test using DES-EDE", function () {
  it("should decrypt data buffer string using DES-EDE algorithm", function () {
    const algorithm = "des-ede";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 15 d3 9d 97 32 07 fe a2 2c 9c c3 09 3e 54 93 71 da b3 d4 c2 df 2e d0 8d>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using DES-EDE-CBC algorithm", function () {
    const algorithm = "des-ede-cbc";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 9d ae 08 5c 62 b0 3d 87 50 f8 ee ea 21 3c fc f8 ef 53 33 1d f1 85 4e 22 65 0b f5 3e 80 bc 63 e9>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using DES-EDE-CFB algorithm", function () {
    const algorithm = "des-ede-cfb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 4e d6 a9 8a 58 7c 46 3a d2 a1 4e 73 47 9d 8b d9 0f 5b 67 5f a1 68 79 cd 5e 81 ad 3a 82>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using DES-EDE-ECB algorithm", function () {
    const algorithm = "des-ede-ecb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f c1 13 cd ec 91 5e b3 b7 07 44 c0 7a 7a 97 7d f5 59 06 00 0e 7b 52 22 b9>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using DES-EDE-OFB algorithm", function () {
    const algorithm = "des-ede-ofb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f b7 f8 ff d7 26 82 be dd 0c 25 72 40 aa 64 bc 4f 4d 05 7e ea 64 a4 66 e6 a7 dd f1 69 89>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});


/*********************************************************
 *                       DES-EDE3                        *
 *********************************************************/
describe("Decryption data buffer string test using DES-EDE3", function () {
  it("should decrypt data buffer string using DES-EDE3 algorithm", function () {
    const algorithm = "des-ede3";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f d6 2a 5f 11 10 ce ca 77 77 ad 68 d3 3f bb fb 4c 14 95 09 58 95 19 2b ef>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using DES-EDE3-CBC algorithm", function () {
    const algorithm = "des-ede3-cbc";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 23 e1 1c 04 48 2d 8f 87 51 52 dd 7f 1f 09 ea b8 8e cb 71 61 39 f4 01 75 1f dd b0 ef d5 11 a7 07>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using DES-EDE3-CFB algorithm", function () {
    const algorithm = "des-ede3-cfb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 12 31 e1 b0 79 4e f1 de c3 ac 32 47 fc 33 fe b3 2e 8f 7b 2d be 84 12 63 32 25 19 60 ce>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using DES-EDE3-CFB1 algorithm", function () {
    const algorithm = "des-ede3-cfb1";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 45 4f 7c 15 48 4b ff 72 f6 68 9f 2a 35 ce 43 0e 1a 48 b3 ca 17 a7 87 f6 37 d1 3c 43 61>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using DES-EDE3-CFB8 algorithm", function () {
    const algorithm = "des-ede3-cfb8";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 38 e7 63 83 dc 58 d9 6b 4b 23 a1 82 2c 6c 22 ea a4 fc be b0 07 6b 3d a2 22 7c 1c 1a 3f>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using DES-EDE3-ECB algorithm", function () {
    const algorithm = "des-ede3-ecb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 6e 7d 98 60 a1 78 b1 63 6d d3 bc 78 78 4b b4 b3 be 7f 87 e6 25 58 25 8d>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using DES-EDE3-OFB algorithm", function () {
    const algorithm = "des-ede3-ofb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f ec c4 a8 c8 40 15 43 a6 e9 dd 98 50 87 e5 f0 8f 6d 7d 77 95 f3 03 93 bb 4d 7f 2d 65 57>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});

/*********************************************************
 *                         DES3                          *
 *********************************************************/
describe("Decryption data buffer string test using DES3", function () {
  it("should decrypt data buffer string using DES3 algorithm", function () {
    const algorithm = "des3";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f d2 11 94 d8 fd d1 d1 1b b7 75 79 74 22 cb f5 ff 0b 69 ea 27 f1 ca d7 1c 49 44 3c 23 17 c4 44 8d>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});

/*********************************************************
 *                         DESX                          *
 *********************************************************/
describe("Decryption data buffer string test using DESX", function () {
  it("should decrypt data buffer string using DESX algorithm", function () {
    const algorithm = "desx";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 1b b3 ec 14 cb 88 e2 a7 ad 71 92 ac 7f a7 de 3a 69 25 7c 5b 92 3f 22 c9 b5 f1 a1 3f 72 8b 7d 5a>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should  and decrypt data buffer string using DESX-CBC algorithm", function () {
    const algorithm = "desx-cbc";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f a3 ec ed b0 74 99 a2 9e 2e d3 97 6f 62 c2 8c fc cd 1a cd dd c7 22 7b eb cf dc 3b 00 57 17 04 33>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});
