const assert = require("assert");
const { decrypt } = require("../../index");

/*********************************************************
 *                       CAMELLIA-128                         *
 *********************************************************/
describe("Decryption data buffer string test using CAMELLIA-128", function () {
  it("should decrypt data buffer string using CAMELLIA128 algorithm", function () {
    const algorithm = "camellia128";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 33 9e 9e 7a c4 81 c2 c4 fe 50 f3 8a 43 0d 20 0b a2 f8 ae 61 8b a6 f2 9a f0 54 7c aa 0e f2 26 f6 49 be 06 0f d4 9c c8 03>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-128-CBC algorithm", function () {
    const algorithm = "camellia-128-cbc";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 0a 5d a3 bd 96 01 e5 f7 0a 39 85 2d e4 ee b1 75 8c de 67 c4 24 a1 0c 95 c7 32 38 18 d4 fa b1 96 2b 2b 9c 1d 6f fa 45 c2>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-128-CFB algorithm", function () {
    const algorithm = "camellia-128-cfb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 44 4a df 0d d3 ec e7 5c 41 ed 10 3c ab e7 69 e3 3e d1 46 56 9c b3 c1 25 ed 8b 92 3b a0 9a a7 b9 da fa 15 72 61>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-128-CFB1 algorithm", function () {
    const algorithm = "camellia-128-cfb1";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 3c cc b7 75 72 31 ea 31 ba b4 84 da 0a 0c 12 6e d2 27 a2 a1 60 64 63 58 7a c3 99 7c 74 03 6d 98 01 01 31 b1 c1>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-128-CFB8 algorithm", function () {
    const algorithm = "camellia-128-cfb8";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 62 90 a7 62 0c 8a a8 c5 c9 27 c1 e7 31 03 1c 4b 93 5e ab d9 8c 3d 0b c9 7f fc db 2a 97 3f c2 97 24 10 4b e0 7a>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-128-CTR algorithm", function () {
    const algorithm = "camellia-128-ctr";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 61 eb 2b f8 00 cd 49 56 8f 12 d2 db 63 3f 88 96 92 a4 85 84 af ac 7c a9 1c b2 9f 74 9e fb 8b 3d a5 c1 91 f4 9f>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-128-ECB algorithm", function () {
    const algorithm = "camellia-128-ecb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f e4 db 0c 07 dc d8 06 3c df 79 88 78 fd cb 6c 9c f0 cb d9 08 9d b0 56 81>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-128-OFB algorithm", function () {
    const algorithm = "camellia-128-ofb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 61 ed 93 08 ac bc 11 c3 c9 a9 09 e4 11 b1 fa 7e c7 a4 69 6f 2c e8 8e 5f cc 7e 30 5e 1f 7e d7 88 5a 63 04 1f bf>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});

/*********************************************************
 *                       CAMELLIA-192                         *
 *********************************************************/
describe("Decryption data buffer string test using CAMELLIA-192", function () {
  it("should decrypt data buffer string using CAMELLIA192 algorithm", function () {
    const algorithm = "camellia192";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 51 ae f9 ef 55 bc 4b 55 cd c1 18 f9 63 1c 96 93 d5 fa 9e 77 c3 a5 9a 38 1c 13 8d 9f 87 56 f9 90 b8 3d 4e 18 b3 ae 46 5e>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-192-CBC algorithm", function () {
    const algorithm = "camellia-192-cbc";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 21 b7 0d 9b 19 bf c0 09 ef 31 3d d9 48 48 05 44 32 e8 a0 41 6a 0c 0b 16 b8 30 5b 57 4d 0f d1 65 be 08 a7 ef a0 da 86 c8>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-192-CFB algorithm", function () {
    const algorithm = "camellia-192-cfb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 19 76 d4 7a f9 24 31 1c 7f 74 fc b8 f5 8a a0 b3 67 bc cc 61 a7 67 75 ed 66 d2 6b 3f 92 02 f8 99 c2 59 e8 02 2b>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-192-CFB1 algorithm", function () {
    const algorithm = "camellia-192-cfb1";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f ed 87 53 16 14 ff 09 1a a3 39 a3 18 6c 43 0d fc 48 e6 6a ea 77 b4 88 65 54 da c3 55 23 0e b1 db 22 8a bc 86 d7>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-192-CFB8 algorithm", function () {
    const algorithm = "camellia-192-cfb8";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 40 06 68 6c 5b 78 98 8f 9d 06 71 6d cf 52 7e 8e 8d 50 2b 29 53 2b 48 59 85 96 1f 0d 66 19 29 98 c1 6d c9 bf 1a>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-192-CTR algorithm", function () {
    const algorithm = "camellia-192-ctr";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f ae cd 19 b3 83 b4 fa f3 ec ec d2 20 b4 b4 99 90 c0 76 b8 bd 7f 77 e6 5a 9f b5 9b 8f 0f ae ef 6b 20 96 20 f1 f4>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-192-ECB algorithm", function () {
    const algorithm = "camellia-192-ecb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 8a bc d5 0b 60 1d 98 54 2d 77 60 f2 52 7a cd 1c 21 27 e3 ab 0a a2 1b 07>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-192-OFB algorithm", function () {
    const algorithm = "camellia-192-ofb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f b3 83 0a 1f 56 fa fa e9 a0 39 fc 15 a4 fd be 66 72 ef 2d 75 db 53 59 88 96 7f 91 cf 66 e3 11 fd e6 d0 bd 79 fa>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});

/*********************************************************
 *                       CAMELLIA-256                         *
 *********************************************************/
describe("Decryption data buffer string test using CAMELLIA-256", function () {
  it("should decrypt data buffer string using CAMELLIA256 algorithm", function () {
    const algorithm = "camellia256";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f ee 7f 0d 72 59 6b 86 d6 c0 d8 c7 a1 74 39 a0 8d 88 fe 7c 7a fe 80 ec a2 2c 31 18 38 44 0b 04 df 7f 8d 86 43 6d 68 72 b8>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-256-CBC algorithm", function () {
    const algorithm = "camellia-256-cbc";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 6a e5 cf 05 89 f7 68 c5 e8 a6 33 bd 9b 14 7a 3d 0b fb d8 e7 1e 7a 98 da 73 30 d7 21 7f 29 cb 35 94 11 d7 29 ea 24 00 d1>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-256-CFB algorithm", function () {
    const algorithm = "camellia-256-cfb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f af e1 0d 2d 22 0c a3 70 2d f1 40 2c 78 9d 28 b9 a4 39 92 1c da bc 95 1e fc aa e0 bf 88 b3 78 dc e5 6f 6f fb 5b>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-256-CFB1 algorithm", function () {
    const algorithm = "camellia-256-cfb1";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f b1 86 2f 4f 91 a1 33 4d 93 b5 4d a3 25 cb 44 d8 e5 78 9c cf 94 79 ab 35 a6 e5 2f 23 a5 52 0b ce 70 64 a5 45 d9>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-256-CFB8 algorithm", function () {
    const algorithm = "camellia-256-cfb8";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f fb a2 02 d6 a6 f2 cb b9 b7 51 4f f9 af 23 b0 59 31 db 43 51 bd 39 0b e9 e9 04 13 73 6a 8a fe a1 27 de 95 4b 07>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-256-CTR algorithm", function () {
    const algorithm = "camellia-256-ctr";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f e7 56 e0 76 ae 60 de e0 38 27 f2 e8 1d 10 4d 52 c8 f5 17 db 5e b8 b3 ea 75 41 35 20 a0 3f 21 a0 27 19 49 9b a8>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-256-ECB algorithm", function () {
    const algorithm = "camellia-256-ecb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 6a f3 c0 5c f3 2b 52 38 7f 40 36 59 3f cb 9e 61 67 51 ab 18 4a 6c 9c c8>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using CAMELLIA-256-OFB algorithm", function () {
    const algorithm = "camellia-256-ofb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 79 4e e9 1f ca bd b3 a9 36 50 6e 20 42 e5 46 7e d8 58 c8 98 b7 16 03 c4 fa 31 bf 6f d7 73 c0 71 20 69 05 ff 7e>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});
