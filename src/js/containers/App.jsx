import React, { Component } from 'react';
import store from "../store/index.js";
import Orders from "../components/Orders.jsx";
import NotFound from "../components/NotFound.jsx";

import { Route, Switch, Link} from 'react-router-dom';

class App extends Component {

    constructor(){
        super();
        const orders = store.getState().orders;
        console.log(orders);
    }

    render(){
        return(
        <section>
            <h2>Huidige orders:</h2>
            <Switch>
                <Route path='/' exact render={() => <Orders orders={store.getState().orders}/>} />
            </Switch>
        </section>
        );
    }
}

export default App;