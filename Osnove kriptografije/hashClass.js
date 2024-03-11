// Uvozimo potrebne biblioteke
const fs = require("fs"); // Biblioteka za rad sa datotekama
const crypto = require("crypto"); // Biblioteka za kriptografiju

// Putanja do datoteke koju želimo hashirati
const filePath = "text.txt";

// Kreiramo ReadStream objekat za čitanje sadržaja datoteke
const readStream = fs.createReadStream(filePath);

// Kreiramo objekat za hashiranje sa SHA-256 algoritmom
const hash = crypto.createHash("sha256");

// Slušamo događaj 'data' na ReadStream objektu
readStream.on("data", (chunk) => {
  // Ažuriramo hash objekat sa delom podataka iz datoteke
  hash.update(chunk);
});

// Slušamo događaj 'end' na ReadStream objektu (kada se završi čitanje datoteke)
readStream.on("end", () => {
  // Dobijamo konačni hash u heksadecimalnom formatu
  const fileHash = hash.digest("hex");
  // Ispisujemo rezultat hashiranja
  console.log("SHA-256 Hash:", fileHash);
});

// Slušamo događaj 'error' na ReadStream objektu (za slučaj greške pri čitanju datoteke)
readStream.on("error", (err) => {
  console.error("Greška pri čitanju datoteke:", err);
});
