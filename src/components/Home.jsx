import React from "react";
import { Link } from "react-router-dom";
//import AddBlog from "../pages/AddBlog";
import "../styles/home.css";
import image from "../images/morning.jpg";
import Header from "./Header";
import Footer from "./Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="bgImage">
        <img className="image" src={image} alt="background" />
      </div>
      <div className="bgText">
        <h1>Welcome!!!!!</h1>
        What's on your Mind Today
        <br />
        Want to become a Blogger?
        <br />
        <Link to="/addBlog">
          <button className="button">addBlog</button>
        </Link>
        <br />
        OR
        <br />
        Spend some time Reading Blogs
        <br />
        <Link to="/blogs">
          <button className="button">blogs</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
