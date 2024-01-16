import React from 'react';
import "./Navbar.css";
import logo from "../assets/logo.png"
import cart from "../assets/cart.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={logo} alt="logo" />
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">
            <li><a href="">Shop</a></li>
            <li><a href="">Men</a></li>
            <li><a href="">Women</a></li>
            <li><a href="">Kids</a></li>
        </ul>

        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart} alt="cart" />
        </div>
    </div>
  )
}

export default Navbar