import axios from 'axios';

const initialState = {
    orders: [],
    newOrderInfo: {}
}

const GET_ORDERS = "GET_ORDERS";
const SUBMIT_ORDER_INFO = "SUBMIT_ORDER_INFO"


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