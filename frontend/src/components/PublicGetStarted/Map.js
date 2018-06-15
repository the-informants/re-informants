import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React, {Component} from 'react';
import '../../App.css';

class GoogleMaps extends Component {
  constructor(){
    super()
    this.state = {
      map: null
    }
  }
  mapMoved(){
    const position = (this.state.map.getCenter())
    const lat = position.lat();
    const lng = position.lng();
    console.log('map Moved', lat)
    this.props.search({lat, lng})
    
  }
  mapLoaded(map){
    if (this.state.map !=null)
      return
    
    this.setState({
      map: map
    })

  }
  handleClick = (informant)=>{
    console.log("click", informant)
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
        return <Marker onClick={()=>this.handleClick(informant)} key={i}{...marker}/>
      })
      console.log("props", this.props.markers)
        return(
        <div>
            <GoogleMap
              ref={this.mapLoaded.bind(this)}
              onDragEnd = {()=>this.mapMoved()}
              defaultZoom={14}
              defaultCenter={{ lat: 41.00472, lng: -111.9051596 }}>
              {markers}
              
             
            </GoogleMap>         
          </div>
        )
    }
}

export default withGoogleMap(GoogleMaps)