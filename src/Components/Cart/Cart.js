import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { name, picture } = props.data;
    return (
        <div className="selected-cart">
            <h3>Selected Cars</h3>
            <p>Name:{name}</p>
            <button className="cart-btn1">
                <p>CHOOSE ONE</p>
            </button>
            <button className="cart-btn2">
                <p>CHOOSE AGAIN</p>
            </button>
        </div>
    );
};

export default Cart;