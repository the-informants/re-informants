import React, {Component} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'Image' from './../../img';
import Search from './Search'

import '../../App.css';

// import ReactDom from 'react-dom';
// import {Carousel} from 'react-responsive-carousel';


export default class Opening extends Component {
    render (){
        var settings = {
            dots: true,
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
            <Slider {...settings}>  
                <div className="imgContainer sliderImgOne"> 

                </div>
                <div className="imgContainer sliderImgTwo" >

                </div>
                <div className="imgContainer sliderImgThree">

                </div>   
            </Slider>
        );
      }
    }