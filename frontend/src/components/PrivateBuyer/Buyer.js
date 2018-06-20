import React, {Component} from 'react';
import '../../App.css';

import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getInformantInfo, getBuyerInfo, submitBuyerInfo, submitInformantInfo} from '../../ducks/reducers/user';
import {getOrders, submitOrderInfo} from '../../ducks/reducers/order';


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
        // Modal.setAppElement('body');
    }



    
    render (){
        
 

        return(
            <div className="PageTitle">
                Private Buyer text
                <Link to="/"><button>New Order</button></Link>
                
                {/* <button onClick={this.openCreateOrderForm}>New Order</button> */}

                
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
        )
    }
}

    
function mapStateToProps(state){
    const {user, form, order} = state
    return {user, form, order};
}
export default connect(mapStateToProps, {getInformantInfo, getBuyerInfo, getOrders})(PrivateBuyer)
