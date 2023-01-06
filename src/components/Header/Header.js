import React from 'react';
import './Header.css'
import logo from '../../images/cakeBanner.jpg'

const Header = () => {
    return (
        <div className='banner'>
            <img className='logo-img' src={logo} alt=''></img>
            <h1 className='header-name'>Cake world</h1>
        </div>
    );
};



export default Header;