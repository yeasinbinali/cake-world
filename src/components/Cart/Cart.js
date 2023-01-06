import React, { useState } from 'react';
import UniqueCart from '../../UniqueCart/UniqueCart';
import './Cart.css'

const Cart = (props) => {
    const cartItems = props.cart;
    const uniqueIds = [];

    const uniqueItems = cartItems.filter(uniqueItem => {
        const isDuplicate = uniqueIds.includes(uniqueItem.id);
        if(!isDuplicate){
            uniqueIds.push(uniqueItem.id);
            return true;
        }
        return false;
    })

    const [activeCart, setActiveCart] = useState(0);

    const randomCarts = (unique) => {
        const len = unique.length;
        const uniqueItemLength = (Math.floor(Math.random() * len));
        setActiveCart(unique[uniqueItemLength]);
    };

    const emptyCart = () => {
        window.location.reload(uniqueItems.length = '')
    }

    return (
        <div className='cart-container'>
            <h2>Selected Items</h2>
            <div>{cartItems.length === 0 && <div>Cart is empty <br/><br/> Can't add more than 4 items</div>}</div>
            {
                (uniqueItems.length <= 4 && 
                    uniqueItems.map((item) => (
                        <div>
                            <div className='cart'>
                                <img className='cart-img' src={item.img} alt=''></img>
                                <p className='cake-name'>{item.name}</p>
                                <button className='dlt-btn'>-</button>
                            </div>
                        </div>
                    )))
                || <div>{window.location.reload()}</div>
            }
            
            <button onClick={() => randomCarts(uniqueItems)} className='cart-btn'>
                <p>Choose 1 for me</p>
            </button>
            <button onClick={() => emptyCart()} className='cart-btn'>
                <p>Choose again</p>
            </button>
            <UniqueCart activeCart={activeCart}></UniqueCart>
        </div>
    );
};

export default Cart;