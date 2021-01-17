import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/add.css";
export default class AddBlog extends Component {
  submitForm = (event) => {
    event.preventDefault();
    var formData = new FormData(event.target);

    var formObject = {};
    formData.forEach(function (value, key) {
      formObject[key] = value;
    });
    console.log("formobjects", formObject);
    fetch("https://frozen-falls-16952.herokuapp.com/add", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response;
      })
      .then((data) => {
        alert("Form Submitted Successfully");
        event.target.reset();
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="mainDiv">
          {/* <div className="nav">
            <Link to="/">
              <button className="btn4">Home</button>
            </Link>
            <Link to="/blogs">
              <button className="btn4">View Blogs</button>
            </Link>
          </div> */}

          <div className="container">
            <h1>ADD BLOGS</h1>
            <form onSubmit={this.submitForm}>
              <div>
                <input
                  type="text"
                  name="author"
                  required
                  placeholder="Author"
                  value={this.author}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="Title"
                  value={this.title}
                />
              </div>
              <div>
                <textarea
                  rows="5"
                  cols="50"
                  name="content"
                  required
                  placeholder="Content"
                  value={this.content}
                />
              </div>
              <div>
                <label>Blog image</label>
                <input
                  type="file"
                  name="imageUrl"
                  required
                  value={this.imageUrl}
                />
              </div>
              <div>
                <button className="btnz" type="submit" value="submit">
                  Submit
                </button>
                &nbsp;&nbsp;
                <button className="btnz" type="reset" value="Reset">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
