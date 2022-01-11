import React from "react";
import { logged_in_user } from "../../actions/user/userAction";
import * as reactRedux from "react-redux";
import { Link } from "react-router-dom";

const Profile = (props) => {
  return (
    <div className="profile-container">
      <div className="profile-name">
        <h2>{props.user.user.firstName}</h2>
        <h2>{props.user.user.lastName}</h2>
      </div>
      <div className="profile-informations">
        <h3>Informations</h3>
        <ul>
          <li>
            <span>Role : </span>
            {props.user.user.role}
          </li>
          <li>
            <span>Email : </span> {props.user.user.email}
          </li>
          <li>
            <span>Address : </span> {props.user.user.address}
          </li>
          <li>
            <span>City : </span>
            {props.user.user.city}
          </li>
          <li>
            <span>Zip : </span>
            {props.user.user.zip}
          </li>
          <li>
            <span>Phone : </span> {props.user.user.phone}
          </li>
        </ul>
      </div>

      <Link to="editProfile">Update your informations</Link>
    </div>
  );
};

const mapDispatchToProps = {
  logged_in_user,
};

const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

export default reactRedux.connect(mapStateToProps, mapDispatchToProps)(Profile);
