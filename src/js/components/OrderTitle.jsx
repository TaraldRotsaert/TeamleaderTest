import React from "react";

const OrderTitle = ({title, name}) => {
    return <h3 className="order-title">Order nr: {title} - {name}</h3>
}

export default OrderTitle;