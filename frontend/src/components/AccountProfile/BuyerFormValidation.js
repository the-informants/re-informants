import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form"
import { connect } from "react-redux";
import {renderField, renderSelectField} from '../../components/Shared/Forms'

const BuyerFormValidation = props=>{
    const {handleSubmit, pristine, reset, submitting, mysubmit, cancel, buyerInfo } = props

    return (

        <form onSubmit={handleSubmit(mysubmit)}>
            <Field  name="firstname" type = "text" component={renderField} label="First Name"/>
            <Field  name="lastname" type = "text" component={renderField} label="Last Name"/>
            <Field  name="phone" type = "number" component={renderField} label="Phone"/>
          
            <Field name="buyertype" component={renderSelectField} label="Buyer Type">
                <option/>
                <option value = "Home Buyer">Home Buyer</option>
                <option value = "Renter">Renter</option>
                <option value = "Real Estate Agent">Real Estate Agent</option>
            </Field>
           
            <div>
                <label>Additional Info</label>
                <div>
                    <Field name="buyernotes" component="textarea"/>
                </div>
            </div>
            <button className="btn btn-primary" type = "submit">{buyerInfo?'Submit Changes':'Submit'}</button>
            <button className="btn btn-danger" onClick={cancel}>Cancel</button>
        </form>
    )
}

const validate = values =>{
    const errors = {}
    if (!values.firstname){
        errors.firstname = 'First name is required'
    }
    if (!values.lastname){
        errors.lastname = 'Last name is required'
    }
    if(!values.phone){
    }else if (!/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/i.test(values.phone)){
        errors.phone = "Invalid phone number, must be 10 digits"
    }
    if(!values.buyertype){
        errors.buyertype = "This is required"
    }
    console.log(1111,errors);
    return errors
}


function mapStateToProps(state){
    return {
        buyerInfo: state.user.buyerInfo,
        initialValues: {firstname: state.user.buyerInfo ? state.user.buyerInfo.firstname : '',
                        lastname: state.user.buyerInfo ? state.user.buyerInfo.lastname : '',
                        phone: state.user.buyerInfo ? state.user.buyerInfo.phone : '',
                        buyertype: state.user.buyerInfo ? state.user.buyerInfo.buyertype : '',
                        buyernotes: state.user.buyerInfo ? state.user.buyerInfo.buyernotes : ''
                        }
    }
}


let formComponent = reduxForm({
    form: "BuyerForm",
    validate
})(BuyerFormValidation);


export default connect(mapStateToProps, {})(formComponent);