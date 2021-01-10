import React, { Component } from "react";
import MainInfo from "./components/MainInfo";
import "./index.css";

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div>
          <MainInfo />
        </div>
      </div>
    );
  }
}
