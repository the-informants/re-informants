import React, {Component} from 'react';
import '../../App.css';
import {connect} from 'react-redux';
import StayInformedForm from './StayInformedForm'
import { submitStayInformedInfo } from '../../ducks/reducers/user';



class StayInformed extends Component {
    constructor() {
        super();  
        this.state = {
        };
  }

    submitStayInformedInformation = ()=>{
        const stayInormedInfo = {...this.props.form.StayInformedForm.values}
        console.log(stayInormedInfo);
        this.props.submitStayInformedInfo(stayInormedInfo);
    }
       
    
    render (){
        
        return(
            <div className="container PageTitle">
               <h1>Get An Invitation</h1>
               <StayInformedForm mysubmit={this.submitStayInformedInformation}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {user, form, order} = state
    return {user, form, order};
}
export default connect(mapStateToProps, {submitStayInformedInfo})(StayInformed)