import React from "react";

const ProductAmount = ({item}) => {
    return (
        <div>
            <p className="product-amount">Hoeveelheid: {item.quantity}</p>
        </div>
    )
}

export default ProductAmount;