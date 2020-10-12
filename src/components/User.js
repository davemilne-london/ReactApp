// src/components/User.js
import React from "react";

function User(props) {
  return (
    <div>
      <h2 style={{ backgroundColor: props.theColor }}>
        Hello, {props.firstName}
      </h2>
      <h2 style={{ backgroundColor: props.theColor }}>
        Welcome to {props.bootcamp}!
      </h2>
      <img src={props.image} width="350" height="350"/>
    </div>
  );
}

export default User;