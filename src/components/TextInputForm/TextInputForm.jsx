import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const TextInputForm = ({handleFormSubmit,  inputRef, inputType,setInputType}) => {

    return (
        <form className="flex m-2 gap-2" onSubmit={handleFormSubmit}>
            <div className="flex-1">
                <TextInput inputType={inputType} label={"some label"} inputRef={inputRef}/>
            </div>
            <div className="flex">
                <Button text={"submit"} styleType={"primary"} buttonType="submit"/>
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
