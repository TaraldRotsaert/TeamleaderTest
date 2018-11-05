import React from "react";
import Order from "./Order.jsx";

const Orders = ({orders}) => {
    return(
        <div className="orders">
            {
                orders.map(order => (
                    <p>test</p>
                ))
            }
            <Order orders={orders}/>
       </div>
    )
}

export default Orders;