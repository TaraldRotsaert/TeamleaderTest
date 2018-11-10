import {FETCH_CUSTOMERS_BEGIN, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_FAILURE} from '../actions/api/customersActions.js';

const initialState = {
    itemsCustomers: [],
    loadingCustomers: false,
    errorCustomers: null
  };

  export default function customersReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_CUSTOMERS_BEGIN:
        return {
          ...state,
          loadingCustomers: true,
          errorCustomers: null
        }
      case FETCH_CUSTOMERS_SUCCESS:
        return {
          ...state,
          loadingCustomers: false,
          itemsCustomers: action.payload.CUSTOMERS
        }
      case FETCH_CUSTOMERS_FAILURE:
        return {
          ...state,
          loadingCustomers: true,
          errorCustomers: action.payload.errorCustomers,
          itemsCustomers: []
        }
      default:
        return state;
    }
  }