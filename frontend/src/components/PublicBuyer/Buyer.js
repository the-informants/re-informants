import React, {Component} from 'react';
import '../../App.css';

export default class PublicBuyer extends Component {
    render (){
        return(
            <div className="container">
                <div className="PageTitle">
                    <h1>Buyer</h1>
                    <div>
                    <p>Researching real estate either to buy or to rent has always been a challenging process. Buyers and renters have a difficult time finding reliable information to understand the characteristic of a neighborhood. 
                    </p>
                        <a href={process.env.REACT_APP_LOGIN}>
                        <button className="btn btn-default">Sign Up</button></a>
                    </div>
                </div>
            </div>
        )
    }
}
