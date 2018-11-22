import {FETCH_CUSTOMERS_SUCCESS} from '../actions/api/customersActions.js';

const initialState = {
    itemsCustomers: []
  };

  export default function customersReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_CUSTOMERS_SUCCESS:
        return {
          ...state,
          itemsCustomers: action.payload.CUSTOMERS
        }
      default:
        return state;
    }
  }