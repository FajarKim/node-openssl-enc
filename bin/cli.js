#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { program } = require("commander");
const {
  encrypt, decrypt,
  encryptBase64, decryptBase64,
  encryptZlib, decryptZlib,
  algorithmSupported, algorithmUnsupported
} = require("../index");
const {
  formatArrayToTable,
  calculateColumns
} = require("../lib/utils");
const packageJsonPath = path.join(__dirname, "../package.json");
const packageJson = require(packageJsonPath);

const __program = String(process.argv.slice(1,2)).replace(/.+\//g, "");

process.stdout.write(execSync(`node ${__dirname}/../lib/check-version.js`, { encoding: "utf-8" }));

program
  .version(`Node OpenSSL Enc ${packageJson.version} (Library: OpenSSL ${process.versions.openssl})`)
  .description(`Node OpenSSL Enc (${__program}) is encryption and decryption data stdin or file with OpenSSL Ciphers`)
  .option("-c, --cipher <cipher>", "select cipher for encrypt or decrypt")
  .option("-f, --file <file>", "input path file for encrypt or decrypt")
  .option("-p, --passkey <pass>", "input passphrase key")
  .option("-d, --dec", "decrypted data stdin or file")
  .option("-o, --out <out>", "saved encryption or decryption to out file")
  .option("-l, --list", "list all supported ciphers")
  .option("-a, --base64", "extra encrypt or decrypt data stdout using base64")
  .option("-b, --binary", "extra encrypt or decrypt data stdout using binary")
  .option("-H, --hex", "extra encrypt or decrypt data stdout using hex")
  .option("-z, --zlib", "extra encrypt or decrypt data stdout using zlib")
  .option("-s, --special <mode>", "special tool for encryption/decryption with\nbase64 or zlib (without cipher)")
  .action((options) => {
    const { cipher, file, passkey, dec, out, list, base64, binary, hex, zlib, special } = options;

    try {
      if (list) {
        const columns = calculateColumns(algorithmSupported);
        console.log("List supported ciphers:\n");
        console.log(formatArrayToTable(algorithmSupported, columns));
        process.exit(0);
      }

      const specialEnc = [
        "base64",
        "zlib"
      ];

      var specialMode = "";
      if (! special) {
        if (! passkey || ! cipher) {
          console.error(`${__program}: missing required operand`);
          console.log(`Try '${__program} -h' for more information.`)
          process.exit(1);
        }
        if (algorithmUnsupported.includes(cipher.toLowerCase())) {
          console.error(`${__program}: the cipher '${cipher}' is not supported for this tool`);
          console.log(`Try '${__program} -l' for list all cipher supported.`);
          process.exit(1);
        } else if (! algorithmSupported.includes(cipher.toLowerCase())) {
          console.error(`${__program}: '${cipher}' is not cipher`);
          console.log(`Try '${__program} -l' for list all cipher supported.`);
          process.exit(1);
        }
      } else if (! specialEnc.includes(special.toLowerCase())) {
        console.error(`${__program}: '${special}' is not mode for special enc`)
        process.exit(1);
      } else {
        var specialMode = special.toLowerCase();
      }

      var extra = "";
      if (base64) {
        var extra = "base64";
      } else if (binary) {
        var extra = "binary";
      } else if (hex) {
        var extra = "hex";
      } else if (zlib) {
        var extra = "zlib";
      }

      if (file) {
        if (dec) {
          if (specialMode === "base64") {
            const encryptedData = fs.readFileSync(file);
            const decrypted = decryptBase64(encryptedData);

            if (out) {
              fs.writeFileSync(out, decrypted);
              console.info(`${__program}: Decryption completed`);
              console.log(`The result saved to '${out}'.`);
            } else {
              process.stdout.write(decrypted);
            }
          } else if (specialMode === "zlib") {
            const encryptedData = fs.readFileSync(file);
            const decrypted = decryptZlib(encryptedData);

            if (out) {
              fs.writeFileSync(out, decrypted);
              console.info(`${__program}: Decryption completed`);
              console.log(`The result saved to '${out}'.`);
            } else {
              process.stdout.write(decrypted);
            }
          } else {
            if (extra === "base64" || extra === "binary" || extra === "hex") {
              var encryptedData = fs.readFileSync(file, "utf-8");
            } else {
              var encryptedData = fs.readFileSync(file);
            }
            const decrypted = decrypt(cipher, encryptedData, passkey, extra);

            if (out) {
              fs.writeFileSync(out, decrypted);
              console.info(`${__program}: Decryption completed`);
              console.log(`The result saved to '${out}'.`);
            } else {
              process.stdout.write(decrypted);
            }
          }
        } else {
          if (specialMode === "base64") {
            const plaintext = fs.readFileSync(file, "utf-8");
            const encrypted = encryptBase64(plaintext);

            if (out) {
              fs.writeFileSync(out, encrypted);
              console.info(`${__program}: Encryption completed`);
              console.log(`The result saved to '${out}'.`);
            } else {
              process.stdout.write(encrypted);
            }
          } else if (specialMode === "zlib") {
            const plaintext = fs.readFileSync(file, "utf-8");
            const encrypted = encryptZlib(plaintext);

            if (out) {
              fs.writeFileSync(out, encrypted);
              console.info(`${__program}: Encryption completed`);
              console.log(`The result saved to '${out}'.`);
            } else {
              process.stdout.write(encrypted);
            }
          } else {
            const plaintext = fs.readFileSync(file, "utf-8");
            const encrypted = encrypt(cipher, plaintext, passkey, extra);

            if (out) {
              fs.writeFileSync(out, encrypted);
              console.info(`${__program}: Encryption completed`);
              console.log(`The result saved to '${out}'.`);
            } else {
              process.stdout.write(encrypted);
            }
          }
        }
      } else {
        if (dec) {
          if (specialMode === "base64") {
            let inputText = "";
            process.stdin.setEncoding("utf-8");
            process.stdin.on("readable", () => {
              const chunk = process.stdin.read();
              if (chunk !== null) {
                inputText += chunk;
              }
            });

            process.stdin.on("end", () => {
              const decrypted = decryptBase64(inputText);
              process.stdout.write(decrypted);
            });
          } else if (specialMode === "zlib") {
            let inputText = Buffer.alloc(0);
            process.stdin.on("readable", () => {
              const chunk = process.stdin.read();
              if (chunk !== null) {
                inputText = Buffer.concat([inputText, chunk]);
              }
            });
            process.stdin.on("end", () => {
              const decrypted = decryptZlib(inputText);
              process.stdout.write(decrypted);
            });
          } else {
            if (extra === "base64" || extra === "binary" || extra === "hex") {
              let inputText = "";
              process.stdin.on("readable", () => {
                const chunk = process.stdin.read();
                if (chunk !== null) {
                  inputText += chunk;
                }
              });
              process.stdin.on("end", () => {
                const decrypted = decrypt(cipher, inputText, passkey, extra);
                process.stdout.write(decrypted);
              });
            } else {
              let inputText = Buffer.alloc(0);
              process.stdin.on("readable", () => {
                const chunk = process.stdin.read();
                if (chunk !== null) {
                  inputText = Buffer.concat([inputText, chunk]);
                }
              });
              process.stdin.on("end", () => {
                const decrypted = decrypt(cipher, inputText, passkey, extra);
                process.stdout.write(decrypted);
              });
            }
          }
        } else {
          if (specialMode === "base64") {
            let inputText = "";
            process.stdin.setEncoding("utf-8");
            process.stdin.on("readable", () => {
              const chunk = process.stdin.read();
              if (chunk !== null) {
                inputText += chunk;
              }
            });

            process.stdin.on("end", () => {
              const encrypted = encryptBase64(inputText);
              process.stdout.write(encrypted);
            });
          } else if (specialMode === "zlib") {
            let inputText = "";
            process.stdin.setEncoding("utf-8");
            process.stdin.on("readable", () => {
              const chunk = process.stdin.read();
              if (chunk !== null) {
                inputText += chunk;
              }
            });

            process.stdin.on("end", () => {
              const encrypted = encryptZlib(inputText);
              process.stdout.write(encrypted);
            });
          } else {
            let inputText = "";
            process.stdin.setEncoding("utf-8");
            process.stdin.on("readable", () => {
              const chunk = process.stdin.read();
              if (chunk !== null) {
                inputText += chunk;
              }
            });

            process.stdin.on("end", () => {
              const encrypted = encrypt(cipher, inputText, passkey, extra);
              process.stdout.write(encrypted);
            });
          }
        }
      }
    } catch(error) {
      console.error(`${__program}: ${error.message}`);
      const errorCode = typeof error.code === "number" ? error.code : 1;
      process.exit(errorCode);
    }
  })
  .on("--help", () => {
    console.log("");
    console.log(`This tool licensed under ${packageJson.license} License, see <${packageJson.homepage.replace("#readme", "")}/tree/master/LICENSE>`)
    console.log(`Report any bugs to <${packageJson.bugs.url}>`);
    console.log(`Full documentation <${packageJson.homepage}>`);
  })
  .parse(process.argv);
