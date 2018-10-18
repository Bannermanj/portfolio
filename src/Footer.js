import React, { Component } from "react";
import "./Footer.css";
import upArrow from "./img/upArrow.png";
import linkedin from "./img/linkedinLogo.png";
import github from "./img/githubLogo.png";

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div id="bottomFooter">
          <a href="https://github.com/Bannermanj" target="_blank">
            <img id="github" src={github} />
          </a>
          <p id="footerName">Joseph Bannerman ©2018</p>
        </div>
      </div>
    );
  }
}
