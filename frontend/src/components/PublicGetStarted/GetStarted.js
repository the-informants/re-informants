import React, {Component} from 'react';
import '../../App.css';

export default class GetStarted extends Component {
    render (){
        return(
            <div className="PageTitle">
                Get Started
                <a href={"http://localhost:4000/auth"}><button >Login</button></a>
            </div>
        )
    }
}
