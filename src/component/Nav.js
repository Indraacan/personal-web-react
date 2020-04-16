import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default class Nav extends Component {
  render() {
    return (
        
        <nav class="navbar sticky-top navbar-light bg-light navtext">

          <ul class="nav ml-auto mr-5" style={{fontSize:"26px"}}>
            <li class="nav-item mr-4 ml-auto">
              <Link to="/">Home</Link>
            </li>
            <li class="nav-item mr-4">
              <Link to="/article">Article</Link>
            </li>
            <li class="nav-item mr-4">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li class="nav-item mr-4">
              <Link to="/hire">Hire me</Link>
            </li>
          </ul>
        
</nav>
    );
  }
}
