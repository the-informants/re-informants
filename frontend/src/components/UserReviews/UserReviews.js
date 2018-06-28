import React, {Component} from 'react'
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom';


 class UserReviews extends Component {
    constructor(props){
        super(props)
        this.state = {
            reviews: [],
            addedReview: "",
            rating: 0,
            firstname: null,
            lastname: null,
            avgrating: null,
            numberOfRatings: 0,
            disabled: true,
        }

    }
    componentDidMount(){
        // this.getName(this.props.match.params.id);
        this.getReviews(this.props.match.params.id);
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
            this.setState({reviews: response.data.reviews, 
                firstname: response.data.name[0].firstname,
                lastname: response.data.name[0].lastname,
                avgrating:parseInt( response.data.rating[0].avg ,10),
                numberOfRatings:response.data.rating[0].count
            })
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
    
    render(){  
        const styles = this.styles();
        return (
            <div className="container">
                <h1>{`${this.state.firstname} ${this.state.lastname}`}</h1>
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
    const {user} = state;
    return {user}   
}


export default connect(mapStateToProps, {})(UserReviews);

