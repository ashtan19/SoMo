import React, { Component } from "react";
import "../CSS/OtherHashtagsStyles.css";
import "antd/dist/antd.css";
import { Row, Col } from "antd";

const hashtags = [
  "#COVID19",
  "#Global Warming",
  "#Human Rights",
  "#LGBTQ+",
  "#Feminism",
  "#Freedom Of Speech",
  "#Racism",
  "#Farmer's Protests",
  "#Pipeline Protests",
  "#Health Care",
];

export default class OtherHashtags extends Component {
  componentDidMount() {}

  render() {
    const tags = hashtags.map((t) => {
      return (
        <div className="other-hashtags">
          <div className="other-hashtag">{t}</div>
        </div>
      );
    });
    return (
      <div className="other-hashtags-container">
        <div className="divider" />
        <div className="other-tags-title">Other trending hashtags</div>
        <div>{tags}</div>
      </div>
    );
  }
}
