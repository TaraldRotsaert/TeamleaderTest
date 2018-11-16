import React from "react";
import ProductPrice from './ProductPrice.jsx';
//import ProductsTotal from './ProductsTotal.jsx';

const ProductItem = ({item, productsOrder}) => {
    return(
        <div>
            {
                productsOrder.map(product => {
                    if(product.id === item.productId){
                        return <p className="product-item-title" key={product.id}>{product.description}</p>
                    }
                })
            }
            <ProductPrice price={item.unitPrice} quantity={item.quantity}/>
        </div>
    )
}

export default ProductItem;