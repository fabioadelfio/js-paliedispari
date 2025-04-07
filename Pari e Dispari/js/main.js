// # RACCOLTA DATI

// Chiedo all'utente di scegliere tra pari e dispari
const EvenOrOdd = prompt(`Cosa scegli tra pari e dispari?`);
if(EvenOrOdd !== `pari` && EvenOrOdd !== `dispari`) throw new Error(`Devi digitare solo pari o dispari!`);
console.log(`L'utente ha scelto: ` + EvenOrOdd);

// Chiedo all'utente di scegliere un numero da 1 a 5
const userNumber = parseInt(prompt(`Scegli un numero da 1 a 5:`));
if(userNumber > 5 || isNaN(userNumber)) throw new Error(`Devi inserire un numero da 1 a 5`);
console.log(`L'utente ha scelto il numero ` + userNumber);

// Dichiaro la funzione che mi permette di generare un numero casuale da 1 a 5 per il PC
function generateRandomNumber(max, min = 1){
    // Verifico se max e min sono validi per procedere
    max = parseInt(max);
    min = parseInt(min);
    if(isNaN(max)) throw new Error(`Max deve essere un numero`);
    if(isNaN(min)) throw new Error(`Min deve essere un numero`);
    
    // Genero il numero casuale
    const pcNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return pcNumber;
}

const pcNumber = generateRandomNumber(5);
console.log(`Il numero del pc è: ` + pcNumber);

// # SVOLGIMENTO

// Sommo i due numeri
const sum = userNumber + pcNumber;
console.log(`La somma dei due numeri è: ` + sum);

// Dichiaro la funzione che mi permette di verificare se la somma è pari,
// Di conseguenza se risulta false la somma sarà dispari
function SumEvenOrOdd(sum) {
    if(sum % 2 === 0) {
        SumEvenOrOdd = `pari`;
    } else {
        SumEvenOrOdd = `dispari`;
    }
    return SumEvenOrOdd;
}

// Dichiaro il vincitore
if(EvenOrOdd === SumEvenOrOdd(sum)) {
    console.log(`L'utente ha vinto!`);
} else {
    console.log(`Il PC ha vinto!`);
}