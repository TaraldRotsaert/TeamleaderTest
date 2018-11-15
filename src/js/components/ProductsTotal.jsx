import React from "react";

const ProductsTotal = ({total}) => {
    const reducer = (accumulator, currentVal) => parseFloat(accumulator) + parseFloat(currentVal);

    const sum = total.reduce(reducer);

    return(
        <p>Totaal: {sum}</p>
    )
}

export default ProductsTotal;