import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Input from "./input/input";

const Form = () => {
  const initialState = {
    input1: { label: "Label 1", value: "value", isValid: false },
    input2: { label: "Label 2", value: "value2", isValid: false },
  };

  const [formState, setFormState] = useState(initialState);

  const handleFormInputChange = (name, value, isValid) => {
      const newFormState = {...formState};

      newFormState[name] = {...newFormState[name], value, isValid};
      setFormState(newFormState);
  };

  
  const resetFromState = () => setFormState(initialState);

  const isFormValid = () => 
    Object.values(formState).every((field) => field.isValid);  

  const submitHandler = (event) => {
    event.preventDefault();

    window.alert(JSON.stringify(formState, null, 2));
    
    if (isFormValid()) {
        resetFromState();
    } 
  };

  const inputItems = Object.keys(initialState).map((inputKey) => (
    <Input 
        name={inputKey} 
        key={inputKey}
        label={formState[inputKey].label} 
        onChange={handleFormInputChange} 
        intialValue={formState[inputKey].value}
    />
  ));


  return (
    <>
        <h1>Inputs Form</h1>
        <form onSubmit={submitHandler}>{inputItems}
            <input type="submit" value="Submit"/>
        </form>
        
    </>
  );
};
export default Form;