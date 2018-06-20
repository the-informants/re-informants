import axios from 'axios';

const initialState = {
    orders: [],
    newOrderInfo: {},
    cart: []
}

const GET_ORDERS = "GET_ORDERS";
const SUBMIT_ORDER_INFO = "SUBMIT_ORDER_INFO"
const ADD_TO_CART = "ADD_TO_CART"


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
            return Object.assign({}, state, {newOrderInfo: action.payload.data[0]})
        case ADD_TO_CART:
            let newCart = state.cart
            newCart.push(action.payload)
            return {...state, cart:newCart}
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