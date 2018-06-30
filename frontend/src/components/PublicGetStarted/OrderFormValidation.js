import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form"
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import UsStates from '../../components/Shared/UsStates';
import {renderField, renderSelectField} from '../../components/Shared/Forms';



const OrderFormValidation = props=>{
    const {handleSubmit, pristine, reset, submitting, mysubmit, cancel, orders } = props

    return (
        <form onSubmit={handleSubmit(mysubmit)}>
            <h2>Order Information</h2>
            <Field  
                name="ordername" 
                type = "text" 
                placeholder="Give your order a name" 
                component={renderField} 
                label="Order Name"/> 
            
            <Field name="ordertype" component={renderSelectField} label="Order Type">
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
            </Field>



 
          
            <button className="btn btn-primary" type = "submit" disabled={pristine || submitting}>Submit</button>
           
            <button className="btn btn-danger" onClick={cancel}>Cancel</button>
        </form>
    )
}

const validate = values =>{
    const errors = {}
    if (!values.ordername){
        errors.ordername = 'Required'
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