import React from "react";
import ProductPrice from './ProductPrice.jsx';
import ProductAmount from "./ProductAmount.jsx";
import ProductCost from "./ProductCost.jsx";

const ProductItem = ({item, productsOrder}) => {
    return(
        <div>
            {
                productsOrder.map(product => {
                    if(product.id === item.productId){
                        return <p className="product-item-title" key={product.id}>Product: {product.description}</p>
                    }
                })
            }
            <ProductCost price={item.unitPrice}/>
            <ProductAmount quantity={item.quantity} />
            <ProductPrice price={item.unitPrice} quantity={item.quantity}/>
        </div>
    )
}

export default ProductItem;