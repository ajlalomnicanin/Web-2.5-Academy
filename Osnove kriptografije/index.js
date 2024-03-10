// Kriptografija

// Kriptografija je disciplina koja se bavi osiguravanjem sigurnosti podataka putem
//  matematičkih tehnika. Koristi se za šifriranje podataka, pretvaranje čitljivih
// informacija u nečitljivu formu, te za zaštitu komunikacije od neovlaštenog pristupa
// ili manipulacije. Osim šifriranja, obuhvaća i tehnike poput digitalnih potpisa, hash
//  funkcija i autentifikacije. Kriptografija se primjenjuje u različitim područjima,
//  uključujući računalne sustave, komunikacijske mreže i elektroničku trgovinu, radi
// zaštite privatnosti i osiguravanja povjerenja.

// Kriptografija mora obezbediti nekoliko ključnih elemenata kako bi pružila adekvatnu
// sigurnost podacima i komunikaciji:

// Poverljivost: Osigurava da samo ovlašćene strane mogu pristupiti čitljivim podacima.
//  To se postiže šifriranjem podataka tako da ih neovlašćene osobe ne mogu razumeti ili
// interpretirati.

// Integritet:   podaci ostaju nepromenjeni i netaknuti tokom prenosa ili skladištenja.
// Ovo se obično postiže korišćenjem heš funkcija za proveru da li su podaci bili izmenjeni
//  nakon što su poslati.

// Autentifikacija: Potvrđuje identitet učesnika u komunikaciji ili pristupu podacima.
//  Autentifikacija se može postići korišćenjem digitalnih potpisa ili drugih metoda provere
//   identiteta.

// Neporecivost: Osigurava da ne možete poreći da ste poslali ili primili određene podatke
//  ili poruke. Ovo se postiže korišćenjem digitalnih potpisa koji nezavisno potvrđuju
//  autentičnost poruka i identitet pošiljaoca.

// Dostupnost: Osigurava da podaci budu dostupni ovlašćenim korisnicima kada su im
// potrebni. To podrazumeva osiguravanje da se podaci ne mogu neovlašćeno blokirati ili
//  ometati.

// Ovi elementi zajedno čine osnovu sigurnosnih zahteva koje kriptografija mora ispuniti
// kako bi pružila adekvatnu zaštitu podacima i komunikaciji u digitalnom okruženju.

// -------------------------------------------------------------------------------

// Hash funkcije su matematičke funkcije koje pretvaraju ulazne podatke bilo koje
// dužine u fiksni izlazni niz fiksnog dužine, obično zvan heš (ili "digest").

// SHA-256 je jedna od funkcija za heširanje koja se koristi u kriptografiji.
// "SHA" označava "Secure Hash Algorithm", što znači "Sigurni algoritam za heširanje".
//  SHA-256 je specifičan algoritam iz porodice SHA koji generiše heš od 256 bita, odnosno
//  niz od 64 heksadecimalne cifre.
// Osnovna svrha SHA-256 funkcije je da pretvori ulazne podatke bilo koje dužine u
// jedinstveni heš koji je teško predvideti ili rekonstruisati. Heš funkcije se koriste za
// proveru integriteta podataka, digitalne potpise, sigurnosne provere i mnoge druge
//  primene u kriptografiji i informacionoj sigurnosti.

const ulaz1 = "test ulaz za hesiranje";

const broj = BigInt(`0x${Buffer.from(ulaz1).toString("hex")}`); // konvertujemo ulaz u BigInt
let hashVrednost = broj;

for (let i = 0; i <= 16; i++) {
  hashVrednost = hashVrednost * hashVrednost;
  hashVrednost = hashVrednost % BigInt(282943);
}
hashVrednost = hashVrednost * broj;
hashVrednost = hashVrednost % BigInt(282943);

console.log(hashVrednost.toString());

// ------------------------------------------------
// const broj = BigInt(`0x${Buffer.from(ulaz).toString("hex")}`);

// Buffer.from(ulaz): Prvo, Buffer.from() funkcija se koristi da se pretvori ulazni string
//  ulaz u binarni oblik (Buffer objekat).
// Binarni podaci su osnovni način predstavljanja podataka u digitalnom računarstvu.
//  Binarni podaci koriste samo dva simbola, obično označene kao 0 i 1. Ovi simboli
//  predstavljaju bitove, osnovne jedinice digitalnih podataka. Svaki bit može biti u jednom
//  od ova dva stanja: 0 ili 1.

// .toString("hex"): Zatim, toString("hex") metoda se koristi na Buffer objektu kako bi se
// binarni podaci pretvorili u heksadecimalni string. Ovo znači da svaki bajt binarnih
//  podataka (koji je predstavljen sa 8 bitova) se pretvara u dva heksadecimalna karaktera.

// 0x${}: Ovo označava heksadecimalnu notaciju u JavaScript-u. 0x označava da je broj koji
// sledi u heksadecimalnom formatu. Unutar ${} se nalazi heksadecimalni string koji je
// prethodno generisan iz ulaznog stringa ulaz.

// BigInt(): Konačno, BigInt() konstruktor se koristi za konverziju heksadecimalnog
// stringa u veliki broj (BigInt). To omogućava rad sa veoma velikim brojevima koji su
//  karakteristični za heksadecimalnu notaciju.

function hashXYZ(ulaz) {
  ulaz = BigInt(`0x${Buffer.from(ulaz).toString("hex")}`);
  let radnaVrijednost = ulaz;

  for (let i = 0; i < 16; i++) {
    //282943
    radnaVrijednost *= radnaVrijednost;
    radnaVrijednost /= BigInt(282943);
  }
  radnaVrijednost *= ulaz;
  const hash = `${(radnaVrijednost % BigInt(282943)).toString()}0000000000`;
  return hash.slice(0, 10);
}
console.log(hashXYZ("predavanje 1 je pocelo"));
