import React from 'react';
import PropTypes from 'prop-types';

const OrderTitle = ({title, name}) => {
    return <h3 className="order-title">Order nr: {title} - {name}</h3>
}

OrderTitle.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default OrderTitle;