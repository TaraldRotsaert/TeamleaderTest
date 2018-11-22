import React from "react";

const PlaceOrder = ({orderId, total}) => {
    const handleClickButton = (e) => {
        //e.preventDeafault();
        console.log(`Order nr: ${orderId} is geplaatst en kost: €${total}`);
    }

    return(
        <button onClick={e => handleClickButton(e)}>Place Order!</button>
    )
}

export default PlaceOrder;