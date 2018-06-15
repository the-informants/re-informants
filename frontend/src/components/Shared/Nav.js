import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
    super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            logout:false
        };
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
            });
        }

        logout = ()=>{
            console.log("logging out")
            axios.get('/api/logout').then(response=>{
                this.setState({logout:true});
            }).catch((e)=>console.log(e));
        }
       

    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        
        if (this.state.logout){
            return (
                
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
                    <Redirect to={"/"}/>
                    <div className="container">
                        <a className="navbar-brand" href="/">RE-Informants</a>
                        <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className={`${classOne}`} id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/Get Started">Get Started</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/PublicBuyer">Buyer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/PublicInformant">Informant</Link>
                                </li>
                            </ul>

                            <button onClick={()=>this.logout()}>Logout</button>
                        </div>
                    </div>
                </nav>
            )}
        else {
            return (
                
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
                    <div className="container">
                        <a className="navbar-brand" href="/">RE-Informants</a>
                        <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className={`${classOne}`} id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Get Started">Get Started</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/PrivateBuyer">Buyer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/PrivateInformant">Informant</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Account">Account</Link>
                                </li>
                            </ul>

                            <button onClick={()=>this.logout()}>Logout</button>
                        </div>
                    </div>
                </nav>
                ); 
        }
    }
 }
export default Nav;

