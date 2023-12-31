const crypto = require("crypto");
const zlib = require("zlib");

/**
 * Encrypts data using the AES-192-GCM algorithm.
 *
 * @param {string} data - The data to be encrypted.
 * @param {string} password - The password used for key derivation.
 * @param {string|null} extra - Additional options for encryption (e.g., 'base64', 'binary', 'hex', or 'zlib').
 * @returns {Buffer|string} - The encrypted data.
 */
function encryptAES192GCM(data, password, extra = null) {
  const salt = crypto.randomBytes(16);
  const key = crypto.pbkdf2Sync(password, salt, 100000, 24, "sha512");
  const cipher = crypto.createCipheriv("aes-192-gcm", key, Buffer.alloc(16));
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
 * Decrypts data using the AES-192-GCM algorithm.
 *
 * @param {Buffer|string} data - The data to be decrypted.
 * @param {string} password - The password used for key derivation.
 * @param {string|null} extra - Additional options for decryption (e.g., 'base64', 'binary', 'hex', or 'zlib').
 * @returns {string} - The decrypted data.
 */
function decryptAES192GCM(encryptedData, password, extra = null) {
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

  if (! Buffer.isBuffer(data)) {
    var buffString = data;
    var hexValues = buffString.replace(/<Buffer|>/g, "").split(" ").filter(Boolean);
    var bufferArray = hexValues.map(hex => parseInt(hex, 16));
    var data = Buffer.from(bufferArray);
  }

  const salt = data.slice(8, 24);
  const tag = data.slice(24, 40);
  const encryptedText = data.slice(40);
  const key = crypto.pbkdf2Sync(password, salt, 100000, 24, "sha512");
  const decipher = crypto.createDecipheriv("aes-192-gcm", key, Buffer.alloc(16));
  decipher.setAuthTag(tag);
  const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]).toString("utf-8");

  return decrypted;
}

module.exports = { encryptAES192GCM, decryptAES192GCM };
