import axios from "axios";


const backendBaseURL  = axios.create({
    baseURL: "http://localhost:8080",
});


export class Api {

    /*************** Backend APIS *****************/
    async getTopTweets(queryString) {
      backendBaseURL.get(`/twitter/search?queryString=${queryString}&minActivity=10&maxLoop=3`).then((response) => {
        console.log("Top Tweets: ", response.data);
          return response.data 
      }).catch(e => console.log(e))
    }
}