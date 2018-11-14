import React from "react";

const ProductItem = ({item, productsOrder}) => {
    return(
        <div>
            {
                productsOrder.map(product => {
                    if(product.id === item.productId){
                        return <p className="product-item-title">{product.id}</p>
                    }
                })
            }
            <p className="product-item-title"></p>
            <p className="product-item-quantity">{item.quantity}</p>
        </div>
    )
}

export default ProductItem;