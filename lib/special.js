const zlib = require("zlib");

/**
 * Encrypts data using the Base64.
 *
 * @param {string} data - The data to be encrypted.
 * @returns {string} - The encrypted data.
 */
function encryptBase64(data) {
  const buff = Buffer.from(data, "utf-8");
  return buff.toString("base64");
}

/**
 * Decrypts data using the Base64.
 *
 * @param {string} data - The data to be decrypted.
 * @returns {string} - The decrypted data.
 */
function decryptBase64(data) {
  const buff = Buffer.from(data, "base64");
  return buff.toString("utf-8");
}

/**
 * Encrypts data using the Zlib.
 *
 * @param {string} data - The data to be encrypted.
 * @returns {Buffer} - The encrypted data.
 */
function encryptZlib(data) {
  return zlib.deflateSync(data);
}

/**
 * Decrypts data using the Zlib.
 *
 * @param {Buffer} data - The data to be decrypted.
 * @returns {string} - The decrypted data.
 */
function decryptZlib(data) {
  return zlib.inflateSync(data).toString("utf-8");
}

module.exports = {
  encryptBase64, decryptBase64,
  encryptZlib, decryptZlib
};
