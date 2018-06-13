import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React, {Component} from 'react';
import '../../App.css';

class GoogleMaps extends Component {
    render (){
        const markers = this.props.markers || []

        return(
        <div>
            <GoogleMap
              defaultZoom={14}
              defaultCenter={{ lat: 40.7608, lng: -111.8910 }}>
              {markers.map((marker, index) => (
                <Marker {...marker} />
              )
            )}
            </GoogleMap>         
          </div>
        )
    }
}

export default withGoogleMap(GoogleMaps)