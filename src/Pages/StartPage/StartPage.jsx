import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";

const StartPage = () => {
    const navigate = useNavigate();

    const onSubmitHandler = (inputValue) => {
        if(inputValue.length < 3){
            alert("Please enter a word or phrase with at least 3 characters.");
            return;
        }
        navigate("/play",{state:{ secretWord: inputValue }});
    }

    return (
        <div className="flex justify-center h-screen">
            <TextInputFormContainer label={"Word Or Phrase"} onSubmitHandler={onSubmitHandler}/>
        </div>
    )
}

export default StartPage;