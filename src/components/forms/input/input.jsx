import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import styles from './input.module.css';

const Input = (props) => {
  const { label, name, minLenght, onChange } = props;

  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const updateParentState = () => {onChange(name, value)};

  const validate = () => {
    const validation = value.length >= minLenght;
    setIsValid(validation);
    
    updateParentState();
  };

  let validationTimeout;
  const onChangeHandler = (event) => {
    clearTimeout(validationTimeout);

    setValue(event.target.value);
    validate()
    //validationTimeout = setTimeout(() => validate(event), 300);
  };

  const isTouched = value.length > 0;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        onChange={onChangeHandler}
        value={value}
        className={styles.input}
      />
      {isTouched && !isValid && (
        <span className={styles.error}>{`Input lenght is less than ${minLenght}`}</span>
      )}
    </div>
  );
};
Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  minLenght: PropTypes.number,
};
Input.defaultProps = {
  minLenght: 15,
};
export default Input;