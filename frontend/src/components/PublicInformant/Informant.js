import React, {Component} from 'react';
import '../../App.css';

export default class PublicInformant extends Component {
    render (){
        return(
            <div className="PageTitle">
                Public Informant
                <div><a href={"http://localhost:4000/auth"}>
                    <button>Sign Me Up</button></a>
                    </div>
            </div>
        )
    }
}
