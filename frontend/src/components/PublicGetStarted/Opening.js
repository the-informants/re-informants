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
                                Confirm buying or renting decisions using local neighborhood references.
                            </div>
                            <div className="container-fluid">
                                <div className="row align-items-center justify-content-md-center mx-0">
                                    <div className="row col-md-5 justify-content-center align-items-center white-background rounded my-2 mx-0">
                                        <div className="d-flex col-12 col-lg-9 align-items-center justify-content-center px-0">
                                            {/* <Search mysubmit={this.searchAddress}/>         */}
                                            <Search  mysubmit={this.submitStayInformedInformation}/>        
                                        </div>
                                        <div className="col-12 col-lg-3 d-flex align-items-center justify-content-end px-0">
                                            
                                               <button onClick={()=>this.submitStayInformedInformation()} className="btn-main btn btn-block btn-lg btn-map">Submit</button>

                                        </div>
                                    </div>
                                </div>
                             </div>

                             <div className="text-center stay-informed px-3">
                                Get an invitation to join our platform as we expand.
                            </div>   

                        </div>
                </div>
                <div className="container-fluid marketing">
                    <div className="row headers">
                        <div className="col-lg-4">
                            <i className="fas fa-user-friends fa-5x"></i>
                            <h2 className="mar-top mar-bottom">References</h2>
                            <p>Many things can be discovered about your neighborhood using online tools, but the personality, and the life style can't. And that 'feel' is critical to making a good home choice. You are key to helping people make good decisions about homes in your neighborhood. Be their insider, their neighborhood reference with insight into living, working and recreating where you live. You simply give of your time to answer questions and you get paid for helping. Sign up to get notified when we expand.</p>
                            <Link to="/PublicReference">
                            <button className="btn btn-main">Learn More
                            </button>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <i className="fas fa-handshake fa-5x"></i>
                            <h2 className="mar-top mar-bottom">Buyers</h2>
                            <p>Buying today typically happens after we read reviews or get references, but such is not the typical case in real estate. We think there is a better way to get quick confirmations about the intangible, qualitative characteristics of a neighborhood that are best discovered by talking to real people who live in your target neighborhood. That is what REBANDS delivers. Real people advising on real decisions so you can buy or rent with confidence. </p>
                            <Link to="/PublicBuyer">
                            <button className="btn btn-main">Learn More
                            </button>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <i className="fas fa-home  fa-5x"></i>
                            <h2 className="mar-top mar-bottom">Sellers</h2>
                            <p>Sell your home in less time with less hassle to someone who is a good fit by providing neighborhood references who can give an arms length, independent perspective about your home and your neighborhood. The same approach exists today in job hiring. It is how good decisions are made and our platform makes it easy to invite your neighbors to become references. They will get paid and it costs you nothing. Sign up to got notified as we expand into your neighborhood.</p>
                            <Link to="/PublicSeller">
                            <button className="btn btn-main">Learn More
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
    
    