import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart, createOrderResults} from '../../ducks/reducers/order'
import {newInformantsFalse} from '../../ducks/reducers/search'
import {Link} from 'react-router-dom'
import StarRatings from 'react-star-ratings';


class SearchResults extends Component {
    
    componentDidUpdate(prevProps){
        if(prevProps.search.selectedInformantId !== this.props.search.selectedInformantId && this.props.search.selectedInformantId!==0){
            this[`informant${this.props.search.selectedInformantId}`].scrollIntoView({behavior: "smooth"})
        }else if (this.props.search.newInformants===true && prevProps.order.cart.length ===this.props.order.cart.length){
            this.searchBeginning.scrollIntoView({behavior: "smooth"})
            this.props.newInformantsFalse()
        }        
     }
    

    selectInformant=(informantid, distance)=>{
        // const {openOrderForm} = props;

        const orderResult = {informantid, distance, buyerid: this.props.user.buyerInfo.buyerid }
        this.props.createOrderResults(orderResult);
        this.props.openOrderForm();
    } 
    render(){
        return(

            <div className="search-results-container" id="searchResultOutterBox"> 

                <div /* style={{ float:"left", clear: "both" }} */
                        ref={(el) => { this.searchBeginning = el; }}>
                </div>
                {this.props.search.informants.map((informant, index)=>{
                    console.log("informant mapping", informant )
                    return(

                        <div className="container-fluid result" id='eachsearchresult' key={index}>
                            <div className="row" id="searchResultFirstRow">
                                <div className="col-md-12">
                                    <h5 className="name" id={`informant${informant.informantid}`}       style={{height: 30}}
                                        key={index}  ref={(el)=>{this[`informant${informant.informantid}`] = el}}
                                    >
                                        <Link to= {`/UserReviews/${informant.informantid}`}>
                                        {`${informant.firstname} ${informant.lastname}`} 
                                        </Link>
                                    </h5>
                                </div>

                            </div>
                            <div className="row" id="searchResultSecondRow">
{/* first column photo */}
                                <div className="col-sm-5 image"  >
                                    <div className="star" > 
                                        <StarRatings 
                                            rating={informant.avgstarrating === null? 0: parseInt(informant.avgstarrating,10)}
                                            starRatedColor="#163D57"
                                            numberOfStars={5}
                                            starDimension="15px"
                                            starSpacing = "2px"
                                        />
                                        {Math.round(informant.avgstarrating* 10)/10}
                                    </div>
                                    <i class="fas fa-user fa-5x image ml-3 mb-3"></i>
                                    <button className="btn btn-default ml-2 " onClick={()=>this.selectInformant(informant.informantid, informant.distance)}>
                                            Select
                                    </button>

                                </div>
{/* second column */}
                                <div className="col-sm-7" >
                                    <div className="row">
                                        <div className="col-md-12">
                                            <dl className="dl-horizontal">
                                                <dt>Years in Neigborhood&ndash;</dt> 
                                                <dd>{informant.years}</dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12"> 
                                            <dl className="dl-horizontal">
                                                <dt>Miles Away&ndash;</dt>
                                                <dd>{Math.round(informant.distance* 10)/10}</dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <dl className="dl-horizontal">
                                                <dt>Knows About</dt>
                                                <dd>
                                                    {informant.knowcommunityflag === "true" && <span>Community, </span>}
                                                    {informant.knowcrimeflag === "true" && <span>Crime, </span>}
                                                    {informant.knowreligionflag === "true" && <span>Religion, </span>}
                                                    {informant.knowschoolflag === "true" && <span>School, </span>}
                                                </dd>
                                            </dl>
                                            <span>{informant.informantnotes}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    )
                })}
            </div>
        )
    }
}
function mapStateToProps(state){
    const {search, order, user} = state;
    return {search, order, user}
}

export default connect(mapStateToProps, {addToCart, newInformantsFalse, createOrderResults})(SearchResults)
