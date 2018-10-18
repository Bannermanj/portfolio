import React, { Component } from "react";
import "./App.css";

//Custom Components
import LandingPage from "./LandingPage";
import Stripes from "./Stripes";
import Chart from "./Chart";
import Contact from "./Contact";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Stripes />
        <Chart />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
