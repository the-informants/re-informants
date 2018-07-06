import React, {Component} from 'react'
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import {connect} from 'react-redux'
import {createOrderResults} from '../../ducks/reducers/order'
import OrderFormValidation from '../PublicGetStarted/OrderFormValidation';
import {getOrders, submitOrderInfo, getOrderResultsbyBuyer} from '../../ducks/reducers/order';
import Modal from 'react-modal';


 class UserReviews extends Component {
    constructor(props){
        super(props)
        this.state = {
            reviews: [],
            addedReview: "",
            rating: 0,
            firstname: "",
            lastname: "",
            avgrating: null,
            numberOfRatings: 0,
            disabled: true,

            informantInfo: "",

            selectedInformant:[],
            createOrderFormIsOpen: false

        }
    }
    componentDidMount(){
        // this.getName(this.props.match.params.id);
        this.getReviews(this.props.match.params.id);
        this.setState({selectedInformant: this.props.search.informants.filter(informant => informant.informantid==this.props.match.params.id)})
    }
    componentDidUpdate(prevProps){
        if (prevProps.match.params.id !== this.props.match.params.id){
            this.getReviews(this.props.match.params.id);
            // this.getName(this.props.match.params.id);
        }
    }
    getReviews=(id)=>{
        axios.get(`/api/informant/review/${id}`).then(response=>{
            console.log("reviews", response.data);
            if(response.data.rating[0]){
                this.setState({reviews: response.data.reviews, 
                    firstname: response.data.informantinfo[0].firstname,
                    lastname: response.data.informantinfo[0].lastname,
                    avgrating:parseInt( response.data.rating[0].avg ,10),
                    numberOfRatings:response.data.rating[0].count,
                    informantInfo: response.data.informantinfo[0]
                })
            } else {
                this.setState({reviews: response.data.reviews, 
                    firstname: response.data.informantinfo[0].firstname,
                    lastname: response.data.informantinfo[0].lastname,
                    informantInfo: response.data.informantinfo[0]
                })
            }
        })
    }
    handleReviewChange = (e)=>{
        this.setState({addedReview: e.target.value});
        console.log("REview",e.target.value)
        if(e.target.value==="" || this.state.rating ===0){
            this.setState({disabled: true})
        }else {
            this.setState({disabled: false})
        }
    }
    createReview = () =>{
        axios.post(`/api/informant/review`, 
        {reviewcomment: this.state.addedReview,
         starrating: this.state.rating, 
         informantid: this.props.match.params.id,
         buyerid: this.props.user.buyerInfo.buyerid
        })
        .then(response=>{
            let reviews = this.state.reviews
            reviews.unshift(response.data[0])
            console.log("RESPONSE", response)
            this.getReviews(this.props.match.params.id);
            // this.setState({reviews: reviews, addedReview: ""})
        });
    }    
    changeRating = (newRating)=>{
        this.setState({rating: newRating})
        if(newRating === 0 || this.state.addedReview ===""){
            this.setState({disabled: true})
        }else {
            this.setState({disabled: false})
        }
    }
    
    selectInformant=(informantid, distance)=>{
        // const {openOrderForm} = props;

        const orderResult = {informantid, distance, buyerid: this.props.user.buyerInfo.buyerid }
        this.props.createOrderResults(orderResult);
        this.openCreateOrderForm();
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

    render(){  
        const styles = this.styles();

        const {city, state, knowcommunityflag, knowcrimeflag, knowschoolflag, knowreligionflag, years, informantsincedatetime, informantnotes} = this.state.informantInfo
        console.log(city, state, knowcommunityflag, knowcrimeflag, knowschoolflag, knowreligionflag, years, informantsincedatetime, informantnotes)
        
            

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
        return (
            <div className="container">
                <h1>{`${this.state.firstname} ${this.state.lastname}  - ${city}, ${state}`}
         
                <button className="btn btn-default ml-3 " onClick={()=>this.selectInformant(this.state.selectedInformant[0].informantid, this.state.selectedInformant[0].distance)}>
                                            Select
                                    </button>
                </h1>

                <Modal
                        isOpen={this.state.createOrderFormIsOpen}
                        onRequestClose={this.closeCreateOrderForm}
                        style={orderformStyles}
                        >
                                <OrderFormValidation cancel={this.closeCreateOrderForm}
                                mysubmit={this.submitOrderInformation}  
                                />
                </Modal>

                Avg Rating
                <StarRatings
                            rating={this.state.avgrating === null? 0:this.state.avgrating}
                            starRatedColor="#FFBD00"
                            starEmptyColor="#FFFFFF"
                            numberOfStars={5}
                            starDimension="25px"
                            starSpacing = "2px"            
                        />
                {`${this.state.numberOfRatings} Reviews`}
                <div className="my-4 informant-info">
                    <div className="my-2">
                        <dt>Informant Since</dt>
                        <dd> {
                            informantsincedatetime && informantsincedatetime.slice(5,7) }

                            -
                            {
                            informantsincedatetime && informantsincedatetime.slice(0,4) 
                            }
                        </dd>
                    </div>
                    <div className="my-2">
                        <dt>Years in Neighborhood:</dt>
                        <dd> {years}</dd>
                    </div>
                    <div className="my-2">
                        <dt>Knows About</dt>
                        <dd>
                            {knowcommunityflag === "true" && <span>Community, </span>}
                            {knowcrimeflag === "true" && <span>Crime, </span>}
                            {knowreligionflag === "true" && <span>Religion, </span>}
                            {knowschoolflag === "true" && <span>School, </span>}
                        </dd>
                    </div>
                    {/* <dl className="dl-horizontal">
                        <dt>:</dt>
                        <dd>{order.address}</dd>
                    </dl>
                    <dl className="dl-horizontal">
                        <dt>Order Type:</dt>
                        <dd>{order.ordertype}</dd>
                    </dl>
                    <dl className="dl-horizontal">
                        <dt>Order Notes:</dt>
                        <dd>{order.ordernotes}</dd>
                    </dl>
                    <dl className="dl-horizontal">
                        <dt>Order Timestamp:</dt>
                        <dd>{order.orderdatetime}</dd>
                    </dl> */}
                </div>
                
                <div className="container place-review rounded" style={styles.submitReviewContainer}>
                    <h4>Leave a Review</h4>
                        <StarRatings
                            rating={this.state.rating}
                            changeRating={this.changeRating}    
                            numberOfStars = {5}
                            starEmptyColor="#FFFFFF"  
                            starHoverColor="#FFBD00"
                            starRatedColor="#FFBD00"
                            starDimension="45px"              
                        />
                   
                
                    <textarea className="form-control" placeholder={'Write your review here'}type="text" value={this.state.addedReview} onChange={this.handleReviewChange}></textarea>
                    <div style={styles.buttonContainer}>
                        <button className="btn btn-primary" disabled={this.state.disabled} onClick={()=>this.createReview()}>Submit</button>
                    </div>
                </div>
                {this.state.reviews.map((review, index)=>{
                    return (
                        <div className="container"  key={review.informantreviewid}>
                            <div className="review">
                                <div>
                                    <i style={{fontSize: "30px"}}className="fas fa-user-circle"></i>
                                    
                                        <span style={styles.reviewer}>
                                            {`${review.firstname} ${review.lastname}`}
                                        </span> 
                                </div>
                                <StarRatings 
                                    rating={review.starrating === null? 0: review.starrating}
                                    starRatedColor="#FFBD00"
                                    starEmptyColor="#FFFFFF"
                                    numberOfStars={5}
                                    starDimension="15px"
                                    starSpacing = "2px"
                                />
                                {/* <span>
                                    {`${review.date_recorded === null? 0: review.date_recorded.substring(0,12)}`}
                                </span> */}
                                <p>
                                {review.reviewcomment}
                                </p>
                            </div> 
                        </div> 
                    )
                })}
            </div>
        )
    }
  
    styles = ()=>{
        return {
            submitReviewContainer: {
                boxShadow: "0px 1px 6px #9a9ca0", 
            },
            buttonContainer:{
                display: 'flex',
                justifyContent: "flex-end",
            },
            reviewer: {
                marginLeft: "8px",
                color: "black"
            },  
            page: {
                backgroundColor: "white"
            }          
        }
    }
}
function mapStateToProps(state){
    return {
        user: state.user,
        search: state.search,
        order: state.order,
        form: state.form
    }   
}



export default connect(mapStateToProps, {createOrderResults,getOrders, submitOrderInfo, getOrderResultsbyBuyer})(UserReviews);


