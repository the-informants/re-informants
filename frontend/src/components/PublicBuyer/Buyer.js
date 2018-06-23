import React, {Component} from 'react';
import '../../App.css';

export default class PublicBuyer extends Component {
    render (){
        return(
            <div className="container">
                <div className="PageTitle">
                    <h1>Buyer</h1>
                    <div>
                        <a href={"http://localhost:4000/auth"}>
                        <button className="btn btn-default">Sign Up</button></a>
                    </div>
                </div>
            </div>
        )
    }
}
