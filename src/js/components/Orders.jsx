import React from "react";
import Order from "./Order.jsx";

import {fetchOrders} from "../actions/api/ordersActions.js";

class Orders extends React.Component {

    componentDidMount() {
        //this.props.fetchOrders();
      }

    render(){
       // const { error, loading, products } = this.props;
        return(
            <div className="orders">
                <p>test</p>
            </div>
        )
    }
}

export default Orders;