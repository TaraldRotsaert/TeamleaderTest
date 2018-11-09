import {FETCH_ORDERS_BEGIN, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILURE} from '../actions/api/ordersActions.js';

const initialState = {
    itemsOrders: [],
    loading: false,
    error: null
  };

  export default function ordersReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_ORDERS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        }
      case FETCH_ORDERS_SUCCESS:
        return {
          ...state,
          loading: false,
          itemsOrders: action.payload.ORDERS
        }
      case FETCH_ORDERS_FAILURE:
        return {
          ...state,
          loading: true,
          error: action.payload.error,
          itemsOrders: []
        }
      default:
        return state;
    }
  }



