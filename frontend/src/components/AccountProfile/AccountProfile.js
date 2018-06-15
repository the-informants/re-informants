import React, {Component} from 'react';
import '../../App.css';
import {connect} from 'react-redux';
import Geocode from 'react-geocode';
import InformantForm from './InformantForm'
import BuyerForm from './BuyerForm'
import BuyerFormValidation from './BuyerFormValidation'
import InformantFormValidation from './InformantFormValidation'
import {getInformantInfo, getBuyerInfo, submitBuyerInfo, submitInformantInfo} from '../../ducks/reducers/user';


class AccountProfile extends Component {

    componentWillMount(){
        this.props.getInformantInfo();
        this.props.getBuyerInfo();
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
                {
                this.props.user.buyerInfo
                ? <h4>you are a buyer, here is your most recent order</h4>
                : <h4>you are not a buyer yet <button>Become a Buyer</button></h4>
                }
                <BuyerFormValidation mysubmit={this.submitBuyerInformation}/>



                {
                this.props.user.informantInfo
                ? <h4>you are a informant, here is your most recent inquiry</h4>
                : <h4>you are not an informant yet <button>Become an Informant</button></h4>
                }
                <InformantFormValidation mysubmit={this.submitInformantInformation}/>
            </div>
        )
    }
}
function mapStateToProps(state){
    const {user, form} = state
    return {user, form};
}
export default connect(mapStateToProps, {getInformantInfo, getBuyerInfo, submitBuyerInfo, submitInformantInfo})(AccountProfile)