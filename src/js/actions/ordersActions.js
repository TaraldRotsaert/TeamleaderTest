export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const DELETE_ORDER = 'DELETE_ORDER';
export const ADD_TO_ORDER = 'ADD_TO_ORDER';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const fetchOrders = () => {
  return (dispatch) => {
    return fetch('../../assets/data/orders.json')
      .then(r => r.json())
      .then(json => {
        dispatch(fetchOrdersSuccess(json));
        return json;
      })
  };
}

export const fetchOrdersSuccess = ORDERS => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: { ORDERS }
});

export const updateOrder = ORDER => ({
  type: UPDATE_ORDER,
  payload: {ORDER}
})

export const AddToOrder = item => ({
  type: ADD_TO_ORDER,
  payload: item
})

export const DeleteProduct = product => ({
  type: DELETE_PRODUCT,
  payload: product
})

export const DeleteOrder = order => ({
  type: DELETE_ORDER,
  name: order
})