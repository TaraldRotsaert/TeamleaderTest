import {FETCH_ORDERS_SUCCESS, DELETE_ORDER, ADD_TO_ORDER, DELETE_PRODUCT} from '../actions/ordersActions.js';

const initialState = {
    itemsOrders: []
  };

  export default function ordersReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_ORDERS_SUCCESS:
        return {
          ...state,
          itemsOrders: action.payload.ORDERS
        }
        case DELETE_ORDER: 
          return {
            ...state,
            itemsOrders: state.itemsOrders.filter((order) => order.id !== action.id)
          }
        case ADD_TO_ORDER:
        console.log(action.orderId);
        console.log(action.data);
          return{
            ...state,
            itemsOrders: {
              ...state.itemsOrders,
              items: state.itemsOrders[0].items.push(action.data)
            }
          }
        case DELETE_PRODUCT: 
        state.itemsOrders.map(item => {
          if(item.id === action.orderId) {
            item.items.map(product => {
              if(product.productId === action.productId){
                product.quantity -=1;
                console.log(product.quantity);
              }
            })
          }
        })
        return {
          ...state,
          itemsOrders: state.itemsOrders.map(item => {
            if(item.id === action.orderId) {
              item.items.map(product => {
                return{
                  ...product,
                  product: product.quantity -=1
                }
              })
            }
          })
        }
      default:
        return state;
    }
  }



