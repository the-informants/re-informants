import React, {Component} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'Image' from './../../img';

// import '../../App.css';

// import ReactDom from 'react-dom';
// import {Carousel} from 'react-responsive-carousel';


export default class Opening extends Component {
    render (){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <Slider {...settings}>
            <div> 
                <img src={"http://villageinburnsharbor.com/wp-content/uploads/2010/08/Village-web-page1-1024x513.jpg"} alt=""/>  
            </div>
            <div>
                <img src="https://fthmb.tqn.com/N5b7q_f2fVPPqyMsjB_Rcrpeyeo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/african-american-neighbors-greeting-each-other-over-fence-137924297-5a9863920e23d900370c683e.jpg"/>
            </div>
            <div>
                <img src="https://c3.dq1.me/uploads/article_block/17169/article_featured_image/3571/thumb_user-1570343-2017-06-16-09-43-18.jpg" />
          </div>
          </Slider>
        );
      }
    }

            // <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
            //         <div>
            //             <img src="http://villageinburnsharbor.com/wp-content/uploads/2010/08/Village-web-page1-1024x513.jpg" />
            //             <p className="legend">Legend 1</p>
            //         </div>
            //         <div>
            //             <img src="https://fthmb.tqn.com/N5b7q_f2fVPPqyMsjB_Rcrpeyeo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/african-american-neighbors-greeting-each-other-over-fence-137924297-5a9863920e23d900370c683e.jpg" />
            //             <p className="legend">Legend 2</p>
            //         </div>
            //         <div>
            //             <img src="https://c3.dq1.me/uploads/article_block/17169/article_featured_image/3571/thumb_user-1570343-2017-06-16-09-43-18.jpg" />
            //             <p className="legend">Legend 3</p>
            //         </div>
            // </Carousel>

            // <div className="container">
            //     <div className="row">
            //         <div className="col-sm-12">
            //             <div id="my-slider" className="carousel slide" data-ride="carousel"> 
            //                 <ol class="carousel-indicators">
            //                     <li data-target="#my-slider" data-slide-to="0" className="active"></li>
            //                     <li data-target="#my-slider" data-slide-to="1"></li>
            //                     <li data-target="#my-slider" data-slide-to="2"></li>
            //                 </ol>
            //                 <div className="carousel-inner" role="listbox">
            //                     <div className="item active">
            //                         <img src="http://villageinburnsharbor.com/wp-content/uploads/2010/08/Village-web-page1-1024x513.jpg" alt="neighborhood"/>
            //                         <div className="carousel-caption">
            //                             <h1></h1>
            //                         </div>
            //                     </div>
            //                     <div className="item">
            //                         <img src="https://fthmb.tqn.com/N5b7q_f2fVPPqyMsjB_Rcrpeyeo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/african-american-neighbors-greeting-each-other-over-fence-137924297-5a9863920e23d900370c683e.jpg" alt=""/>
            //                         <div className="carousel-caption">
            //                             <h1></h1>
            //                         </div>
            //                     </div>
            //                     <div className="item">
            //                         <img src="https://c3.dq1.me/uploads/article_block/17169/article_featured_image/3571/thumb_user-1570343-2017-06-16-09-43-18.jpg" alt=""/>
            //                         <div className="carousel-caption">
            //                             <h1></h1>
            //                         </div>
            //                     </div>  
            //                 </div>
            //                 <a className="left carousel-contol" href="#my-slider" role="button" data-slide="prev">
            //                     <span className="gylphicon glyphicon-chevron-left" aria-hidden="true"></span>
            //                     <span className="sr-only">Previous</span>
            //                 </a>
            //                 <a className="right carousel-contol" href="#my-slider" role="button" data-slide="prev">
            //                     <span className="gylphicon glyphicon-chevron-right" aria-hidden="true"></span>
            //                     <span className="sr-only">Previous</span>
            //                 </a>
            //             </div>

            //         </div>
            //     </div>

            // </div>


            // <div>
            //     <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            //         <div className="carousel-inner">
            //             <div className="carousel-item active">
            //                 <img className="d-block w-100" src="https://wp.zillowstatic.com/trulia/wp-content/uploads/sites/1/2017/04/Home-Prices-HERO.jpg" alt="First slide"/>
            //             </div>
            //         </div>

            //         <div className="carousel-item">
            //             <img className="d-block w-100" src="" alt="Second slide"/>
            //         </div>
            //         <div className="carousel-item">
            //             <img className="d-block w-100" src="..." alt="Third slide"/>
            //         </div>
            //     </div>

            //     <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            //         <span className="sr-only">Previous</span>
            //     </a>
            //     <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
            //         <span className="sr-only">Next</span>
            //     </a>
            // </div>
        
//         )
//     }
// }
