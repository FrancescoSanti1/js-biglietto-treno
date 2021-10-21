// Obiettivo: calcolo del prezzo del biglietto del treno

// Definisco le variabili
let chilometri;
let anni;
let prezzoBase;
let sconto;
let prezzoScontato;
const tariffa = 0.21;
const elementoPrezzo = document.getElementById("prezzo-biglietto");

// Chiedo all'utente quanti chilometri deve percorrere
chilometri = prompt("Quanti chilometri devi percorrere?");

// determino il prezzo base del biglietto
prezzoBase = chilometri * tariffa;
// console.log(prezzoBase);

// Chiedo all'utente quanti anni ha
anni = prompt("Quanti anni hai?");

// condizione che in base all'età determina il prezzo del biglietto e lo comunico all'utente
if (anni < 18) {
    sconto = (prezzoBase * 0.2);
    prezzoScontato = prezzoBase - sconto;
    elementoPrezzo.innerHTML=`Il costo del tuo biglietto è di ${prezzoScontato.toFixed(2)} euro.
    Grazie allo sconto giovani, per questo viaggio hai risparmiato ${sconto.toFixed(2)} euro!`;
} else if (anni > 65) {
    sconto = (prezzoBase * 0.4);
    prezzoScontato = prezzoBase - sconto;
    elementoPrezzo.innerHTML=`Il costo del tuo biglietto è di ${prezzoScontato.toFixed(2)} euro.
    Grazie allo sconto over65, per questo viaggio hai risparmiato ${sconto.toFixed(2)} euro!`;
} else {
    elementoPrezzo.innerHTML=`Il costo del tuo biglietto è di ${prezzoBase.toFixed(2)} euro`;
}

// console.log(sconto);
// console.log(prezzoScontato);