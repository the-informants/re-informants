import React, {Component} from 'react';
import '../../App.css';

export default class PublicBuyer extends Component {
    render (){
        return(
            <div className="PageTitle">
                <p>Public Buyer Text here</p>
                <a href={"http://localhost:4000/auth"}>
                    <button>Sign Me Up</button></a>
            </div>
        )
    }
}
