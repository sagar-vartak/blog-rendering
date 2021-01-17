import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavigationStyles from "../styles/Navigation.module.css";

export default class Navigation extends Component {
  render() {
    return (
      <>
        <p id={NavigationStyles.menu}>
          <Link to="/">HOME</Link>
          <Link to="/blogs">BLOGS</Link>
          <Link to="/addBlog">ADDBLOG</Link>
        </p>
      </>
    );
  }
}
