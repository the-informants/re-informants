import React, {Component} from 'react';
import '../../App.css';
import pic1 from '../Shared/images/american-banking-buy-210617-small.jpg'

export default class PublicSeller extends Component {
    render (){
        return(
            <div className="container">
                <div className="PageTitle">
                    <h1>Sellers</h1>
                    <p>
                    </p>
                        Finding a buyer is top priority. You've got a listing, likely a realtor and you've done your best to prepare your home. Buyers will also want to know about your neighborhood. They may be able to find publicly available demographics, crime statistics, school scores. 
                    <img src={pic1} class="float-right img-fluid"/>
                    <p>
                        But the only way for them to know the 'feel', the 'personality' of the neighborhood is to talk to people.
                    </p>
                    <p>
                        That is why we developed REBANDS.com
                    </p>
                    <p>
                        We are here to give your buyers an independent neighborhood review from a local person living within 2 miles of your home. That review will assist you in selling your home because it gives your buyers a way to confirm what they hope about your neighborhood. 
                    </p>
                    <p>
                        Your opportunity is to extend an offer to a person you know who can be your neighborhood reference. 
                    </p>
                    <p>
                        Think of this similar to how a job candidate provides a job reference to an employer. The candidate will hand select references who know them well. Does the employer get a biased perspective? Maybe but most references will also provide an authentic and honest review as a matter of their personal integrity. We support that. Still it is your chance to hand select those who might know your neighborhood best.
                    </p>
                    {/* <div>
                        <a href={process.env.REACT_APP_LOGIN}>
                        <button className="btn btn-default">Sign Up</button></a>
                    </div> */}
                </div>
            </div>
        )
    }
}