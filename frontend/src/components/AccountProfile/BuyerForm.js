import React, {Component} from 'react';
import {connect} from 'react-redux';

import {submitBuyerInfo} from '../../ducks/reducers/user';

class BuyerForm extends Component {
    constructor(props){
        super(props)
        this.state={
           
            firstname: "",
            lastname: "",
            buyertype: "",
            buyernotes:"",
            phone: "",
        }
    }
    handleChange = (e) =>{
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState({[name]: value})
    }
    submitInfo = () =>{
        const buyerInfo = {...this.state}
        this.props.submitBuyerInfo(buyerInfo);
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
                    <span>Buyer Type</span>
                    <select type="text" value={this.state.buyertype} name = "buyertype" onChange={this.handleChange}>
                        <option value = 'Home Buyer'> Home Buyer</option>
                        <option value = 'Renter'> Renter</option>
                        <option value = 'Real Estate Agent'> Renter</option>
                    </select>
                </div>
                <div>
                    <span>Additional Info</span>
                    <textarea  type="text" value={this.state.buyernotes} name = "buyernotes" onChange={this.handleChange}></textarea>
                </div>
                <button onClick={()=>this.submitInfo()}>submit</button>
            </div>
        )
    }
}

export default connect(null, {submitBuyerInfo})(BuyerForm)