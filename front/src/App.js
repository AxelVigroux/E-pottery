import "./App.css";
import React from "react";
import Header from "./containers/header";
import Home from "./containers/home";
import Story from "./containers/story";
import Newsletter from "./containers/newsletter";
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
import { Switch, Route } from "react-router-dom";

/** REFACTO ROAD AND HOME PAGE  **/
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
          <Story />
          <Newsletter />
        </Route>
        <Route exact path="/story" component={Story} />
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
      </Switch>
    </div>
  );
}

export default App;
