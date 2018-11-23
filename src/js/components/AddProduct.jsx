import React from 'react';
import {connect} from 'react-redux';

const AddProduct = ({orderId, products}) => {
    const addProduct = (e, id) => {
        console.log(id);
    }
    return(
        <div>
            <h5>Order een nieuw product:</h5>
            {
                  products.map(product => (
                      <button key={product.id} onClick={(e) => addProduct(e, product.id)}>{product.description}</button>
                ))  
                }
        </div>
    )
}

export default connect()(AddProduct);