import getVirtualButtonStyle from "./getVirtualButtonStyle";

const VirtualKeyBoard = ({secretWord, usedLetters,onLetterClick}) => {
    const letters = new Array(26).fill(null).map((e,i)=>String.fromCharCode(i+65));
    const usedLettersSet = new Set(usedLetters.join("").toUpperCase().split(""));
    const secretWordSet = new Set(secretWord.toUpperCase().split(""));

    const handleButtonClick = (event)=>{
        const character = event.target.value;
        onLetterClick?.(character);
    }

    return (
        <div className="grid grid-cols-7">
            {letters.map((letter)=>{
                return <button 
                    key={letter} 
                    className={getVirtualButtonStyle(letter,usedLettersSet,secretWordSet)} 
                    onClick={handleButtonClick} 
                    value={letter}
                    disabled={usedLettersSet.has(letter)}
                >
                    {letter}
                </button>;
            })}
        </div>
    )
}

export default VirtualKeyBoard