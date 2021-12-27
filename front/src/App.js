import "./App.css";
import React from "react";
import Header from "./containers/header";
import Home from "./containers/home";
import Register from "./containers/user/register";
import Login from "./containers/user/login";
import Logout from "./containers/user/logout";
import Profile from "./containers/user/profile";
import EditProfile from "./containers/user/editProfile";
import Products from "./containers/products/products";
import AddProduct from "./containers/products/addProduct";
import Product from "./containers/products/product";
import Cart from "./containers/cart";
import CreatorProfile from "./containers/creators/creatorProfile";
import Collection from "./containers/collection";
import Contact from "./containers/contact";
// import Payment from "./containers/payment";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/editProfile" component={EditProfile} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/addProduct" component={AddProduct} />
        <Route exact path="/creator/:user_id" component={CreatorProfile} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route exact path="/payment" component={Payment} /> */}
      </Switch>
    </div>
  );
}

export default App;
