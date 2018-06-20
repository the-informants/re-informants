import React from 'react'

export const formvalidate = values =>{
    const errors = {}
    if (!values.firstname){
        errors.firstname = 'Enter a first name'
    }
    if (!values.lastname){
        errors.lastname = 'Enter a last name'
    }
    if(!values.phone){
    }else if (!/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/i.test(values.phone)){
        errors.phone = "Invalid phone number, must be 10 digits"
    }
    if(!values.address1){
        errors.address1 = "This is required"
    }
    if(!values.city){
        errors.city = "This is required"
    }
    if(!values.state){
        errors.state = "This is required"
    }
    if(!values.zip){
        errors.zip = "This is required"
    }else if(!/^([0-9]{5})$/i.test(values.zip)){
        errors.zip = "Invalid Zip code, must be 5 digits"
    }else if (isNaN(Number(values.zip))){
        errors.zip = "Must be a number"
    }
    console.log('testing the errors',errors);
    return errors
}