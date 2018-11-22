import {FETCH_PRODUCTS_SUCCESS} from '../actions/productsActions.js';


const initialState = {
    itemsProducts: [],
  };

  export default function productsReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          itemsProducts: action.payload.PRODUCTS
        }
      default:
        return state;
    }
  }
