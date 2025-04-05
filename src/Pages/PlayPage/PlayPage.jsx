import { useLocation } from "react-router-dom"
import MaskedInput from "../../components/MaskedInput/MaskedInput";
import VirtualKeyBoard from "../../components/VirtualKeyboard/VirtualKeyBoard";
import { useState } from "react";
import Hangman from "../../components/Hangman/Hangman";

const PlayPage = () => {
    const location = useLocation();
    const secretWord = location.state?.secretWord;
    const secretWordSet = new Set(secretWord.toUpperCase().split(""));

    const [usedLetters, setUsedLetters] = useState([]);
    const [chance, setChance] = useState(0);

    const handleLetterClick = (character)=>{
        if(!secretWordSet.has(character)){
            setChance((chance)=>chance+1);
        }
        const updatedusedLetters = [...usedLetters,character]
        setUsedLetters(updatedusedLetters);
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <MaskedInput secretWord={secretWord} usedLetters={usedLetters}/>

            <VirtualKeyBoard secretWord={secretWord} usedLetters={usedLetters} onLetterClick={handleLetterClick}/>
            
            <Hangman chance={chance}/>

        </div>
    )
}

export default PlayPage