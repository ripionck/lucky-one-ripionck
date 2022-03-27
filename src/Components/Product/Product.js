import React from 'react';
import './Product.css'

const Product = (props) => {
    const { _id, name, picture, price } = props.product;
    return (
        <div>
            <div className='product'>
                <img src={picture} alt=""></img>
                <div className="product-info">
                    <p className="product-name">{name}</p>
                    <p>Price: {price}</p>
                    <p><small>Id:{_id}</small></p>
                </div>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-cart">
                    <p className='btn-text'>Add to Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;