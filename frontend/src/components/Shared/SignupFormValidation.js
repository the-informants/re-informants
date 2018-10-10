import React from 'react';
import {Field, reduxForm} from "redux-form"
import { connect } from "react-redux";
import {renderField, renderSelectField} from '../../components/Shared/Forms';



const SignupFormValidation = props=>{
    const {handleSubmit, pristine, submitting, mysubmit, cancel} = props

    return (
        <form onSubmit={handleSubmit(mysubmit)}>
            <h2>User Information</h2>
            <Field  
                name="firstname" 
                type = "text" 
                // placeholder="firstname" 
                component={renderField} 
                label="First Name"/> 
            
            <Field  
                name="lastname" 
                type = "text" 
                // placeholder="lastname" 
                component={renderField} 
                label="Last Name"/>

            <Field  
                name="email" 
                type = "text" 
                // placeholder="email" 
                component={renderField} 
                label="Email"/> 
            
            {/* <Field name="ordertype" component={renderSelectField} label="Order Type">
                <option/>
                <option value = "Home Buying">Home Buying</option>
                <option value = "Renting">Renting</option>
            </Field>

            <Field name="ordernotes" component="textarea"/>

            <Field 
                    name="durationday"
                    component={renderSelectField}
                    type = "text"
                    label="Choose how long this order is valid">
                <option/>
                <option value = "1">1</option>
                <option value = "2">2</option>
                <option value = "3">3</option>
                <option value = "5">5</option>
                <option value = "10">10</option>
                <option value = "30">30</option>
            </Field> */}
          
            <button className="btn btn-primary" type = "submit" disabled={pristine || submitting}>Submit</button>
           
            <button className="btn btn-danger" onClick={cancel}>Cancel</button>
        </form>
    )
}

const validate = values =>{
    const errors = {}
    if (!values.firstname){
        errors.firstname = 'Required'
    }
    if(!values.lastname){
        errors.lastname = "Required"
    }
    if(!values.email){
        errors.email = "Required"
    }


    console.log(1111,errors);
    return errors
}

function mapStateToProps(state){
    return {
        orders: state.order.orders
    }
}


let formComponent = reduxForm({
    form: "SignupForm",
    validate
})(SignupFormValidation)


export default connect(mapStateToProps, {})(formComponent);