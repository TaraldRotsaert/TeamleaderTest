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
          state.orders.map((order, index) => {
            if(order.id === action.orderId) {
              if(order.items.length !== 0){
                order.items.map(item => {
                  if(item.productId !== action.productId){
                    state.orders[index].items.push(action.data);
                  }
                  
                  if(item.productId === action.productId){
                    item.quantity ++;
                  }
                })
              }
              if(order.items.length === 0){
                state.orders[index].items.push(action.data);
              }
            }
          })

          return{
            ...state,
            orders: [
              ...state.orders,
            ]
          }

        case DELETE_PRODUCT: 
          state.orders.map((order, index) => {
            if(order.id === action.orderId) {
              order.items.map((product, id) => {

                if(product.productId === action.productId){
                  product.quantity --;
                  if(product.quantity === 0) {
                    product.quantity = 0;
                    state.orders[index].items.splice(id, 1);
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



