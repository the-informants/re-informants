import React, {Component} from 'react';
import '../../App.css';
import GoogleMaps from './Map' 
import Modal from 'react-modal';
import Search from './Search'
import SearchResults from './SearchResults'
import { addSearchCoordinates, searchAddress} from '../../ducks/reducers/search'

import StandAloneSearch from './StandAloneSearch'
import {connect} from 'react-redux'
import axios from 'axios';
import Geocode from 'react-geocode';
import {addSearchLocation} from '../../ducks/reducers/search'

import { Link } from 'react-router-dom';

import OrderFormValidation from './OrderFormValidation';
import {submitOrderInfo} from '../../ducks/reducers/order';

class GetStarted extends Component {
    constructor(props){
        super(props)
        this.state={
            informants: [],
            createOrderFormIsOpen: false
        }
    }

    searchAddress= () =>{
        Geocode.setApiKey("AIzaSyBWRUwhKeGWx_7qra1Mw4TUSjWhZBuqrq4")
        this.props.addSearchLocation(this.props.form.MapSearch.values.searchvalue);
        // console.log(this.props.form.MapSearch.values.searchvalue)
        Geocode.fromAddress(this.props.form.MapSearch.values.searchvalue).then(response=>{
            const {lat, lng} = response.results[0].geometry.location;
            this.props.addSearchCoordinates({lat, lng})

            this.props.searchAddress({lat, lng})
        }).catch(e=>console.log(e));
    }


    openCreateOrderForm=()=>{
        this.setState({createOrderFormIsOpen: true});
        }
    
    closeCreateOrderForm=()=>{
        this.setState({createOrderFormIsOpen: false});
        }
    
    submitOrderInformation = ()=>{
            const newOrderInfo = Object.assign({}, this.props.form.OrderForm.values, {buyerid: this.props.user.buyerInfo.buyerid})
            console.log(newOrderInfo)
            this.props.submitOrderInfo(newOrderInfo)
            this.setState({createOrderFormIsOpen: false});
            this.props.getOrders();
        }

        
    // submitInformantInformation = () =>{
    //     console.log("props", this.props)
    //     Geocode.setApiKey("AIzaSyBWRUwhKeGWx_7qra1Mw4TUSjWhZBuqrq4")
    //     const {address1, city, state, zip} = this.props.form.InformantForm.values
    //     console.log("address", address1, city, state, zip)
    //     Geocode.fromAddress(`${address1} ${city} ${state} ${zip}`).then(response=>{
    //         const {lat, lng} = response.results[0].geometry.location;
    //         console.log(lat,lng)
    //         console.log("props", this.props)
    //         let informantInfo = Object.assign({}, this.props.form.InformantForm.values, {lat: lat, lng: lng} )
    //         this.props.submitInformantInfo(informantInfo);
    //         this.setState({informantFormIsOpen: false});
    //     }).catch(e=>console.log(e));
    // }

    render (){

        const styles = this.styles();
        console.log("Props", this.props)
       
        const orderformStyles = {
            content : {
              width                 : '50%',
              height                : '60%',
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
            //   marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)'
            }
          };
       
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

                    <Modal
                        isOpen={this.state.createOrderFormIsOpen}
                        // onRequestClose={this.closeBuyerForm}
                        style={orderformStyles}
                        >
                                <OrderFormValidation cancel={this.closeCreateOrderForm}
                                mysubmit={this.submitOrderInformation}  
                                />
                    </Modal>
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

export default connect(mapStateToProps,{addSearchCoordinates, searchAddress, addSearchLocation, submitOrderInfo})(GetStarted)

