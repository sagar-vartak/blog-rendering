import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
//import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/main.css";
import { Link } from "react-router-dom";
import "../styles/blogs.css";

export default class GetBlogs extends Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
    };
  }
  componentDidMount = () => {
    fetch("https://frozen-falls-16952.herokuapp.com/all", { method: "GET" })
      .then((response) => {
        return response.json();
        //console.log(response);
      })
      .then((data) => {
        console.log(data);
        this.setState({ blogs: data.blogs });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("state", this.state.blogs);
    //const result = this.state.blogs;
    //console.log("Result", result);
    //console.log("type", typeof result);
    //console.log("0", result.blogs);
    return (
      <div>
        <Header />
        <div className="scroll">
          <Carousel controls="true">
            {this.state.blogs.map((blog) => {
              return (
                <Carousel.Item key={blog.blogId}>
                  <img
                    className="d-block w-100"
                    src={blog.imageUrl}
                    alt="pic"
                    height="600vh"
                    filter="blur(8px)"
                  />
                  <Carousel.Caption>
                    <div>
                      <h1 color="red">{blog.title}</h1>
                      <p color="red">{blog.author}</p>
                      <Link to={"/blog/" + blog._id}>
                        <button className="btn2">Read</button>
                      </Link>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <Footer />
      </div>
    );
  }
}
