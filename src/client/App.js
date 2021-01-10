import React, { Component } from "react";
import MainInfo from "./components/MainInfo";
import "./index.css";
import { Col, Row, Button } from "antd";

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div style={{ marginLeft: "4%", marginRight: "4%", marginTop: "7%" }}>
        <MainInfo />
      </div>
    );
  }
}
