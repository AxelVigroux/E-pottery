import React, { useState } from "react";
import arrow from "../assets/images/Discover_Arrow.svg";
import vases from "../assets/Vases/Large/Vases01.png";
import { Link } from "react-router-dom";
import { config } from "../config";
import axios from "axios";

const Home = (props) => {
  const [mail, setMail] = useState("");

  const onSubmitForm = () => {
    let data = {
      mail: mail,
    };

    axios
      .post(config.api_url + "/user/newsletter", data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="homepage">
        <div className="background-homepage"></div>
        <h1>Passionately crafted vases </h1>
        <div className="homepage-picture-text">
          <Link to="/products">
            <ul>
              <div className="arrow-text">
                <li>
                  <img src={arrow} className="arrow" alt="arrow picture" />
                </li>
                <li>Explore our products</li>
              </div>
              <img
                src={vases}
                className="bg__home"
                alt="vases for background picture"
              />
            </ul>
          </Link>
        </div>
      </div>

      {/* /** STORY */}

      <div className="story-main" id="story">
        <div className="background-story"></div>
        <div className="vase-story-front"></div>
        <div className="vase-story-back"></div>
        <div className="story-text">
          <h2>Carefully handmade Ceramics</h2>
          <p>
            Everything start with a piece of raw material. After countless hours
            and a lifetime of expertise, the shape of the vase appears.
            <br />
            <br />
            As it dries, the vase seals its final textures and become and unique
            piece of art.
            <br />
            <br /> Witnessing time and stories, our vases all comes with a
            lifetime guarantee.
            <br />
            <br /> Everything start with a piece of raw material. After
            countless hours and a lifetime of expertise, the shape of the vase
            appears.
            <br />
            <br /> As it dries, the vase seals its final textures and become and
            unique piece of art.
            <br />
            <br /> Witnessing time and stories, our vases all comes with a
            lifetime guarantee.
          </p>
        </div>
      </div>

      {/** NEWS LETTER  */}

      <div className="main-newsletter">
        <div className="newsletter-text">
          <h2> Stay informed of our last creations !</h2>
          <p className="p-news">
            Subscribe to our newsletter and you’ll get an early access to all
            the upcoming series, and well as some interior design insights from
            our curated guests ! This bi-montlhy email will cover everything
            from vases production to design process and plant selection.
          </p>
          <div>
            <form
              className="news-form"
              onSubmit={(e) => {
                e.preventDefault();
                onSubmitForm();
              }}
            >
              <input
                className="tall-input news-input"
                placeholder="Email Address..."
                type="text"
                name="mail"
                onChange={(e) => {
                  console.log(e.currentTarget.value);
                  setMail(e.currentTarget.value);
                }}
              />
              <button className="news-button" type="submit" value="Register">
                <img src={arrow} className="arrow-news" alt="arrow picture" />
              </button>
            </form>
          </div>
        </div>
        <div className="bottom-news"></div>
      </div>
    </>
  );
};

export default Home;
