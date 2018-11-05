let orders = [];
let products = [];
let customers = [];

const parseOrders = data => {
    data.forEach(order => {
        orders.push(order);
    })
    console.log(orders);
    orders.forEach(order => {
        //console.log(order);
    })
}

const parseProducts = data => {
    data.forEach(product => {
        products.push(product);
    })
}

const parseCustomers = data => {
    data.forEach(customer => {
        customers.push(customer);
    })
}

const initialState = {
    orders: orders,
    products: products,
    customers: customers
};

const rootReducer = (state = initialState, action) => state;

const init = () => {
    fetch('../../assets/data/orders.json')
        .then(r => r.json())
        .then(data => parseOrders(data));

    fetch('../../assets/data/products.json')
        .then(r => r.json())
        .then(data => parseProducts(data));

    fetch('../../assets/data/orders.json')
        .then(r => r.json())
        .then(data => parseCustomers(data));
}   

init();

export default rootReducer;