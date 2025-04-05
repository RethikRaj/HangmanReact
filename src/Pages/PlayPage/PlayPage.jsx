import { useLocation } from "react-router-dom"
import MaskedInput from "../../components/MaskedInput/MaskedInput";
import VirtualKeyBoard from "../../components/VirtualKeyboard/VirtualKeyBoard";
import { useState } from "react";

const PlayPage = () => {
    const location = useLocation();
    const secretWord = location.state?.secretWord;

    const [guessedLetters, setGuessedLetters] = useState([]);

    const handleLetterClick = (character)=>{
        const updatedGuessedLetters = [...guessedLetters,character]
        setGuessedLetters(updatedGuessedLetters);
        console.log(updatedGuessedLetters);
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <MaskedInput secretWord={secretWord} guessedLetters={guessedLetters}/>

            <VirtualKeyBoard secretWord={secretWord} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>

        </div>
    )
}

export default PlayPage