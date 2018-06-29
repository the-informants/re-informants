import React, {Component} from 'react';
import '../../App.css';

export default class PublicInformant extends Component {
    render (){
        return(
            <div className="container">
                <div className="PageTitle">
                <h1> Public Informant</h1>
                <p>Researching real estate either to buy or to rent has always been a challenging process. Buyers and renters have a difficult time finding reliable information to understand the characteristic of a neighborhood. 
                    </p>
                    <div><a href={"http://localhost:4000/auth"}>
                        <button className="btn btn-default">Sign Up</button></a>
                        </div>
                </div>
            </div>
        )
    }
}
