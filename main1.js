// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const parolaUtente = prompt("inserisci una parola")



function palindrome(parola) {
    // Rendo tutti i caratteri minuscoli
    parola = parola.toLowerCase();

    // Rimuovo gli spazi
    parola = parola.replace(" ", "");

    // Definisco una variabile lunghezza contente la lunghezza della parola
    lunghezza = parola.length;

    // Utilizzo un ciclo for dove verifico se la lettera partendo da sx sia uguale a quella di dx fino a metà della parola
    for (let i = 0; i < lunghezza / 2; i++) {
        // Se non è così restituisco false
       if (parola[i] !== (parola[lunghezza -1 -i])) {
        return false
       }
    }
    // Se è verificato restituisco true
    return true
}


console.log(palindrome(parolaUtente))