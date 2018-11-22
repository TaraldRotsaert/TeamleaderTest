export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export const fetchProducts = () => {
    return (dispatch) => {
      return fetch('../../assets/data/products.json')
        .then(r => r.json())
        .then(json => {
          dispatch(fetchProductsSuccess(json));
          return json;
        })
    };
  }
  
  export const fetchProductsSuccess = PRODUCTS => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { PRODUCTS }
  });