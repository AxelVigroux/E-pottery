import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { saveUser } from "../../api/user";

const Register = (props) => {
  const [role, setRole] = useState("Customer");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onSubmitForm = () => {
    let data = {
      role: role,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      address: address,
      zip: zip,
      city: city,
      phone: phone,
    };

    saveUser(data).then((response) => {
      if (response.status === 200) {
        setRedirect(true);
      }
    });
  };

  return (
    <div>
      {redirect && <Redirect to="/login" />}
      <div className="form-main-container">
        <div className="basic-form">
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitForm();
            }}
          >
            <h2>Register</h2>
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
            <Link to="/login">Already have an account ? </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
