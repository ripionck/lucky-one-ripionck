import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };
    //selected random one
    const chooseOneRandom = () => {
        const selectedItems = cart;
        if (selectedItems.length === cart.length) {
            const randomNumber = Math.floor(Math.random() * selectedItems.length);
            const chooseRandomCar = selectedItems[randomNumber];
            alert(chooseRandomCar.name + "was randomly selected from the selected cars.");
        }
    };
    //again select
    const chooseAgain = () => {
        setCart([]);
    };
    return (
        <div className='shop-container'>
            <div className="cars-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="select-container">
                <div className="select-items">
                    <h2>Selected Items</h2>
                    {
                        cart.map((data) => <h2 key={data.id}>{data.name}</h2>)
                    }
                    <button onClick={chooseOneRandom} className="cart-btn1">
                        <p>CHOOSE ONE</p>
                    </button>
                    <button onClick={chooseAgain} className="cart-btn2">
                        <p>CHOOSE AGAIN</p>
                    </button>
                </div>
            </div>
            <div className='questions'>
                <div className='question-answer'>
                    <h2>How react works?</h2>
                    <p><strong>React works in declarative code.</strong> To show what we mean by declarative code, we want you to imagine the following code expressed as an app. What you picture could look like the screen below, with a navbar, a header, a filter, and a list. That's because each line of code declares what each element of the app is.</p>
                </div>
                <div className='question-answer'>
                    <h2>How useState works?</h2>
                    <p>useState is a Hook that allows you to have state variables in functional components. <strong>You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Shop;