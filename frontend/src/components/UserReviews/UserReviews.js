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
            numberOfRatings: 0
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
    }
    
    render(){     
   
        const styles = this.styles();
        return (
            <div className="container PageTitle">
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
                
                <div className="container review rounded" style={styles.submitReviewContainer}>
                    <h4>Leave a Review</h4>
                    {/* <div style={styles.starRatingContainer}> */}
                        <StarRatings
                            rating={this.state.rating}
                            changeRating={this.changeRating}    
                            numberOfStars = {5}
                            starEmptyColor="#FFFFFF"  
                            starHoverColor="#FFBD00"
                            starRatedColor="#FFBD00"
                            starDimension="45px"              
                        />
                    {/* </div> */}
                
                    <textarea className="form-control"/* style={styles.textarea} */ placeholder={'Write your review here'}type="text" value={this.state.addedReview} onChange={this.handleReviewChange}></textarea>
                    <div style={styles.buttonContainer}>
                        <button className="btn btn-outline-dark" /* style={styles.submitButton} className={"button"}  */onClick={()=>this.createReview()}>Submit</button>
                    </div>
                </div>
                {this.state.reviews.map((review, index)=>{
                    console.log("REVEIW", review)
                    return (
                        <div className="container"  key={review.informantreviewid}>
                            <div className="order">
                                <div /* className = "container" */ style={styles.userContainer}>
                                    
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
            leaveReview: {
                display: "flex",
                width: "80%",
                fontWeight: "bold",
                margin: "10px",
            },
            starRatingContainer: {
                display: "flex",
                width: "80%"
            },
            container: {
                display: "flex",
                flexDirection: "Column",
                alignItems: "Center"
            },
            header: {
                backgroundColor: "#163D57",
                width: "100%",
                height: "40px",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                paddingLeft: "40%",
                // paddingLeft: wideView ? (window.innerWidth-700): "30%",
                // color: isMobile ? 'red' : 'black',
                color: "white",
                boxShadow: "0px 2px 7px #C9C9C9",
            },
            messageSpan: {
                fontSize: "12px"
            },
            textarea: {
                width: "80%",
                height: "50px",
                padding: "10px",
                borderRadius: "5px",
                marginTop: "10px"
            },
            buttonContainer:{
                display: 'flex',
                justifyContent: "flex-end",
                width: "80%"
            },
            submitButton: {
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
                marginTop: "20px",
                backgroundColor: "#163D57",
                border: "1px solid #163D57",
                color: "white",
                padding: "5px",
            },
            reviewer: {
                marginLeft: "8px",
                color: "black"
            },
            reviewContainer: {
                marginBottom: "5px",
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                padding: "20px",
                width: "60%",
                boxShadow: "0px 1px 5px #C9C9C9",
                boxSizing: "border-box",
                borderRadius: "5px"
            },
            userContainer: {
                display: "flex",
                alignItems: "center",
            },
            messageIcon: {
                fontSize: "20px",
                color: "white",
                
            },
            iconContainer: {
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "20px"
            }
            
        }
    }
}
function mapStateToProps(state){
    const {user} = state;
    return {user}   
}


export default connect(mapStateToProps, {})(UserReviews);

