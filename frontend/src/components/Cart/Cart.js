import React, {Component} from 'react';
import '../../App.css';

import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {getOrderResultsbyBuyer} from '../../ducks/reducers/order';


class Cart extends Component {
    constructor() {
        super();  
        this.state = {
         
        };
  }

    componentWillMount(){
        this.props.getOrderResultsbyBuyer();
    }
    
    render (){
        const ActiveUnpaidOrders = 
                this.props.order.orderResultsbyBuyer.filter(
                        order =>
                            order.paidflag==='unpaid'
                    )
        
 

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
                                <button>
                                remove order
                                </button>
                            </div>
                            )
                            })
                            }
                        </div>
                        :   <div>You don't have any order in your cart</div>
                    }

                <button className="btn btn-primary">
                        Check Out
                </button>
                


            </div>
        )
    }
}

    
function mapStateToProps(state){
    const {user, form, order} = state
    return {user, form, order};
}
export default connect(mapStateToProps, {getOrderResultsbyBuyer})(Cart)
