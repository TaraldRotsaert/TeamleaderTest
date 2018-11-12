import React from 'react';
import OrderTitle from './OrderTitle.jsx';
import Products from './Products.jsx';

const OrderDetail = ({order, customers, products}) => {
    let customer;
    let items = order.items;
    let productsOrder = [];

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

    console.log(productsOrder);
    console.log(items);


    return(
        <div className="orders-container">
            <OrderTitle title={order.id} name={customer.name}/>
            <Products productsOrder={productsOrder} customer={customer} items={items}/>
        </div>
    )
}

export default OrderDetail;