import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom';
import { connect } from "react-redux";
import {getUserInfo, logout, getInformantInfo, getBuyerInfo} from '../../ducks/reducers/user';

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

                    {/* <Redirect to={"/"}/> */}
                    <div className="container-fluid body">

                        <a className="navbar-brand" href="/">RE-Informants</a>
                        <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className={`${classOne}`} id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Get Started</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/PublicBuyer">Buyer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/PublicInformant">Informant</Link>
                                </li>
                                {this.props.user.userid &&
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Cart">
                                        <i className="fas fa-shopping-cart cart-icon"></i>{ActiveUnpaidOrders.length> 0 && <span className="badge badge-pill badge-primary">{ActiveUnpaidOrders.length}</span>}
                                     </Link>
                                </li>}
                                
                            </ul>

                             {this.props.user.userid ? 
                              <Link to="/"><button className="btn btn-success" onClick={()=>this.logout()}>Logout</button></Link>
                              :
                                <a href={"http://localhost:4000/auth"}><button className="btn btn-primary" >Login</button></a>
                             }

                        </div>
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

export default connect ( mapStateToProps, {getUserInfo: getUserInfo, logout:logout, getInformantInfo, getBuyerInfo})(Nav);

