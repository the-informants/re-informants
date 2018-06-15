import React, {Component} from 'react';
import '../../App.css';
import {connect} from 'react-redux';
import Geocode from 'react-geocode';
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
        Geocode.setApiKey("AIzaSyBWRUwhKeGWx_7qra1Mw4TUSjWhZBuqrq4")
        const {address1, city, state, zip} = this.props.form.InformantForm.values
        console.log("address", address1, city, state, zip)
        Geocode.fromAddress(`${address1} ${city} ${state} ${zip}`).then(response=>{
            const {lat, lng} = response.results[0].geometry.location;
            console.log(lat,lng)
            let informantInfo = Object.assign({}, this.props.form.InformantForm.values, {lat: lat, lng: lng} )
            this.props.submitInformantInfo(informantInfo);
        }).catch(e=>console.log(e));
    }
        
    
    render (){
        return(
            <div className="PageTitle">
                Account Profile
                {/* <InformantForm/>
                <BuyerForm/> */}
                {/* <BuyerFormValidation mysubmit={this.submitBuyerInformation}/> */}
                <InformantFormValidation mysubmit={this.submitInformantInformation}/>
            </div>
        )
    }
}
function mapStateToProps(state){
    const {user, form} = state
    return {user, form};
}
export default connect(mapStateToProps, {getInformantInfo, getBuyerInfo, getInformants, submitBuyerInfo, submitInformantInfo})(AccountProfile)