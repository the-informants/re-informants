import React, {Component} from 'react';
import '../../App.css';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {getInformantInfo, getBuyerInfo, submitBuyerInfo, submitInformantInfo} from '../../ducks/reducers/user';
import {getOrders, submitOrderInfo} from '../../ducks/reducers/order';
import OrderFormValidation from './OrderFormValidation';

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

    openCreateOrderForm=()=>{
    this.setState({createOrderFormIsOpen: true});
    }

    closeCreateOrderForm=()=>{
    this.setState({createOrderFormIsOpen: false});
    }

    submitOrderInformation = ()=>{
        const newOrderInfo = Object.assign({}, this.props.form.OrderForm.values, {buyerid: this.props.user.buyerInfo.buyerid})
        console.log(newOrderInfo)
        this.props.submitOrderInfo(newOrderInfo)
        this.setState({createOrderFormIsOpen: false});
        this.props.getOrders();
    }

    render (){
        
        const orderformStyles = {
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
            <div className="container PageTitle">
                <h1>Private Buyer</h1>
                <button className="btn btn-default" onClick={this.openCreateOrderForm}>New Order</button>

                
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
                

                <Modal
                isOpen={this.state.createOrderFormIsOpen}
                // onRequestClose={this.closeBuyerForm}
                style={orderformStyles}
                >
                        <OrderFormValidation cancel={this.closeCreateOrderForm}
                        mysubmit={this.submitOrderInformation}  
                        />
                </Modal>
            </div>
        )
    }
}

    
function mapStateToProps(state){
    const {user, form, order} = state
    return {user, form, order};
}
export default connect(mapStateToProps, {getInformantInfo, getBuyerInfo, getOrders, submitOrderInfo})(PrivateBuyer)
