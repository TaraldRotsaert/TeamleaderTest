import React from 'react';
import PropTypes from 'prop-types';

const ProductCost = ({price}) => {
    return <p className="product-amount">Prijs per stuk: € {price}</p>
}

ProductCost.propTypes = {
    price: PropTypes.string.isRequired
}

export default ProductCost;