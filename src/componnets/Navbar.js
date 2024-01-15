import React, { useRef } from "react";
import Logo from "../assests/logo/logo-no-background.png"
import {cart} from "../Data";

const Navbar = () => {
  const searchRef = useRef();
  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
  };
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="logo" />
        </a>
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#product">product</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
          <a href="#signup">Signup</a>
        </nav>
        <div className="icons">
          <div className="fas fa-search" onClick={searchHandler}></div>
          <div className="fas fa-shopping-cart"></div>
          <div className="fas fa-bars" id="menu-btn"></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" placeholder="Search here..." id="search-box" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container">
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt="cart" />
              <div className="content">
                <h3>cart item 01</h3>
                <div className="price">$15.99</div>
              </div>
            </div>
          ))}
        </div>
      </header>
    </>
  );
};

export default Navbar;
