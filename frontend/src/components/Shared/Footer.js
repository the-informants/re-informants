import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import '../../App.css';
import logo from './../Shared/images/logo.png';


export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid footer-container relative-bottom bg-dark">
                    <img src={logo} alt=""/>
                        <div className="d-flex justify-content-center row">
                            <Link className="footer-links" to="/">home</Link>
                            <Link className="footer-links" to="/PublicGetStarted">search</Link>
                        </div>
                    <h6>RE Informants <i className="far fa-copyright"></i>  2018</h6> 
                </div>
            </div>
        )
    }
}