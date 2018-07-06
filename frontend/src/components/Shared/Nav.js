import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {getUserInfo, logout, getInformantInfo, getBuyerInfo} from '../../ducks/reducers/user';

import logo from './images/logo.png'

import {getOrderResultsbyBuyer} from '../../ducks/reducers/order';


class Nav extends Component {
    constructor(props) {
    super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            logout:false
        };
    }

    componentWillMount(){
        this.props.getUserInfo();
        this.props.getInformantInfo();
        this.props.getBuyerInfo();
        this.props.getOrderResultsbyBuyer();
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
            });
        }

        logout = ()=>{
            console.log("logging out")
            this.props.logout();
            this.setState({logout:true});
        }
       

    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        const ActiveUnpaidOrders = 
        this.props.cart.filter(
                order =>
                    order.paidflag==='unpaid'
            )
            return (
                
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">

                    <div className="container-fluid body">
                        <Link to={"/"}><img className="logo img-responsive" src={logo} alt="RE Informants"/></Link>
                        {/* <a className="navbar-brand" href="/"><img className="logo img-responsive" src={logo} alt="RE Informants"/></a> */}
                        <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                         {!this.props.user.userid ? 
                        <div className={`${classOne}`} id="navbarResponsive">

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link navsize" to="/PublicGetStarted">Get Started</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link navsize" to="/PublicInformant">Informant</Link>
                                </li>  
                                <li className="nav-item">
                                    <Link className="nav-link navsize" to="/PublicBuyer">Buyer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link navsize" to="/PublicSeller">Seller</Link>
                                </li>
                                
                            </ul>
                            <a href={process.env.REACT_APP_LOGIN}><button className="btn btn-primary" >Sign Up</button></a>
                            <a href={process.env.REACT_APP_LOGIN}><button className="btn btn-default" >Login</button></a>
                            </div>
                                :
                            <div className={`${classOne}`} id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                <li className="nav-item">

                                    <Link className="nav-link navsize" to="/PublicGetStarted">Get Started</Link>

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link navsize" to="/PrivateInformant">Informant</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link navsize" to="/PrivateBuyer">Buyer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link navsize" to="/PrivateSeller">Seller</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link navsize" to="/Account">Account</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link navsize" to="/Cart">
                                        <i className="fas fa-shopping-cart cart-icon navsize"></i>{ActiveUnpaidOrders.length> 0 && <span className="badge badge-pill badge-primary">{ActiveUnpaidOrders.length}</span>}
                                     </Link>
                                </li>
                                
                            </ul>
                                <Link to="/"><button className="btn btn-success" onClick={()=>this.logout()}>Logout</button></Link>
                            </div>
                                }

                            

                        </div>
                </nav>
            )
    }
 }


const mapStateToProps = state => {
    return {
        user: state.user.user,
        cart: state.order.orderResultsbyBuyer
    }
}

export default connect ( mapStateToProps, {getUserInfo: getUserInfo, logout:logout, getInformantInfo, getBuyerInfo, getOrderResultsbyBuyer})(Nav);

