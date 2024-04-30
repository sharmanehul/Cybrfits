import React from "react";
import { Link } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import Logo from "../../../images/logo.png";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userAction";

const Header = () => {
  // Get the authentication status from the Redux store
  const dispatch =useDispatch();
  const alert =useAlert();
  const { isAuthenticated } = useSelector(state => state.user);

  // Function to handle logout
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    window.location.href = "/login";
    alert.success("Logout Successfully");
  };

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo ">
            <img src={Logo} alt="Logo" className="logo-img"/>
        </Link>
        <div className="navbar-links">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link">About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/products" className="navbar-link">Product</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-icons">
          <div className="navbar-search">
            <a href="/Search" className="Search"><FaSearch /></a>
          </div>
          {isAuthenticated ? (
              <div className="navbar-profile">
                <Link to="/account" className="Login"><FaUserCircle /></Link>
              </div>
            ) : (
              <div className="navbar-profile">
                <Link to="/login" className="Login"><FaUserCircle /></Link>
              </div>
            )}
          {isAuthenticated && (
            // Conditional rendering for logout icon
            <div className="navbar-logout" onClick={handleLogout}>
              <FaSignOutAlt />
            </div>
          )}
          <div className="navbar-cart">
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </nav>     
    </>
  );
};

export default Header;

