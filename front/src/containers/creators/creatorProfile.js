import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { config } from "../../config";
import { Link } from "react-router-dom";

const CreatorProfile = (props) => {
  const [creator, setCreator] = useState(null);

  const { user_id } = props.match.params;

  useEffect(() => {
    axios.get(config.api_url + "/products/" + user_id).then((response) => {
      setCreator(response.data.results);
    });
  }, []);

  console.log("LOG DU CREATOR", creator);

  if (!creator) return "Loading...";

  console.log(user_id);

  return (
    <div className="creator-main-container">
      <h2>Hello I'm {creator[0].firstName}, </h2>
      <p>Welcome to my profile, this is all my works </p>
      <p>
        If you have any questions or requests please contact me here:{" "}
        {creator[0].email}
      </p>
      <div className="products-list" style={{ border: "none" }}>
        {creator.map((c) => (
          <div key={c.id} className="product-card">
            <Link to={"/product/" + c.id}>
              <div
                className="product-image"
                style={{
                  backgroundImage: `url(${c.picture})`,
                }}
              />
              <div className="product-infos">
                <div className="name">
                  <h3>{c.name}</h3>
                  <h4>{c.category}</h4>
                </div>
                <div className="price">
                  <h2>€{c.price}</h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorProfile;
