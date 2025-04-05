import { useLocation } from "react-router-dom"
import MaskedInput from "../../components/MaskedInput/MaskedInput";
import VirtualKeyBoard from "../../components/VirtualKeyboard/VirtualKeyBoard";
import { useState } from "react";

const PlayPage = () => {
    const location = useLocation();
    const secretWord = location.state?.secretWord;

    const [usedLetters, setUsedLetters] = useState([]);

    const handleLetterClick = (character)=>{
        const updatedGuessedLetters = [...usedLetters,character]
        setUsedLetters(updatedGuessedLetters);
        console.log(updatedGuessedLetters);
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <MaskedInput secretWord={secretWord} usedLetters={usedLetters}/>

            <VirtualKeyBoard secretWord={secretWord} guessedLetters={usedLetters} onLetterClick={handleLetterClick}/>

        </div>
    )
}

export default PlayPage