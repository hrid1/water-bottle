import React from 'react';
import './cart.css'
const Cart = ({cart}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Your Cart: {cart.length} </h1>
            <div className='cart-container'>
                {
                    // eslint-disable-next-line react/prop-types
                    cart.map(item => <div key={item.id} className='cart-Item'> <img src={item.img} alt="" /> <p>{item.name}</p></div>)
                }
            </div>
        </div>
    );
};

export default Cart;