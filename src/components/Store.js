// import {phoneData} from './FirebaseConnect';

var redux = require('redux');

const phoneInitialState = {
    product: {}
}
const allReducer = (state = phoneInitialState, action) => {
    switch (action.type) {
        case "GET_DATA_DETAIL":
            return {...state,product:action.productDetail}
        case "GET_AMOUT":
            return {...state,amout:action.amout1}
        default:
            return state
    }
}

var store = redux.createStore(allReducer);

export default store;
