import React, {Component} from 'react';
import Modal from 'react-modal';
import '../../App.css';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Geocode from 'react-geocode';
import InformantForm from './InformantForm'
import BuyerForm from './BuyerForm'
import BuyerFormValidation from './BuyerFormValidation'
import InformantFormValidation from './InformantFormValidation'
import {getInformantInfo, getBuyerInfo, submitBuyerInfo, submitInformantInfo} from '../../ducks/reducers/user';
import {getOrders} from '../../ducks/reducers/order';


class AccountProfile extends Component {
    constructor() {
        super();  
        this.state = {
          buyerFormIsOpen: false,
          informantFormIsOpen: false
        };
  }

    componentWillMount(){
        this.props.getInformantInfo();
        this.props.getBuyerInfo();
        this.props.getOrders();
        Modal.setAppElement('body');
    }

    openBuyerForm=()=>{
    this.setState({buyerFormIsOpen: true});
    }

    closeBuyerForm=()=>{
    this.setState({buyerFormIsOpen: false});
    }

    openInformantForm=()=>{
    this.setState({informantFormIsOpen: true});
    }

    closeInformantForm=()=>{
    this.setState({informantFormIsOpen: false});
    }

    submitBuyerInformation = ()=>{
        const buyerInfo = {...this.props.form.BuyerForm.values}
        console.log(buyerInfo)
        this.props.submitBuyerInfo(buyerInfo)
        this.setState({buyerFormIsOpen: false});
    }

    submitInformantInformation = () =>{
        console.log("props", this.props)
        Geocode.setApiKey("AIzaSyBWRUwhKeGWx_7qra1Mw4TUSjWhZBuqrq4")
        const {address1, city, state, zip} = this.props.form.InformantForm.values
        console.log("address", address1, city, state, zip)
        Geocode.fromAddress(`${address1} ${city} ${state} ${zip}`).then(response=>{
            const {lat, lng} = response.results[0].geometry.location;
            console.log(lat,lng)
            console.log("props", this.props)
            let informantInfo = Object.assign({}, this.props.form.InformantForm.values, {lat: lat, lng: lng} )
            this.props.submitInformantInfo(informantInfo);
            this.setState({informantFormIsOpen: false});
        }).catch(e=>console.log(e));
    }
        
    
    render (){
        
        const buyerformStyles = {
            content : {
              width                 : '50%',
              height                : '60%',
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
            //   marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)'
            }
          };

        const informantformStyles = {
        content : {
            width                 : '50%',
            height                : '60%',
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        }
        };

        return(
            <div className="PageTitle">
                Account Profile

                {/* <InformantForm/>
                
                <BuyerForm/> */}

                {
                this.props.user.buyerInfo.buyerid
                ?
                <div>
                    <button onClick={this.openBuyerForm}>Edit Buyer Profile</button>
                    {this.props.order.orders[0]
                        ?<div>'here is your most recent order:'
                            {this.props.order.orders.map((order) => {

                            return (
                            <div>
                                Order Name: {order.ordername}
                                Order Address: {order.address1+ ' '+order.city+' '+order.state+' '+order.zip}
                                Order Type: {order.ordertype}
                                Order Notes: {order.ordernotes}
                                Order Valida Until: {order.ordervaliduntil}
                            </div>
                            )
                            })
                            }
                        </div>
                        :   <div>"You don't have any order"
                                <Link to="/PrivateBuyer">
                                    <button>
                                        Submit an Order
                                    </button>
                                </Link>
                            </div>
                    }
                </div>
                : <h4>you are not a buyer yet <button onClick={this.openBuyerForm}>Become a Buyer</button> </h4>
                }
                    <Modal
                    isOpen={this.state.buyerFormIsOpen}
                    // onRequestClose={this.closeBuyerForm}
                    style={buyerformStyles}
                    >
                        <BuyerFormValidation mysubmit={this.submitBuyerInformation}  cancel={this.closeBuyerForm}/>
                    </Modal>







                {
                this.props.user.informantInfo.informantid
                ? <h4>you are a informant, here is your most recent inquiry <button onClick={this.openInformantForm}>Edit Informant Profile</button></h4>
                : <h4>you are not an informant yet <button onClick={this.openInformantForm}>Become an Informant</button></h4>
                }

                    <Modal
                    isOpen={this.state.informantFormIsOpen}
                    // onRequestClose={this.closeInformantForm}
                    style={informantformStyles}
                    >
                        <InformantFormValidation mysubmit={this.submitInformantInformation} cancel={this.closeInformantForm}/>
                    </Modal>

            </div>
        )
    }
}

function mapStateToProps(state){
    const {user, form, order} = state
    return {user, form, order};
}
export default connect(mapStateToProps, {getInformantInfo, getBuyerInfo, submitBuyerInfo, submitInformantInfo, getOrders})(AccountProfile)