import React from "react";
import store from "../store/index.js";
import Orders from "../components/Orders.jsx";

import { Route, Switch, Link} from 'react-router-dom';

const App = () => {
    const orders = store.getState().orders;
    console.log(orders);
    orders.forEach(order => console.log(order));
    return(
        <section>
            <h2>Huidige orders:</h2>
            <Orders orders={store.getState().orders}/>
        </section>
    )
}

export default App;