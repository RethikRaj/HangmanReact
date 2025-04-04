import { useLocation } from "react-router-dom"

const PlayPage = () => {
    const location = useLocation();
    const secretWord = location.state?.secretWord;

    return (
        <div>
            {secretWord ? secretWord :" No secret word provided"}
        </div>
    )
}

export default PlayPage