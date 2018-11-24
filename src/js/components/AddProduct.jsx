import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddProduct extends Component {
    addProduct = (e, productId) => {
        const productsItem = this.props.products.filter(product => product.id === productId);
        const product = productsItem[0];
        const quantiy = 1;
        const unitPrice = product.price;
        const total = quantiy * unitPrice;

        const data = {
            "productId": productId,
            "quantity": quantiy,
            "unitPrice": unitPrice,
            "total": total
        }
        this.props.dispatch({
            type: 'ADD_TO_ORDER',
            id: this.props.orderId,
            data: data
        })
    }
    render(){
        const products = this.props.products;
        console.log(products);
        return(
            <div>
                <h5>Order een nieuw product:</h5>
                {
                      products.map(product => (
                          <button key={product.id} onClick={(e) => this.addProduct(e, product.id)}>{product.description}</button>
                    ))  
                    }
            </div>
        )
    }
}

export default connect()(AddProduct);