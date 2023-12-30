const crypto = require("crypto");
const zlib = require("zlib");

/**
 * Encrypts data using the ID-AES128-CCM algorithm.
 *
 * @param {string} data - The data to be encrypted.
 * @param {string} password - The password used for key derivation.
 * @param {string|null} extra - Additional options for encryption (e.g., 'base64', 'binary', 'hex', or 'zlib').
 * @returns {Buffer|string} - The encrypted data.
 */

function encryptIDAES128CCM(data, password, extra = null) {
  const salt = crypto.randomBytes(16);
  const key = crypto.pbkdf2Sync(password, salt, 100000, 16, "sha512");
  const cipher = crypto.createCipheriv("id-aes128-ccm", key, Buffer.alloc(12), { authTagLength: 16 });
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  const tag = cipher.getAuthTag();

  var result = Buffer.concat([Buffer.from("Salted__"), salt, tag, encrypted]);
  if (extra === "base64") {
    var result = result.toString("base64");
  } else if (extra === "binary") {
    var result = result.toString("binary");
  } else if (extra === "hex") {
    var result = result.toString("hex");
  } else if (extra === "zlib") {
    var result = zlib.deflateSync(result);
  }

  return result;
}


/**
 * Decrypts data using the ID-AES128-CCM algorithm.
 *
 * @param {Buffer|string} data - The data to be decrypted.
 * @param {string} password - The password used for key derivation.
 * @param {string|null} extra - Additional options for decryption (e.g., 'base64', 'binary', 'hex', or 'zlib').
 * @returns {string} - The decrypted data.
 */
function decryptIDAES128CCM(encryptedData, password, extra = null) {
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

  const salt = data.slice(8, 24);
  const tag = data.slice(24, 40);
  const encryptedText = data.slice(40);

  const key = crypto.pbkdf2Sync(password, salt, 100000, 16, "sha512");
  const decipher = crypto.createDecipheriv("id-aes128-ccm", key, Buffer.alloc(12), { authTagLength: 16 });
  decipher.setAuthTag(tag);

  const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]).toString("utf-8");

  return decrypted;
}

module.exports = { encryptIDAES128CCM, decryptIDAES128CCM };
