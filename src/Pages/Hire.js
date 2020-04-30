import React, { Component } from "react";
import Logo from "./asset/cv.jpg";
import { Jumbotron } from "reactstrap";

export default class Hire extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <img src={Logo} alt=".."></img>
        </Jumbotron>
      </div>
    );
  }
}
