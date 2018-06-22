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
import {getOrders, getOrderResultsbyInformant} from '../../ducks/reducers/order';


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
        this.props.getOrderResultsbyInformant();
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

        const ActiveOrders = this.props.order.orders.filter(order => order.orderstatus=='Active')
        const ActiveInquiries = this.props.order.orderResultsbyInformant.filter(inquiry => inquiry.orderresultstatus=='Active')

        return(
            <div className="container PageTitle">
               <h1>Account Profile</h1>

                {/* <InformantForm/>
                
                <BuyerForm/> */}

                {
                this.props.user.buyerInfo.buyerid
                ?
                <div>
                    <button onClick={this.openBuyerForm}>Edit Buyer Profile</button>
                    <Link to="/">
                                    <button className="btn btn-primary">
                                        Submit an Order
                                    </button>
                    </Link>
                    {ActiveOrders[0]
                        ?<div>'here are your active orders:'
                            {ActiveOrders.map((order) => {

                            return (
                            <div>
                                Order Name: {order.ordername}
                                Order Address: {order.address}
                                Order Type: {order.ordertype}
                                Order Notes: {order.ordernotes}
                                {/* Order Valid Until: {order.ordervaliduntil} */}
                                Order Timestamp: {order.orderdatetime}
                                Order Status: {order.orderstatus}
                            </div>
                            )
                            })
                            }
                        </div>
                        :   <div>"You don't have any active order"
                            </div>
                    }
                </div>
                : <p>You are not a buyer yet <button className="btn btn-default" onClick={this.openBuyerForm}>Become a Buyer</button> </p>
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
                ?
                <div>
                    <button onClick={this.openInformantForm}>Edit Informant Profile</button>
                    <Link to="/">
                                    <button className="btn btn-primary">
                                        Search for a buyer
                                    </button>
                    </Link>

                    {ActiveInquiries[0]
                        ?<div>'here are your active inquiries:'
                            {ActiveInquiries.map((inquiry) => {

                            return (
                            <div>
                                Inquiry Name: {inquiry.ordername}
                                Inquiry Address: {inquiry.address}
                                Inquiry Type: {inquiry.ordertype}
                                Inquiry Notes: {inquiry.ordernotes}
                                Inquiry Timestamp: {inquiry.orderdatetime}
                                Inquiry Distance: {inquiry.distance}
                                Inquiry Status: {inquiry.orderresultstatus}
                            </div>
                            )
                            })
                            }
                        </div>
                        :   <div>"You don't have any active inquiry"
                               
                            </div>
                    }
                </div>
                : <p>You are not a buyer yet <button className="btn btn-default" onClick={this.openBuyerForm}>Become a Buyer</button> </p>
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
export default connect(mapStateToProps, {getInformantInfo, getBuyerInfo, submitBuyerInfo, submitInformantInfo, getOrders, getOrderResultsbyInformant})(AccountProfile)