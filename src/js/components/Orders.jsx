import React from 'react';
import { Link } from 'react-router-dom';
import PlaceOrder from './PlaceOrder.jsx';
import PropTypes from 'prop-types';

const Orders = ({orders}) => {

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

Orders.propTypes = {
    orders: PropTypes.array.isRequired
}

export default Orders;