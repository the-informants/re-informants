import React, {Component} from 'react';
import '../../App.css';
import GoogleMaps from './Map' 
import Search from './Search'
import { addSearchCoordinates} from '../../ducks/reducers/search'

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

            this.search({lat, lng})
        }).catch(e=>console.log(e));
    }

    search = (searchvalue)=>{
        console.log("SearchValue",searchvalue)
        axios.get(`/api/informants/search?lat=${searchvalue.lat}&lng=${searchvalue.lng}`).then(informants=>{
            console.log("informants", informants)
            this.setState({
                informants: informants.data
            })
        }).catch(err=>{console.error(err)})
    }
    render (){
        console.log("Props", this.props)
       
        return(
            <div>

                <div className="PageTitle, row, col-md-12">
    
                </div>

                <div className="row, col-md-8">
                    <Search />
                    {/* <StandAloneSearch search={this.search}/> */}
                    <button onClick={()=>this.searchAddress()} className="btn btn-primary btn-lg btn-block btn-map">Search</button>

                    <GoogleMaps
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        // markers={this.state.markers}
                        markers={this.state.informants}
                        searchFunction={this.search}
                        center={{lat: this.props.search.searchLat, lng: this.props.search.searchLng}}
                        defaultCenter={{ lat: 41.00472, lng: -111.9051596 }}
                    />
                </div>
            </div>




        )
    }
}
function mapStateToProps(state){
    const {search, form} = state
    return {search, form}
}

export default connect(mapStateToProps,{addSearchCoordinates})(GetStarted)

