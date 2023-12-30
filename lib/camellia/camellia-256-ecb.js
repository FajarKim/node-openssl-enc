const crypto = require("crypto");
const zlib = require("zlib");

/**
 * Encrypts data using the CAMELLIA-256-ECB algorithm.
 *
 * @param {string} data - The data to be encrypted.
 * @param {string} password - The password used for key derivation.
 * @param {string|null} extra - Additional options for encryption (e.g., 'base64', 'binary', 'hex', or 'zlib').
 * @returns {Buffer|string} - The encrypted data.
 */

function encryptCAMELLIA256ECB(data, password, extra = null) {
  const salt = crypto.randomBytes(8);
  const key = crypto.pbkdf2Sync(password, salt, 100000, 32, "sha256");
  const cipher = crypto.createCipheriv("camellia-256-ecb", key, null);
  var encrypted = Buffer.concat([Buffer.from("Salted__"), salt, cipher.update(data, "utf-8"), cipher.final()]);
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
 * Decrypts data using the CAMELLIA-256-ECB algorithm.
 *
 * @param {Buffer|string} data - The data to be decrypted.
 * @param {string} password - The password used for key derivation.
 * @param {string|null} extra - Additional options for decryption (e.g., 'base64', 'binary', 'hex', or 'zlib').
 * @returns {string} - The decrypted data.
 */
function decryptCAMELLIA256ECB(encryptedData, password, extra = null) {
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
  const key = crypto.pbkdf2Sync(password, salt, 100000, 32, "sha256");
  const decipher = crypto.createDecipheriv("camellia-256-ecb", key, null);
  const decrypted = Buffer.concat([decipher.update(data.slice(16)), decipher.final()]).toString("utf-8");

  return decrypted;
}

module.exports = { encryptCAMELLIA256ECB, decryptCAMELLIA256ECB };