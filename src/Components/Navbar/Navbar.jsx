import React, { useEffect, useState } from "react";
import './navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link, useLocation } from "react-router-dom";
import { useCustom } from "../../Context/ShopContext";

export const Navbar = () => {

  const [scrollY, setScrollY] = useState(0);
  const { getTotalCartItems } = useCustom()
  const location = useLocation()
  const [menu, setMenu] = useState(location.pathname);
  useEffect(() => {
    setMenu(location.pathname)
  }, [location])


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`navbar ${scrollY > 50 ? "navbar-bg-fixed" : "transparent"} `}>
      <div className="nav-logo order-first">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu order-last">
        <li onClick={() => setMenu('/')}><Link to="/">Shop</Link> {menu === "/" ? <hr /> : <></>} </li>
        <li onClick={() => setMenu('/mens')}><Link to="/mens">Men</Link>{menu === "/mens" ? <hr /> : <></>} </li>
        <li onClick={() => setMenu('/womens')}><Link to="/womens">Women</Link>{menu === "/womens" ? <hr /> : <></>} </li>
        <li onClick={() => setMenu('/kids')}><Link to="/kids">Kids</Link>{menu === "/kids" ? <hr /> : <></>} </li>
      </ul>
      <div className="nav-login-cart order-lg-last order-md-last">
        <Link to="/login">
          <button> Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};
