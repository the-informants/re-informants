import React, {Component} from 'react';
import '../../App.css';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PaymentFormValidation from './PaymentFormValidation'


import {getOrderResultsbyBuyer, payOrderResult, cancelOrdeResult} from '../../ducks/reducers/order';


class Cart extends Component {
    constructor() {
        super();  
        this.state = {
        paymentFormIsOpen: false
        };
  }

    componentWillMount(){
        this.props.getOrderResultsbyBuyer();
    }
    
    openPaymentForm=()=>{
        this.setState({paymentFormIsOpen: true});
        }
    
    closePaymentForm=()=>{
        this.setState({paymentFormIsOpen: false});
        }

    placeOrder = ()=>{
            this.props.payOrderResult()
            this.setState({paymentFormIsOpen: false});
        }

    render (){
        const ActiveUnpaidOrders = 
                this.props.order.orderResultsbyBuyer.filter(
                        order =>
                            order.paidflag==='unpaid'
                    )
        
        const paymentformStyles = {
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

        return(

            <div className="PageTitle container">
            <h1>Your Cart
                </h1>
                <div className="container"> 
                <Link to="/PublicGetStarted">
                    <button className="btn btn-primary">
                        Continue Researching
                    </button>
                </Link>
                    <button className="btn btn-primary" onClick={this.openPaymentForm}>
                        Check Out
                    </button>
                </div>
                


                
                {this.props.order.orderResultsbyBuyer[0]
                        ?<div className="container">
                            <h4>
                            Your Orders:</h4>
                            {ActiveUnpaidOrders.map((result) => {

                            return (
                            <div className="container">
                            <div className="order"> 
                                <dl className="dl-horizontal">
                                    <dt>Order Name:</dt>
                                    <dd>{result.ordername}</dd>
                                </dl>
                                <dl className="dl-horizontal">
                                    <dt>Order Address:</dt>
                                    <dd> {result.address}</dd>
                                </dl>
                                <dl className="dl-horizontal">
                                    <dt>Order Type:</dt>
                                    <dd> {result.ordertype}</dd>
                                </dl>
                                <dl className="dl-horizontal">
                                    <dt>Order Notes:</dt>
                                    <dd> {result.ordernotes}</dd>
                                </dl>
                                <dl className="dl-horizontal">
                                    <dt>Informant Name:</dt>
                                    <dd> {result.firstname + ' ' + result.lastname}</dd>
                                </dl>
                                <dl className="dl-horizontal">
                                    <dt>Order Timestamp:</dt>
                                    <dd> {result.orderdatetime}</dd>
                                </dl>
                                <dl className="dl-horizontal">
                                    <dt>Order Status:</dt>
                                    <dd> {result.orderresultstatus}</dd>
                                </dl>
                                <dl className="dl-horizontal">
                                    <dt>Order Payment Status:</dt>
                                    <dd> {result.paidflag}</dd>
                                </dl>
                                <dl>
                                <button className="btn btn-danger" onClick={()=>this.props.cancelOrdeResult(result.orderresultsid)}>

                                remove order
                                </button>
                                </dl>
                            </div>
                            </div>
                            )
                            })
                            }
                        </div>
                        :   <div>You don't have any order in your cart</div>
                    }

                <div className="container"> 
                <Link to="/PublicGetStarted">
                    <button className="btn btn-primary">
                        Continue Researching
                    </button>
                </Link>
                    <button className="btn btn-primary" onClick={this.openPaymentForm}>
                        Check Out
                    </button>
                </div>
                


                 <Modal
                    isOpen={this.state.paymentFormIsOpen}
                    onRequestClose={this.closePaymentForm}
                    style={paymentformStyles}
                    >
                        <PaymentFormValidation mysubmit={this.placeOrder}  cancel={this.closePaymentForm}/>
                </Modal>

            </div>
        )
    }
}

    
function mapStateToProps(state){
    const {user, form, order} = state
    return {user, form, order};
}
export default connect(mapStateToProps, {getOrderResultsbyBuyer, payOrderResult, cancelOrdeResult})(Cart)
