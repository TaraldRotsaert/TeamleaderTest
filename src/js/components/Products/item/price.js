import React from 'react';
import PropTypes from 'prop-types';

const ProductPrice = ({price, quantity}) => {
    const total = (price * quantity).toFixed(2);

    return <p>Totaal: {total}</p>

}

ProductPrice.propTypes = {
    price: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired
}

export default ProductPrice;