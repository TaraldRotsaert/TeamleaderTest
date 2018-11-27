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
        //console.log(state.itemsOrders[action.orderId -= 1]);
          return{
            ...state,
            itemsOrders: {
              ...state.itemsOrders,
              items: state.itemsOrders[action.orderId -= 1].items.push(action.data)
            }
          }
        case DELETE_PRODUCT: 
        /*
        console.log(state);
        state.itemsOrders.map(item => {
          if(item.id === action.orderId) {
            item.items.map(product => {
              if(product.productId === action.productId){
                product.quantity -=1;
                console.log(product.quantity);
              }
            })
          }
        })*/
        return {
          ...state,
          
        }
      default:
        return state;
    }
  }



