import React, { Component } from 'react';
import Orders from "../components/Orders.jsx";
import NotFound from "../components/NotFound.jsx";
import {fetchOrders} from "../actions/api/ordersActions.js";
//import {fetchCustomers} from "../actions/api/customersActions.js";
import { connect } from 'react-redux';

import { Route, Switch, Link} from 'react-router-dom';

class App extends Component {

    constructor(){
        super();
    }

    componentDidMount() {
        this.props.dispatch(fetchOrders());
        //this.props.dispatch(fetchCustomers());
    }

    render(){
        const {error, loading, orders} = this.props;
        console.log(this.props);
        return(
        <section>
            <h2>Huidige orders:</h2>
            <Switch>
                <Route path='/' exact render={() => <Orders orders={orders}/>} />
            </Switch>
        </section>
        );
    }
}

const mapStateToProps = state => ({
    orders: state.orders.itemsOrders,
    loading: state.orders.loading,
    error: state.orders.error
  });

export default connect(mapStateToProps)(App);