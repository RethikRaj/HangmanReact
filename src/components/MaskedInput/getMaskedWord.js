export const getMaskedWord = (secretWord, usedLetters)=>{
    secretWord = secretWord.toUpperCase();
    usedLetters = usedLetters.join("").toUpperCase().split("");
    const usedLettersSet = new Set(usedLetters);

    const maskedWord = secretWord.split("").reduce((acc,curr)=>{
        return acc + (usedLettersSet.has(curr) ? curr+" " : "_ ");
    },"");

    return maskedWord;
}