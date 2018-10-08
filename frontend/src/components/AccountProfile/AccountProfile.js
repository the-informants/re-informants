import React, {Component} from 'react';
import Modal from 'react-modal';
import '../../App.css';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import geocoder from 'geocoder';
import BuyerFormValidation from './BuyerFormValidation'
import InformantFormValidation from './InformantFormValidation'
import {getInformantInfo, getBuyerInfo, submitBuyerInfo, submitInformantInfo, updateBuyerInfo, updateInformantInfo} from '../../ducks/reducers/user';
import {getOrders, getOrderResultsbyInformant, getOrderResultsbyBuyer} from '../../ducks/reducers/order';


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
        this.props.getOrderResultsbyBuyer();
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
        if(this.props.user.buyerInfo.buyerid){
            buyerInfo.buyerid = this.props.user.buyerInfo.buyerid
            this.props.updateBuyerInfo(buyerInfo)
        } else {
            this.props.submitBuyerInfo(buyerInfo)
        }
        this.setState({buyerFormIsOpen: false});
    }

    submitInformantInformation = () =>{
        console.log("props", this.props)
        const {address1, city, state, zip} = this.props.form.InformantForm.values
        console.log("address", address1, city, state, zip)
        geocoder.geocode(`${address1} ${city} ${state} ${zip}`, (err,response)=>{
            console.log("GEOCODE", response)
            const {lat, lng} = response.results[0].geometry.location;
            console.log(lat,lng)
            console.log("props", this.props)
            let informantInfo = Object.assign({}, this.props.form.InformantForm.values, {lat: lat, lng: lng} )
                if(this.props.user.informantInfo.informantid){
                    informantInfo.informantid = this.props.user.informantInfo.informantid
                    this.props.updateInformantInfo(informantInfo);
                }else {
                    this.props.submitInformantInfo(informantInfo);
                }
            this.setState({informantFormIsOpen: false});
        })
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

        const ActiveOrders = this.props.order.orderResultsbyBuyer.filter(order => order.orderresultstatus=='Active')
        const ActiveInquiries = this.props.order.orderResultsbyInformant.filter(inquiry => inquiry.orderresultstatus=='Active')

        return(
            <div className="container PageTitle">
               <h1>Account Profile</h1>
                {
                this.props.user.buyerInfo.buyerid
                ?

                <div className="container">
                <hr />
                <h4>
                    Your Buyer Info 
                </h4>
                    <button className="btn btn-default" onClick={this.openBuyerForm}>Edit Buyer Profile</button>
                    <Link to="/">
                                    <button className="btn">
                                        Submit an Order
                                    </button>
                    </Link>
                    {ActiveOrders[0]
                        ?<div className="container">
                            <h4>Your Active Orders:</h4>

                            {ActiveOrders.map((order) => {

                            return (

                            <div className="container">
                            <div className="order"> 
                                <dl className="dl-horizontal">
                                    <dt>Order Name: </dt>
                                    <dd>{order.ordername}</dd>
                                </dl>
                                <dl className="dl-horizontal">
                                    <dt>Order Address:</dt>
                                    <dd>{order.address}</dd>
                                </dl>
                                <dl className="dl-horizontal">
                                    <dt>Order Type:</dt>
                                    <dd>{order.ordertype}</dd>
                                </dl>
                                <dl className="dl-horizontal">
                                    <dt>Order Notes:</dt>
                                    <dd>{order.ordernotes}</dd>
                                </dl>
                                <dl className="dl-horizontal">
                                    <dt>{/* Order Valid Until: {order.ordervaliduntil} */}
                                    Order Timestamp:</dt>
                                    <dd>{order.orderdatetime}</dd>
                                </dl>
                                <dl className="dl-horizontal">
                                    <dt>Order Status:</dt>
                                    <dd>{order.orderresultstatus}</dd>
                                </dl>
                                <dl className="dl-horizontal">
                                    <dt>Order Payment Status:</dt>
                                    <dd>{order.paidflag}</dd>
                                </dl>
                                </div>
                            </div>
                            )
                            })
                            }
                        </div>
                        :   <div className="container">"You don't have any active orders"
                            </div>
                    }
                </div>

                :   
                <div className="container">
                    <h4>
                        You are not a buyer yet
                    </h4> 
                    <button className="btn btn-default" onClick={this.openBuyerForm}>
                        Become a Buyer
                    </button>
                </div>
                }
                    <Modal
                    isOpen={this.state.buyerFormIsOpen}
                    onRequestClose={this.closeBuyerForm}
                    style={buyerformStyles}
                    >
                        <BuyerFormValidation mysubmit={this.submitBuyerInformation}  cancel={this.closeBuyerForm}/>
                    </Modal>
                
                {
                this.props.user.informantInfo.informantid
                ?
                <div className="container">
                <hr />
                <h4>
                    Your Informant Info
                </h4>
                    <button className="btn btn-default" onClick={this.openInformantForm}>Edit Informant Profile</button>
                    <Link to="/">
                                    <button className="btn btn-primary">
                                        Search for a buyer
                                    </button>
                    </Link>

                    {ActiveInquiries[0]
                        ?<div className="container">
                        <h4>Here are your active inquiries:</h4>
                            {ActiveInquiries.map((inquiry) => {

                            return (
                                <div className="container">
                                <div className="order"> 
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Name:</dt>
                                        <dd> {inquiry.ordername}</dd>
                                    </dl>
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Address:</dt>
                                        <dd> {inquiry.address}</dd>
                                    </dl>
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Type:</dt>
                                        <dd> {inquiry.ordertype}</dd>
                                    </dl>
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Notes:</dt>
                                        <dd>{inquiry.ordernotes}</dd>
                                    </dl>
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Timestamp:</dt>
                                        <dd> {inquiry.orderdatetime}</dd>
                                    </dl>
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Distance:</dt>
                                        <dd> {inquiry.distance}</dd>
                                    </dl>
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Status:</dt>
                                        <dd> {inquiry.orderresultstatus}</dd>
                                    </dl>
                                    
                                </div>
                                </div>
                            )
                            })
                            }
                        </div>
                        :   
                        <div className="container">
                            "You don't have any active inquiry"
                        </div>
                    }
                </div>

                : 
                <div className="container">
                    <h4>You are not an Informant yet</h4>
                    <button className="btn btn-default" onClick={this.openInformantForm}>
                        Become an Informant
                    </button> 
                </div>
                }                
                    <Modal
                    isOpen={this.state.informantFormIsOpen}
                    onRequestClose={this.closeInformantForm}
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
export default connect(mapStateToProps, {getInformantInfo, getBuyerInfo, submitBuyerInfo, submitInformantInfo, getOrders, getOrderResultsbyInformant, getOrderResultsbyBuyer, updateBuyerInfo, updateInformantInfo})(AccountProfile)