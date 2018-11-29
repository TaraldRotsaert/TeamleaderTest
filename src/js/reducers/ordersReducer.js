import {FETCH_ORDERS_SUCCESS, DELETE_ORDER, ADD_TO_ORDER, DELETE_PRODUCT} from '../actions/ordersActions.js';

const initialState = {
    orders: []
  };

  export default function ordersReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_ORDERS_SUCCESS:
        return {
          ...state,
          orders: action.payload.ORDERS
        }
        case DELETE_ORDER: 
          return {
            ...state,
            orders: state.orders.filter((order) => order.id !== action.id)
          }
          
        case ADD_TO_ORDER:
          state.orders.map(order => {
            if(order.id === action.orderId) {
              order.items.map(item => {
                if(item.productId === action.productId){
                  item.quantity ++;
                }
                if(item.productId !== action.productId) {
                  state.orders[action.orderId -=1].items.push(action.data);
                }
              })
            }
          })
          return{
            ...state,
            orders: [
              ...state.orders,
            ]
          }
        case DELETE_PRODUCT: 
        state.orders.map(item => {
          if(item.id === action.orderId) {
            item.items.map((product, index) => {
              if(product.productId === action.productId){
                product.quantity -=1;
                if(product.quantity === 0) {
                  product.quantity = 0;
                  state.orders[action.orderId -= 1].items.splice(index);
                }
              }
            })
          }
        })
        return{
          ...state,
          orders: [
            ...state.orders,
          ]
        }
      default:
        return state;
    }
  }



