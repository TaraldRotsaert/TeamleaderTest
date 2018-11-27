import React from "react";
import { Link } from "react-router-dom";
import PlaceOrder from "./PlaceOrder.jsx";

const Orders = ({orders}) => {
    console.log(orders);
        return(
            <ul className="order">
                {
                    orders.map((order) => (
                        <li key={order.id}>
                        <Link className="order-link" to={`order/${order.id}`}>
                            Order nr: {order.id}
                        </Link>
                        <PlaceOrder orderId={order.id} total={order.total}/>
                        </li>
                    ))           
                }
            </ul>
        )
}

export default Orders;