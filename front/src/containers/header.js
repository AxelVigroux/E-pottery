import React from "react";
import { Link } from "react-router-dom";
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
        <a href="#story">Our Story</a>
      </div>

      {props.user.isLogged ? (
        <div className="dynamics-header">
          <Link to="/profile">Profile</Link>
          <Link to="/cart">Cart</Link>
        </div>
      ) : (
        <Link to="/login">Log In</Link>
      )}
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

export default connect(mapStateToProps, null)(Header);
