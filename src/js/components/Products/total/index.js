import React from "react";

const ProductsTotal = ({total}) => {
    const reducer = (accumulator, currentVal) => parseFloat(accumulator) + parseFloat(currentVal);

    const sum = total.reduce(reducer);
    const sumRounded = parseFloat(sum).toFixed( 2 );

    return(
        <p>Totaal: € {sumRounded}</p>
    )
}

export default ProductsTotal;