import React from 'react';
import PropTypes from 'prop-types';

const ProductsTotal = ({total}) => {
    const reducer = (accumulator, currentVal) => parseFloat(accumulator) + parseFloat(currentVal);

    const sum = total.reduce(reducer);
    const sumRounded = parseFloat(sum).toFixed( 2 );

    return <p>Totaal: € {sumRounded}</p>
}

ProductsTotal.propTypes = {
    total: PropTypes.array.isRequired
}

export default ProductsTotal;