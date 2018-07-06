import React, {Component} from 'react';
import '../../App.css';
import { Field, reduxForm } from 'redux-form';

class Search extends Component {
render() {
    const {handleSubmit, mysubmit} = this.props
    console.log("props", this.props)
    return (

        
            <form onSubmit={handleSubmit(mysubmit)} style={{width: "100%"}}>

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