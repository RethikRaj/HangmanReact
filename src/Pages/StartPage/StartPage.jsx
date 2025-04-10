import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";

const StartPage = () => {
    const navigate = useNavigate();

    const onSubmitHandler = (inputWordValue, inputHintValue) => {
        if(inputWordValue.length < 3){
            alert("Please enter a word or phrase with at least 3 characters.");
            return;
        }
        navigate("/play",{state:{ secretWord: inputWordValue , hint : inputHintValue}});
    }

    return (
        <div className="flex justify-center h-screen">
            <TextInputFormContainer onSubmitHandler={onSubmitHandler}/>
        </div>
    )
}

export default StartPage;