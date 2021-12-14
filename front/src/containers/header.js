import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <Link to="/">
          <h3>E-POTTERY </h3>
        </Link>
      </div>
      <div className="header-links-center">
        <Link to="/collection">Collection</Link>
        <Link to="/products">Products</Link>
        <Link to="/story">Our story</Link>
      </div>

      <div className="dynamics-header">
        <Link to="/profile">Profile</Link>
        <Link to="/login">Log In</Link>
        <Link to="/addProduct">ADD PRODU</Link>
        {/* {props.user.isLogged === false && <Link to="/login">Log In</Link>}
        {props.user.user.role === "customer" && (
          <Link to="/profileCustomer">Profile</Link>
        )}
        {props.user.user.role === "creator" && (
          <Link to="/profile">Profile</Link>
        )} */}
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

export default connect(mapStateToProps, null)(Header);
