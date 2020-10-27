import React, {useState, useReducer} from "react";
import styles from "./Day6.module.css";

const initialState = {
    name:"",
    apples:"",
    quantity:10,
    giftWrap:false
}

const reducer = (state, action) => {

    if (action.name === "reset") return initialState

    return {
        ...state,
        [action.name]: action.value
    }
}

const Day6 = () => {
    
    const [formState, setFormState] = useReducer(reducer, initialState);
    const [isFormSubmitting,setIsFormSubmitting] = useState(false);
    const [errors, setErrors] = useState([]);

    const resetFormState = () => {
        setFormState({
            name: 'reset'
        });
    }

    const isFormValid = () => {

        let draftErrors=[];
        for (const[key, value] of Object.entries(formState)) {
            if (key === "giftWrap") continue;
            if (value === initialState[key]) {
                draftErrors = [...draftErrors, key];                
            } 
        };

        setErrors(draftErrors);
        return errors.length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            setIsFormSubmitting(true);

            setTimeout(() => {
                setIsFormSubmitting(false);
                resetFormState();
            }, 1000)
        };        
    }

    const handleChange = (e) => {
        
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({
            name: e.target.name,
            value: value
        });
    }

    const {name, apples, giftWrap, quantity} = formState;
    const disableQuantity = apples ==="";

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit}>

            <h1>How 'bout them apples</h1>

            {isFormSubmitting && (
                <ul>
                    {Object.keys(formState).map(key => (
                        <li key={key}>{key}: {formState[key].toString()}</li>
                    ))}
                </ul>
            )}

            <fieldset className={styles.fieldset}>
                <label htmlFor="name">
                    <p>Name</p>
                    <input 
                        id="name" 
                        name="name" 
                        onChange={handleChange}
                        value={name}
                    />
                </label>
            </fieldset>

            <fieldset className={styles.fieldset}>
                <label htmlFor="apples">
                    <p>Apple</p>
                    <select 
                            id="apples" 
                            name="apples" 
                            onChange={handleChange}
                            value={apples}
                    >
                        <option value="">Select an Apple...</option>
                        <option value="RoyalGala">Royal Gala</option>
                        <option value="GrannySmith">Granny Smith</option>
                        <option value="PinkLady">Pink Lady</option>
                    </select>
                </label>
            </fieldset>

            <fieldset className={styles.fieldset}>
                <label htmlFor="quantity">
                    <p>Quantity</p>
                    <input 
                        id="quantity" 
                        name="quantity" 
                        type="number" 
                        onChange={handleChange}
                        value={quantity}
                        disabled={disableQuantity}
                    />
                </label>
            </fieldset>

            <fieldset className={styles.fieldset}>
                <label htmlFor="giftWrap">
                    <p>Gift Wrap</p>
                    <input 
                        id="giftWrap" 
                        name="giftWrap" 
                        type="checkbox" 
                        onChange={handleChange}
                        value={giftWrap}
                    />
                </label>
            </fieldset>

            {errors.length > 0 && (
                <ul>Errors: 
                    {errors.map((error, key) => {
                        return <li key={key}>{error}</li>
                    })}
                </ul>)
            }


            <button type="submit" disabled={isFormSubmitting}>Submit</button>
        </form>
    );
}

export default Day6