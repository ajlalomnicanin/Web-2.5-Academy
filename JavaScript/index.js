// JS je nastao 1995. godine od strane NetScapea

// Moze se koristiti za
// fronted (JS + React, Vue, Angular)
// backend  (Node.js, Express, Django, Ruby on Rails itd.)
// desktop app (Electron)
// mobilne aplikacije (React Native)+

// Node.js, za razliku od web pregledača kao što je Google Chrome, nije namenjen za pregledanje
//  web stranica ili interakciju sa korisnicima putem grafičkog korisničkog interfejsa. Umesto toga,
//  Node.js je serverska platforma koja omogućava izvršavanje JavaScript koda na serverskoj strani.
// Skriptni jezik, interpreter liniju po liniju

// Varijable //
// U JavaScriptu, promenljive se koriste za čuvanje podataka. One se deklarišu sa ključnom reči (keyword) var, let ili
// const, a mogu sadržati različite tipove podataka kao što su brojevi, stringovi, nizovi, objekti, i drugo.

// Korišćenje ključne reči var (globalno dostupna promenljiva)
var x = 10;

// Korišćenje ključne reči let (lokalno ograničena promenljiva)
let y = "Hello";

// Korišćenje ključne reči const (konstanta, ne može se ponovo dodeliti)
const PI = 3.14;

// Hoisting:
// Promenljive deklarisane sa var se dižu (hoist) na vrh svoje funkcije ili globalnog opsega, što znači
//  da se može pristupiti promenljivoj pre njene deklaracije. Međutim, vrednost će biti undefined ako se
//   promenljiva koristi pre inicijalizacije.
// Promenljive deklarisane sa let ne dozvoljavaju hoisting, što znači da se ne može pristupiti promenljivoj
//  pre njene deklaracije. Ako se promenljiva koristi pre inicijalizacije, dobijećete ReferenceError.

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Tipovi podataka //

// Tipovi podataka definišu vrste vrednosti koje promenljive mogu imati, kao i operacije koje se mogu izvoditi
// nad tim vrednostima.

// Na primer, neki od osnovnih tipova podataka u većini programskih jezika uključuju:

// Brojevi (Numbers): Koriste se za reprezentaciju numeričkih vrednosti, kao što su celi brojevi (integer)
// ili decimalni brojevi (floating-point).

// Stringovi (Strings): Koriste se za reprezentaciju teksta, tj. nizova karaktera.

// Logičke vrednosti (Boolean): Koriste se za reprezentaciju istinitosne vrednosti, tj. vrednosti koje mogu
//  biti samo true (istina) ili false (laž).

// Nizovi (Arrays): Koriste se za reprezentaciju kolekcija elemenata istog tipa podataka, gde svaki element
//  ima svoj indeks.

// Objekti (Objects): Koriste se za reprezentaciju kompleksnih struktura podataka koje sadrže više
//  ključ-vrednost parova.

// Null (Nedefinisana vrednost): Označava odsustvo vrednosti.

// Undefined (Nedodeljena vrednost): Označava promenljivu kojoj nije dodeljena nikakva vrednost.

// BigInt (Veliki celi brojevi): Omogućava rad sa veoma velikim celobrojnim vrednostima, van opsega standardnih brojeva.

// Ukratko, NaN označava nevalidne numeričke vrednosti, dok null označava odsustvo vrednosti ili praznu referencu.

// typeof je operator u JavaScriptu koji se koristi za dobijanje tipa podataka (eng. data type) operand-a. Ovaj
// operator vraća string koji predstavlja tip podataka operand-a.
// typeof null vraća "object"

console.log(typeof typeof 123);
// typeof 123 vraća string "number".
// typeof "number" vraća string "string".

console.log(typeof null); // "object"
console.log(typeof NaN); // "number"
console.log(typeof class Foo {}); // "function"   u JavaScriptu, klase se zapravo prevode u funkcije kada se evaluiraju.
console.log(typeof {}); // "object"
console.log(typeof [1, 2, 3]); // "object"
console.log(typeof Infinity); //number -se smatra numeričkom vrednošću

////////////////////////////////////////////////////////////////////////////////////////
// Function //

// Funkcije su kao male mašine koje primaju neke ulazne stvari (parametre), rade neki
//  posao, i vraćaju nešto nazad (povratnu vrednost). Zamislite ih kao male blokove koda
//  koji možete koristiti ponovo i ponovo u svom programu.
function myFunction() {} //deklaracija funkcije
const greet = function () {}; // izraz funkcije
const greett = () => {}; //arow function

