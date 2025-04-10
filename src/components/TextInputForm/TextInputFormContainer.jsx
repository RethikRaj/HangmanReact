// This component is a container for the TextInputForm component. It can be used to manage the state and behavior of the form, such as handling form submission and managing input values. The container can also be used to connect the form to a larger application state or API.

import { useRef, useState } from "react";
import TextInputForm from "./TextInputForm";

const TextInputFormContainer = ({onSubmitHandler}) => {
    const inputWordRef = useRef(null);
    const inputHintRef = useRef(null);
    const [inputType, setInputType] = useState("password");


    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted with value:", inputWordRef.current.value , inputHintRef.current.value);
        onSubmitHandler?.(inputWordRef.current.value, inputHintRef.current.value); // Call the parent handler if provided
    };

    return (
        <TextInputForm handleFormSubmit={handleFormSubmit} inputWordRef={inputWordRef} inputHintRef={inputHintRef} inputType={inputType} setInputType={setInputType} />
    )
}

export default TextInputFormContainer;
