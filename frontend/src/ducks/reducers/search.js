import axios from 'axios'


const initialState = {
    searchValue: {},
    informants: [],
    newInformants: false,
    searchLat: null,
    searchLng: null,
    mapMoveLat: null,
    mapMoveLng: null,
    selectedInformantId: 0
}

const SEARCH_ADDRESS = 'SEARCH_ADDRESS'
const ADD_SEARCH_VALUE = 'ADD_SEARCH_VALUE'
const ADD_SEARCH_COORDINATES = "ADD_SEARCH_COORDINATES"
const ADD_MAP_MOVE_COORDINATES = "ADD_MAP_MOVE_COORDINATES"
const ADD_SELECTED_INFORMANT = "ADD_SELECTED_INFORMANT"
const NEW_INFORMANTS_FALSE = "NEW_INFORMANTS_FALSE"

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ADDRESS + '_FULFILLED':
            console.log("Informants", action.payload.data)
            return { ...state, informants: action.payload.data, newInformants: true}
        case ADD_SEARCH_VALUE:
            return {...state, searchValue: action.payload}
        case ADD_SEARCH_COORDINATES:
            return {...state, searchLat: action.payload.lat, searchLng: action.payload.lng, mapMoveLat: null, mapMoveLng:null, newInformants: false, selectedInformantId: 0}
        case ADD_MAP_MOVE_COORDINATES:
            return {...state, mapMoveLat: action.payload.lat, mapMoveLng: action.payload.lng, newInformants:false, selectedInformantId: 0}
        case ADD_SELECTED_INFORMANT:
            return {...state, selectedInformantId: action.payload}
        case NEW_INFORMANTS_FALSE:
            return {...state, newInformants: false}
        default:    
            return state;
    }
}

export function searchAddress(searchvalue) {
    return {
      type: SEARCH_ADDRESS,
      payload: axios.get(`/api/informants/search?lat=${searchvalue.lat}&lng=${searchvalue.lng}`)  
    }
}

export function addSearchLocation(searchValue){
    return {
        type: ADD_SEARCH_VALUE,
        payload: searchValue
    }
}
export function addSearchCoordinates(coordinates){
    return {
        type: ADD_SEARCH_COORDINATES,
        payload: coordinates
    }
}
export function mapMoveCoordinates(coordinates){
    return {
        type: ADD_MAP_MOVE_COORDINATES,
        payload: coordinates
    }
}
export function addSelectedInformant(id){
    return {
        type: ADD_SELECTED_INFORMANT,
        payload: id
    }
}
export function newInformantsFalse(){
    return {
        type: NEW_INFORMANTS_FALSE,
    }
}