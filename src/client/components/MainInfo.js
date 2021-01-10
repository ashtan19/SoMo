import React, { Component } from "react";
import "../CSS/MainInfoStyles.css";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";
import { Api } from "../apis/apis";
import axios from "axios";

const backendBaseURL = axios.create({
  baseURL: "http://localhost:8080",
});

const BLMmainhashtag = "#BLM";
const BLMdescription =
  "Black Lives Matter (BLM) is a decentralized political and social movement advocating for non-violent civil disobedience in protest against incidents of police brutality and all racially motivated violence against black people. While there are specific organizations like the Black Lives Matter Global Network that label themselves simply as 'Black Lives Matter', the Black Lives Matter movement comprises a broad array of people and organizations. The slogan 'Black Lives Matter' itself remains untrademarked by any group. The broader movement and its related organizations typically advocate against police violence towards black people as well as for various other policy changes considered to be related to black liberation.";

const FPmainhashtag = "#FarmersProtest";
const FPdescription = "FPdescription";
const Jmainhashtag = "#JusticeForChristineDacera";
const Jdescription =
  "Flight attendant Christine Dacera's death reignited debates on women, drinking and rape. She is the new rallying point for tens of thousands calling for justice, but to her friends, she is simply Ica. The 23-year-old was 'more than just a headline or a cautionary tale. She is a real person, someone we love,' college friend, Jamie Therese Tejada Gundaya, wrote in eulogy. To the people who knew her best, the hashtag #JusticeforChristineDacera is a fight to remember her for the person she was, as much as it is a fight for justice.";

export default class MainInfo extends Component {

  
  componentDidMount() {}

  render() {
    // maximum length of string must be .. characters long, replace rest with "..."
    // if (description.length > 330) {
    //   var desc = description.slice(0, 330) + " ...";
    // } else {
    //   var desc = description;
    // }

    if (this.props.queryString === "blacklivesmatter") {
      return (
        <div className="main-info-container">
          <Row className="main-hashtag">{BLMmainhashtag}</Row>
          <Row className="main-description">{BLMdescription}</Row>
          <Row className="learn-more-button">Learn more </Row>
          <Row className="line-separator" />
        </div>
      );
    } else if (this.props.queryString === "farmersprotest") {
      return (
        <div className="main-info-container">
          <Row className="main-hashtag">{FPmainhashtag}</Row>
          <Row className="main-description">{FPdescription}</Row>
          <Row className="learn-more-button">Learn more </Row>
          <Row className="line-separator" />
        </div>
      );
    } else if (this.props.queryString === "justiceforchristinedacera") {
      return (
        <div className="main-info-container">
          <Row className="main-hashtag">{Jmainhashtag}</Row>
          <Row className="main-description">{Jdescription}</Row>
          <Row className="learn-more-button">Learn more </Row>
          <Row className="line-separator" />
        </div>
      );
    }
  }
}
