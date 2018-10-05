import React, {Component} from 'react';
import '../../App.css';
import pic1 from '../Shared/images/pexels-photo-1288483-small.jpg'

export default class PublicBuyer extends Component {
    render (){
        return(
            <div className="container">
                <div className="PageTitle">
                    <h1>Buyers</h1>
                    <div class="mar-top">
                        <p>Finding the right home in the right neighborhood at the right price is a daunting task. Thankfully, internet tools, realtors and home viewings can get you 80% of the way to a decision and for some that is good enough.  
                        </p>
                        <h4>For others, they are still left wondering these questions:</h4>
                        <ul class="mar-top">
                        <img src={pic1} class="float-right img-fluid mar-left30" />
                            <li>What are the neighbors like?</li> 
                            <li>Are there people like me there?</li>
                            <li>Are there neighborhood socials? Do they hang out on their porch in the evening or disappear behind closed doors?</li> 
                            <li>What sort of turnover has the neighborhood had? Is there any crime watch group?</li>
                            <li>Is there a bus to take my kid to school or a car pool I can join?</li> 
                            <li>What is the feel of the school? Is the PTA strong? Is the principal good? What are the after-school programs?</li> 
                            <li>Where do people play for fun?</li> 
                            <li>Does the commute differ much across the week?</li> 
                        </ul>
                        <strong><h4 class="mar-top">Do these questions matter?</h4>
                        </strong> 
                        
                        <p>
                            You bet they do and knowing them provides confirmation and peace of mind to your home offer. Rebands puts you in touch with a local neighborhood reference who can give you her or his first hand experience and even if making an offer on this target home is imminent, engaging a neighbor is a smart way to kick start your engagement in the new neighborhood. 
                        </p>
                        <p>
                            Employers wouldn't consider hiring employees without first calling their references. Why is it then that so many of us are willing to make the most expensive purchase of our lives without connecting locally with real people who have first hand experience as your target area.
                        </p>
                            {/* <a href={process.env.REACT_APP_LOGIN}>
                            <button className="btn btn-default">Sign Up</button></a> */}
                    </div>
                </div>
            </div>
        )
    }
}
