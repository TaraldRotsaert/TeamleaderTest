import React from "react";
import ProductItem from './ProductItem.jsx';

const Products = ({productsOrder, items}) => {
    console.log(productsOrder);
    console.log(items);
    return(
        <div className="products-container">
            <h4>Products:</h4>
                {
                    items.map(item => (
                        <ProductItem key={item.productId} item={item} productsOrder={productsOrder} />
                    ))
                }
        </div>
    )
}

export default Products;