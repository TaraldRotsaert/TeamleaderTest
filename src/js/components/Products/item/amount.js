import React from "react";

const ProductAmount = ({item}) => {
    return <p className="product-amount">Hoeveelheid: {item.quantity}</p>
}

export default ProductAmount;