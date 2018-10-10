import React, {Component} from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getInformantInfo, getBuyerInfo} from '../../ducks/reducers/user';
import {getOrders, getOrderResultsbyBuyer} from '../../ducks/reducers/order';


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
            <div className="container PageTitle">
                <h1>Private Buyer</h1>
                    <div className="container">
                        <Link to="/PublicGetStarted">
                            <button className="btn btn-main">
                            Search Again
                            </button>
                        </Link>
                
                {/* <button onClick={this.openCreateOrderForm}>New Order</button> */}


                
                {this.props.order.orders[0]

                        ?<div className="container">
                            <h4>Your Orders:</h4>
                            {this.props.order.orderResultsbyBuyer.map((order) => {

                            return (
                            <div className="container">
                                <div className="order"> 
                                    <dl className="dl-horizontal">
                                        <dt>Order Name:</dt>
                                        <dd> {order.ordername}</dd>
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
                                        {/* Order Valid Until: {order.ordervaliduntil} */}
                                        <dt>Order Timestamp:</dt>
                                        <dd>{order.orderdatetime}</dd>
                                    </dl>
                                    <dl className="dl-horizontal">
                                        <dt>Order Status:</dt>
                                        <dd>{order.orderstatus}</dd>
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

                        :   
                        <div className="container">
                            You don't have any orders
                        </div>
                    }
            </div>
                


                </div>
        )
    }
}

    
function mapStateToProps(state){
    const {user, form, order} = state
    return {user, form, order};
}
export default connect(mapStateToProps, {getInformantInfo, getBuyerInfo, getOrders, getOrderResultsbyBuyer})(PrivateBuyer)
