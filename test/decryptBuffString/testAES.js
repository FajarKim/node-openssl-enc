const assert = require("assert");
const { decrypt } = require("../../index");

/*********************************************************
 *                       AES-128                         *
 *********************************************************/
describe("Decryption data buffer string test using AES-128", function () {
  it("should decrypt data buffer string using AES128 algorithm", function () {
    const algorithm = "aes128";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f c3 a5 61 a3 ad c8 23 95 1a 11 0f 36 33 47 7b ae 88 4a ad 7e 03 5d 40 b5 56 72 2e 03 50 20 8f d5 b7 97 65 01 82 49 60 51>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-128-CBC algorithm", function () {
    const algorithm = "aes-128-cbc";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 48 bc b1 42 4f ee 1b 9f f8 34 c5 9d 84 1c d7 fe 75 21 75 35 2e cc d2 7f db e3 e7 9d 66 92 8e 17 2e 13 0c db 2a 56 1f 65>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-128-CCM algorithm", function () {
    const algorithm = "aes-128-ccm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 76 a8 9f f5 0f eb 74 bb 49 2a 67 af e2 b1 0f 6f cb 0e 2e 61 4f a4 56 e7 a7 6d 54 b0 55 f3 ef 0c 38 a9 d5 8f 67 f2 d4 61 1c 85 89 59 7e>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-128-CFB algorithm", function () {
    const algorithm = "aes-128-cfb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 58 29 a7 86 45 53 7e 25 9d bb 77 71 f9 19 90 ee a9 82 f7 0a 5d e8 b2 ad 95 c2 46 0a 8d f6 de d8 df 99 69 de ff>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-128-CFB1 algorithm", function () {
    const algorithm = "aes-128-cfb1";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f ad 39 fb 53 5f fb a1 a5 d5 0d 44 01 a7 b3 a8 c6 ff cc 9c a9 14 45 93 09 ef 0d 77 57 04 36 fe 31 2b 8e c4 4a 0d>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-128-CFB8 algorithm", function () {
    const algorithm = "aes-128-cfb8";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 80 7d f2 95 f6 54 00 e7 e5 e4 a9 4a 4b 7e 15 bc 08 4d 48 ff f3 3d 73 22 89 e8 f2 9c ab df da 54 d5 37 e5 03 15>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-128-CTR algorithm", function () {
    const algorithm = "aes-128-ctr";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 1e ba 64 a4 3b 12 78 db 70 d4 4a 63 57 a8 5b d6 06 9e 6f 8c 4b 57 d8 8c 1f 45 54 7e 0f 18 ae 69 4d 0a 20 0f 82>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-128-ECB algorithm", function () {
    const algorithm = "aes-128-ecb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f d7 5c dd 8f 3f 63 2f 30 f4 62 f8 14 e7 58 c8 8d 1a ca 42 75 ac a0 85 74>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-128-GCM algorithm", function () {
    const algorithm = "aes-128-gcm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 5d fb cc be d5 10 67 d3 1d 86 36 b8 36 84 e8 8a e1 65 a1 40 6d dd 68 74 57 96 09 1f 40 e1 9f d8 7f 09 59 29 be 75 a8 43 e5 a8 1c d5 eb>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-128-OCB algorithm", function () {
    const algorithm = "aes-128-ocb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 02 f0 b1 2b 2b cc a6 6f 3f 32 35 41 83 48 3b b4 c2 8c b4 5e af c8 a1 21 4f 99 ec 7f c9 f4 b4 67 36 bf e8 08 0e 01 e2 55 39 f3 4b 8a 70>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-128-OFB algorithm", function () {
    const algorithm = "aes-128-ofb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f c8 85 88 e7 86 3e 89 8a 73 b0 49 34 4b 93 07 1d 49 53 83 31 c8 a7 e5 e1 3f bf be 3b f5 f2 a5 ac 29 7b 7e ec 8a>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});

/*********************************************************
 *                       AES-192                         *
 *********************************************************/
describe("Decryption data buffer string test using AES-192", function () {
  it("should decrypt data buffer string using AES192 algorithm", function () {
    const algorithm = "aes192";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f c9 43 9b c4 29 18 37 90 ca b2 e9 93 5c d4 1c 9d 9a 31 15 15 c9 77 f2 f6 04 97 62 3e e0 a4 49 b7 ff 39 a6 01 2e 8f d5 fe>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-192-CBC algorithm", function () {
    const algorithm = "aes-192-cbc";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 26 f1 46 6d 08 aa 4c d0 53 70 53 c9 a6 28 e0 15 35 d6 f3 af 74 fd af 55 dd a7 b0 37 8b 51 ea 2c 5d 3a 16 11 92 e6 41 a2>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-192-CCM algorithm", function () {
    const algorithm = "aes-192-ccm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 94 14 cc fe 3a 90 a3 be 3e 22 4c 7a 0b 44 6e 4c 05 99 b4 b8 82 6c ed fc cc 49 d4 7b c4 cc 15 9c 0a bc e3 1f ce 8b db 4d ef 0a 1c 85 28>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-192-CFB algorithm", function () {
    const algorithm = "aes-192-cfb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 15 eb 70 a1 e5 0b 3a df ae 55 53 40 08 32 1e 55 a8 b5 45 19 59 4e 77 65 4e 3e 6d 1b bc 99 8a 88 bb f1 92 c4 4d>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-192-CFB1 algorithm", function () {
    const algorithm = "aes-192-cfb1";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f f6 96 7e c2 14 57 68 47 0e 35 d5 09 e1 3d ae 4e ba c2 e5 1c ad 30 47 e4 f3 65 f5 e8 3b e4 65 cb 92 6e 71 ec 4c>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-192-CFB8 algorithm", function () {
    const algorithm = "aes-192-cfb8";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 50 26 88 63 9b f5 8d f5 03 a3 4f ac ed 94 56 98 37 d2 8b b6 b7 da 14 b1 f0 0b 75 f5 15 9f e0 aa bb d6 eb b7 35>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-192-CTR algorithm", function () {
    const algorithm = "aes-192-ctr";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 60 cd c1 62 4d 56 99 12 dc 11 21 83 02 47 f0 2c df 02 59 cd f7 91 e8 3e c0 bb 5c 3c 8f 30 af d6 ab 8e b0 6b 48>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-192-ECB algorithm", function () {
    const algorithm = "aes-192-ecb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 27 40 29 52 71 72 48 c6 93 61 a9 a5 96 dc 69 65 a6 bc cc 07 e2 98 88 1d>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-192-GCM algorithm", function () {
    const algorithm = "aes-192-gcm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f a8 98 b8 d2 73 f0 7e 99 8b 3b af db fe da af 3a fe ed 02 0f e6 7a ea d2 f9 b5 ad a8 bd 39 60 dd 44 14 d3 eb 1e ac b5 30 ac ee 19 00 d1>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-192-OCB algorithm", function () {
    const algorithm = "aes-192-ocb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 48 74 a4 84 ef 4c 41 cd db 7a 03 93 71 40 55 a3 7c ab b0 a0 e2 fc 61 35 db 22 a8 1a 9d 58 15 4c 58 fa 59 d4 b6 19 ac 7b 9d 6b 8d db b1>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-192-OFB algorithm", function () {
    const algorithm = "aes-192-ofb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f c6 df c6 3f 3e 1d 28 57 62 ad ba a2 de 48 04 d2 90 0a b4 1d f0 8a ef 9a fe 0a e6 e3 0b cd 7e be 47 ad 62 36 40>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});

/*********************************************************
 *                       AES-256                         *
 *********************************************************/
describe("Decryption data buffer string test using AES-256", function () {
  it("should decrypt data buffer string using AES256 algorithm", function () {
    const algorithm = "aes256";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 0c ac f4 43 4b 69 a5 30 f5 4f 14 a0 7a 3c d2 64 f7 4d 25 6d 96 fc 88 ac b0 37 85 9b 02 4f 14 ee 7d 46 fe a4 98 c5 6c 81>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-256-CBC algorithm", function () {
    const algorithm = "aes-256-cbc";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 98 57 a7 6b 7c ed c1 73 ad d8 56 8c f9 19 b7 1b 82 71 08 cb 2c e3 31 7e 6b 24 43 29 a6 8d ca 74 85 fe 5c 85 89 66 23 05>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-256-CCM algorithm", function () {
    const algorithm = "aes-256-ccm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 25 eb 7e e0 82 d4 ba 5b b7 19 42 3c 68 75 ae 7a 28 b6 73 23 72 0e be 46 d8 f1 29 c8 5c ee bb da 46 a4 1c 3b 05 b8 50 8b 7e 73 3b a4 e9>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-256-CFB algorithm", function () {
    const algorithm = "aes-256-cfb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f a1 7c a6 94 8d 36 fd 6d f9 39 88 2c 85 d3 1e 23 88 62 d6 29 06 57 af d5 f9 cb 94 b7 43 4d 51 b5 d1 0e dc f8 b8>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-256-CFB1 algorithm", function () {
    const algorithm = "aes-256-cfb1";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 26 97 2a 42 e5 fe 2c d4 c9 d7 5a 60 d0 3f 16 fe a8 45 23 3c 7f db c5 14 00 ea 0f 64 53 86 dd 4e 13 fc 26 90 d5>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-256-CFB8 algorithm", function () {
    const algorithm = "aes-256-cfb8";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 7d 26 99 9f 79 81 44 3b 89 f8 d9 27 9f ca 5a 5a e2 89 34 01 60 0e 71 46 d1 d0 0b 20 f8 7d 04 0f 41 16 b2 80 7e>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-256-CTR algorithm", function () {
    const algorithm = "aes-256-ctr";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f c1 b0 49 b6 c6 8d 67 d8 66 0b ea 73 c8 7a e3 03 1b c9 6a 5c 55 15 3f f3 25 73 50 3b 32 f6 83 ac 6e ee 07 3b 2b>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-256-ECB algorithm", function () {
    const algorithm = "aes-256-ecb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f aa 12 c5 a2 d3 e0 90 c9 a4 39 df 80 b9 4d ea 4a 09 de 98 d6 1b 54 f9 42>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-256-GCM algorithm", function () {
    const algorithm = "aes-256-gcm";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f d3 db 17 6f c1 c1 34 22 dc 06 59 aa fd 92 d4 0f 2e 38 f7 40 0f cc cf 2e 48 10 be 08 5b df f1 3a 35 d9 d3 32 2d 69 ba aa fb d4 01 52 5b>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-256-OCB algorithm", function () {
    const algorithm = "aes-256-ocb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f ba e4 34 7a 7c d6 e8 7f a3 b4 a9 5e ee 4b 37 99 bb 60 a8 0b c8 82 27 b8 98 30 97 8c 53 fa 1f 03 8d e4 69 61 0e dc 44 43 9c 2f 07 2d 07>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });

  it("should decrypt data buffer string using AES-256-OFB algorithm", function () {
    const algorithm = "aes-256-ofb";
    const data = "<Buffer 53 61 6c 74 65 64 5f 5f 73 35 04 f7 09 5e 8b 81 72 38 72 3b 0e f9 f0 38 48 32 a4 dc f0 7c 12 3a 0f 5a 34 69 0c 02 76 fe 77 5a 0b 00 65>";
    const password = "secret";

    const decryptedData = decrypt(algorithm, data, password);

    assert.ok(decryptedData);
  });
});
