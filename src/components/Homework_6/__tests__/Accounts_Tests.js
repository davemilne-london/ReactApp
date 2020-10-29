import { render } from "@testing-library/react";
import React from 'react';
import Account, {isFormValid} from '../Account';

describe("The display element",() => {
    it("should not regress",() =>{
        const tree = render(<Account />);

        expect (tree).toMatchSnapshot();
    })
})


describe("The isValid function",() => {

    it("should return false if the first name is not set",() =>{      
        //set up state
        const testInvalidState = {
            firstName:"",
            lastName:"test",
            email:"test",
            password:"test",
            country:"test",
            terms:true
        }

        const errors = isFormValid(testInvalidState);
        expect(errors).toHaveLength(1);
    });

    it("should return true if everything is set",() =>{      
        //set up state
        const testValidState = {
            firstName:"",
            lastName:"test",
            email:"test",
            password:"test",
            country:"test",
            terms:true
        }

        const errors = isFormValid(testValidState);
        expect(errors).toHaveLength(1);
    })

});