import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form"
import { connect } from "react-redux";
import UsStates from '../../components/Shared/UsStates';
import {renderField, renderSelectField} from '../../components/Shared/Forms';



const OrderFormValidation = props=>{
    const {handleSubmit, pristine, reset, submitting, mysubmit, cancel, orders } = props

    return (
        <form onSubmit={handleSubmit(mysubmit)}>
            <button className="btn btn-primary" type = "submit" disabled={pristine || submitting}>Submit</button>
            <button onClick={cancel}>Cancel</button>
            <Field  
                name="ordername" 
                type = "text" 
                placeholder="Order name" 
                component={renderField} 
                label="Order Name"/>
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
                <option/>
                {UsStates.map(usState=><option key = {usState.name} value = {usState.name}>{usState.abbreviation}</option>)}
            </Field>
            <Field  
                name="zip" 
                type = "number" 
                placeholder="Zip code" 
                component={renderField} 
                label="Zip"/>
            <Field name="orderrtype" component={renderSelectField} label="Order Type">
                <option/>
                <option value = "Home Buying">Home Buying</option>
                <option value = "Renting">Renting</option>
            </Field>

            <Field name="ordernotes" component="textarea"/>

            <Field 
                    name="durationday"
                    component={renderSelectField}
                    type = "text"
                    label="Days Valid">
                <option/>
                <option value = "1">1</option>
                <option value = "2">2</option>
                <option value = "3">3</option>
                <option value = "5">5</option>
                <option value = "10">10</option>
                <option value = "30">30</option>
            </Field>



 
            <button className="btn btn-primary" type = "submit" disabled={pristine || submitting}>Submit</button>
            <button onClick={cancel}>Cancel</button>
        </form>
    )
}

const validate = values =>{
    const errors = {}
    if (!values.ordername){
        errors.ordername = 'Required'
    }

    if (!values.lastname){
        errors.lastname = 'Required'
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

    if(!values.orderrtype){
        errors.orderrtype = "Required"
    }

    if(!values.validdays){
        errors.validdays = "Required"
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
    form: "OrderForm",
    validate
})(OrderFormValidation)


export default connect(mapStateToProps, {})(formComponent);