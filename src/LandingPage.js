import React, { Component } from "react";
import "./LandingPage.css";

export default class LandingPage extends Component {
  state = {
    test: "Hey",
    hovered: false,
    id: 0
  };

  onHover = event => {
    this.setState({ hovered: true });
    if (event.target.id === "py") {
      this.setState({ id: 1 });
    } else if (event.target.id === "js") {
      this.setState({ id: 2 });
    } else if (event.target.id === "flask") {
      this.setState({ id: 3 });
    } else if (event.target.id === "rightName") {
      this.setState({ id: 4 });
    } else if (event.target.id === "express") {
      this.setState({ id: 5 });
    } else if (event.target.id === "react") {
      this.setState({ id: 6 });
    } else if (event.target.id === "django") {
      this.setState({ id: 7 });
    }
  };

  exitHover = () => {
    this.setState({ hovered: false });
  };

  handleScroll = () => {
    var element = document.getElementById("aboutTitle");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  render() {
    const className = this.state.isMobile ? "mobile" : "";
    const pythonBool =
      this.state.hovered && this.state.id === 1 ? "indents 🤔" : "Python";
    const jsBool =
      this.state.hovered && this.state.id === 2 ? "let js = 🙃" : "Javascript";
    const flaskBool =
      this.state.hovered && this.state.id === 3 ? "micro.py 😊" : "Flask";
    const nameBool =
      this.state.hovered && this.state.id === 4 ? "Joseph!" : "Joe!";
    const expressBool =
      this.state.hovered && this.state.id === 5 ? "Chrome v8😯" : "Express";
    const reactBool =
      this.state.hovered && this.state.id === 6 ? "this.state.😎" : "React";
    const djangoBool =
      this.state.hovered && this.state.id === 7 ? "MVT 😍" : "Django";

    return (
      <React.Fragment>
        <div className="container topRow row">
          <div className="holder h1" />
          <div className="holder h2" />
          <div className="holder h3" />
          <div className="holder h4" />
          <div className="holder h1">
            <h3
              onMouseOver={this.onHover}
              onMouseLeave={this.exitHover}
              className="blackText animated shake"
              id="js"
            >
              {jsBool}
            </h3>
          </div>
          <div className="holder h2" />
          <div className="holder h3" />
        </div>
        <div className="container row">
          <div className="holder h1" />
          <div className="holder h2">
            <h3
              onMouseOver={this.onHover}
              onMouseLeave={this.exitHover}
              className="whiteText animated bounce"
              id="py"
            >
              {pythonBool}
            </h3>
          </div>
          <div className="holder h3" />
          <div className="holder h4" />
          <div className="holder h1" />
          <div className="holder h2">
            <h3
              onMouseOver={this.onHover}
              onMouseLeave={this.exitHover}
              className="whiteText animated bounce"
              id="flask"
            >
              {flaskBool}
            </h3>
          </div>
          <div className="holder h3" />
        </div>
        <div className="nameHolderWrapper">
          <div className="nameHolder">
            <h1 className="animated rotateIn" id="leftName">
              Hey! I{"'"}m
            </h1>
          </div>
          <div className="nameHolder-2">
            <h1
              onMouseOver={this.onHover}
              onMouseLeave={this.exitHover}
              className="animated rotateIn"
              id="rightName"
            >
              {nameBool}
            </h1>
          </div>
        </div>
        <div className="container row">
          <div className="holder h1" />
          <div className="holder h2" />
          <div className="holder h3">
            <h3
              onMouseOver={this.onHover}
              onMouseLeave={this.exitHover}
              className="blackText animated shake"
              id="express"
            >
              {expressBool}
            </h3>
          </div>
          <div className="holder h4">
            {" "}
            <div onClick={this.handleScroll} id="arrow" />
          </div>
          <div className="holder h1" />
          <div className="holder h2" />
          <div className="holder h3" />
        </div>
        <div className="container row">
          <div className="holder h1">
            <h3
              onMouseOver={this.onHover}
              onMouseLeave={this.exitHover}
              className="blackText animated shake"
              id="react"
            >
              {reactBool}
            </h3>
          </div>
          <div className="holder h2" />
          <div className="holder h3" />
          <div className="holder h4" />
          <div className="holder h1" />
          <div className="holder h2">
            <h3
              onMouseOver={this.onHover}
              onMouseLeave={this.exitHover}
              className="whiteText animated bounce"
              id="django"
            >
              {djangoBool}
            </h3>
          </div>
          <div id="thing" className="holder h3" />
        </div>
      </React.Fragment>
    );
  }
}
