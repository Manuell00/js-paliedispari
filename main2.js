// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// Definisco le mie variabili prompt
let utenteNumero = parseInt(prompt("Scegli un numero da 1 a 5"))
let utentePariDispari = prompt("Scegli pari o dispari")

// Inizializzo le variabili pari e dispari in false
let pari = false
let dispari = false

// Creo la prima funzione, che genererà un numero casuale
function randomNumber() {
    let numeroCasuale = Math.floor((Math.random() * 5) + 1)
    return numeroCasuale
}


// Creo la seconda funzione che vedrà se il numero è  pari o dispari
function play(num1, num2) {
    let numeroTot = num1 + num2

    if (numeroTot % 2 === 0) {
        pari = true
        return `il numero totale è ${numeroTot} pari`
    }

    else {
        dispari = true
        return `il numero totale è ${numeroTot} dispari`
    }
    
}

// Creo la terza funzione che decreterà il vincitore utilizzando le altre due
function victoryName() {
    play(utenteNumero, randomNumber())

    if ((utentePariDispari === "pari") && (pari == true)) {
        return `Hai vinto perchè ${play(utenteNumero, randomNumber())}`
    }

    else if ((utentePariDispari === "dispari") && (dispari == true)) {
        return `Hai vinto perchè ${play(utenteNumero, randomNumber())}`
    }

    else {
        return `Hai perso perchè ${play(utenteNumero, randomNumber())}`
    }
}


// Stampo in console il risultato finale della funzione victoryName
console.log(victoryName())
