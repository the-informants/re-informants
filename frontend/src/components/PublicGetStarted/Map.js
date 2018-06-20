/*global google*/
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import React, {Component} from 'react';
import '../../App.css';
import {connect} from 'react-redux';
import {mapMoveCoordinates, searchAddress, addSelectedInformant} from '../../ducks/reducers/search'
import mapMarker from '../../map-marker.svg'
import greenMarker from '../../greenMarker.svg'
import redMarker from '../../redMarker.svg'

class GoogleMaps extends Component {
  constructor(){
    super()
    this.state = {
      map: null,
      lng: null,
      lat: null
    }
  }
  mapMoved(){
    const position = (this.state.map.getCenter())
    const lat = position.lat();
    const lng = position.lng();
    
    this.props.mapMoveCoordinates({lat, lng})

    console.log('map Moved', lat, lng)
    this.props.searchAddress({lat, lng})
    
  }
  mapLoaded(map){
    if (this.state.map !=null)
      return
    
    this.setState({
      map: map
    })

  }
  handleClick = (informant)=>{
    this.props.addSelectedInformant(informant.informantid)
    // console.log("click", informant)
  }
  
    render (){
      const markers = this.props.markers.map((informant, i)=>{
        console.log(informant)
        const marker = {
          position: {
            lat: parseFloat(informant.lat),
            lng: parseFloat(informant.lng)
          }
        }
        if(informant.informantid===this.props.search.selectedInformantId){
          return <Marker onClick={()=>this.handleClick(informant)} icon={{url: greenMarker, scaledSize: {width: 40, height: 40}}} key={i}{...marker}/>
        } else {
          return <Marker onClick={()=>this.handleClick(informant)} icon={{url: mapMarker, scaledSize: {width: 40, height: 40}}} key={i}{...marker}/>
        }
      })
      
        return(
        <div>

            <GoogleMap
              ref={this.mapLoaded.bind(this)}
              onDragEnd = {()=>this.mapMoved()}
              defaultZoom={14}
              center={{lat: this.props.search.mapMoveLat||this.props.center.lat||this.props.defaultCenter.lat, lng: this.props.search.mapMoveLng||this.props.center.lng||this.props.defaultCenter.lng}}
              defaultCenter={{ lat: 41.00472, lng: -111.9051596 }}>
              {this.props.search.searchLat!==null && <Marker position={{lat:this.props.search.searchLat, lng: this.props.search.searchLng}} icon={{url: redMarker, scaledSize: {width: 40, height: 40}}}/>}              
              {markers}
              
             
            </GoogleMap>         
          </div>
        )
    }
}

function mapStateToProps(state){
  const {search, form} = state
  return {search, form}
}
export default connect(mapStateToProps,{mapMoveCoordinates, searchAddress, addSelectedInformant})(withScriptjs(withGoogleMap(GoogleMaps)))


// export default withGoogleMap(GoogleMaps)