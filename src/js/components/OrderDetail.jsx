import React from 'react';
import OrderTitle from './OrderTitle.jsx';
import Products from './Products.jsx';
import ProductsTotal from './ProductsTotal.jsx';

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
            <Products productsOrder={productsOrder} items={items}/>
            <ProductsTotal total={total}/>
        </div>
    )
}

export default OrderDetail;