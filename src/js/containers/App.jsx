import React from "react";
import store from "../store/index.js";
import Orders from "../components/Orders.jsx";


const App = () => {
    const orders = store.getState();
    console.log(orders)
    return(
        <Orders />
    )
}

export default App;