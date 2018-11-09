import React from "react";

const Order = ({order}) => {
    return(
        <div className="order">
            <h2>Order number : {order.id}</h2>
        </div>
    )
}

export default Order;