import {FETCH_ORDERS_SUCCESS, DELETE_ORDER, ADD_TO_ORDER} from '../actions/ordersActions.js';

const initialState = {
    itemsOrders: []
  };

  export default function ordersReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_ORDERS_SUCCESS:
        return {
          ...state,
          itemsOrders: action.payload.ORDERS
        }
        case DELETE_ORDER: 
          console.log(state.itemsOrders.filter((order) => order.id !== action.id));
          return state.itemsOrders.filter((order) => order.id !== action.id)
        case ADD_TO_ORDER:
          return state.itemsOrders.push(item);
      default:
        return state;
    }
  }



