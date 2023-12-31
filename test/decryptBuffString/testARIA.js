const assert = require("assert");
const { decrypt } = require("../../index");

/*********************************************************
 *                      ARIA-128                         *
 *********************************************************/
describe("Decryption data buffer string test using ARIA-128", function () {
  it("should decrypt data buffer string using ARIA128 algorithm", function () {
    const algorithm = "aria128";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f df 35 b9 30 9c 4f 29 8e fe d5 52 20 b6 33 36 b1 db c0 34 61 7a a4 53 f7 ee 9b 1e f6 d3 54 50 de 1f 93 04 98 e3 dd f2 88>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-128-CBC algorithm", function () {
    const algorithm = "aria-128-cbc";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f e3 14 84 b6 64 f6 1b b0 15 6f 5c 09 5d 89 ef b9 c1 67 e4 d0 8b 60 e9 3c c6 4b 8f 4f 93 d4 92 c3 ba 80 f6 15 ec d1 cf 7f>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-128-CCM algorithm", function () {
    const algorithm = "aria-128-ccm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 9f 92 e5 a4 c3 9a 2b 57 c6 3d d4 9f 57 fc 65 5d 03 62 5f 81 e0 79 03 d2 a1 9f 2b 9b 6f cd 5e 1a c8 0b 5a b5 63 e3 9d 93 f5 ec 20 86 56>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-128-CFB algorithm", function () {
    const algorithm = "aria-128-cfb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 8c 06 da 9e 2f fb 10 61 46 c5 48 3e 8f 3c cc b5 60 1c c5 50 09 3e 2b af db 8d 30 74 1f 61 d4 b3 ff 38 97 5f c1>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-128-CFB1 algorithm", function () {
    const algorithm = "aria-128-cfb1";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f f3 c2 b6 d7 fb 8e 71 89 30 33 ab c8 8d 5e 27 f9 21 08 20 97 f4 98 97 47 f3 17 ab 20 ab ad 17 d4 e4 c3 4b 3e fa>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-128-CFB8 algorithm", function () {
    const algorithm = "aria-128-cfb8";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 7a 01 a4 f7 da 48 08 a9 e7 fd f1 24 67 35 0a ee 75 af 2c 09 d6 ee c7 68 93 8d 79 c7 da b7 b1 3e 0a f8 40 36 26>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-128-CTR algorithm", function () {
    const algorithm = "aria-128-ctr";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f aa b0 81 fc 92 26 72 7e 79 77 c2 81 c7 ae b9 e2 29 4b 10 19 18 58 50 8a 10 fb 93 68 3b ef 57 9e 1c 84 46 d5 e2>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-128-ECB algorithm", function () {
    const algorithm = "aria-128-ecb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 67 45 e3 34 07 a8 2a 82 02 b3 ca 59 a4 12 c5 1e 47 a8 5e ef 27 58 71 34>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-128-GCM algorithm", function () {
    const algorithm = "aria-128-gcm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f fc 7d 4f 6a 01 b8 a0 0b cc f2 98 65 d3 74 b7 f4 1a a7 c5 a4 86 e4 26 20 1a 08 ef 93 a9 21 80 18 4c 4b 91 0c d4 7c 67 ba 85 4e 4a 77 c6>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-128-OFB algorithm", function () {
    const algorithm = "aria-128-ofb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 0d c4 2e 23 2f 8d 97 71 58 30 a7 9b b0 f1 e3 73 6a 85 05 ea f9 25 5d e1 5f 1e 90 5a e4 e7 f9 68 3c 06 db 54 73>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});

/*********************************************************
 *                      ARIA-192                         *
 *********************************************************/
describe("Decryption data buffer string test using ARIA-192", function () {
  it("should decrypt data buffer string using ARIA192 algorithm", function () {
    const algorithm = "aria192";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 21 68 02 31 e8 57 28 58 1f 58 dc f7 e5 fc bf 80 22 45 f7 c3 43 10 69 b6 04 3c 96 70 80 f9 e2 4d 0d 0a 7b d5 e0 96 46 3b>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-192-CBC algorithm", function () {
    const algorithm = "aria-192-cbc";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 65 d8 39 39 3c 84 75 af 01 07 e5 b7 38 ac 42 34 c7 7a 3d ab b1 72 c9 ee cd 42 8d 7f b0 6d 74 1d 12 db 3f 31 4f e3 be b4>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-192-CCM algorithm", function () {
    const algorithm = "aria-192-ccm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f d5 69 f9 fa 53 77 f1 43 0b fa 48 cb 22 f9 92 e6 2f 50 d3 32 20 d9 c5 0f e2 23 07 79 36 bc bd c4 a9 ef 63 f6 33 0f 5e c6 b4 ba 65 54 a8>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-192-CFB algorithm", function () {
    const algorithm = "aria-192-cfb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 2a 70 e8 d7 37 b0 06 ca cb f8 9d b0 b1 8b 9b 8c 77 b0 cb a2 34 d9 73 98 0f 8e 2d bc 9a 4d e9 22 e9 04 ea 9b a7>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-192-CFB1 algorithm", function () {
    const algorithm = "aria-192-cfb1";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 1d 78 be a6 24 9b 5b 96 17 db 0b 82 2e 12 c2 db ad ac ca 95 30 5a 53 61 f7 78 96 5e 24 96 13 04 ba 80 6b 29 d1>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-192-CFB8 algorithm", function () {
    const algorithm = "aria-192-cfb8";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 1d 65 4c 79 51 56 27 3e 37 6f 22 3c 51 e6 d2 80 95 e1 72 a8 7c 2e 6d 76 9e 4b 94 fb e0 17 c2 74 37 2b 01 72 29>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-192-CTR algorithm", function () {
    const algorithm = "aria-192-ctr";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f c7 75 32 27 03 ed 59 79 7a dd 60 9f de 67 23 4c 38 12 9c 05 4f 4a 01 7a 02 13 9d 9c b4 fc 29 2f 63 4b 48 d7 f9>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-192-ECB algorithm", function () {
    const algorithm = "aria-192-ecb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 57 ba 8b 87 a9 db dc 9c 07 3b 85 7e e7 f2 92 62 bf 1e 18 98 dc cf 12 54>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-192-GCM algorithm", function () {
    const algorithm = "aria-192-gcm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 67 c2 b9 2e 90 f5 4c 9d c5 7a b5 f2 74 66 b1 0b e7 09 00 a2 c8 9e f6 90 3b 74 52 07 85 22 6e 55 95 13 5a 4b a9 ef 15 18 57 01 7a 44 ef>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-192-OFB algorithm", function () {
    const algorithm = "aria-192-ofb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 0a eb 3f ab 4f 0c 5b 1d 34 40 67 6a ea 51 00 5d 70 f4 c2 d5 e1 6f 32 bd 62 e5 2d bd c4 b6 f6 53 7c 57 d5 eb a4>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});

/*********************************************************
 *                      ARIA-256                         *
 *********************************************************/
describe("Decryption data buffer string test using ARIA-256", function () {
  it("should decrypt data buffer string using ARIA256 algorithm", function () {
    const algorithm = "aria256";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 59 05 62 4e 6a fd f2 32 01 75 4a 76 ed 4d bc c3 db 27 87 ca 04 a3 fa f1 62 60 f2 5a a9 1d 6f c2 62 74 46 e0 f4 84 9d e8>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-256-CBC algorithm", function () {
    const algorithm = "aria-256-cbc";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 4d 43 6c b6 d8 91 6b ec 7d 4d cd 9c 97 1f 5c 9b 92 9a 6b 86 2e e4 66 84 26 06 4e b1 54 49 1a 14 07 6f 62 d6 e7 90 95 1d>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-256-CCM algorithm", function () {
    const algorithm = "aria-256-ccm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f b0 df 31 5c 01 10 20 43 fd d6 92 47 d9 1b a8 4c f0 5c 19 41 bc 5c 6b 4b 57 12 85 af a1 33 28 09 a3 73 40 bb dd 1c 6c 7d 53 c8 81 36 1d>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-256-CFB algorithm", function () {
    const algorithm = "aria-256-cfb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 48 d8 cb 8a 29 93 13 ea 7c 99 10 2e 30 eb 0e 86 30 62 d9 cc 34 9b 08 30 6a 0e 45 61 94 b0 e7 6c ca 44 39 0d 04>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-256-CFB1 algorithm", function () {
    const algorithm = "aria-256-cfb1";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f c9 d7 19 6d 47 b8 d7 73 f9 3e 1b 69 f9 34 7b 8e cc 13 41 65 ee 98 f7 45 30 1c 1d 91 0f 61 68 21 d3 48 c8 29 9e>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-256-CFB8 algorithm", function () {
    const algorithm = "aria-256-cfb8";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f af 6f 87 ae 96 0f c3 79 a9 59 bd 35 0e fa 4d 1e eb f7 33 75 49 2f 80 b5 bf 50 6f b1 9a ef 39 59 2d 96 a3 53 47>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-256-CTR algorithm", function () {
    const algorithm = "aria-256-ctr";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 41 ac e3 4b 0b d9 dd cd af a7 24 92 ad 83 49 41 d8 94 24 af a9 07 93 66 9f a8 25 3b 9d e6 e7 45 6e a7 ba 3c 93>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-256-ECB algorithm", function () {
    const algorithm = "aria-256-ecb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 77 98 b5 da e2 66 84 b5 0c fc d8 72 89 a4 12 18 f7 b4 8a 30 1e 19 b6 ca>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-256-GCM algorithm", function () {
    const algorithm = "aria-256-gcm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f ab 0b 5f 1d 9c 8f b9 b3 d1 78 f1 be 92 c9 cb d5 a1 ce 99 41 19 75 7a b6 45 33 d0 b5 ba c5 fe 3a 99 a6 fc 0e 86 b8 cb ce 11 a7 48 15 b1>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using ARIA-256-OFB algorithm", function () {
    const algorithm = "aria-256-ofb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f c6 11 81 94 10 a5 24 b1 0e 55 43 bd f3 4f 1d 7c d0 d1 b4 f8 12 65 3d 7c 24 4e 43 37 0c 7d 7f 70 44 66 c9 32 8c>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});
