import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom';
import { connect } from "react-redux";
import {getUserInfo, logout} from '../../ducks/reducers/user';

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
        
        if (!this.props.user.userid){
            return (
                
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">

                    <Redirect to={"/"}/>
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
                            </ul>
                            
                                <a href={"http://localhost:4000/auth"}><button >Login</button></a>

                        </div>
                    </div>
                </nav>
            )}
        else {
            return (
                
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">

                    <Redirect to={"/Account"}/>
                    <div className="container-fluid">

                        <a className="navbar-brand" href="/">RE-Informants</a>
                        <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className={`${classOne}`} id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/Account">Account</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/PrivateBuyer">Buyer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/PrivateInformant">Informant</Link>
                                </li>

                            </ul>

                            <Link to="/"><button onClick={()=>this.logout()}>Logout</button></Link>
                        </div>
                    </div>
                </nav>
                ); 
        }
    }
 }


const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

export default connect ( mapStateToProps, {getUserInfo: getUserInfo, logout:logout})(Nav);

