import React, {Component} from 'react';
import '../../App.css';

import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getInformantInfo, getBuyerInfo, submitBuyerInfo, submitInformantInfo} from '../../ducks/reducers/user';
import {getOrders, submitOrderInfo, getOrderResultsbyBuyer} from '../../ducks/reducers/order';


class PrivateBuyer extends Component {
    constructor() {
        super();  
        this.state = {
          createOrderFormIsOpen: false
        };
  }

    componentWillMount(){
        // this.props.getInformantInfo();
        // this.props.getBuyerInfo();
        this.props.getOrders();
        this.props.getOrderResultsbyBuyer();
        // Modal.setAppElement('body');
    }



    
    render (){
        
 

        return(

            <div className="PageTitle">
                Private Buyer text
                <Link to="/">
                    <button className="btn btn-primary">
                        New Order
                    </button>
                </Link>
                
                {/* <button onClick={this.openCreateOrderForm}>New Order</button> */}


                
                {this.props.order.orders[0]
                        ?<div>here are your orders:
                            {this.props.order.orders.map((order) => {

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
                        :   <div>You don't have any order</div>
                    }
                


            </div>
        )
    }
}

    
function mapStateToProps(state){
    const {user, form, order} = state
    return {user, form, order};
}
export default connect(mapStateToProps, {getInformantInfo, getBuyerInfo, getOrders, getOrderResultsbyBuyer})(PrivateBuyer)
