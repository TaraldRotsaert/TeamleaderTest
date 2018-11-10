import {FETCH_ORDERS_BEGIN, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILURE} from '../actions/api/ordersActions.js';

const initialState = {
    itemsOrders: [],
    loadingOrders: false,
    errorOrders: null
  };

  export default function ordersReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_ORDERS_BEGIN:
        return {
          ...state,
          loadingOrders: true,
          error: null
        }
      case FETCH_ORDERS_SUCCESS:
        return {
          ...state,
          loadingOrders: false,
          itemsOrders: action.payload.ORDERS
        }
      case FETCH_ORDERS_FAILURE:
        return {
          ...state,
          loadingOrders: true,
          errorOrders: action.payload.errorOrders,
          itemsOrders: []
        }
      default:
        return state;
    }
  }



