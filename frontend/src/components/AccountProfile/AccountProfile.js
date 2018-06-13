import React, {Component} from 'react';
import '../../App.css';
import {connect} from 'react-redux';
import InformantForm from './InformantForm'
import BuyerForm from './BuyerForm'
import BuyerFormValidation from './BuyerFormValidation'
import InformantFormValidation from './InformantFormValidation'
import {getInformantInfo, getBuyerInfo, getInformants, submitBuyerInfo, submitInformantInfo} from '../../ducks/reducers/user';

class AccountProfile extends Component {

    componentWillMount(){
        this.props.getInformantInfo();
        this.props.getBuyerInfo();
        this.props.getInformants();
    }


    submitBuyerInformation = ()=>{
        const buyerInfo = {...this.props.form.BuyerForm.values}
        console.log(buyerInfo)
        this.props.submitBuyerInfo(buyerInfo)
    }
    submitInformantInformation = () =>{
        const informantInfo = {...this.props.form.InformantForm.values}
        this.props.submitInformantInfo(informantInfo);
    }
        
    
    render (){
        return(
            <div className="PageTitle">
                Account Profile
                {/* <InformantForm/>
                <BuyerForm/> */}
                <BuyerFormValidation mysubmit={this.submitBuyerInformation}/>
                {/* <InformantFormValidation mysubmit={this.submitInformantInformation}/> */}
            </div>
        )
    }
}
function mapStateToProps(state){
    const {user, form} = state
    return {user, form};
}
export default connect(mapStateToProps, {getInformantInfo, getBuyerInfo, getInformants, submitBuyerInfo, submitInformantInfo})(AccountProfile)