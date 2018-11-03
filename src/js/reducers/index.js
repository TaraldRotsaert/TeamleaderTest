const orders = 
    fetch('../../assets/data/orders.json')
        .then(r => r.json());

//console.log(orders);


const initialState = {
    orders: orders
}

const rootReducer = (state = initialState, action) => state;

export default rootReducer;