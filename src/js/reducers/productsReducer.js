import {FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE} from '../actions/api/productsActions.js';


const initialState = {
    itemsProducts: [],
    loadingProducts: false,
    errorProducts: null
  };

  export default function productsReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PRODUCTS_BEGIN:
        return {
          ...state,
          loadingProducts: true,
          errorProducts: null
        }
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loadingProducts: false,
          itemsProducts: action.payload.PRODUCTS
        }
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loadingProducts: true,
          errorProducts: action.payload.errorProducts,
          itemsProducts: []
        }
      default:
        return state;
    }
  }
