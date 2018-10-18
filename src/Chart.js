import React, { Component } from "react";
import "./Chart.css";
import theLunchProject from "./img/theLunchProject.png";
import acais from "./img/acais.png";
import rockChurch from "./img/rockChurch.png";

export default class Chart extends Component {
  render() {
    let now = new Date();
    console.log(now);

    const techData = [
      { tech: "React", duration: "1 year", size: "1" },
      { tech: "Express", duration: "1 year", size: "1" },
      { tech: "JavaScript", duration: "2 years", size: "2" },
      { tech: "Python", duration: "2 years", size: "2" },
      { tech: "Django", duration: "2 years", size: "2" },
      { tech: "Flask", duration: "2 years", size: "2" }
    ];

    return (
      <div id="chartWrapper">
        <div id="chartWrapperLeft">
          <h2>The Knows</h2>
          {techData.map(function(item, index) {
            return (
              <div
                style={{ width: item.size * 155 + "px" }}
                key={index}
                className="chart"
                id={item.tech}
              >
                {item.tech} - {item.duration}
              </div>
            );
          })}
        </div>
        <div id="chartWrapperRight">
          <h2>Projects</h2>
          <a target="_blank" href="https://howchurchonline.org/">
            <img
              alt="A photo of 'The Heart of Worship Church Website'"
              id="project 1"
              width="225"
              height="140"
              src={rockChurch}
            />
          </a>
          <a target="_blank" href="https://www.accuratecais.com/">
            <img
              alt="A photo of 'The Accurate CAIS Website'"
              id="project 2"
              width="250"
              height="132"
              src={acais}
            />
          </a>
          <a target="_blank" href="https://www.thelunchproject.org/">
            <img
              alt="A photo of 'The Lunch Project Website'"
              id="project 3"
              width="275"
              height="145"
              src={theLunchProject}
            />
          </a>
        </div>
      </div>
    );
  }
}
