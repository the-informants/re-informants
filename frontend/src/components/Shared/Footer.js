import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import '../../App.css';
import logo from './../Shared/images/logo.png';


export default class Footer extends Component {

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

    render() {

        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <nav className="navbar navbar-expand-lg navbar-dark nav-container transparent-nav footer">
                <div className="container-fluid body container-footer">  
                        
                    <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <footer id="navbarResponsive" className={`${classOne}`}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link navsize" to="/PublicGetStarted">Get Started</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navsize" to="/PublicReference">References</Link>
                            </li>  
                            <li className="nav-item">
                                <Link className="nav-link navsize" to="/PublicBuyer">Buyers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navsize" to="/PublicSeller">Sellers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navsize" to="/AboutUs">About Us</Link>
                            </li>    
                        </ul>
                            
                    </footer>
                </div>
            </nav>
        )
    }
}