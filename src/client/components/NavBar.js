import React, { Component } from "react";
import "../CSS/NavBarStyles.css";
import "antd/dist/antd.css";

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
  componentDidMount() {}

  onSearch = (value) => {
    this.props.getTweets(value.replace("#", ""));
  };

  render() {
    return (
      <div className="nav-bar-container">
        <div className="nav-bar-background">
          <Search
            placeholder="search #hashtags"
            allowClear
            onSearch={this.onSearch}
            style={{
              width: "35%",
              marginLeft: "63%",
            }}
          />
        </div>
      </div>
    );
  }
}
