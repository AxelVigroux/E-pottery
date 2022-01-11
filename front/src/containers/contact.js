import React, { useState } from "react";
import axios from "axios";
import { config } from "../config";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitForm = () => {
    let data = {
      name: name,
      email: email,
      message: message,
    };

    axios
      .post(config.api_url + "/contact", data)
      .then((response) => {
        if (response.data.status === 200) {
          //popup
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="contact__main">
      <div className="contact__left"></div>
      <div className="contact__right">
        <div className="basic-form">
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitForm();
            }}
          >
            <div className="small-inputs">
              <input
                className="small-input"
                placeholder="Your name"
                type="text"
                name="name"
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
              />
              <input
                className="small-input"
                placeholder="Email"
                type="text"
                name="email"
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              />
            </div>
            <textarea
              className="text-input"
              placeholder="Feel free to leave us your message"
              type="text"
              name="message"
              onChange={(e) => {
                setMessage(e.currentTarget.value);
              }}
            />
            <input className="form-button" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
