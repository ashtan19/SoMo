import React, { Component } from "react";
import MainInfo from "./components/MainInfo";
import NavBar from "./components/NavBar";
import Map from "./components/Map";
import OtherHashtags from "./components/OtherHashtags";
import "./index.css";
import axios from "axios";

const backendBaseURL = axios.create({
  baseURL: "http://localhost:8080",
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      locationMap: null,
      queryString: "blacklivesmatter",
    };
  }

  componentDidMount() {
    this.getTweets("blacklivesmatter");
  }

  getTweets = async (queryString) => {
    backendBaseURL
      .get(
        "/twitter/search?queryString=" +
          queryString +
          "&minActivity=0&maxLoop=1"
      )
      .then((response) => {
        console.log("Top Tweets: ", response.data);
        this.setState({
          tweets: response.data.tweets,
          locationMap: response.data.locationMap,
          queryString: queryString,
        });
      })
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <div>
        <div>
          <NavBar getTweets={this.getTweets} />
        </div>
        <div>
          <MainInfo queryString={this.state.queryString} />
          <Map locationMap={this.state.locationMap} />
        </div>
        <div>
          <OtherHashtags />
        </div>
      </div>
    );
  }
}
