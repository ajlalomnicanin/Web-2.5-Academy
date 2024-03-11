// Importovanje biblioteke 'node-rsa'
const NodeRSA = require('node-rsa');

// Kreiranje novog para RSA ključeva sa dužinom od 512 bitova
const key = new NodeRSA({ b: 512 });

// Tekst koji želimo da enkriptujemo
const text = 'Hello RSA!';

// Enkripcija teksta koristeći javni ključ
const encrypted = key.encrypt(text, 'base64');

// Ispis enkriptovanog teksta
console.log('Enkriptovan: ', encrypted);

// Dekripcija enkriptovanog teksta koristeći privatni ključ
const decrypted = key.decrypt(encrypted, 'utf8');

// Ispis dekriptovanog teksta
console.log('Dekriptovan: ', decrypted);
