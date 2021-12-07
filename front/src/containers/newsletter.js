import React from "react";
import arrow from "../assets/images/news-arrow.svg";

const Newsletter = (props) => {
  return (
    <div className="main-newsletter">
      <div className="newsletter-text">
        <h2> Stay informed of our last creations !</h2>
        <p className="p-news">
          Subscribe to our newsletter and you’ll get an early access to all the
          upcoming series, and well as some interior design insights from our
          curated guests ! This bi-montlhy email will cover everything from
          vases production to design process and plant selection.
        </p>
        <div className="bottom-newsletter">
          <p>Email Address...</p>
          <img src={arrow} className="arrow-news" />
        </div>
      </div>
      <div className="bottom-news"></div>
    </div>
  );
};

export default Newsletter;
