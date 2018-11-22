import React from 'react';
import OrderTitle from './OrderTitle.jsx';
import ProductsTotal from './ProductsTotal.jsx';
import ProductItem from './ProductItem.jsx';
import AddProduct from './AddProduct.jsx';

const OrderDetail = ({order, customers, products}) => {
    let customer;
    let items = order.items;
    let productsOrder = [];
    let total = [];

    customers.forEach(data => {
        if(order.customerId === data.id){
            customer = data;
        }
    })

    items.forEach(item => {
        products.forEach(product => {
            if(item.productId === product.id){
                productsOrder.push(product);
            }
        })
    })

    items.forEach(item => {
        total.push(item.total);
    })

    return(
        <div className="orders-container">
            <OrderTitle title={order.id} name={customer.name}/>
            <div className="products-container">
                <h4>Products</ h4>
                {
                  items.map(item => (
                    <ProductItem orderId={order.id} key={item.productId} item={item} productsOrder={productsOrder} />
                ))  
                }
            </div>
            <ProductsTotal total={total}/>
            <AddProduct orderId={order.id} products={products} />
        </div>
    )
}

export default OrderDetail;