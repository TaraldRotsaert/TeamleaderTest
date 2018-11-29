import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PlaceOrder extends Component {

    render(){
        return <button onClick={() => this.props.dispatch({type: 'DELETE_ORDER', id: this.props.orderId})}>Place Order!</button>
    }
}

PlaceOrder.propTypes = {
    orderId: PropTypes.string.isRequired
}

export default connect()(PlaceOrder);