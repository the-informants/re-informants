import React, {Component} from 'react';
import { connect } from 'react-redux'
import '../../App.css';
import { search } from '../../ducks/reducers/search'
import { Field, reduxForm } from 'redux-form';
class Search extends Component {
   

render() {
    return (
        
            <form style={{width: "100%"}}>
                <Field 
                    defaultValue="Enter an address or zip code"
                    placeholder="Search by City, Zip, or Address"
                    name="searchvalue"
                    component={renderField}
            />
            </form>
        
        );
    }   
}
const renderField = (field)=>(
    <div>
    <input
        className="form-control form-control-lg borderless"
        type="text"
        placeholder={field.placeholder}
        {...field.input}
        
    />
</div>
)
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