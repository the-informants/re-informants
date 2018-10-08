import React, {Component} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../App.css';
import { Link, Redirect } from 'react-router-dom';
import Search from './Search'
import { addSearchCoordinates, searchAddress, addSearchLocation} from '../../ducks/reducers/search'
import {connect} from 'react-redux'
import geocoder from 'geocoder';
import Footer from './../Shared/Footer';
import {submitStayInformedInfo} from '../../ducks/reducers/user';



class Opening extends Component {
    constructor(props){
        super(props)
        this.state = {
            goToGetStarted: false,
            searched: false
        }
    }
    searchAddress= () =>{
        if(this.props.form.MapSearch){
            this.props.addSearchLocation(this.props.form.MapSearch.values.searchvalue);
            // console.log(this.props.form.MapSearch.values.searchvalue)
            geocoder.geocode(this.props.form.MapSearch.values.searchvalue, (err,response)=>{
                
                const {lat, lng} = response.results[0].geometry.location;
                    this.props.addSearchCoordinates({lat, lng})
                    this.props.searchAddress({lat, lng})
                    this.setState({searched: true})
            })
        }
    }
    submitStayInformedInformation = ()=>{
        const stayInormedInfo = {...this.props.form.StayInformedForm.values}
        console.log(stayInormedInfo);
        this.props.submitStayInformedInfo(stayInormedInfo);
    }
    componentDidUpdate(prevProps){
        console.log(prevProps.search.searchLat, this.props.search.searchLat)
        if(prevProps.search.searchLat !== this.props.search.searchLat){
            this.setState({goToGetStarted: true})
        }
    }

    render (){
      

        if(this.state.searched){
            return  (
                <Redirect to={"/PublicGetStarted"}/> 
                // We are on a mission to help home buyers make better decisions and have begun working on a limited pilot providing our neighborhood reference service. If you would like to get an invitation to join our platform as we expand, please give us your information and we will send you an invitation very soon. We promise to protect your email and to communicate smartly.
            )
        }        
        return (
            <div>
                <div>
                        <div className="imgContainer sliderImgOne justify-content-center align-items-center d-flex flex-column">
                            <div className="text-center mission-statement pb-3 px-3">
                                Changing the way you house hunt by connecting you with neighborhood references.
                            </div>
                            <div className="text-center stay-informed pb-2 px-3">
                                Get an invitation to join our platform as we grow.
                            </div>
                            <div className="container-fluid">
                                <div className="row align-items-center justify-content-md-center mx-0">
                                    <div className="row col-md-5 justify-content-center align-items-center white-background rounded my-2 mx-0">
                                        <div className="d-flex col-12 col-lg-9 align-items-center justify-content-center px-0">
                                            {/* <Search mysubmit={this.searchAddress}/>         */}
                                            <Search  mysubmit={this.submitStayInformedInformation}/>        
                                        </div>
                                        <div className="col-12 col-lg-3 d-flex align-items-center justify-content-end px-0">
                                            
                                               <button onClick={()=>this.submitStayInformedInformation()} className="btn-primary btn btn-block btn-lg btn-map">Submit</button>

                                        </div>
                                    </div>
                                </div>
                             </div>
                             {/* <div className="text-center stay-informed px-3">
                                Get an invitation to join our platform as we expand.
                            </div>    */}

                        </div>
                </div>
                <div className="container-fluid marketing">
                    <div className="row headers">
                        <div className="col-lg-4">
                            <i className="fas fa-user-friends fa-7x"></i>
                            <h2>Reference</h2>
                            <p>Help good people who are looking to buy a home in your neighborhood. Be their insider, tell them what you know about the schools, the community, the traffic flow, the neighbors, the churches and the recreation. And get paid for your time. It is easy to get started.</p>
                            <Link to="/PublicReference">
                            <button className="btn btn-secondary">Start Sharing
                            </button>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <i className="fas fa-handshake fa-7x"></i>
                            <h2>Buyer</h2>
                            <p>In every other purchase we use reviews, but where is the neighborhood review when buying a home? Insider information is hard to come by. REInformants makes that possible. Search for neighborhood insiders and buy with confidence. </p>
                            <Link to="/PublicBuyer">
                            <button className="btn btn-secondary">Find RE Informants
                            </button>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <i className="fas fa-home  fa-7x"></i>
                            <h2>Seller</h2>
                            <p>Help your buyers find information about your neighborhood. All of us have used employment references. Why not provide a home reference. Our platform makes it easy to invite your neighbors to become real estate informants. Share that in your listing.</p>
                            <Link to="/PublicSeller">
                            <button className="btn btn-secondary">Improve Your Listing
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
    }

    function mapStateToProps(state){
        const {search, form, user} = state
        return {search, form, user}
    }
    
    export default connect(mapStateToProps,{addSearchCoordinates, searchAddress, addSearchLocation, submitStayInformedInfo})(Opening)
    
    