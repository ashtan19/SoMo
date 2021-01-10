import React, { Component } from "react";
import "../CSS/MainInfoStyles.css";
import { Menu, Dropdown, Button } from "antd";

const mainhashtag = "#BLM";
const description =
  "Black Lives Matter (BLM) is a decentralized political and social movement advocating for non-violent civil disobedience in protest against incidents of police brutality and all racially motivated violence against black people. While there are specific organizations like the Black Lives Matter Global Network that label themselves simply as 'Black Lives Matter', the Black Lives Matter movement comprises a broad array of people and organizations. The slogan 'Black Lives Matter' itself remains untrademarked by any group.[7] The broader movement and its related organizations typically advocate against police violence towards black people as well as for various other policy changes considered to be related to black liberation.";

export default class MainInfo extends Component {
  componentDidMount() {}

  render() {
    // maximum length of string must be .. characters long, replace rest with "..."
    if (description.length > 330) {
      var desc = description.slice(0, 330) + " ...";
    } else {
      var desc = description;
    }
    return (
      <div className="container">
        <div className="main-hashtag">
          <div>{mainhashtag}</div>
        </div>
        <div className="main-description">{desc}</div>
        <div className="learn-more-botton">
          <div>Learn more</div>
        </div>
      </div>
    );
  }
}
