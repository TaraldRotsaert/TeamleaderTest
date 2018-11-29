import React from 'react';
import ProductPrice from './price.js';
import ProductAmount from './amount.js';
import ProductCost from './cost.js';
import DeleteProduct from './delete.js';

const ProductItem = ({orderId, item, productsOrder}) => {
    return(
        <div>
            {
                productsOrder.map(product => {
                    if(product.id === item.productId){
                        return <p className="product-item-title" key={product.id}>Product: {product.description}</p>
                    }
                })
            }
            <DeleteProduct orderId={orderId} productId={item.productId}/>
            <ProductCost price={item.unitPrice}/>
            <ProductAmount item={item}  />
            <ProductPrice price={item.unitPrice} quantity={item.quantity}/>
        </div>
    )
}

export default ProductItem;