import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import "../CSS/OtherHashtagsStyles.css";
import "antd/dist/antd.css";

const hashtags = [
  "#covid19",
  "#globalwarming",
  "#humanrights",
  "#LGBTQ+",
  "#feminism",
  "#justiceforchristinedacera",
  "#freedomofspeech",
  "#racism",
  "#farmerprotests",
  "#pipelineprotests",
  "#healthcare",
];

function scrollToTop() {
  scroll.scrollToTop();
}

export default class OtherHashtags extends Component {
  componentDidMount() {}

  render() {
    const tags = hashtags.map((t) => {
      return (
        <div className="other-hashtags">
          <button
            onClick={() => {
              scrollToTop();
              this.props.getTweets("justiceforchristinedacera");
            }}
            className="other-hashtag"
          >
            {t}
          </button>
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
