import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";

const App = ()=>{
    return <TextInputFormContainer onSubmitHandler={(value) => {
        console.log("Value from App component:", value);
      }
    }/>
}

export default App