////////////////////////////////////////////////////////////////////////////////////////
// Objecti //

// Objekti omogućavaju grupisanje više vrednosti različitih tipova podataka u jednoj strukturi podataka

let automobil = {
  marka: "Toyota",
  model: "Corolla",
  godinaProizvodnje: 2018,
  zvukHorn: function () {
    console.log("Beep Beep!");
  },
};

automobil.zvukHorn(); // Poziva metodu zvukHorn() na objektu automobil, ispisuje "Beep Beep!"

// notacija sa tackom
// automobil.zvukHorn

// notacija sa zagradom
// automobil["zvukHorn"]

// //////////////////////////////////////////////////////////////////////////////////////
// Classe //

// Definisanje klase
class Osoba {
  constructor(ime, prezime) {
    this.ime = ime;
    this.prezime = prezime;
  }

  get ime() {
    return this._ime.toUpperCase();
  }

  set ime(novoIme) {
    if (typeof novoIme === "string" && novoIme.length > 0) {
      this._ime = novoIme;
    } else {
      console.error("Ime mora biti neprazan string.");
    }
  }
  pozdrav() {
    console.log(`Zdravo, ja sam ${this.ime} ${this.prezime}.`);
  }
}

// Kreiranje instance objekta
let osoba1 = new Osoba("Ana", "Petrović");
let osoba2 = new Osoba("Marko", "Jović");

// Poziv metode objekta
osoba1.pozdrav(); // Ispisuje: Zdravo, ja sam Ana Petrović.
osoba2.pozdrav(); // Ispisuje: Zdravo, ja sam Marko Jović.

// klase nam omogućavaju da organizujemo naš kod tako da definišemo šablone za kreiranje
// objekata koji dele zajedničke karakteristike i ponašanje. Ovo olakšava ponovnu upotrebu
// koda, povećava fleksibilnost i olakšava održavanje programa.

// get metoda omogućava nam da primenimo transformaciju nad vrednošću svojstva pre nego što je vratimo.
// Set metode: Kada koristimo set metodu, ona nam omogućava da postavljamo (ili menjamo) vrednosti
//  svojstava objekta. Ova metoda se poziva kada pokušamo da postavimo vrednost svojstva.

// Definicija podklase Student koja nasleđuje klasu Osoba
class Student extends Osoba {
  constructor(ime, prezime, indeks) {
    super(ime, prezime); // Poziv konstruktora roditeljske klase
    this.indeks = indeks;
  }

  // Dodatna metoda podklase
  predstaviSe() {
    super.pozdrav(); // Poziv metode roditeljske klase
    console.log(
      `Moje ime je ${this.ime} ${this.prezime} i moj broj indeksa je ${this.indeks}.`
    );
  }
}

// Kreiranje instance objekta klase Student
let student1 = new Student("Ana", "Petrović", "123456");
let student2 = new Student("Marko", "Jović", "654321");

// Poziv metoda objekta
student1.predstaviSe(); // Ispisuje: Zdravo, ja sam ANA Petrović. Moje ime je ANA Petrović i moj broj indeksa je 123456.
student2.predstaviSe(); // Ispisuje: Zdravo, ja sam MARKO Jović. Moje ime je MARKO Jović i moj broj indeksa je 654321.

// Nizovi su strukture podataka koje omogućavaju čuvanje više elemenata u jednoj
// promenljivoj. Ovi elementi mogu biti bilo koji tip podataka, kao što su brojevi,
//  stringovi, objekti ili čak drugi nizovi. Nizovi omogućavaju efikasan način organizacije
// i manipulacije podacima.

// Definicija niza sa nekoliko brojeva
let brojevi = [1, 2, 3, 4, 5];

// Definicija niza sa nekoliko stringova
let gradovi = ["Beograd", "Novi Sad", "Niš", "Kragujevac"];

// Definicija niza sa kombinacijom različitih tipova podataka
let razno = [1, "hello", true, { ime: "Ana", godine: 30 }];

// Prikaz elemenata niza
console.log(brojevi); // Ispisuje: [1, 2, 3, 4, 5]
console.log(gradovi); // Ispisuje: ["Beograd", "Novi Sad", "Niš", "Kragujevac"]
console.log(razno); // Ispisuje: [1, "hello", true, {ime: "Ana", godine: 30}]
