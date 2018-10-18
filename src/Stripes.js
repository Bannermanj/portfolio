import React, { Component } from "react";
import "./Stripes.css";
import davidsonLogo from "./img/davidsonCollegeLogo.png";
import ecuLogo from "./img/ecuLogo13.jpg";
import freshLogo from "./img/freshDirect.png";

export default class Stripes extends Component {
  state = {
    changeDesign: false,
    workPlaceDavidson: false,
    workPlaceEast: false,
    workPlaceFresh: false
  };

  handleToggle = event => {
    const name = event.target.name;

    //handle Davidson
    if (
      "this.state." + name === "this.state.workPlaceDavidson" &&
      this.state.workPlaceDavidson === false
    ) {
      this.setState({ workPlaceDavidson: true });
    } else if (
      "this.state." + name === "this.state.workPlaceDavidson" &&
      this.state.workPlaceDavidson === true
    ) {
      this.setState({ workPlaceDavidson: false });
    }

    //handle ECU
    if (
      "this.state." + name === "this.state.workPlaceEast" &&
      this.state.workPlaceEast === false
    ) {
      this.setState({ workPlaceEast: true });
    } else if (
      "this.state." + name === "this.state.workPlaceEast" &&
      this.state.workPlaceEast === true
    ) {
      this.setState({ workPlaceEast: false });
    }

    //handle Fresh Direct
    if (
      "this.state." + name === "this.state.workPlaceFresh" &&
      this.state.workPlaceFresh === false
    ) {
      this.setState({ workPlaceFresh: true });
    } else if (
      "this.state." + name === "this.state.workPlaceFresh" &&
      this.state.workPlaceFresh === true
    ) {
      this.setState({ workPlaceFresh: false });
    }

    //handle design functionality
    if (
      "this.state." + name === "this.state.changeDesign" &&
      this.state.changeDesign === false
    ) {
      this.setState({ changeDesign: true });
    } else if (
      "this.state." + name === "this.state.changeDesign" &&
      this.state.changeDesign === true
    ) {
      this.setState({ changeDesign: false });
    }
  };

  render() {
    const designButton = this.state.changeDesign
      ? "changeDesignButtonSecondary"
      : "changeDesignButton";
    const cssDesign = this.state.changeDesign ? "secondColorOne" : "black";
    const designWording = this.state.changeDesign
      ? "I Hate it! Take Me Back"
      : "Change Colors?";
    const secondaryDesign = this.state.changeDesign
      ? "secondColorTwo"
      : "white";

    return (
      <React.Fragment>
        <div id="stripesFade" className={cssDesign} />
        <div className={secondaryDesign}>
          <h2 id="aboutTitle">Average Joe</h2>
          <button
            className={designButton}
            type="submit"
            name="changeDesign"
            onClick={this.handleToggle}
          >
            {designWording}
          </button>
        </div>
        <div className={cssDesign}>
          <p id="firstAbout" className="aboutParagraphBlack">
            So...ummm...I like to build stuff!
          </p>
        </div>

        <div className={secondaryDesign}>
          <p className="aboutParagraphWhite">
            I{"'"}ve been coding professionally as a software developer for
            about 2 years now, doing freelance, pro-bono and of course ordinary,
            fulltime 9-5 type work as well.
          </p>
        </div>
        <div className={cssDesign}>
          <p className="aboutParagraphBlack">
            I mainly tend to do server-side development, but I absolutely love
            working on the frontend as well. When my face isn{"'"}t buried in
            front of a computer screen, I{"'"}m likely playing soccer or
            writing.
          </p>
        </div>
        <div className={secondaryDesign}>
          <p className="aboutParagraphBlack">
            Here are a couple of places I{"'"}ve had the pleasure of working
            at/with.
          </p>
          {this.state.changeDesign === false && (
            <React.Fragment>
              <button
                name="workPlaceDavidson"
                onClick={this.handleToggle}
                className="workPlaces"
                disabled={this.state.workPlaceEast || this.state.workPlaceFresh}
              >
                Davidson College
              </button>
              <button
                name="workPlaceEast"
                onClick={this.handleToggle}
                className="workPlaces"
                disabled={
                  this.state.workPlaceDavidson || this.state.workPlaceFresh
                }
              >
                East Carolina University
              </button>
              <button
                name="workPlaceFresh"
                onClick={this.handleToggle}
                className="workPlaces"
                disabled={
                  this.state.workPlaceEast || this.state.workPlaceDavidson
                }
              >
                Fresh Direct{" "}
              </button>
            </React.Fragment>
          )}

          {this.state.changeDesign === true && (
            <React.Fragment>
              <button
                name="workPlaceDavidson"
                onClick={this.handleToggle}
                className="workPlacesSecondary"
                disabled={this.state.workPlaceEast || this.state.workPlaceFresh}
              >
                Davidson College
              </button>
              <button
                name="workPlaceEast"
                onClick={this.handleToggle}
                className="workPlacesSecondary"
                disabled={
                  this.state.workPlaceDavidson || this.state.workPlaceFresh
                }
              >
                East Carolina University
              </button>
              <button
                name="workPlaceFresh"
                onClick={this.handleToggle}
                className="workPlacesSecondary"
                disabled={
                  this.state.workPlaceEast || this.state.workPlaceDavidson
                }
              >
                Fresh Direct
              </button>
            </React.Fragment>
          )}
        </div>
        <div id="bottomStripe" className={cssDesign}>
          {this.state.workPlaceDavidson === true && (
            <div className="workStuff">
              <img
                className="workPlacesDynamic"
                src={davidsonLogo}
                alt="The Davidson College Logo"
              />
              <p id="dc" className="workPlacesDynamic">
                Davidson College <br />
                Full Stack Developer
              </p>
            </div>
          )}
          {this.state.workPlaceEast === true && (
            <div className="workStuff">
              <img
                id="ecuLogo"
                className="workPlacesDynamic"
                src={ecuLogo}
                alt="The East Carolina University Logo"
              />
              <p id="ecu" className="workPlacesDynamic">
                East Carolina University <br />
                Student/Junior Web Developer
              </p>
            </div>
          )}
          {this.state.workPlaceFresh === true && (
            <div id="freshStuff">
              <img
                className="workPlacesDynamic"
                src={freshLogo}
                alt="The Fresh Direct Logo"
              />
              <p id="freshy" className="workPlacesDynamic">
                Fresh Direct Stuff <br />
                Mobile Developer Intern
              </p>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
