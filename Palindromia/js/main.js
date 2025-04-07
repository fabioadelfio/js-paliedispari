// # RACCOLTA DATI

// Chiedo all'utente di scrivere una parola qualsiasi
const userWord = prompt(`Inserisci una parola:`);
console.log(`La tua parola è: ` + userWord);
let userReverseWord = ``;

// # SVOLGIMENTO

// Dichiaro una funzione per determinare se la parola inserita è palindroma

function isPalindrome(userWord, userReverseWord) {
    for(let i = userWord.length - 1; i >= 0; i--){
        const currentLetter = userWord[i];
        userReverseWord += currentLetter;
    }

    console.log(`La tua parola al contrario è: ` + userReverseWord);

    if(userWord === userReverseWord) return true;

    return false;
}

// # OUTPUT

console.log(`La tua parola è palindroma? `, isPalindrome(userWord, userReverseWord));