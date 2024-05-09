import React from 'react';
import "./styles.css";

function index() {
  return (
    <div className="header-wrapper">
    <h3 className="logo">EDGECUT</h3>
        <nav className="navbar">
            <ul>
               <li>Home</li>
               <li>About</li>
               <li>Furnitures</li>
               <li>Blog</li>
               <li>Contact Us</li>
            </ul>
        </nav>
        <div className="account">
            <span>Login</span>
            <span><img src="src\assets\search-icon.jpg" className="sicon"/></span>
        </div>
    </div>
  )
}

export default index