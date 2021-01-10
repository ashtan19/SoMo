import React, { Component } from "react";
import MainInfo from "./components/MainInfo";
import NavBar from "./components/NavBar";
import Map from "./components/Map";
import "./index.css";

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <MainInfo />
          <Map />
        </div>
      </div>
    );
  }
}
