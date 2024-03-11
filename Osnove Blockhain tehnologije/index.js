const crypto = require("crypto");

// kreiranje Block klase
class Block {
  constructor(index, timestamp, data, prevHash) {
    this.index = index; //sastavni deo bloka
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.calculateHash();
  }

  calculateHash() {
    this.hash = crypto
      .createHash("sha256")
      .update(this.index.toString())
      .update(this.timestamp.toString())
      .update(this.data)
      .update(this.prevHash)
      .digest("hex");
  }
}
const dammyBlock = new Block(
  0,
  Date.now(),
  "neki podaci",
  crypto.createHash("sha256").update("42").digest("hex")
);
console.log(
  dammyBlock.index,
  dammyBlock.timestamp,
  dammyBlock.data,
  dammyBlock.prevHash,
  dammyBlock.hash
);

// ovaj kod  omogućava da kreiraš blokove unutar blockchaina.
//  Svaki blok ima četiri osnovna svojstva:

// index: Ovo je redni broj bloka u lancu. Prvi blok (početni blok) obično ima indeks 0,
//  dok svaki naredni blok ima indeks koji je za jedan veći od prethodnog.

// timestamp: Ovde se čuva vremenska oznaka kada je blok kreiran. To omogućava praćenje
//  vremena kada su se dogodile promene u blockchainu.

// data: Ovo je deo bloka u kojem se čuvaju podaci koje želiš da dodas u blockchain.
//  To može biti bilo šta, od transakcija u slučaju kriptovaluta, pa sve do različitih
//  vrsta informacija u drugim aplikacijama zasnovanim na blockchain tehnologiji.

// prevHash: Ovo je hash vrednost prethodnog bloka u lancu. To osigurava integritet i
//  neizmenjivost blockchaina. Svaki blok se povezuje sa prethodnim blokom putem njegove
//  hash vrednosti.

// Funkcija calculateHash() se poziva prilikom kreiranja svakog bloka i ona izračunava
//  hash vrednost za taj blok. Ova hash vrednost se formira od svih svojstava bloka
//   (indeks, vremenska oznaka, podaci i hash prethodnog bloka).

// U tvom primeru, dammyBlock predstavlja prvi blok u blockchainu. Možeš koristiti ovaj 
// kod da kreiraš više blokova tako što ćeš ponovo kreirati nove instance klase Block za
//  svaki novi blok, pri čemu ćeš koristiti hash vrednost prethodnog bloka kao prevHash 
// argument za novi blok. Na taj način se stvara povezan lanac blokova koji čini blockchain.