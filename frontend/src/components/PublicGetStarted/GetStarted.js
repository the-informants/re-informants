import React, {Component} from 'react';
import '../../App.css';
import GoogleMaps from './Map' 
import Search from './Search'
import { Link } from 'react-router-dom';

export default class GetStarted extends Component {


    render (){
        return(
            <div>
                <div className="PageTitle, row">
                    Get Started
                    <a href={"http://localhost:4000/auth"}>
                    <button >Login</button></a>


                </div>
                <div className="row, col-md-8">
                    <Search />

                    <GoogleMaps
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </div>




        )
    }
}
