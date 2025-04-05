import { getMaskedWord } from "./getMaskedWord";

const MaskedInput = ({secretWord, usedLetters}) => {
        
    const maskedWord = getMaskedWord(secretWord, usedLetters);

    return (
        <div className="my-10">
            <h1 className="text-7xl text-pink-600 font-extrabold">{maskedWord}</h1>
        </div>
    )
}

export default MaskedInput;