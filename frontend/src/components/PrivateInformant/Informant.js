import React, {Component} from 'react';
import '../../App.css';
import {getOrderResultsbyInformant} from '../../ducks/reducers/order';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class PrivateInformant extends Component {

    componentWillMount(){
        this.props.getOrderResultsbyInformant();
    }

    render (){
        return(
            <div className="container PageTitle">
                <h1>Private Informant</h1>
                {this.props.order.orderResultsbyInformant[0]
                        ?<div>here are your inquiries:
                            {this.props.order.orderResultsbyInformant.map((inquiry) => {

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
                        :   <div>You don't have any inquiry</div>
                }

                <Link to="/">
                    <button className="btn btn-primary">
                        Search for a buyer
                    </button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {user, form, order} = state
    return {user, form, order};
}

export default connect(mapStateToProps, {getOrderResultsbyInformant})(PrivateInformant)
