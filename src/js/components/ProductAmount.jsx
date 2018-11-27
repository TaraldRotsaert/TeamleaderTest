import React from "react";
import {connect} from 'react-redux';

const ProductAmount = ({item, orderId}) => {
    const handleChange = (e) => {
        e.preventDefault();
        const value = e.currentTarget.value;
        
    }
    return (
        <div>
            <p className="product-amount">Hoeveelheid: {item.quantity}</p>
        </div>
    )
}

export default connect()(ProductAmount);