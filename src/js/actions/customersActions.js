export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';

export const fetchCustomers = () => {
    return (dispatch) => {
      return fetch('../../assets/data/customers.json')
        .then(r => r.json())
        .then(json => {
          dispatch(fetchCustomersSuccess(json));
          return json;
        })
    };
  }

  export const fetchCustomersSuccess = CUSTOMERS => ({
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: { CUSTOMERS }
  });
  