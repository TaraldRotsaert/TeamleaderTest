import React from "react";
import {connect} from 'react-redux';

const ProductAmount = ({item, orderId}) => {
    const handleChange = (e) => {
        //console.log(e.currentTarget.value);
    }
    console.log(orderId);
    return (
        <div>
            <input type="number" step="1" value={item.quantity} onChange={e => handleChange(e)}/>
            <p className="product-amount">Hoeveelheid: {item.quantity}</p>
        </div>
    )
}

export default connect()(ProductAmount);