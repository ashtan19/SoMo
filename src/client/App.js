import React, { Component } from "react";
import MainInfo from "./components/MainInfo";
import NavBar from "./components/NavBar";
import Map from "./components/Map";
import OtherHashtags from "./components/OtherHashtags";
import "./index.css";
import axios from "axios";


const backendBaseURL  = axios.create({
    baseURL: "http://localhost:8080",
});

export default class App extends Component {
  componentDidMount() {}

  getTweets = async () => {
    backendBaseURL.get(`/twitter/search?queryString=worldcleanupday&minActivity=10&maxLoop=3`).then((response) => {
      console.log("Top Tweets: ", response.data);
    }).catch(e => console.log(e))
  }

  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <MainInfo />
          <Map />
        </div>
        <div>
          <OtherHashtags />
        </div>
      </div>
    );
  }
}
