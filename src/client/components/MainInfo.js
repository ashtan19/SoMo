import React, { Component } from "react";
import "../CSS/MainInfoStyles.css";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
// import {Api} from "../apis/apis"
import axios from "axios";


const backendBaseURL  = axios.create({
    baseURL: "http://localhost:8080",
});

const mainhashtag = "#BLM";
const description =
  "Black Lives Matter (BLM) is a decentralized political and social movement advocating for non-violent civil disobedience in protest against incidents of police brutality and all racially motivated violence against black people. While there are specific organizations like the Black Lives Matter Global Network that label themselves simply as 'Black Lives Matter', the Black Lives Matter movement comprises a broad array of people and organizations. The slogan 'Black Lives Matter' itself remains untrademarked by any group.[7] The broader movement and its related organizations typically advocate against police violence towards black people as well as for various other policy changes considered to be related to black liberation.";

export default class MainInfo extends Component {
  componentDidMount() {}

  getTweets = async () => {
    backendBaseURL.get(`/twitter/search?queryString=worldcleanupday&minActivity=10&maxLoop=3`).then((response) => {
      console.log("Top Tweets: ", response.data);
    }).catch(e => console.log(e))
  }

  render() {
    // maximum length of string must be .. characters long, replace rest with "..."
    if (description.length > 330) {
      var desc = description.slice(0, 330) + " ...";
    } else {
      var desc = description;
    }
    return (
      <div className="main-info-container">
        <Row className="main-hashtag">{mainhashtag}</Row>
        <Row className="main-description">{desc}</Row>
        <Row className="learn-more-button">Learn more</Row>
        <Row className="line-separator" />
      </div>
    );
  }
}
