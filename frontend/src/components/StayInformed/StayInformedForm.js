import React from 'react';
import {Field, reduxForm} from "redux-form"
import { connect } from "react-redux";
import {renderField, renderSelectField} from '../../components/Shared/Forms'

const StayInformedForm = props=>{
    const {handleSubmit, pristine, submitting, mysubmit, cancel, buyerInfo } = props

    return (

        <form onSubmit={handleSubmit(mysubmit)}>
            <h2>Stay Informed and Get Updates on the progress of Rebands Neigborhood Refrences</h2>
            <Field  name="firstname" type = "text" component={renderField} label="First Name"/>
            <Field  name="lastname" type = "text" component={renderField} label="Last Name"/>
            <Field  name="email" type = "text" component={renderField} label="Email"/>
          
            
            <button className="btn btn-primary" type = "submit" disabled={pristine || submitting}>{'Submit'}</button>
            
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
    if(!values.email){
        errors.email = "Email is required"
    }
    return errors
}


// function mapStateToProps(state){
//     return {
//         buyerInfo: state.user.buyerInfo,
//         initialValues: {firstname: state.user.buyerInfo ? state.user.buyerInfo.firstname : '',
//                         lastname: state.user.buyerInfo ? state.user.buyerInfo.lastname : '',
//                         phone: state.user.buyerInfo ? state.user.buyerInfo.phone : '',
//                         buyertype: state.user.buyerInfo ? state.user.buyerInfo.buyertype : '',
//                         buyernotes: state.user.buyerInfo ? state.user.buyerInfo.buyernotes : ''
//                         }
//     }
// }


let formComponent = reduxForm({
    form: "StayInformedForm",
    validate
})(StayInformedForm);


export default connect(null, {})(formComponent);