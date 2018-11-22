export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';

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