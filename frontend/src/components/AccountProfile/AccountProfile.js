import React, {Component} from 'react';
import '../../App.css';
import InformantForm from './InformantForm'

export default class AccountProfile extends Component {
    render (){
        return(
            <div className="PageTitle">
                Account Profile
                <InformantForm/>
            </div>
        )
    }
}
