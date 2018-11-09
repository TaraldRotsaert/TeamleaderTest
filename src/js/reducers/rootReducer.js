import { combineReducers } from "redux";
import orders from './ordersReducer.js';
import customers from './customersReducer.js';

export default combineReducers({
    orders,
    customers
  });