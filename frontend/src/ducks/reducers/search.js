import axios from 'axios'


const initialState = {
    searchValue: {},
    informants: []
}

const SEARCH = 'SEARCH'
const ADD_SEARCH_VALUE = 'ADD_SEARCH_VALUE'

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH + '_FULFILLED':
            const markers = [
            {
                location: {
                    lat:  41.00472, 
                    lng: -111.9051596
                }
            },
            {
                  location: {
                    lat:  40.9309812, 
                    lng: -111.8737504
                }
            }
        ]
            return { ...state, informants: markers }
        case ADD_SEARCH_VALUE:
            // console.log(action.payload)
            // const {lat, lng} = action.payload["0"].geometry.locations
            // console.log(lat,lng)
            return {...state, searchValue: action.payload}
        default:    
            return state;
    }
}

export function search(searchvalue) {
    return {
      type: SEARCH,
      payload: axios.get(`/api/informants/search?lat=${searchvalue.lat}&lng=${searchvalue.lng}`)
    //   payload: axios.get(`/api/search?searchvalue=${searchvalue}`)  
    }
}
export function addSearchLocation(searchValue){
    return {
        type: ADD_SEARCH_VALUE,
        payload: searchValue
    }
}
    //Create a second function that pushes the current search value to the redux store. 