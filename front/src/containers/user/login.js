import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { loginUser } from "../../api/user";
import { logged_in_user } from "../../actions/user/userAction";
import { connect, useDispatch } from "react-redux";
import { getAllProducts } from "../../actions/products/productAction";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(dispatch(getAllProducts()));
  });

  const onSubmitForm = () => {
    let data = {
      email: email,
      password: password,
    };

    loginUser(data).then((response) => {
      if (response.status === 200) {
        console.log(response.data.user);
        window.localStorage.setItem("user", response.data.token);
        props.logged_in_user(response.data.user);
        setRedirect(true);
      }
    });
  };

  return (
    <div>
      {redirect && <Redirect to="/" />}
      <div className="form-main-container">
        <div className="basic-form">
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitForm();
            }}
          >
            <h2>Log in</h2>
            <input
              placeholder="Email"
              className="tall-input"
              type="text"
              name="email"
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
            <input
              placeholder="Password"
              className="tall-input"
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
            <input className="form-button" type="submit" value="Login" />

            <Link to="/register">Not registered ? Create an account</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  logged_in_user,
};

const mapStateToProps = (store) => {
  return {
    user: store.user,
    products: store.products,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
