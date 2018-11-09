export const FETCH_CUSTOMERS_BEGIN   = 'FETCH_CUSTOMERS_BEGIN';
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMERS_FAILURE = 'FETCH_CUSTOMERS_FAILURE';

export const fetchCustomers = () => {
    return (dispatch) => {
      dispatch(fetchCustomersBegin());
      return fetch('../../assets/data/customers.json')
        .then(r => r.json())
        .then(json => {
          dispatch(fetchCustomersSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchCustomersFailure(error)));
    };
  }

  export const fetchCustomersBegin = () => ({
    type: FETCH_CUSTOMERS_BEGIN
  });
  
  export const fetchCustomersSuccess = CUSTOMERS => {
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: { CUSTOMERS }
  });
  
  export const fetchCustomersFailure = error => ({
    type: FETCH_CUSTOMERS_FAILURE,
    payload: { error }
  });