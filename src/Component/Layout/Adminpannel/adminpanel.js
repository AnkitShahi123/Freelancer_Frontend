import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const axios = require("axios").default;

class adminpanel extends Component {
  state = {
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
  };

  render() {
    return (
      <div>
        <h1> Hi!!! I am a Admin.</h1>
        <img src="https://img.freepik.com/free-photo/white-surface-green-plant-white-notebook-with-inscription-admin-pen_380694-2886.jpg?size=1000&ext=jpg"></img>
      </div>
    );
  }
}

export default adminpanel;
