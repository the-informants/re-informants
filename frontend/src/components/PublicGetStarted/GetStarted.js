import React, {Component} from 'react';
import '../../App.css';
import GoogleMaps from './Map' 
import Search from './Search'
import StandAloneSearch from './StandAloneSearch'
import {connect} from 'react-redux'
import axios from 'axios';
import Geocode from 'react-geocode';


class GetStarted extends Component {
    constructor(props){
        super(props)
        this.state={
            markers: [
                    {
                        location: {
                            lat:  '41.00472', 
                            lng: '-111.9051596'
                        }
                    },
                    {
                          location: {
                            lat:  '40.9309812', 
                            lng: '-111.8737504'
                        }
                    }
                ],
            informants: []
        }
    }
    searchAddress= () =>{
        Geocode.setApiKey("AIzaSyBWRUwhKeGWx_7qra1Mw4TUSjWhZBuqrq4")
        // console.log(this.props.form.MapSearch.values.searchvalue)
        Geocode.fromAddress(this.props.form.MapSearch.values.searchvalue).then(response=>{
            const {lat, lng} = response.results[0].geometry.location;
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
                <div className="PageTitle, row">
                    Get Started
                    <a href={"http://localhost:4000/auth"}>
                    <button >Login</button></a>
                </div>
                <div className="row, col-md-8">
                    <Search />
                    {/* <StandAloneSearch search={this.search}/> */}
                    <button onClick={()=>this.searchAddress()}>Search</button>

                    <GoogleMaps
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        // markers={this.state.markers}
                        markers={this.state.informants}
                        search={this.search}
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
export default connect(mapStateToProps,{})(GetStarted)
