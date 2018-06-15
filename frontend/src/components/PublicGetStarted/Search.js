import React, {Component} from 'react';
import { connect } from 'react-redux'
import '../../App.css';
import { search } from '../../ducks/reducers/search'
import { Field, reduxForm } from 'redux-form';
import { renderField } from "../Shared/Forms"
class Search extends Component {
    renderField(field){
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    placeholder={field.defaultValue}
                    {...field.input}
                />
            </div>
        );
    }

render() {
    return (
        <div>
            <h1>Your Local Neighborhood Informant</h1>
            <form>
                <Field 
                    defaultValue="Enter an address or zip code"
                    label="Find people who can inform a real estate purchase"
                    name="searchvalue"
                    component={renderField}
            />
            </form>
        </div>
        );
    }   
}
function validate(values){
    const errors = {};
    //validate the inputs from 'values'
    if (!values.searchvalue){
        errors.searchvalue = "Enter a zip code or address";
    }
    return errors;
}


export default reduxForm({
    validate,
    form: 'MapSearch'
})(Search);