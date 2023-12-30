const crypto = require("crypto");
const zlib = require("zlib");

/**
 * Encrypts data using the CAMELLIA-192-CFB1 algorithm.
 *
 * @param {string} data - The data to be encrypted.
 * @param {string} password - The password used for key derivation.
 * @param {string|null} extra - Additional options for encryption (e.g., 'base64', 'binary', 'hex', or 'zlib').
 * @returns {Buffer|string} - The encrypted data.
 */

function encryptCAMELLIA192CFB1(data, password, extra = null) {
  const salt = crypto.randomBytes(8);
  const iv = crypto.randomBytes(16);
  const key = crypto.pbkdf2Sync(password, salt, 100000, 24, "sha256");
  const cipher = crypto.createCipheriv("camellia-192-cfb1", key, iv);
  var encrypted = Buffer.concat([Buffer.from("Salted__"), salt, iv, cipher.update(data, "utf-8"), cipher.final()]);
  if (extra === "base64") {
    var encrypted = encrypted.toString("base64");
  } else if (extra === "binary") {
    var encrypted = encrypted.toString("binary");
  } else if (extra === "hex") {
    var encrypted = encrypted.toString("hex");
  } else if (extra === "zlib") {
    var encrypted = zlib.deflateSync(encrypted);
  }

  return encrypted;
}


/**
 * Decrypts data using the CAMELLIA-192-CFB1 algorithm.
 *
 * @param {Buffer|string} data - The data to be decrypted.
 * @param {string} password - The password used for key derivation.
 * @param {string|null} extra - Additional options for decryption (e.g., 'base64', 'binary', 'hex', or 'zlib').
 * @returns {string} - The decrypted data.
 */
function decryptCAMELLIA192CFB1(encryptedData, password, extra = null) {
  var data = encryptedData;
  if (extra === "base64") {
    var data = Buffer.from(data, "base64");
  } else if (extra === "binary") {
    var data = Buffer.from(data, "binary");
  } else if (extra === "hex") {
    var data = Buffer.from(data, "hex");
  } else if (extra === "zlib") {
    var data = zlib.inflateSync(data);
  }
  const salt = data.slice(8, 16);
  const iv = data.slice(16, 32);
  const key = crypto.pbkdf2Sync(password, salt, 100000, 24, "sha256");
  const decipher = crypto.createDecipheriv("camellia-192-cfb1", key, iv);
  const decrypted = Buffer.concat([decipher.update(data.slice(32)), decipher.final()]).toString("utf-8");

  return decrypted;
}

module.exports = { encryptCAMELLIA192CFB1, decryptCAMELLIA192CFB1 };
