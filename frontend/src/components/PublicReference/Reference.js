import React, {Component} from 'react';
import '../../App.css';
import pic1 from '../Shared/images/pexels-photo-1288482.jpeg';

export default class PublicReference extends Component {
    render (){
        return(
            <div className="container">
                <div className="PageTitle">
                    <h1>Neighborhood References</h1>
                </div>
                <div class="row mar-top">
                    <div class="col-md-8">
                        <p>
                            Researching real estate either to buy or to rent has always been a challenging process. Buyers and renters have a difficult time finding reliable information to understand the characteristics of a neighborhood. 
                        </p>
                        <p>
                            Can you describe the feel of your neighborhood? Do you know your neighbors, the school instructors and administrators? Can you describe the community and recreation options? Have you been in your location for a while? Are you willing to spend time on the phone giving information to a buyer or renter, to answer their questions with accurate information about the good and the bad? And would you like to make money for your time? If so, then give us your email and get notified when we expand. 
                        </p>
                        <p>
                            Our model is driven by sellers who provide neighborhood references and buyers and renters who pay for the service to get local insight from you. For each call you take, you get paid. And by the way, this allows you to help great people find a home in your neighborhood.      
                        </p>
                    </div>
                    <div class="col-md-4">
                        <img src={pic1} class="float-right img-fluid"/>
                    </div>
                </div>
                {/* <h4 className="lead">
                    The process works like this:</h4>
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
                <div>
                    <a href={process.env.REACT_APP_LOGIN}>
                    <button className="btn ml-3 btn-primary">Sign Up</button></a>
                </div> */}

            </div>
        )
    }
}
