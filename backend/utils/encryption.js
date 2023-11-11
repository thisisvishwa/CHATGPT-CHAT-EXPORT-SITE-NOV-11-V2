```javascript
const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const secretKey = process.env.SECRET_KEY || 'default_secret_key';
const ivLength = 16;

const encryptData = (text) => {
    const iv = crypto.randomBytes(ivLength);
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encryptedText = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);

    return `${iv.toString('hex')}:${encryptedText.toString('hex')}`;
};

const decryptData = (encryptedText) => {
    const textParts = encryptedText.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedTextBuffer = Buffer.from(textParts.join(':'), 'hex');

    const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
    const decryptedText = Buffer.concat([decipher.update(encryptedTextBuffer), decipher.final()]);

    return decryptedText.toString();
};

module.exports = {
    encryptData,
    decryptData
};
```