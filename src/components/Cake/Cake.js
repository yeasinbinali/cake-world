import React from 'react';
import './Cake.css';

const Cake = (props) => {
    const {handleAddToCart} = props;
    const {img, name, price, pound} = props.cakeDetail;
    return (
        <div className='cake'>
            <img src={img} alt=''></img>
            <h2>{name}</h2>
            <h3>Pound: {pound}</h3>
            <h3>Price: {price}</h3>
            <button onClick= {() => handleAddToCart(props.cakeDetail)}>Add to cart</button>
        </div>
    );
};

export default Cake;