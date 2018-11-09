import React from "react";
import Order from "./Order.jsx";

const Orders = ({orders}) => {
        orders.forEach(order => {
            console.log(order.total);
        })
        return(
            <ul className="order">
                {
                    orders.map((order) => (
                        <Order key={order.id} order={order}/>
                    ))
                }
            </ul>
        )
}

export default Orders;