const VirtualKeyBoard = ({secretWord, guessedLetters,onLetterClick}) => {
    const letters = new Array(26).fill(null).map((e,i)=>String.fromCharCode(i+65));
    const guessedLettersSet = new Set(guessedLetters);

    const buttonStyle = (letter)=>{
        if(guessedLettersSet.has(letter)){
            return "bg-red-500 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-red-700 transition m-2 cursor-not-allowed";
        }else{
            return "bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-700 transition m-2 cursor-pointer";
        }
    }

    const handleButtonClick = (event)=>{
        const character = event.target.value;
        onLetterClick?.(character);
    }

    return (
        <div className="grid grid-cols-7">
            {letters.map((letter)=>{
                return <button 
                    key={letter} 
                    className={buttonStyle(letter)} 
                    onClick={handleButtonClick} 
                    value={letter}
                    disabled={guessedLettersSet.has(letter)}
                >
                    {letter}
                </button>;
            })}
        </div>
    )
}

export default VirtualKeyBoard