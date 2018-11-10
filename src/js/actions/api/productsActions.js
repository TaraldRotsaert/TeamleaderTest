export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProducts = () => {
    return (dispatch) => {
      dispatch(fetchProductsBegin());
      return fetch('../../assets/data/products.json')
        .then(r => r.json())
        .then(json => {
          dispatch(fetchProductsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }

  export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
  });
  
  export const fetchProductsSuccess = PRODUCTS => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { PRODUCTS }
  });
  
  export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
  });