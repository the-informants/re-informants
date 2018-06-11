import React, {Component} from 'react';
import { connect } from 'react-redux'
import '../../App.css';
import { search } from '../../ducks/reducers/search'
import { Field, reduxForm } from 'redux-form';
class Search extends Component {
    renderField(field){
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }

render() {
    return (
        <div>
            <h1>Map</h1>
            <form>
                <Field 
                    label="Search"
                    name="searchvalue"
                    component={this.renderField}
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