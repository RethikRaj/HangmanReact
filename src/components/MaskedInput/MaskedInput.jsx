import { getMaskedWord } from "./getMaskedWord";

const MaskedInput = ({secretWord, usedLetters}) => {
        
    const maskedWord = getMaskedWord(secretWord, usedLetters);

    return (
        <div>
            <h1>{maskedWord}</h1>
        </div>
    )
}

export default MaskedInput;