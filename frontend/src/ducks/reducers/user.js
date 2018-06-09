import axios from 'axios';

const initialState = {
    informantInfo: {
        firstname: "",
        lastname: "",
        informantnotes: "",
        phone: "",
        address1: "",
        address2: "",
        city:"",
        state: "",
        zip:"",
        knowcommunityflag: "",
        knowreligionflag: "",
        knowcrimeflag: "", 
        knowschoolflag: "",
        availableflag: "" 
    },
    buyerInfo: {

    },
    informants: []
}
const SUBMIT_INFORMANT_INFO = "SUBMIT_INFORMANT_INFO"
const SUBMIT_BUYER_INFO = "SUBMIT_BUYER_INFO"
const GET_INFORMANT_INFO = "GET_INFORMANT_INFO"
const GET_BUYER_INFO = "GET_BUYER_INFO"
const GET_INFORMANTS = "GET_INFORMANTS"

export default (state = initialState, action) =>{
    switch (action.type) {
        case SUBMIT_INFORMANT_INFO + '_FULFILLED': 
            console.log("informnat info payload",action.payload.data[0])
            return Object.assign({}, state, {informantInfo: action.payload.data[0]}) 
        case SUBMIT_BUYER_INFO + '_FULFILLED': 
            console.log("buyer info payload",action.payload.data[0])
            return Object.assign({}, state, {buyerInfo: action.payload.data[0]})   
        case GET_INFORMANT_INFO + '_FULFILLED':
            console.log("get informant payload", action.payload.data[0])
            return Object.assign({}, state, {informantInfo: action.payload.data[0]}) 
        case GET_BUYER_INFO + '_FULFILLED':
            console.log("get buyer payload", action.payload.data[0])
            return Object.assign({}, state, {buyerInfo: action.payload.data[0]}) 
        case GET_INFORMANTS + '_FULFILLED':
            console.log("get INFORMANTS", action.payload.data[0])
            return Object.assign({}, state, {informants: action.payload.data}) 
        default:
            return state
    }
}

export function submitInformantInfo(informantInfo){
    return {
        type: SUBMIT_INFORMANT_INFO,
        payload: axios.post('/api/informant', informantInfo)
    }
}
export function getInformantInfo(){
    return {
        type: GET_INFORMANT_INFO,
        payload: axios.get('/api/informant')
    }
}
export function getInformants(){
    return {
        type: GET_INFORMANTS,
        payload: axios.get('/api/informants')
    }
}
export function submitBuyerInfo(buyerInfo){
    return {
        type: SUBMIT_BUYER_INFO,
        payload: axios.post('/api/buyer', buyerInfo)
    }
}
export function getBuyerInfo(){
    return {
        type: GET_BUYER_INFO,
        payload: axios.get('/api/buyer')
    }
}


