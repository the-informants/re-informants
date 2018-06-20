import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../ducks/reducers/order'
import {newInformantsFalse} from '../../ducks/reducers/search'


class SearchResults extends Component {
    
    componentDidUpdate(prevProps){
        if(prevProps.search.selectedInformantId !== this.props.search.selectedInformantId && this.props.search.selectedInformantId!==0){
            this[`informant${this.props.search.selectedInformantId}`].scrollIntoView({behavior: "smooth"})
        }else if (this.props.search.newInformants===true && prevProps.order.cart.length ===this.props.order.cart.length){
            this.searchBeginning.scrollIntoView({behavior: "smooth"})
            this.props.newInformantsFalse()
        }        
     }
    render(){
        return(
            <div style={{height: 60, overflow: "auto", overflowX: "hidden"}}> 
                <div /* style={{ float:"left", clear: "both" }} */
                        ref={(el) => { this.searchBeginning = el; }}>
                </div>
                {this.props.search.informants.map((informant, index)=>{
                    console.log("informant mapping", informant )
                    return(
                        <div id={`informant${informant.informantid}`}style={{height: 30}}key={index}  ref={(el)=>{this[`informant${informant.informantid}`] = el}}>
                            {`${informant.firstname} ${informant.lastname}`} 

                            <label>Miles Away</label>
                            {Math.round(informant.distance* 10)/10}
                            <label>Knows about</label>
                            {informant.knowcommunityflag === "true" && <span>Community</span>}
                            {informant.knowcrimeflag === "true" && <span>Crime</span>}
                            {informant.knowreligionflag === "true" && <span>Religion</span>}
                            {informant.knowschoolflag === "true" && <span>School</span>}
                            <span>{informant.informantnotes}</span>

                            <button onClick={()=>this.props.addToCart(informant.informantid)}>Select</button>
                            
                            
                        </div>
                    )
                })}
            </div>
        )
    }
}
function mapStateToProps(state){
    const {search, order} = state;
    return {search, order}
}

export default connect(mapStateToProps, {addToCart, newInformantsFalse})(SearchResults)
