import React, { Component } from "react";
import MainInfo from "./components/MainInfo";
import NavBar from "./components/NavBar";
import Map from "./components/Map";
import OtherHashtags from "./components/OtherHashtags";
import "./index.css";

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div style={{ paddingBottom: "20em" }}>
        <div>
          <NavBar />
        </div>
        <div>
          <MainInfo />
          <Map />
        </div>
        <div>
          <OtherHashtags />
        </div>
      </div>
    );
  }
}
