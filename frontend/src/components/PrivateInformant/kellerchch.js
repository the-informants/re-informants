import React, {Component} from 'react';
import '../../App.css';
import {getOrderResultsbyInformant} from '../../ducks/reducers/order';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import keller from '../Shared/images/keller.jpg';


class PrivateInformant extends Component {

    componentWillMount(){
        this.props.getOrderResultsbyInformant();
    }

    render (){
        return(
            <div className="container PageTitle">
                <h1>Chris Keller</h1>
                <div class="row mar-top"> 
                    <div class ="col-md-8"> 
                        <img src={keller} class="float-left img-fluid mar-right30"/>

                        <div class ="mar-bottom">
                            <div><strong>Name &mdash;</strong> Chris Keller</div>
                            <div><strong>Gender &mdash;</strong> Male</div>
                            <div><strong>Age &mdash;</strong> 30-45</div>
                            <div><strong>Profession &mdash;</strong> healthcare IT marketing</div>
                            <div><strong>Status &mdash;</strong> married with 2 boys and 2 girls, ages 16-8</div>
                            <div><strong>Time in your South Jordan, UT neighborhood &mdash;</strong> 7 years</div>
                        </div>

                            <div class="mar-top text-uppercase">
                            I live within <strong>2 miles</strong> of the home you are considering.
                            </div>
                    </div>
                    <div class ="col-md-4 faqs-getstarted">
                        <h4>How does it work? </h4>
                            <ol>
                                <li>Search for a neighborhood reference.</li> 
                                <li>Text to schedule a call. </li>
                                <li>Have the call. Ask all your questions. Get quick feedback.</li>
                                <li>Pay a flat fee with Venmo.  </li>
                                <li>Make your purchase decision</li>
                                <li>Satisfaction guaranteed. </li>
                            </ol>
                    </div>
                </div>
                <div class='row'>
                    <div class='col-sm-8'>
                        <h3>Neighborhood Expertise</h3>
                        <ul>
                            <li>We have experience with the local elementary, middle and high school with children in orchestra, art smart, Spanish dual immersion program, and choir. We know the administrators and teachers well as we made several accommodations for our kids over the years.</li> 
                            <li>My wife runs an art program at the school. She has been in leadership on the PTA. She is a stay-at-home care taker. We are active members of our church.</li>
                            <li>Part of very active neighborhood watch, crime prevention program. We host neighborhood bbqs.</li>
                            <li>Sourced instructors for children's participation in private piano and cello lessons, group dance, tumbling, parkour, and soccer.</li>
                        </ul>
                        <h3>Neighborhood Recreation Expertise</h3>
                        <ul>
                            <li>Running, casual mountain biking, hiking, swimming, skiing, RV camping, gardening, airport travelers</li>
                            <li>Attending Hale Center theater and SLC Real games.</li>
                            <li>Active attendees at local parades, fairs, festivals.</li>
                        </ul>
    
                        <h3>Commute Pattern</h3>
                        <ul>
                            <li>I daily drive 20 miles East across the valley using Bangerter, I-15 or I-215.</li> 
                            <li>I am also familiar with the north routes to the airport, downtown and south to Utah county. There are definite tricks to avoid traffic.</li>
                        </ul>
                        <h3>Real Estate Experience </h3>
                        <ul>
                            <li>Bought and sold 3 houses and rented 5 years over 18 years.</li>
                            <li>Bought first home in 2005 in Meridian, ID; Sold in 2007 with realtors.</li>
                            <li>Sourced commercial real estate deal in 2006 for large out-of-town investor.</li>
                            <li>Lost money on a speculative venture home in 2006.</li>
                            <li>Rented homes from 2007 – 2009.</li>
                            <li>Bought second home (short sale) in 2009 in Meridian, ID without realtor using Google satellite maps. Handled offer, interfaced with the bank and seller’s realtor and had heavy involvement with title closing; Sold in 2011 using flat fee realty.</li>
                            <li>Rented in 2011 in South Jordan, UT.</li>
                            <li>Drafted custom home plans. Scoured Utah county assessor’s buildable lots data plotting with Google Maps api; Shopped local market for 18 months looking at 60+ homes. Did extensive market research using goodschools.org, crime data and after driving hundreds of neighborhoods.</li>
                            <li>Derived offer based on appraisal approach to a custom comparable analysis. Bought in 2012 direct from seller.</li>
                        </ul>
                        <h3>Home Expertise/Projects</h3>
                            <ul>
                                <li>Overhauled section of landscape irrigation including valve boxes and drip line. Built above ground garden boxes.</li>
                                <li>Sprayed for spiders.</li>
                                <li>Removed hard water deposits from windows.</li>
                                <li>Installed attic insulation. Insulated garage door.</li>
                                <li>Excavated, sourced, and installed large rock RV/utility pad.</li>
                                <li>Sealed concrete driveway to prevent chipping.</li>
                                <li>Built a large 16x12 shed including electrical, siding, insulation, roofing, painting.</li>
                                <li>Stretched/steam cleaned carpets.</li>
                                <li>Configured in-home wired internet, cable and Synology back-up storage system. Installed surround sound system.</li>
                                <li>Sprayed interior trim paint.</li>
                            </ul>
                            <h3>Get a Reference</h3>
                            <div>
                            <ul className="step">
                                <li>Text 801.230.9223 to schedule</li>
                                <li>
                                <a href="http://venmo.com/kellerchch">Venmo $50</a> for a 30-minute call.
                                    
                                </li>
                                <li>
                                    Satisfaction guaranteed!
                                </li>
                            </ul>
                            </div>
                    </div>
                    <div class ="col-sm-4 faqs-why">
                        <h4>Why do I want a reference?</h4> 
                        <div>A neighborhood reference is an independent home owner who lives in the neighborhood you are targeting. He/she can provide insight into the ‘neighborhood personality’ something you can’t search on the internet. Employer’s call an applicant’s references. This is the smart way for home buyer’s to call a neighborhood reference prior to making a big home purchase.</div>

                        <h4 class="mar-top">But my realtor gives me this help. Do I need this?</h4>

                        <div>Neighborhood references are simply 3rd party confirmations of the biggest purchase most of us will make. We validate and confirm what you can only find from local people living in your new neighborhood. If you buy here, we will become neighbors in the literal sense of the word. Lifestyle is about more than a house and local references are the way to discover the real truth.</div>

                        <h4 class="second">What to ask?</h4> 
                        <ul>
                            <li>What is the personality of the neighborhood?</li> 
                            <li>What are the neighborhood strengths and weaknesses?</li>
                            <li>What do you wish you would have known prior to buying here?</li> 
                            <li>How have things changed over your time there?</li>
                        </ul>  

                        <h4 class="second">Why do home projects matter?</h4> 

                        <div>Perhaps not obvious now, every home has fixes to be done and every project requires local resources. The time and energy required to figure out who is reputable or where to get stuff to complete that work is huge.</div> 

                        <div>But that burden is greatly reduced when you start by learning from others who have done the same things. This information is valuable once you live in the home. Confirming your purchase criteria are being met in this location is objective #1 and we are here to help.</div>  

                        <h4 class="second">But what about Bias?</h4>
                        
                        <div>While bias cannot be entirely removed from someone living in a neighborhood, references will be honest and forthcoming showing you the roses and the thorns that exist anywhere you choose to live.</div> 

                    </div>
                </div>
                <div class="row satisfaction">
                    <div class="col-md-12">
                    <h3>Satisfaction Guaranteed</h3>
                        <div><strong>If you aren’t completely satisfied with the service we give, let us know. We’ll fix the problem or give you 100% of your money back.</strong></div> 

                    </div>
                </div>
            </div>

                /* Beginning of dynamic reference info              
                {this.props.order.orderResultsbyInformant[0]
                        ?<div>
                            <h4>Here are your inquiries:</h4>

                            {this.props.order.orderResultsbyInformant.map((inquiry) => {

                            return (
                                <div className="container">
                                <div className="order"> 
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Name:</dt>
                                        <dd>{inquiry.ordername}</dd>
                                    </dl>
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Address:</dt>
                                        <dd>{inquiry.address}</dd>
                                    </dl>
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Type:</dt>
                                        <dd> {inquiry.ordertype}</dd>
                                    </dl>
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Notes:</dt>
                                        <dd>{inquiry.ordernotes}</dd>
                                    </dl>
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Time Stamp:</dt>
                                        <dd>{inquiry.orderdatetime}</dd>
                                    </dl>
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Distance:</dt>
                                        <dd>{inquiry.distance}</dd>
                                    </dl>
                                    <dl className="dl-horizontal">
                                        <dt>Inquiry Status:</dt>
                                        <dd>{inquiry.orderresultstatus}
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            )
                            })
                            }
                        </div>
                        :   <div className="container">
                                <h4>You don't have any inquiries
                                </h4>
                                <Link to="/">
                                <button className="btn btn-primary">
                                    Search for a Buyer
                                </button>
                                </Link>
                            </div>
                } */
        )
    }
}

function mapStateToProps(state){
    const {user, form, order} = state
    return {user, form, order};
}

export default connect(mapStateToProps, {getOrderResultsbyInformant})(PrivateInformant)
