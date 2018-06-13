import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form"
import UsStates from '../../components/Shared/UsStates'
import {renderField, renderSelectField} from  '../../components/Shared/Forms'

const InformantFormValidation = props=>{
    const {handleSubmit, pristine, reset, submitting, mysubmit} = props

    return (
        <form onSubmit={handleSubmit(mysubmit)}>
            <Field  name="firstname" type = "text" component={renderField} label="First Name"/>
            <Field  name="lastname" type = "text" component={renderField} label="Last Name"/>
            <Field  name="phone" type = "number" component={renderField} label="Phone"/>
            <Field  name="address1" type = "text" component={renderField} label="Address 1"/>
            <Field  name="address2" type = "text" component={renderField} label="Address 2"/>
            <Field  name="city" type = "text" component={renderField} label="City"/>
            <Field  name="state" type = "text" component={renderSelectField} label="State">
                <option/>
                {UsStates.map(usState=><option key = {usState.name} value = {usState.name}>{usState.abbreviation}</option>)}
            </Field>
            <Field  name="zip" type = "number" component={renderField} label="Zip"/>
            Select areas you know about
            <Field  name="knowcommunityflag" type = "checkbox" component={renderField} label="Community"/>
            <Field  name="knowschoolflag" type = "checkbox" component={renderField} label="School"/>
            <Field  name="knowcrimeflag" type = "checkbox" component={renderField} label="Crime"/>
            <Field  name="knowreligionflag" type = "checkbox" component={renderField} label="Religion"/>
            <div>
                <label>Additional Info</label>
                <div>
                    <Field name="informantnotes" component="textarea"/>
                </div>
            </div>
            <button type = "submit" disabled={pristine || submitting}>Submit</button>
        </form>
    )
}

const validate = values =>{
    const errors = {}
    if (!values.firstname){
        errors.firstname = 'Required'
    }
    if (!values.lastname){
        errors.lastname = 'Required'
    }
    if(!values.phone){
        errors.phone = "Required"
    }else if (isNaN(Number(values.phone))){
        errors.phone = "Must be a number"
    }else if (!/^(0|[1-9][0-9]{9})$/i.test(values.phone)){
        errors.phone = "Invalid phone number, must be 10 digits"
    }
    if(!values.address1){
        errors.address1 = "Required"
    }
    if(!values.city){
        errors.city = "Required"
    }else if (/[^a-zA-Z]/i.test(values.city)){
        errors.city = "Only alphabetic characters allowed"
    }
    if(!values.state){
        errors.state = "Required"
    }
    if(!values.zip){
        errors.zip = "Required"
    }else if(!/^([0-9]{5})$/i.test(values.zip)){
        errors.zip = "Invalid Zip code, must be 5 digits"
    }else if (isNaN(Number(values.zip))){
        errors.zip = "Must be a number"
    }
    console.log(1111,errors);
    return errors
}

export default reduxForm({
    form: "InformantForm",
    validate
})(InformantFormValidation)