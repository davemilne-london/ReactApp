import React, {useReducer, useState} from 'react';
import './Account.module.css';

const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua & Deps","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Rep","Chad","Chile","China","Colombia","Comoros","Congo","Congo {Democratic Rep}","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland {Republic}","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea North","Korea South","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar, {Burma}","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russian Federation","Rwanda","St Kitts & Nevis","St Lucia","Saint Vincent & the Grenadines","Samoa","San Marino","Sao Tome & Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];


const initialState = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    country:"",
    terms:""
}

const reducer = (state, action) => {

    if (action.name === "reset") return initialState

    return {
        ...state,
        [action.name]: action.value
    }
}

export function isFormValid (formState) {

    let draftErrors=[];
    for (const[key, value] of Object.entries(formState)) {
        if (value === initialState[key]) {
            draftErrors = [...draftErrors, key];                
        } 
    };

    return draftErrors;
}

const Account = () => {

    const [formState, setFormState] = useReducer(reducer, initialState);
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [errors, setErrors] = useState([]);

    const resetFormState = () => {
        setFormState({
            name: 'reset'
        });
    }

    const checkErrors = () => {

        const draftErrors = isFormValid(formState);        
        setErrors(draftErrors);
        return errors.length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();       

        if (checkErrors()) {                
            setIsFormSubmitting(true);
            resetFormState();
            setIsFormSubmitting(false);           
        };        
    }

    const handleChange = (e) => {
        
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({
            name: e.target.name,
            value: value
        });
    }

    const {firstName, lastName, email, password, country, terms} = formState;

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
                <legend>Account</legend>

                <div>
                    <label htmlFor="firstName" className="label">First name:</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        className="formInput"
                        onChange={handleChange}
                        value={firstName}
                    />
                </div>

                <div>
                    <label htmlFor="lastName" className="label">Last name:</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName"
                        className="formInput"
                        onChange={handleChange}    
                        value={lastName}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="label">Email:</label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email"
                        className="formInput"
                        onChange={handleChange}
                        value={email}
                    />
                </div>

                <div>
                    <label htmlFor="password" className="label">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        className="formInput"
                        onChange={handleChange}
                        value={password}    
                    />
                </div>

                <div>
                    <label htmlFor="country" className="label">Country</label>
                    <select 
                        id="country" 
                        onChange={handleChange}
                        name="country"
                        value={country}
                    >
                        <option key="0" value="0"></option>
                        {countries.map((x,y) => <option key={y}>{x}</option>)};
                    </select>
                </div>

                <div>
                    <input 
                        type="checkbox" 
                        id="terms" 
                        name="terms"
                        onChange={handleChange}
                        checked={terms}
                    />
                    <label htmlFor="terms">I Accept the terms of service</label>
                </div>

                <input type="submit" value="Submit" disabled={isFormSubmitting} className="submit"/>
            </fieldset>

            {errors.length > 0 && (
                <ul>Errors: 
                    {errors.map((error, key) => {
                        return <li key={key}>{error}</li>
                    })}
                </ul>)
            }
        </form>
    )
}

export default Account;