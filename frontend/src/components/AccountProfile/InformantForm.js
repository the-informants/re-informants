import React, {Component} from 'react';
import {connect} from 'react-redux';

import {submitInformantInfo} from '../../ducks/reducers/user';

class InformantForm extends Component {
    constructor(props){
        super(props)
        this.state={
            firstname: "",
            lastname: "",
            informantnotes: "",
            phone: "",
            address1: "",
            address2: "",
            city:"",
            state: "",
            zip:"",
            knowcommunityflag: false,
            knowreligionflag: false,
            knowcrimeflag: false, 
            knowschoolflag: false,
            availableflag: false  
        }
    }
    handleChange = (e) =>{
        const target = e.target
        const value = target.type === 'checkbox'? target.checked: target.value
        const name = target.name
        this.setState({[name]: value})
    }
    submitInfo = () =>{
        const informantInfo = {...this.state}
        this.props.submitInformantInfo(informantInfo);
    }

    render (){
        return(
            <div>
                <div>
                    <span>First Name</span>
                    <input type="text" value={this.state.firstname} name = "firstname" onChange={this.handleChange}></input>
                </div>
                <div>
                    <span>Last Name</span>
                    <input type="text" value={this.state.lastname} name = "lastname" onChange={this.handleChange}></input>
                </div>
                <div>
                    <span>Phone</span>
                    <input type="text" value={this.state.phone} name = "phone" onChange={this.handleChange}></input>
                </div>
                <div>
                    <span>Address 1</span>
                    <input type="text" value={this.state.address1} name = "address1" onChange={this.handleChange}></input>
                </div>
                <div>
                    <span>Address 2</span>
                    <input type="text" value={this.state.address2} name = "address2" onChange={this.handleChange}></input>
                </div>
                
                <div>
                    <span>City</span>
                    <input type="text" value={this.state.city} name = "city" onChange={this.handleChange}></input>
                </div>
                <div>
                    <span>State</span>
                    <input type="text" value={this.state.state} placeholder= "state" name = "state" onChange={this.handleChange}></input>
                </div>
                <div>
                    <span>Zip</span>
                    <input type="text" value={this.state.zip} placeholder= "zip" name = "zip" onChange={this.handleChange}></input>
                </div>
                <div>
                    <span>Additional Info</span>
                    <textarea  type="text" value={this.state.informantnotes} name = "informantnotes" onChange={this.handleChange}></textarea>
                </div>
                <div>
                    <span>Select Areas you know about</span>
                    <span>Community</span>
                    <input name = "knowcommunityflag" type = "checkbox" checked = {this.state.knowcommunityflag} onChange={this.handleChange}/>
                    <span>Religion</span>
                    <input name = "knowreligionflag" type = "checkbox" checked = {this.state.knowreligionflag} onChange={this.handleChange}/>
                    <span>Crime</span>
                    <input name = "knowcrimeflag" type = "checkbox" checked = {this.state.knowcrimeflag} onChange={this.handleChange}/>
                    <span>School</span>
                    <input name = "knowschoolflag" type = "checkbox" checked = {this.state.knowschoolflag} onChange={this.handleChange}/>
                    <span>Available</span>
                    <input name = "availableflag" type = "checkbox" checked = {this.state.availableflag} onChange={this.handleChange}/>
                </div>
                <button onClick={()=>this.submitInfo()}>submit</button>
            </div>
        )
    }
}

export default connect(null, {submitInformantInfo})(InformantForm)
