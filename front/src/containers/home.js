import React from "react";
import arrow from "../assets/images/Discover_Arrow.svg";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="homepage">
      <div className="background-homepage"></div>
      <h1>Passionately crafted vases </h1>
      <div className="homepage-picture-text">
        <Link to="/products">
          <ul>
            <li>
              <img src={arrow} className="arrow"></img>
            </li>
            <li>Explore our products</li>
          </ul>
        </Link>
      </div>
    </div>
  );
};

export default Home;
