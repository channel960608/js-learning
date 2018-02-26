'use strict';

const crypto = require('crypto');

const hash = crypto.createHash('md5');

hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex'));


const hmac = crypto.createHmac('sha256', 'secret-key');
hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

console.log(hmac.digest('hex'));


function aesEncrypt(data, key) {
  const cipher = crypto.createCipher('aes192', key);
  var crypted = cipher.update(data, 'utf-8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

function aesDecrypt(encrypted, key) {
  const decipher = crypto.createDecipher('aes192', key)
    var decrypted = decipher.update(encrypted, 'hex', 'utf-8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

var data = 'Hello, this is a secret message!';
var key = 'Password!';
var encrypted = aesEncrypt(data, key);
var decrypted = aesDecrypt(encrypted, key);

console.log('Plain text: ' + data);
console.log('Encrypted text: ' + encrypted);
console.log('Decrypted text: ' + decrypted); 
