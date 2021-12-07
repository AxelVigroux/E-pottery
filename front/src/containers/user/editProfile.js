import React, { useState, useEffect } from "react";
import { logged_in_user } from "../../actions/user/userAction";
import * as reactRedux from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { config } from "../../config";

const EditProfile = (props) => {
  const [role, setRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setRole(props.user.user.role);
    setFirstName(props.user.user.firstName);
    setLastName(props.user.user.lastName);
    setEmail(props.user.user.email);
    setAddress(props.user.user.address);
    setZip(props.user.user.zip);
    setCity(props.user.user.city);
    setPhone(props.user.user.phone);
    setPassword(props.user.user.password);
  }, [props]);

  const onSubmitForm = () => {
    let userData = {
      role: role,
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      zip: zip,
      city: city,
      phone: phone,
      password: password,
    };

    const token = window.localStorage.getItem("user");
    axios
      .put(config.api_url + "/user/update/" + props.user.user.id, userData, {
        headers: { "x-access-token": token },
      })
      .then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          axios
            .get(config.api_url + "/user/" + props.user.user.id)
            .then((response) => {
              props.logged_in_user(response.data.results[0]);
              setRedirect(true);
            });
        }
      });
  };
  return (
    <div className="form-main-container">
      {redirect && <Redirect to="/profileCustomer" />}

      <div className="basic-form">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitForm();
          }}
        >
          <h2>Edit Profile</h2>
          <div className="label-select">
            <label className="option-label">You are a : </label>
            <select
              className="custom-select"
              onChange={(e) => {
                setRole(e.currentTarget.value);
              }}
            >
              <option value="Customer">Customer</option>
              <option value="Creator">Creator</option>
            </select>
          </div>
          <div className="small-inputs">
            <input
              className="small-input"
              placeholder="First Name"
              type="text"
              name="firstName"
              onChange={(e) => {
                setFirstName(e.currentTarget.value);
              }}
            />
            <input
              className="small-input"
              placeholder="Last Name"
              type="text"
              name="lastName"
              onChange={(e) => {
                setLastName(e.currentTarget.value);
              }}
            />
          </div>
          <input
            className="tall-input"
            placeholder="Email"
            type="text"
            name="email"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
          <input
            className="tall-input"
            placeholder="Address"
            type="text"
            name="address"
            onChange={(e) => {
              setAddress(e.currentTarget.value);
            }}
          />
          <input
            className="tall-input"
            placeholder="Phone"
            type="text"
            name="phone"
            onChange={(e) => {
              setPhone(e.currentTarget.value);
            }}
          />
          <div className="small-inputs">
            <input
              className="small-input"
              placeholder="Zip Code"
              type="text"
              name="zip"
              onChange={(e) => {
                setZip(e.currentTarget.value);
              }}
            />
            <input
              className="small-input"
              placeholder="City"
              type="text"
              name="city"
              onChange={(e) => {
                setCity(e.currentTarget.value);
              }}
            />
          </div>
          <input
            className="tall-input"
            placeholder="Password"
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
          <input className="form-button" type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

//select datas
const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

//dispatch les actions
const mapDispatchToProps = {
  logged_in_user,
};

export default reactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
