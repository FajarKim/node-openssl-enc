## Node OpenSSL Enc

![Logo](https://raw.githubusercontent.com/FajarKim/node-openssl-enc/master/image/logo.svg)

A Node.js CLI tool and library for encryption and decryption with OpenSSL Enc.

[![NPM Version](https://img.shields.io/npm/v/@fajarkim/node-openssl-enc?labelColor=302d41&color=ed8796&logoColor=d9e0ee&style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@fajarkim/node-openssl-enc)
[![Stars](https://custom-icon-badges.demolab.com/github/stars/FajarKim/node-openssl-enc?label=Stars&logo=star&labelColor=302d41&color=c9cbff&logoColor=d9e0ee&style=for-the-badge)](https://github.com/FajarKim/node-openssl-enc/stargazers/)
[![Forks](https://custom-icon-badges.demolab.com/github/forks/FajarKim/node-openssl-enc?label=Forks&logo=fork&labelColor=302d41&color=b5e8e0&logoColor=d9e0ee&style=for-the-badge)](https://github.com/FajarKim/node-openssl-enc/network/members/)
[![Issues](https://custom-icon-badges.demolab.com/github/issues/FajarKim/node-openssl-enc?label=Issues&labelColor=302d41&color=f5a97f&logoColor=d9e0ee&logo=issue&style=for-the-badge)](https://github.com/FajarKim/node-openssl-enc/issues)
[![Download Size](https://custom-icon-badges.demolab.com/github/languages/code-size/FajarKim/node-openssl-enc?label=Download&logo=download&labelColor=302d41&color=b7bdf8&logoColor=d9e0ee&style=for-the-badge)](https://github.com/FajarKim/node-openssl-enc/archive/refs/heads/master.zip)

### Introduction

In the dynamic and ever-evolving realm of cybersecurity, data encryption serves as an indispensable shield against potential threats and unauthorized access. Node.js developers find themselves equipped with a library similar to OpenSSL, namely Crypto. Within the vast expanse of OpenSSL tools, OpenSSL Enc takes center stage, offering a command-line interface for symmetric encryption and decryption. Therefore, we have created a similar tool specifically designed for data encryption and decryption using Node.js, known as Node OpenSSL Enc.

### Installation
Maybe on some systems or versions of Node.js there will be an error when running this tool.  You don't need to worry, follow these steps:
- Copy this code
  ```shell
  export NODE_OPTIONS=--openssl-legacy-provider
  ```
- Paste the code to file `.bashrc` or `.zshrc`.
- Reload your terminal again.

If so, you can now carry out the installation:
- Library Node.js
  ```shell
  npm install @fajarkim/node-openssl-enc
  ```
- Command CLI
  ```shell
  npm -g install @fajarkim/node-openssl-enc
  ```

### Usage
To start using Node OpenSSL, follow these steps:
- Library Node.js
  ```javascript
  const { encrypt, decrypt } = require("@fajarkim/node-openssl-enc");
  ```
  Example usage:
  ```javascript
  const { encrypt, decrypt } = require("@fajarkim/node-openssl-enc");
  
  const algorithm = "aes-128-cbc";
  const text = "Hello, World!";
  const pass = "secret";
  
  const encrypted = encrypt(algorithm, text, pass);
  const decrypted = decrypt(algorithm, encrypted, pass);
  
  console.log(encrypted);
  // <Buffer 53 61 6c 74 65 64 5f 5f 72 d1 cb 35 ce 39 76 e1 c6 b2 00 88 d5 47 b5 d9 1d dc 76 7f 0f 0c c8 fb a7 3a d7 f2 f8 21 5f c8 31 5d 56 04 ac ab 06 b7>
  
  console.log(decrypted);
  // Hello, World!
  ```
  or with extra encrypted and decrypted:
  ```javascript
  const { encrypt, decrypt } = require("@fajarkim/node-openssl-enc");
  
  const algorithm = "aes-128-cbc";
  const text = "Hello, World!";
  const pass = "secret";
  const extra = "base64"; // You can replace "base64", with "binary", "hex", or "zlib"
  
  const encrypted = encrypt(algorithm, text, pass, extra);
  const decrypted = decrypt(algorithm, encrypted, pass, extra);
  
  console.log(encrypted);
  // U2FsdGVkX19KDX5oAY11Ph3bGVCnhlvSThkR1b1+DWgUcyVSBVuO/Gb+QQ6eFp5r
  
  console.log(decrypted);
  // Hello, World!
  ```
- Command CLI
  ```shell
  ncssl -h
  ```
  List options:
  ```text
  Usage: ncssl [options]

  Node OpenSSL Enc (ncssl) is encryption and decryption data
  stdin or file with OpenSSL Ciphers

  Options:
    -V, --version          output the version number
    -c, --cipher <cipher>  Specify cipher for encrypt or decrypt
    -f, --file <file>      Specify input path file for encrypt or decrypt
    -p, --passkey <pass>   Specify passphrase key
    -d, --dec              Decrypted data stdin or file
    -o, --out <out>        Saved encryption or decryption to out file
    -l, --list             List all supported ciphers
    -a, --base64           Encrypt or Decrypt out data using Base64
    -b, --binary           Encrypt or Decrypt out data using Binary
    -H, --hex              Encrypt or Decrypt data out using Hex
    -z, --zlib             Encrypt or Decrypt out data using Zlib
    -s, --special <mode>   Special tool for encryption/decryption with
  Base64 or Zlib (not with cipher)
    -h, --help             display help for command

  This tool licensed under AGPL-3.0 License, see <https://github.com/FajarKim/node-openssl-enc/tree/master/LICENSE>
  Report any bugs to <https://github.com/FajarKim/node-openssl-enc/issues>
  Full documentation <https://github.com/FajarKim/node-openssl-enc#readme>
  ```
  Example usage:
  ```shell
  ncssl -c aes-128-cbc -p "secret" -f input.txt
  ```
  or
  ```shell
  echo "Hello, World!" | ncssl -c aes-128-cbc -p "secret"
  ```

### License
Node OpenSSL Enc is released under the AGPL-3.0 license, which grants the following permissions:
- Commercial use
- Modification
- Distribution
- Patent use
- Private use

For more convoluted language, see the [LICENSE](/LICENSE).

### Donate
Love the project? Please consider donating to help it improve!

[![GitHub](https://img.shields.io/badge/GitHub-Sponsor-blue?labelColor=302d41&color=f5bde6&logo=github&logoColor=d9e0ee&style=for-the-badge)](https://github.com/sponsors/FajarKim/)
[![PayPal](https://img.shields.io/badge/PayPal-Donate-blue?labelColor=302d41&color=f4dbd6&logo=paypal&logoColor=d9e0ee&style=for-the-badge)](https://paypal.me/agusbirawan/)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-blue?labelColor=302d41&color=eed49f&logo=buymeacoffee&logoColor=d9e0ee&style=for-the-badge)](https://buymeacoffee.com/fajarkim/)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-Donate-blue?labelColor=302d41&color=ed8796&logo=trakteerid&logoColor=d9e0ee&style=for-the-badge)](https://trakteer.id/fajarkim/)

Are you considering supporting the project by donating to me? Please DO NOT!!

Please visit [this link](https://fajarkim.github.io/donate) and make a small donation to help the people in need. A small donation goes a long way. ❤️

<div align="center">
  <img src="https://raw.githubusercontent.com/FajarKim/FajarKim/master/images/line.svg?sanitize=true"/>
</div>

<p align="center">Made with ❤️ and JavaScript</p>
<p align="center">Copyright © 2023-present Rangga Fajar Oktariansyah</p>
<div align="center">
  <a href="/LICENSE"><img src="https://custom-icon-badges.demolab.com/github/license/FajarKim/node-openssl-enc?label=License&labelColor=302d41&color=91d7e3&logo=law&logoColor=d9e0ee&style=for-the-badge" alt="License"></a>
</div>
