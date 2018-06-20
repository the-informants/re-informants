import React, {Component} from 'react';
import '../../App.css';
import GoogleMaps from './Map' 
import Search from './Search'
import SearchResults from './SearchResults'
import { addSearchCoordinates, searchAddress} from '../../ducks/reducers/search'

import StandAloneSearch from './StandAloneSearch'
import {connect} from 'react-redux'
import axios from 'axios';
import Geocode from 'react-geocode';


import { Link } from 'react-router-dom';


class GetStarted extends Component {
    constructor(props){
        super(props)
        this.state={
            informants: []
        }
    }
    searchAddress= () =>{
        Geocode.setApiKey("AIzaSyBWRUwhKeGWx_7qra1Mw4TUSjWhZBuqrq4")
        // console.log(this.props.form.MapSearch.values.searchvalue)
        Geocode.fromAddress(this.props.form.MapSearch.values.searchvalue).then(response=>{
            const {lat, lng} = response.results[0].geometry.location;
            this.props.addSearchCoordinates({lat, lng})

            this.props.searchAddress({lat, lng})
        }).catch(e=>console.log(e));
    }

    render (){

        const styles = this.styles();
        console.log("Props", this.props)

       
        return(
            <div className="getstarted-body">
                <div className="row container-fluid">
                    <div className="pageTitle col-md-12">
                        <h1>Your Local Neighborhood Informant</h1>
                    </div>
                    <div className="text-center row col-md-12">
                        <h2>Find people who can inform a real estate purchase</h2>
                    </div>
                    <div className="row, col-md-12 container">
                        <Search />
                    </div>
                        {/* <StandAloneSearch search={this.search}/> */}
                        <button onClick={()=>this.searchAddress()} className=" btn btn-primary btn-lg btn-block btn-map">Search</button>

                    <div className="row, col-md-6">
                        
                     <GoogleMaps
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        // markers={this.state.markers}
                        googleMapURL = {"https://maps.googleapis.com/maps/api/js?key=AIzaSyBWRUwhKeGWx_7qra1Mw4TUSjWhZBuqrq4"}
                        markers={this.props.search.informants}
                        loadingElement={<div style={{ height: `100%` }} />}
                        searchFunction={this.search}
                        center={{lat: this.props.search.searchLat, lng: this.props.search.searchLng}}
                        defaultCenter={{ lat: 41.00472, lng: -111.9051596 }}
                    />
                    
                        
                    </div>

                    <div className="row, col-md-6" style={styles.searchResults}>
                        <SearchResults/>
                    </div>
                </div>

                <div className="container row text-center">
                    <div className="container col-md-6">
                        <h2>Buyer information</h2>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
                    </div>
                    <div className="container col-md-6">
                        <h2>Informant information</h2>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
                    </div>

                </div>
            </div>
        )
    }
    styles = () => {
        return {
            searchResults: {
                backgroundColor: 'grey'
            },
            headerContainer: {
                backgroundImg: "https://wp.zillowstatic.com/trulia/wp-content/uploads/sites/1/2017/04/Home-Prices-HERO.jpg"
            }
        }
    }
}


function mapStateToProps(state){
    const {search, form} = state
    return {search, form}
}

export default connect(mapStateToProps,{addSearchCoordinates, searchAddress})(GetStarted)

