import React from "react";
import ProductItem from './ProductItem.jsx';

const Products = ({productsOrder, items}) => {
    return(
        <div className="products-container">
            <h4>Products:</h4>
                {
                    items.map(item => (
                        <ProductItem key={item.productId} item={item}/>
                    ))
                }
        </div>
    )
}

export default Products;