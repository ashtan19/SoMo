import React, { Component } from "react";
import MainInfo from "./components/MainInfo";
import NavBar from "./components/NavBar";
import Map from "./components/Map";
import OtherHashtags from "./components/OtherHashtags";
import "./index.css";
import axios from "axios";
import { TweetsDisplay } from "./components/TweetsDisplay";
import { Loading } from "./components/Loading";

const backendBaseURL = axios.create({
  baseURL: "http://localhost:8080",
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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
          "&minActivity=50&maxLoop=5"
      )
      .then((response) => {
        console.log("Top Tweets: ", response.data);
        this.setState({
          tweets: response.data.tweets,
          locationMap: response.data.locationMap,
          queryString: queryString,
          loading: false,
        });
      })
      .catch((e) => console.log(e));
  };

  render() {
    if (!this.state.loading) {
      return (
        <div style={{ paddingBottom: "20em" }}>
          <div>
            <NavBar getTweets={this.getTweets} />
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <MainInfo queryString={this.state.queryString} />
              <Map locationMap={this.state.locationMap} />
            </div>
            <TweetsDisplay tweets={this.state.tweets}></TweetsDisplay>
          </div>
          <div>
            <OtherHashtags getTweets={this.getTweets} />
          </div>
        </div>
      );
    } else {
      return <Loading></Loading>;
    }
  }
}
