import React, { Component } from "react";
import "../CSS/NavBarStyles.css";
import "antd/dist/antd.css";
import teamlogo from "../images/PNG Somo Text Logo.png";

import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

export default class NavBar extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onSearch = (value) => {
    this.props.getTweets(value.replace("#", ""));
  };

  render() {
    return (
      <div className="nav-bar-container">
        <div className="nav-bar-background">
          <img src={teamlogo} className="team-logo" />
          <Search
            placeholder="search #hashtags"
            allowClear
            onSearch={this.onSearch}
            style={{
              width: "35%",
              marginLeft: "50%",
            }}
          />
        </div>
      </div>
    );
  }
}
