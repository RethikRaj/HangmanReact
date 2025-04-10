import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const TextInputForm = ({handleFormSubmit,  inputWordRef, inputHintRef,inputType,setInputType}) => {

    return (
        <form className="m-2 w-full" onSubmit={handleFormSubmit}>
            <div className="">
                <TextInput inputType={inputType} label={"Word or Phrase"} inputRef={inputWordRef}/>
                <TextInput inputType={inputType} label={"Hint"} inputRef={inputHintRef}/>
            </div>
            <div className="flex mt-2 gap-2">
                <Button text={"Submit"} styleType={"primary"} buttonType="submit"/>
                <Button 
                    text={inputType==="password"?"Show":"Hide"} 
                    styleType={"secondary"} 
                    onClickHandler={() => {
                            setInputType((inputType)=>{return inputType==="password"?"text":"password"});
                        }   
                    }
                />
            </div>
        </form>
    );
};

export default TextInputForm;
