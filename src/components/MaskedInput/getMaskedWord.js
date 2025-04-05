export const getMaskedWord = (secretWord,guessedLetters)=>{
    secretWord = secretWord.toUpperCase();
    guessedLetters = guessedLetters.join("").toUpperCase().split("");
    const guessedLettersSet = new Set(guessedLetters);

    const maskedWord = secretWord.split("").reduce((acc,curr)=>{
        return acc + (guessedLettersSet.has(curr) ? curr+" " : "_ ");
    },"");

    return maskedWord;
}