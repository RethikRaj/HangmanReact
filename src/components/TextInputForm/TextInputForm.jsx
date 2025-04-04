import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const TextInputForm = ({handleFormSubmit,  inputRef, inputType,setInputType,label}) => {

    return (
        <form className="m-2 w-full" onSubmit={handleFormSubmit}>
            <div className="">
                <TextInput inputType={inputType} label={label} inputRef={inputRef}/>
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
