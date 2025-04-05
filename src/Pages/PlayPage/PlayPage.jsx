import { useLocation } from "react-router-dom"
import MaskedInput from "../../components/MaskedInput/MaskedInput";

const PlayPage = () => {
    const location = useLocation();
    const secretWord = location.state?.secretWord;

    return (
        <div>
            <MaskedInput secretWord={secretWord} guessedLetters={["b","e"]}/>

        </div>
    )
}

export default PlayPage