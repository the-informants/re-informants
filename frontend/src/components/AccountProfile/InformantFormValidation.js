import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form"
import { connect } from "react-redux";
import UsStates from '../../components/Shared/UsStates'
import {renderField, renderSelectField} from  '../../components/Shared/Forms'
// import {formvalidate} from '../Shared/Validate'


const InformantFormValidation = props=>{
    const {handleSubmit, pristine, reset, submitting, mysubmit, cancel, informantInfo } = props

    return (
        <form onSubmit={handleSubmit(mysubmit)}>
            <h2>Become an Informant</h2>
            <p>Complete your profile </p>
            <Field  
                name="firstname" 
                type = "text" 
                placeholder="First name" 
                component={renderField} 
                label="First Name"/>
            <Field  
                name="lastname" 
                type = "text" 
                placeholder="Last name" 
                component={renderField} 
                label="Last Name"/>
            <Field  
                name="phone" 
                type = "number" 
                placeholder="Phone number" 
                component={renderField} 
                label="Phone"/>
            <Field  
                name="address1" 
                type = "text" 
                placeholder="Address 1" 
                component={renderField} 
                label="Address 1"/>
            <Field  
                name="address2" 
                type = "text" 
                placeholder="Address 2" 
                component={renderField} 
                label="Address 2"/>
            <Field  
                name="city" 
                type = "text" 
                placeholder="City" 
                component={renderField} 
                label="City"/>
            <Field  
                name="state" 
                type = "text" 
                placeholder="State" 
                component={renderSelectField} 
                label="State">
                {UsStates.map(usState=><option key = {usState.name} value = {usState.name}>{usState.abbreviation}</option>)}
            </Field>
            <Field name="years" component={renderSelectField} label="Years in Neighborhood">
                <option/>
                <option value = "0-1">0-1</option>
                <option value = "1-5">1-5</option>
                <option value = "5-10">5-10</option>
                <option value = "10-20">10-20</option>
                <option value = "20+">20 +</option>
            </Field>
            <Field  
                name="zip" 
                type = "number" 
                placeholder="Zip code" 
                component={renderField} 
                label="Zip"/>
            <h4>Select Your Areas of Expertise</h4>
            <Field  
                name="knowcommunityflag" 
                type = "checkbox" 
                placeholder="Community" 
                component={renderField} 
                label="Community"/>
            <Field  
                name="knowschoolflag" 
                type = "checkbox" 
                placeholder="School" 
                component={renderField} 
                label="School"/>
            <Field  
                name="knowcrimeflag" 
                type = "checkbox" 
                placeholder="Crime" 
                component={renderField} 
                label="Crime"/>
            <Field  
                name="knowreligionflag" 
                type = "checkbox" 
                placeholder="Religion" 
                component={renderField} 
                label="Religion"/>
            <div>
                <h4>Additional Info</h4>
                <div>
                    <Field 
                        name="informantnotes" 
                        placeholder="Tell Buyers all about yourself" 
                        component="textarea"/>
                </div>
            </div>
            <button className="btn btn-primary" type = "submit" disabled={pristine || submitting}>{informantInfo?'Submit Changes':'Submit'}</button>
            <button className="btn btn-danger" onClick={cancel}>Cancel</button>
        </form>
    )
    console.log('field',renderField)
}

const validate = values =>{
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
    if(!values.years){
        errors.years = "This is required"
    }
    console.log('testing the errors', renderField);
    return errors
}

function mapStateToProps(state){
    const {user} = state
    return {
        informantInfo: state.user.informantInfo,
        initialValues: {firstname: state.user.informantInfo ? state.user.informantInfo.firstname : '',
                        lastname: state.user.informantInfo ? state.user.informantInfo.lastname : '',
                        phone: state.user.informantInfo ? state.user.informantInfo.phone : '',
                        address1: state.user.informantInfo ? state.user.informantInfo.address1 : '',
                        address2: state.user.informantInfo ? state.user.informantInfo.address2 : '',
                        city: state.user.informantInfo ? state.user.informantInfo.city : '',
                        state: state.user.informantInfo ? state.user.informantInfo.state : '',
                        zip: state.user.informantInfo ? state.user.informantInfo.zip : '',
                        years: state.user.informantInfo? state.user.informantInfo.years : '',
                        knowcommunityflag: state.user.informantInfo ? state.user.informantInfo.knowcommunityflag : '',
                        knowschoolflag: state.user.informantInfo ? state.user.informantInfo.knowschoolflag : '',
                        knowcrimeflag: state.user.informantInfo ? state.user.informantInfo.knowcrimeflag : '',
                        knowreligionflag: state.user.informantInfo ? state.user.informantInfo.knowreligionflag : '',
                        informantnotes: state.user.informantInfo ? state.user.informantInfo.informantnotes : ''
                        
                        },
        user
                        
    }
}


let formComponent = reduxForm({
    form: "InformantForm",
    validate
    
})(InformantFormValidation)


export default connect(mapStateToProps, {})(formComponent);