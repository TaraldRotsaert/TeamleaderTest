import { combineReducers } from "redux";
import orders from './ordersReducer.js';
import customers from './customersReducer.js';
import products from './productsReducer.js'

export default combineReducers({
    orders,
    customers,
    products
  });