import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import '../../App.css';
import logo from './../Shared/images/logo.png';


export default class Footer extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark nav-container transparent-nav footer">
                <div className="container-fluid body container-footer">       
                    <footer id="navbarResponsive">
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