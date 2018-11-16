import React from "react";
import { Link } from "react-router-dom";

const Orders = ({orders}) => {
        return(
            <ul className="order">
                {
                    orders.map((order) => (
                        <li key={order.id}>
                        <Link className="order-link" to={`order/${order.id}`}>
                            Order nr: {order.id}
                        </Link>
                        </li>
                    ))
                }
            </ul>
        )
}

export default Orders;