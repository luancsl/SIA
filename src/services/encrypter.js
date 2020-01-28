require('dotenv').config({ path: '.env' });
const crypto = require("crypto");


const config = {
  algorithm: "aes256",
  secret: process.env.jwtSecret,
  type: "hex",
}

const Encrypter = {
  crypt: (dado) => {
    const cipher = crypto.createCipher(config.algorithm, config.secret);
    cipher.update(dado);
    return cipher.final(config.type);
  },
  decrypt: (dado) => {
    const decipher = crypto.createDecipher(config.algorithm, config.secret);
    decipher.update(dado, config.type);
    return decipher.final('utf8');
  }
}

module.exports = Encrypter;