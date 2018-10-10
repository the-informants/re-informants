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
                <h1>Informant</h1>
                {this.props.order.orderResultsbyInformant[0]
                        ?<div>
                            <h4>Here are your inquiries:</h4>

                            {this.props.order.orderResultsbyInformant.map((inquiry) => {

                            return (
                                <div className="container">
                                <div className="order"> 
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Name:</dt>
                                        <dd>{inquiry.ordername}</dd>
                                    </dl>
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Address:</dt>
                                        <dd>{inquiry.address}</dd>
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
                                        <dt>Inquiry Time Stamp:</dt>
                                        <dd>{inquiry.orderdatetime}</dd>
                                    </dl>
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Distance:</dt>
                                        <dd>{inquiry.distance}</dd>
                                    </dl>
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Status:</dt>
                                        <dd>{inquiry.orderresultstatus}
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            )
                            })
                            }
                        </div>
                        :   <div className="container">
                                <h4>You don't have any inquiries
                                </h4>
                                <Link to="/">
                                <button className="btn btn-main">
                                    Search for a Buyer
                                </button>
                                </Link>
                            </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    const {user, form, order} = state
    return {user, form, order};
}

export default connect(mapStateToProps, {getOrderResultsbyInformant})(PrivateInformant)
