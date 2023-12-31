const crypto = require("crypto");
const zlib = require("zlib");

/**
 * Encrypts data using the DES-CFB8 algorithm.
 *
 * @param {string} data - The data to be encrypted.
 * @param {string} password - The password used for key derivation.
 * @param {string|null} extra - Additional options for encryption (e.g., 'base64', 'binary', 'hex', or 'zlib').
 * @returns {Buffer|string} - The encrypted data.
 */
function encryptDESCFB8(data, password, extra = null) {
  const salt = crypto.randomBytes(8);
  const iv = crypto.randomBytes(8);
  const key = crypto.pbkdf2Sync(password, salt, 100000, 8, "sha256");
  const cipher = crypto.createCipheriv("des-cfb8", key, iv);
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
 * Decrypts data using the DES-CFB8 algorithm.
 *
 * @param {Buffer|string} data - The data to be decrypted.
 * @param {string} password - The password used for key derivation.
 * @param {string|null} extra - Additional options for decryption (e.g., 'base64', 'binary', 'hex', or 'zlib').
 * @returns {string} - The decrypted data.
 */
function decryptDESCFB8(encryptedData, password, extra = null) {
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

  const salt = data.slice(8, 16);
  const iv = data.slice(16, 24);
  const key = crypto.pbkdf2Sync(password, salt, 100000, 8, "sha256");
  const decipher = crypto.createDecipheriv("des-cfb8", key, iv);
  const decrypted = Buffer.concat([decipher.update(data.slice(24)), decipher.final()]).toString("utf-8");

  return decrypted;
}

module.exports = { encryptDESCFB8, decryptDESCFB8 };
