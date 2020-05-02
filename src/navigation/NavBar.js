import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import M from "materialize-css/dist/js/materialize.min.js";

export default class NavBar extends Component {
  componentDidMount() {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <div>
        <nav>
          <a
            href="#"
            data-target="slide-out"
            className="sidenav-trigger"
          >
            <i className="material-icons">menu</i>
          </a>
          <div className="nav-wrapper hide-on-med-and-down">
            <Link to="/basic">Basic Ref</Link>
            <Link to="/callback">Callback Ref</Link>
            <Link to="/parent">Parent To Child Ref</Link>
            <Link to="/forward">Forward Ref</Link>
            <Link to="/Form">Form Ref</Link>
          </div>
        </nav>
        <div id="slide-out" className="sidenav">
          <Link to="/basic">Basic Ref</Link>
          <Link to="/callback">Callback Ref</Link>
          <Link to="/parent">Parent To Child Ref</Link>
          <Link to="/forward">Forward Ref</Link>
          <Link to="/Form">Form Ref</Link>
        </div>
      </div>
    );
  }
}
