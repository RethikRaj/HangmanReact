import { getMaskedWord } from "./getMaskedWord";

const MaskedInput = ({secretWord, guessedLetters}) => {
        
    const maskedWord = getMaskedWord(secretWord,guessedLetters);

    return (
        <div>
            <h1>{maskedWord}</h1>
        </div>
    )
}

export default MaskedInput;