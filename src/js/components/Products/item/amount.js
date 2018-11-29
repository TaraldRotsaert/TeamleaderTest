import React from 'react';
import PropTypes from 'prop-types';

const ProductAmount = ({item}) => {
    return <p className="product-amount">Hoeveelheid: {item.quantity}</p>
}

ProductAmount.propTypes = {
    item: PropTypes.object.isRequired
}

export default ProductAmount;