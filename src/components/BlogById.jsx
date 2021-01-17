import React, { Component } from "react";
import "../styles/blog.css";
import Footer from "./Footer";
import Header from "./Header";
export default class BlogById extends Component {
  state = {
    blogs: [],
  };
  componentDidMount = () => {
    console.log("props", this.props.match.params.blogId);
    fetch(
      `https://frozen-falls-16952.herokuapp.com/${this.props.match.params._id}`,
      { method: "GET" }
    )
      .then((response) => {
        return response.json();
        //console.log(response);
      })
      .then((data) => {
        console.log(data);
        this.setState({ blogs: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="mainContainer">
          <h1>{this.state.blogs.title}</h1>
          <p>Author:{this.state.blogs.author}</p>
          <img
            src={this.state.blogs.imageUrl}
            alt="blog pic"
            width="70%"
            height="300px"
          />
          <p>{this.state.blogs.content}</p>
        </div>
        <Footer />
      </div>
    );
  }
}
