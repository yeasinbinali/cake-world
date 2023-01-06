import React from 'react';
import './UniqueCart.css'

const UniqueCart = (props) => {
    const {name, img} = props.activeCart;
    return (
        <div>
            {(props.activeCart === 0 && <div></div>) || 
            <div className='singleCart'>
                <img className='singleCart-img' src={img} alt='img'></img>
                <p className='singleCart-name'>{name}</p>
            </div>
            }
        </div>
    );
};

export default UniqueCart;