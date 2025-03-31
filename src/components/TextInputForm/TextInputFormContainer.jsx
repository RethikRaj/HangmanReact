// This component is a container for the TextInputForm component. It can be used to manage the state and behavior of the form, such as handling form submission and managing input values. The container can also be used to connect the form to a larger application state or API.

import { useRef, useState } from "react";
import TextInputForm from "./TextInputForm";

const TextInputFormContainer = ({onSubmitHandler}) => {
    const inputRef = useRef(null);
    const [inputType, setInputType] = useState("password");


    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted with value:", inputRef.current.value);
        onSubmitHandler?.(inputRef.current.value); // Call the parent handler if provided
    };

    return (
        <TextInputForm handleFormSubmit={handleFormSubmit} inputRef={inputRef} inputType={inputType} setInputType={setInputType}/>
    )
}

export default TextInputFormContainer;
