import React, {Component} from 'react';
import '../../App.css';
import {connect} from 'react-redux';
import InformantForm from './InformantForm'
import BuyerForm from './BuyerForm'
import {getInformantInfo, getBuyerInfo} from '../../ducks/reducers/user';

class AccountProfile extends Component {

    componentWillMount(){
        this.props.getInformantInfo();
        this.props.getBuyerInfo();
    }
        
    
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
function mapStateToProps(state){
    const {user} = state
    return {user};
}
export default connect(mapStateToProps, {getInformantInfo, getBuyerInfo})(AccountProfile)