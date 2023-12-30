const { encryptIDAES128CCM, decryptIDAES128CCM } = require("./id-aes128-ccm");
const { encryptIDAES128GCM, decryptIDAES128GCM } = require("./id-aes128-gcm");
const { encryptIDAES192CCM, decryptIDAES192CCM } = require("./id-aes192-ccm");
const { encryptIDAES192GCM, decryptIDAES192GCM } = require("./id-aes192-gcm");
const { encryptIDAES256CCM, decryptIDAES256CCM } = require("./id-aes256-ccm");
const { encryptIDAES256GCM, decryptIDAES256GCM } = require("./id-aes256-gcm");

module.exports = {
  encryptIDAES128CCM, decryptIDAES128CCM,
  encryptIDAES128GCM, decryptIDAES128GCM,
  encryptIDAES192CCM, decryptIDAES192CCM,
  encryptIDAES192GCM, decryptIDAES192GCM,
  encryptIDAES256CCM, decryptIDAES256CCM,
  encryptIDAES256GCM, decryptIDAES256GCM
};
