import React, { useEffect, useState } from 'react';
import { fakeDB } from '../../Utilities/localStorage';
import Cake from '../Cake/Cake';
import Cart from '../Cart/Cart';
import './Container.css'

const Container = () => {

    const [cakeDetails, setCakeDetails] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setCakeDetails(data))
    }, [])

    const handleAddToCart = cakeItem => {
        const newCart = [...cart, cakeItem];
        setCart(newCart);
        fakeDB(cakeItem.id);
    }

    return (
        <div className='container'>
            <div className='cake-container'>
                {
                    cakeDetails.map(cakeDetail => <Cake
                        key = {cakeDetail.id}
                        cakeDetail = {cakeDetail}
                        handleAddToCart = {handleAddToCart}
                    ></Cake>)
                }
            </div>
            <div>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Container;