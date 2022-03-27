import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <div className="selected-cart">
            <h3>Selected Cars</h3>
            <p>selected:{props.length}</p>
            <button className="cart-btn1">CHOOSE ONE</button>
            <button className="cart-btn2">CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;