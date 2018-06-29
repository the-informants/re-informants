import React, {Component} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../App.css';

import { Link } from 'react-router-dom';
import GoogleMaps from './Map' 
import Search from './Search'
import SearchResults from './SearchResults'
import { addSearchCoordinates, searchAddress} from '../../ducks/reducers/search'

import {connect} from 'react-redux'
import Geocode from 'react-geocode';




class Opening extends Component {
    constructor(props){
        super(props)
    }
    searchAddress= () =>{
        Geocode.setApiKey("AIzaSyBWRUwhKeGWx_7qra1Mw4TUSjWhZBuqrq4")
        console.log(111, this.props.form.MapSearch.values)
        Geocode.fromAddress(this.props.form.MapSearch.values.searchvalue).then(response=>{
            const {lat, lng} = response.results[0].geometry.location;
            this.props.addSearchCoordinates({lat, lng})

            this.props.searchAddress({lat, lng})
        }).catch(e=>console.log(e));
    }


    render (){
        var settings = {
            dots: false,
            fade: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: false,
            adaptiveHeight: true
        };
        return (
            <div>
                <div>
                    <Slider {...settings}>  
                        <div className="imgContainer sliderImgOne">
                            <div className="inputBox">
                                <Search/>
                                <Link to="/PublicGetStarted"><button onClick={()=>this.searchAddress()} className="btn btn-primary btn-lg">Search</button></Link>
                            </div>
                        </div>
                        <div className="imgContainer sliderImgTwo">
                            <div className="inputBox">
                                <Search/>
                                <Link to="/PublicGetStarted"><button onClick={()=>this.searchAddress()} className="btn btn-primary btn-lg">Search</button></Link>
                            </div>
                        </div>
                        <div className="imgContainer sliderImgThree">
                            <div className="inputBox">
                                <Search/>
                                <Link to="/PublicGetStarted"><button onClick={()=>this.searchAddress()} className="btn btn-primary btn-lg">Search</button></Link>
                            </div>                    
                        </div>   
                    </Slider>
                </div>
                <div className="container-fluid marketing">
                    <div className="row headers">
                        <div className="col-lg-4">
                            <i className="fas fa-user-friends fa-7x"></i>
                            <h2>Informant</h2>
                            <p>Help good people who are looking to buy a home in your neighborhood. Be their insider, tell them what you know about the schools, the community, the traffic flow, the neighbors, the churches and the recreation. And get paid for your time. It is easy to get started.</p>
                            <Link to="/PublicInformant">
                            <button className="btn btn-secondary">Learn How
                            </button>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <i className="fas fa-handshake fa-7x"></i>
                            <h2>Buyer</h2>
                            <p>enter some text here to look neat</p>
                            <button className="btn btn-secondary">Info: link to</button>
                        </div>
                        <div className="col-lg-4">
                            <i className="fas fa-home  fa-7x"></i>
                            <h2>Seller</h2>
                            <p>enter some text here to look neat</p>
                            <button className="btn btn-secondary">Info: link to</button>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
    }
    const styles = () => {
        return {
            searchInput: {
                backgroundColor: 'grey'
            }
        }
    }
    function mapStateToProps(state){
        const {search, form} = state
        return {search, form}
    }
    
    export default connect(mapStateToProps,{addSearchCoordinates, searchAddress})(Opening)
    
    