import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlaceOrder extends Component {
    render(){
        return(
            <button onClick={() => this.props.dispatch({type: 'DELETE_ORDER', id: this.props.orderId})}>Place Order!</button>
        )
    }
}

export default connect()(PlaceOrder);