import React, { Component } from "react";
import "./Contact.css";
import { validEmail } from "./utils/validations";
import axios from "axios";

export default class Contact extends Component {
  state = {
    value: "",
    name: "",
    email: "",
    message: "",
    sentConfirmation: false
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    this.setState({ sentConfirmation: true });
    event.preventDefault();
    const name = this.state.name;
    const email = this.state.email;
    const message = this.state.message;

    axios({
      method: "POST",
      url: "http://localhost:7000/send",
      data: {
        name: name,
        email: email,
        message: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        console.log("success");
      } else if (response.data.msg === "fail") {
      }
    });

    //Send email to admin
    axios({
      method: "POST",
      url: "http://localhost:7000/admin",
      data: {
        name: name,
        email: email,
        message: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        console.log("success");
      } else if (response.data.msg === "fail") {
      }
    });

    //Post new user
    axios({
      method: "POST",
      url: "http://localhost:7000/add",
      data: {
        name: name,
        email: email,
        message: message
      }
    })
      .then(function(response) {
        alert(response);
      })
      .catch(function(error) {
        alert("The email " + email + " has already been taken.");
      });

    this.setState({
      value: "",
      name: "",
      email: "",
      message: ""
    });
    event.preventDefault();
  };

  render() {
    const buttonText = this.state.sentConfirmation ? "Sent!" : "Submit";
    return (
      <div id="contact">
        <p id="contactIntro">
          Interested in collaborating on a project? Drop the details and contact
          info below!
        </p>
        {this.state.sentConfirmation === true && (
          <React.Fragment>
            <p id="sentConfirmation">
              Message Sent! I{"'"}ll be in contact with you soon!
            </p>
            <br />
          </React.Fragment>
        )}
        <form id="contactForm" onSubmit={this.handleSubmit}>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            placeholder="Your Full Name"
          />
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Write some stuff here"
          />
          <button type="submit" id="contactSubmit">
            {buttonText}
          </button>
        </form>
      </div>
    );
  }
}
