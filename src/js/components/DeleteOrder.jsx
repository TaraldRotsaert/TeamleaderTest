import React, { Component } from "react";

class DeleteOrder extends Component {

    deleteOrder = (e) => {
        console.log(e);
    }

    render(){
        return(
            <div className="delete-order">
                <button onClick={e => this.deleteOrder(e)}>Delete Order</button>
            </div>
        )
    }
}

export default DeleteOrder;