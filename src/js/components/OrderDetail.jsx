import React from 'react';
import OrderTitle from './OrderTitle.jsx';
import ProductsTotal from './Products/total';
import ProductItem from './Products/item';
import AddProduct from './Products/add';
import PropTypes from 'prop-types';
import OrdersTitle from './OrderTitle.jsx';

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
            <OrdersTitle title={order.id} name={customer.name}/>
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

OrderDetail.propTypes = {
    order: PropTypes.object.isRequired,
    customers: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired
}

export default OrderDetail;