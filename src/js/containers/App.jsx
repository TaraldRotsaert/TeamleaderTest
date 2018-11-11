import React, { Component } from 'react';
import Orders from "../components/Orders.jsx";
import NotFound from "../components/NotFound.jsx";
import OrderDetail from "../components/OrderDetail.jsx";
import {fetchOrders} from "../actions/api/ordersActions.js";
import {fetchCustomers} from "../actions/api/customersActions.js";
import {fetchProducts} from "../actions/api/productsActions.js";
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
        orders.forEach(order => {
            customers.forEach(customer => {
                if(order.customerId === customer.id){
                    console.log(`match: id = ${customer.id}`);
                }
            })
        })
        return(
        <section>
            <h2>Huidige orders:</h2>
            <Switch>
                <Route path='/' exact render={() => <Orders orders={orders} customers={customers} products={products}/>} />

                <Route path='/order/:id' render={({ match }) => {
                    const id = match.params.id;
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