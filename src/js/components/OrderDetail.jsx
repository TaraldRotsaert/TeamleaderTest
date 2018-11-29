import React from 'react';
import OrderTitle from './OrderTitle.jsx';
import ProductsTotal from './Products/total';
import ProductItem from './Products/item';
import AddProduct from './Products/add';

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

    console.log(products);
    return(
        <div className="orders-container">
            <OrderTitle title={order.id} name={customer.name}/>
            {items.length !==0 ? (
                <div className="products-container">
                    <h4>Products</ h4>
                    {
                      items.map(item => (
                        <ProductItem orderId={order.id} key={item.productId} item={item} productsOrder={productsOrder} />
                    ))  
                    }
                <ProductsTotal total={total}/>
                </div>
            ):(
                <div>
                    <p>Er zijn geen products, voeg er wat toe.</p>
                </div>
            )}
            <AddProduct products={products} orderId={order.id}/>
        </div>
    )
}

export default OrderDetail;