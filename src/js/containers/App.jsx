import React, { Component } from 'react';
import Orders from "../components/Orders.jsx";
import NotFound from "../components/NotFound.jsx";
import OrderDetail from "../components/OrderDetail.jsx";
import {fetchOrders} from "../actions/ordersActions.js";
import {fetchCustomers} from "../actions/customersActions.js";
import {fetchProducts} from "../actions/productsActions.js";
import { connect } from 'react-redux';

import { Route, Switch, Link} from 'react-router-dom';

class App extends Component {

    constructor(){
        super();
    }

    componentDidMount() {
        this.props.dispatch(fetchOrders());
        this.props.dispatch(fetchCustomers());
        this.props.dispatch(fetchProducts());
    }

    render(){
        const {orders, customers, products} = this.props;
        return(
        <section>
            <h1 className="heading"><Link to="/">Home</Link></h1>
            <h2>Huidige orders:</h2>
            <Switch>
                <Route path='/' exact render={() => <Orders orders={orders} customers={customers} products={products}/>} />

                <Route path='/order/:id' render={({ match }) => {
                    let id = match.params.id;
                    id -=1;
                    return orders[id]?<OrderDetail key={id} id={id} order={orders[id]} customers={customers} products={products}/>:<NotFound />
                }} />

                <Route component={NotFound}/>
            </Switch>
        </section>
        );
    }
}

const mapStateToProps = state => ({
    orders: state.orders.itemsOrders,
    customers: state.customers.itemsCustomers,
    products: state.products.itemsProducts
  });

export default connect(mapStateToProps)(App);