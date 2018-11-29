import React from "react";

const ProductPrice = ({price, quantity}) => {
    const total = (price * quantity).toFixed(2);
    return(
        <p>Totaal: {total}</p>
    )
}

export default ProductPrice;