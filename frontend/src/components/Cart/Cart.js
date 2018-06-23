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

            <div className="PageTitle">
                <Link to="/">
                    <button className="btn btn-primary">
                        Continue Shopping
                    </button>
                </Link>
                


                
                {this.props.order.orderResultsbyBuyer[0]
                        ?<div>here are your orders:
                            {ActiveUnpaidOrders.map((result) => {

                            return (
                            <div>
                                Order Name: {result.ordername}
                                Order Address: {result.address}
                                Order Type: {result.ordertype}
                                Order Notes: {result.ordernotes}
                                Informant Name: {result.firstname + ' ' + result.lastname}
                                Order Timestamp: {result.orderdatetime}
                                Order Status: {result.orderstatus}
                                Order Status: {result.paidflag}
                                <button onClick={()=>this.props.cancelOrdeResult(result.orderresultsid)}>
                                remove order
                                </button>
                            </div>
                            )
                            })
                            }
                        </div>
                        :   <div>You don't have any order in your cart</div>
                    }

                <button className="btn btn-primary" onClick={this.openPaymentForm}>
                        Check Out
                </button>

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
