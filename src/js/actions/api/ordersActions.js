export const FETCH_ORDERS_BEGIN   = 'FETCH_ORDERS_BEGIN';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';

export const fetchORDERSBegin = () => ({
    type: FETCH_ORDERS_BEGIN
  });
  
  export const fetchORDERSSuccess = ORDERS => ({
    type: FETCH_ORDERS_SUCCESS,
    payload: { ORDERS }
  });
  
  export const fetchORDERSFailure = error => ({
    type: FETCH_ORDERS_FAILURE,
    payload: { error }
  });