import axios from 'axios';

const initialState = {
    orders: [],
    orderResultsbyInformant: [],
    orderResultsbyBuyer: [],
    newOrderInfo: {},
    cart: [],
    orderResult: {}

}

const GET_ORDERS = "GET_ORDERS";
const SUBMIT_ORDER_INFO = "SUBMIT_ORDER_INFO"
const ADD_TO_CART = "ADD_TO_CART"
const CREATE_ORDER_RESULTS = "CREATE_ORDER_RESULTS"
const GET_ORDERRESULTSBYINFORMANT = 'GET_ORDERRESULTSBYINFORMANT'
const GET_ORDERRESULTSBYBUYER = 'GET_ORDERRESULTSBYBUYER'


export default (state = initialState, action) =>{
    switch (action.type) {  
        case GET_ORDERS + '_FULFILLED':
            if (!action.payload.data){
                return state
            }
            console.log("get orderst payload", action.payload.data)
            return Object.assign({}, state, {orders: action.payload.data}) 

        case SUBMIT_ORDER_INFO + '_FULFILLED': 
            console.log("new order payload",action.payload.data[0])
            return Object.assign({}, state, {newOrderInfo: action.payload.data[0], orderResult: {}})
        case ADD_TO_CART:
            let newCart = state.cart
            newCart.push(action.payload)
            return {...state, cart:newCart}
        
        case GET_ORDERRESULTSBYINFORMANT +  '_FULFILLED':
            if (!action.payload.data){
                return state
            }
            console.log("get orderresults by informant payload", action.payload.data)
            return Object.assign({}, state, {orderResultsbyInformant: action.payload.data}) 

        case GET_ORDERRESULTSBYBUYER +  '_FULFILLED':
            if (!action.payload.data){
                return state
            }
            console.log("get orderresults by buyer payload", action.payload.data)
            return Object.assign({}, state, {orderResultsbyBuyer: action.payload.data}) 

        case CREATE_ORDER_RESULTS + '_FULFILLED':
            console.log("created order payload", action.payload.data[0])
            return Object.assign({}, state, {orderResult: action.payload.data[0]})
            
        default:
            return state
    }
}


export function getOrders(){
    return {
        type: GET_ORDERS,
        payload: axios.get('/api/orders')
    }
}

export function submitOrderInfo(newOrderInfo){
    return {
        type: SUBMIT_ORDER_INFO,
        payload: axios.post('/api/order', newOrderInfo)
    }
}
export function addToCart(informantId){
    return {
        type: ADD_TO_CART,
        payload: informantId
    }
}
export function createOrderResults(orderResult){
    return {
        type: CREATE_ORDER_RESULTS,
        payload: axios.post('/api/orderResults', orderResult)
    }
}

export function getOrderResultsbyInformant(){
    return {
        type: GET_ORDERRESULTSBYINFORMANT,
        payload: axios.get('/api/orderResultsbyInformant')
    }
}

export function getOrderResultsbyBuyer(){
    return {
        type: GET_ORDERRESULTSBYBUYER,
        payload: axios.get('/api/orderResultsbybuyer')
    }
}
