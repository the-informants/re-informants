import React from 'react';
import {Field, reduxForm} from "redux-form"
import { connect } from "react-redux";
import UsStates from '../../components/Shared/UsStates';
import {renderField, renderSelectField} from '../../components/Shared/Forms';



const PaymentFormValidation = props=>{
    const {handleSubmit, pristine, submitting, mysubmit, cancel } = props

    return (
        <form onSubmit={handleSubmit(mysubmit)}>
            <h2>Order Information</h2>
            <Field  
                name="Name" 
                type = "text" 
                placeholder="Name" 
                component={renderField} 
                label="Name"/>
            {/* <Field  
                name="CardType" 
                type = "text" 
                placeholder="CardType" 
                component={renderSelectField} 
                label="CardType">
                    <option/>
                    <option value = "VISA">VISA</option>
                    <option value = "MASTER">MASTER</option>
                    <option value = "AMEX">AMEX</option>
                    <option value = "DISCOVER">DISCOVER</option>
            </Field> */}
            <Field  
                name="CardNumber" 
                type = "text" 
                placeholder="Card Number" 
                component={renderField} 
                label="Card Number"/>
            <Field  
                name="ExpMonth" 
                type = "text" 
                placeholder="Expiration Month" 
                component={renderField} 
                label="Expiration Month"/>
            <Field  
                name="ExpYear" 
                type = "text" 
                placeholder="Expiration Year" 
                component={renderField} 
                label="Expiration Year"/>
            <Field  
                name="CVS" 
                type = "text" 
                placeholder="CVS" 
                component={renderField} 
                label="CVS"/>
            <Field  
                name="BillingAddress1" 
                type = "text" 
                placeholder=" BillingAddress 1" 
                component={renderField} 
                label="Billing Address 1"/>
            <Field  
                name="BillingAddress2" 
                type = "text" 
                placeholder="Billing Address 2" 
                component={renderField} 
                label="Billing Address 2"/>
            <Field  
                name="BillingCity" 
                type = "text" 
                placeholder="Billing City" 
                component={renderField} 
                label="Billing City"/>
            <Field  
                name="BillingState" 
                type = "text" 
                placeholder="Billing State" 
                component={renderSelectField} 
                label="Billing State">
                <option/>
                {UsStates.map(usState=><option key = {usState.name} value = {usState.name}>{usState.abbreviation}</option>)}
            </Field>

            <Field  
                name="BillingZip" 
                type = "text" 
                placeholder="Zip code" 
                component={renderField} 
                label="Zip"/>


            <button className="btn btn-main" type = "submit" disabled={pristine || submitting}>Submit</button>
           
            <button className="btn btn-danger" onClick={cancel}>Cancel</button>
        </form>
    )
}

// const cardNumberValidation = (cardtype, values)=>{      if (cardtype=='VISA'){
//                                             return /^(?:4[0-9]{12}(?:[0-9]{3})?)$/i.test(values.CardNumber)
//                                             }
//                                             else if (cardtype=='MASTER'){
//                                                 return /^(?:5[1-5][0-9]{14})$/i.test(values.CardNumber)
//                                             }
//                                             else if (cardtype=='AMEX'){
//                                                 return /^(?:3[47][0-9]{13})$/i.test(values.CardNumber)
//                                             }
//                                             else if (cardtype=='DISCOVER'){
//                                                 return /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/i.test(values.CardNumber)
//                                             }                                   
//                                     }

const validate = values =>{
    const errors = {}
    if (!values.Name){
        errors.Name = 'Required'
    }

    // if(!values.CardType){
    //     errors.CardType = "Required"
    // }

    if(!values.CardNumber){
        errors.CardNumber = "Required"
    }else if (    
        !/^([0-9]{16})$/i.test(values.CardNumber)
                ){
        errors.CardNumber = "Invalid card number, Only number characters allowed"
    }

    if(!values.ExpMonth){
        errors.ExpMonth = "Required"
    }else if (!/^([0-9]{2})$/i.test(values.ExpMonth)){
        errors.ExpMonth = "Invalid Month, must be 2 digits, Only number characters allowed"
    }

    if(!values.ExpYear){
        errors.ExpYear = "Required"
    }else if (!/^([0-9]{4})$/i.test(values.ExpYear)){
        errors.ExpYear = "Invalid Year, must be 4 digits, Only number characters allowed"
    }

    if(!values.CVS){
        errors.CVS = "Required"
    }else if (!/^([0-9]{3})$/i.test(values.CVS)){
        errors.CVS = "Invalid CVS, Only number characters allowed"
    }


    if(!values.BillingAddress1){
        errors.BillingAddress1 = "Required"
    }

    // if (/[^a-zA-Z]/i.test(values.BillingCity)){
    //     errors.BillingCity = "Only alphabetic characters allowed"
    // }
    if(!values.BillingCity){
        errors.BillingCity = "Required"
    }
    // else if (/[^a-zA-Z ]/i.test(values.BillingCity)){
    //     errors.BillingCity = "Only alphabetic characters allowed"
    // }

    if(!values.BillingState){
        errors.BillingState = "Required"
    }

     if(!/^([0-9]{5})$/i.test(values.BillingZip)){
        errors.BillingZip = "Invalid Zip code, must be 5 digits"
    }else if (isNaN(Number(values.BillingZip))){
        errors.BillingZip = "Must be a number"
    }
    if(!values.BillingZip){
        errors.BillingZip = "Required"
    }else if(!/^([0-9]{5})$/i.test(values.BillingZip)){
        errors.BillingZip = "Invalid Zip code, must be 5 digits"
    }else if (isNaN(Number(values.BillingZip))){
        errors.BillingZip = "Must be a number"
    }

    console.log(1111,errors);
    return errors
}


function mapStateToProps(state){
    return {
        orders: state.order.orderResultsbyBuyer
    }
}


let formComponent = reduxForm({
    form: "PaymentForm"
    ,validate
})(PaymentFormValidation)


export default connect(mapStateToProps, {})(formComponent);