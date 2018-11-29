import {FETCH_PRODUCTS_SUCCESS} from '../actions/productsActions.js';


const initialState = {
    products: [],
  };

  export default function productsReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: action.payload.PRODUCTS
        }
      default:
        return state;
    }
  }
