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

            <div className="PageTitle container">
            <h1>Your Cart
                </h1>
                <Link to="/">
                    <button className="btn btn-primary">
                        Continue Shopping
                    </button>
                </Link>
                


                
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
                                    <dd> {result.orderstatus}</dd>
                                </dl>
                                <dl className="dl-horizontal">
                                    <dt>Order Status:</dt>
                                    <dd> {result.paidflag}</dd>
                                </dl>
                                <dl>
                                <button className="btn btn-danger">
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
                    <button className="btn btn-primary">
                        Check Out
                    </button>
                </div>
                


            </div>
        )
    }
}

    
function mapStateToProps(state){
    const {user, form, order} = state
    return {user, form, order};
}
export default connect(mapStateToProps, {getOrderResultsbyBuyer})(Cart)
