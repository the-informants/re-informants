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
                <Slider {...settings}>  
                    <div className="imgContainer sliderImgOne">
                        <div id="inputBox">
                            <Search id="inputBox"/>
                            <Link to="/PublicGetStarted"><button onClick={()=>this.searchAddress()} className="btn btn-primary btn-lg btn-block btn-map">Search</button></Link>
                        </div>
                    </div>
                    <div className="imgContainer sliderImgTwo">
                        <div id="inputBox">
                            <Search/>
                            <Link to="/PublicGetStarted"><button onClick={()=>this.searchAddress()} className="btn btn-primary btn-lg btn-block btn-map">Search</button></Link>
                        </div>
                    </div>
                    <div className="imgContainer sliderImgThree">
                        <div id="inputBox">
                            <Search/>
                            <Link to="/PublicGetStarted"><button onClick={()=>this.searchAddress()} className="btn btn-primary btn-lg btn-block btn-map">Search</button></Link>
                        </div>                    
                    </div>   
                </Slider>
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
    
    