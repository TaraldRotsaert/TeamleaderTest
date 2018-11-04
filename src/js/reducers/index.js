const fetchData = 
    fetch('../../assets/data/orders.json')
        .then(r => r.json())
        .then(data => parse(data));


//console.log(orders);

let orders = [];

const parse = data => {
    orders.push(data);
}

const initialState = orders;

const rootReducer = (state = initialState, action) => state;

export default rootReducer;