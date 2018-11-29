import React, { Component } from 'react';
import {connect} from 'react-redux';

class DeleteProduct extends Component {
render(){
    return(
        <button onClick={() => this.props.dispatch({type: 'DELETE_PRODUCT', orderId: this.props.orderId, productId: this.props.productId})}>delete product</button>
    )
}
}

export default connect()(DeleteProduct);