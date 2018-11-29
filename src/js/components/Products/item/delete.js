import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class DeleteProduct extends Component {
    render(){
        return(
            <button onClick={() => this.props.dispatch({type: 'DELETE_PRODUCT', orderId: this.props.orderId, productId: this.props.productId})}>delete product</button>
        )
    }
}

DeleteProduct.propTypes = {
    orderId: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired
}

export default connect()(DeleteProduct);