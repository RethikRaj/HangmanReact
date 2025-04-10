import { useLocation } from "react-router-dom"
import MaskedInput from "../../components/MaskedInput/MaskedInput";
import VirtualKeyBoard from "../../components/VirtualKeyboard/VirtualKeyBoard";
import { useEffect, useState, useMemo } from "react";
import Hangman from "../../components/Hangman/Hangman";

const PlayPage = () => {
    const location = useLocation();
    const secretWord = location.state?.secretWord;
    const secretWordSet = useMemo(() => new Set(secretWord.toUpperCase().split("")), [secretWord]);

    const [usedLetters, setUsedLetters] = useState([]);
    const [chance, setChance] = useState(0);
    const [correctLetters, setCorrectLetters] = useState([]);

    const handleLetterClick = (character)=>{
        if(!secretWordSet.has(character)){
            setChance((chance)=>chance+1);
        }else{
            setCorrectLetters((correctLetters)=>[...correctLetters,character]);
        }
        setUsedLetters((usedLetters)=>[...usedLetters,character]);
    }

    useEffect(()=>{
        if(chance === 7){
            alert("You lost!");
        }else if(secretWordSet.size === correctLetters.length){
            alert("You won!");
        }

    },[correctLetters, chance, secretWordSet]);


    return (
        <div className="flex justify-center gap-10">
            <div className="flex flex-col items-center justify-center">
                <MaskedInput secretWord={secretWord} usedLetters={usedLetters}/>

                <VirtualKeyBoard secretWord={secretWord} usedLetters={usedLetters} onLetterClick={handleLetterClick}/>
            </div>
            <div>
                <Hangman chance={chance}/>
            </div>
        </div>
        
    )
}

export default PlayPage