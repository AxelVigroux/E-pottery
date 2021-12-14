import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { config } from "../config";

const Collection = (props) => {
  const [user, setUser] = useState([]);

  /** WORK ON RANDOM CREATOR  **/
  // const randomIndex = Math.floor(Math.random() * users.length);

  const id = 11;

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(config.api_url + "/user/" + id).then((res) => {
      console.log("ROUTE DU CREATORS", res.data.results);
      setUser(res.data.results);
    });
  }, []);

  const creator = user;

  if (!creator) return "Loading...";
  return (
    <div className="collection__main">
      <div className="collection__top">
        <h1>OUR COLLECTIONS</h1>
        <p>Browse our collections and discover new products</p>
      </div>
      <div className="collection__bot">
        <div className="collection__picture"></div>
        <Link to={"/creator/" + id}>
          <h3>Featured this month : {creator.firstName}</h3>
        </Link>
      </div>
    </div>
  );
};

export default Collection;
