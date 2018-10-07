import React, {Component} from 'react';
import '../../App.css';
import GoogleMaps from './Map' 
import Modal from 'react-modal';
import Search from './Search'
import SearchResults from './SearchResults'
import { addSearchCoordinates, searchAddress, addSearchLocation} from '../../ducks/reducers/search'
import {connect} from 'react-redux'
import geocoder from 'geocoder';
import OrderFormValidation from './OrderFormValidation';
import {getOrders, submitOrderInfo, getOrderResultsbyBuyer} from '../../ducks/reducers/order';
import {submitStayInformedInfo} from '../../ducks/reducers/user';


class GetStarted extends Component {
    constructor(props){
        super(props)
        this.state={
            informants: [],
            createOrderFormIsOpen: false
        }
    }

    searchAddress= () =>{
        if(this.props.form.MapSearch.values){
            this.props.addSearchLocation(this.props.form.MapSearch.values.searchvalue);
            // console.log(this.props.form.MapSearch.values.searchvalue)
            geocoder.geocode(this.props.form.MapSearch.values.searchvalue, (err,response)=>{
                console.log("GEOCODE", response)
                const {lat, lng} = response.results[0].geometry.location;
                    this.props.addSearchCoordinates({lat, lng})
                    this.props.searchAddress({lat, lng})
            })
        }
    }
    submitStayInformedInformation = ()=>{
        const stayInormedInfo = {...this.props.form.StayInformedForm.values}
        console.log(stayInormedInfo);
        this.props.submitStayInformedInfo(stayInormedInfo);
    }

    openCreateOrderForm=()=>{
        this.setState({createOrderFormIsOpen: true});
        }
    
    closeCreateOrderForm=()=>{
        this.setState({createOrderFormIsOpen: false});
        }
    
    submitOrderInformation = ()=>{
            const {searchLat, searchLng, searchValue, mapMoveLat, mapMoveLng} = this.props.search;
            const {buyerid, orderresultsid} = this.props.order.orderResult;
            console.log('orderresultid is this one',orderresultsid)
            const newOrderInfo = Object.assign({}, this.props.form.OrderForm.values, {buyerid: buyerid, address: searchValue, lat: mapMoveLat||searchLat, lng: mapMoveLng||searchLng, orderresultid: orderresultsid})
            console.log(newOrderInfo)
            this.props.submitOrderInfo(newOrderInfo)
            this.props.getOrderResultsbyBuyer()
            this.setState({createOrderFormIsOpen: false});
            this.props.getOrders();
        }


    render (){

        const styles = this.styles();
       
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
            // <div className="getstarted-body">
                <div className="container-fluid">
                    
                    <div className="row align-items-center justify-content-md-center mx-0">
                        <div className="row col-md-5 justify-content-center align-items-center white-background rounded my-2 mx-0">
                            <div className="d-flex col-12 col-lg-9 align-items-center justify-content-center px-0">
                                {/* <Search  mysubmit={this.searchAddress}/>         */}
                                <Search  mysubmit={this.submitStayInformedInformation}/>        
                            </div>
                            <div className="col-12 col-lg-3 d-flex align-items-center justify-content-end px-0">
                                    {/* <button onClick={()=>this.searchAddress()} className="btn-primary btn btn-block btn-lg btn-map">Search</button> */}
                                    <button onClick={()=>this.submitStayInformedInformation()} className="btn-primary btn btn-block btn-lg btn-map">Submit</button>
                            </div>
                        </div>


                    </div>
                

                    <div className="row">
                        <div className="col-12 col-md-6 get-started-container">
                            
                        <GoogleMaps
                            containerElement={<div className="google-maps-container" />}
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

                        <div className="col-12 col-md-6 get-started-container" style={styles.searchResults}>
                            <SearchResults openOrderForm={this.openCreateOrderForm}/>
                        </div>
                    </div>

                    <Modal
                        isOpen={this.state.createOrderFormIsOpen}
                        onRequestClose={this.closeCreateOrderForm}
                        style={orderformStyles}
                        >
                                <OrderFormValidation cancel={this.closeCreateOrderForm}
                                mysubmit={this.submitOrderInformation}  
                                />
                    </Modal>
                </div>
        )
    }
    styles = () => {
        return {
            searchResults: {
                backgroundColor: '#F5F5F5'
            },
            headerContainer: {
                backgroundImg: "https://wp.zillowstatic.com/trulia/wp-content/uploads/sites/1/2017/04/Home-Prices-HERO.jpg"
            }
        }
    }
}


function mapStateToProps(state){
    const {search, form, order} = state
    return {search, form, order}
}

export default connect(mapStateToProps,{addSearchCoordinates, searchAddress, addSearchLocation, submitOrderInfo, getOrders, getOrderResultsbyBuyer, submitStayInformedInfo})(GetStarted)

