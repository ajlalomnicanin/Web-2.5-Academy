const crypto = require("crypto");

function generateHash(text) {
  const hash = crypto.createHash("sha256");
  hash.update(text);
  return hash.digest("hex");
}

const text = "ajla";
const hashedText = generateHash(text);
console.log("Hashed text:", hashedText);
