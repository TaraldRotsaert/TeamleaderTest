export const FETCH_ORDERS_BEGIN   = 'FETCH_ORDERS_BEGIN';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';

export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(fetchOrdersBegin());
    return fetch('../../assets/data/orders.json')
      .then(r => r.json())
      .then(json => {
        dispatch(fetchOrdersSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchOrdersFailure(error)));
  };
}

export const fetchOrdersBegin = () => ({
    type: FETCH_ORDERS_BEGIN
  });
  
  export const fetchOrdersSuccess = ORDERS => ({
    type: FETCH_ORDERS_SUCCESS,
    payload: { ORDERS }
  });
  
  export const fetchOrdersFailure = error => ({
    type: FETCH_ORDERS_FAILURE,
    payload: { error }
  });