import React, {Component} from 'react';
import '../../App.css';
import InformantForm from './InformantForm'
import BuyerForm from './BuyerForm'

export default class AccountProfile extends Component {
    render (){
        return(
            <div className="PageTitle">
                Account Profile
                <InformantForm/>
                <BuyerForm/>
            </div>
        )
    }
}
