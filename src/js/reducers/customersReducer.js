import {FETCH_CUSTOMERS_SUCCESS} from '../actions/customersActions.js';

const initialState = {
    customers: []
  };

  export default function customersReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_CUSTOMERS_SUCCESS:
        return {
          ...state,
          customers: action.payload.CUSTOMERS
        }
      default:
        return state;
    }
  }