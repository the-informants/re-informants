import React, {Component} from 'react';
import '../../App.css';

export default class AboutUs extends Component {
    render (){
        return(
            <div className="container">
                <div className="PageTitle">
                    <h1>About Us</h1>
                </div>
                <p>Researching real estate either to buy or to rent has always been a challenging process. Buyers and renters have a difficult time finding reliable information to understand the characteristic of a neighborhood. 
                    </p><p>
                    Do you know your neighbors, schools, community, recreation options? Have you been in your location for a while? Are you willing to spend time on the phone giving information to a buyer, answering their questions? If so, then sign up. 
                    </p><p>
                    We charge buyer's to get access to your insider information. You give of your time and your honest opinions. For each call you take, we pay you money. And oh by the way, this allows you to help find great people to purchase homes in your neighborhood. 
                    
                    </p><h4 className="lead">The process works like this:</h4>
                    <ol className="step">
                        <li>Create an account and complete an Informant profile including all of the reasons why you might be able to help a real estate buyer.</li>
                        <li>Buyers search, see your profile  and place orders to talk.</li>
                        <li>You agree to a phone call to answer their questions. You share the good and the bad. Honesty is what buyers want.</li>
                        <li>Complete a 'review' of the call to keep the quality high.</li>
                        <li>You get paid.</li>
                    </ol>
                    <h4 className="lead">
                        It really is that easy. Our goal is to help people buy share information so buying and selling is made easier.
                    </h4>
                    <div><a href={process.env.REACT_APP_LOGIN}>
                        <button className="btn ml-3 btn-primary">Sign Up</button></a>
                    </div>
            </div>
        )
    }
}
