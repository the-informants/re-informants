import React, {Component} from 'react';
import {connect} from 'react-redux';


class SearchResults extends Component {
    // handleScrollToElement(){
    //     const scrollNode = ReactDOM.findDOMNode(this.refs.)
    // }
    // handleClick = ()=>{
    //     console.log("click", this)
    //     this[`informant21`].scrollIntoView({behavior: "smooth"})
    // }
    componentDidUpdate(prevProps){
        console.log('new props')
        if(prevProps.search.selectedInformantId !== this.props.search.selectedInformantId){
            this[`informant${this.props.search.selectedInformantId}`].scrollIntoView({behavior: "smooth"})
        }
        
     }
    render(){
        return(
            <div style={{height: 60, overflow: "auto", overflowX: "hidden"}}> 
                {this.props.search.informants.map((informant, index)=>{
                    console.log("informant mapping", informant )
                    return(
                        <div id={`informant${informant.informantid}`}style={{height: 30}}key={index} onClick={()=>this.handleClick()} ref={(el)=>{this[`informant${informant.informantid}`] = el}}>
                            {`${informant.firstname} ${informant.lastname}`} 
                            {informant.distance}
                            
                        </div>
                    )
                })}
                SearchResults
            </div>
        )
    }
}
function mapStateToProps(state){
    const {search} = state;
    return {search}
}

export default connect(mapStateToProps, {})(SearchResults)
