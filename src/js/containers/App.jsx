import React from "react";
import store from "../store/index.js";
import Orders from "../components/Orders.jsx";


const App = () => {
    console.log(store.getState());
    return(
        <Orders />
    )
}

export default App;