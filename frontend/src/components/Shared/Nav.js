import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css';


export default function Nav() {
    return (
        <div className="navbar navbar-light">
            <Link to="/" className="nav navbar-nav">
                <div className="nav-item" > Home </div>
            </Link>
            {/* <Link to="/GetStarted"className="nav navbar-nav">
                <div className="nav-item" > Get Started</div>
            </Link> */}
            <Link to="/Buyer"className="nav navbar-nav">
                <div className="nav-item" > Buyer</div>
            </Link>
            <Link to="/Informant"className="nav navbar-nav">
                <div className="nav-item" > Informant </div>
            </Link>
            <Link to="/Account"className="nav navbar-nav">
                <div className="nav-item" > Account </div>
            </Link>
            {/* comment */}
            {/* On 6/6/18, Keller left this code in as a placeholder to enable when we have auth0 working.
            <a className="nav navbar-nav" href={process.env.REACT_APP_LOGIN}>
                <button className="nav-item" > Sign In </button></a> */}
        </div> 
    )
}