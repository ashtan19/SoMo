<p align="center">
<img src="src/client/images/PNG%20Somo%20Text%20Logo%20and%20Tagline.png" alt="logo" width="550"/>
</p>

[![Build Status](https://travis-ci.org/crsandeep/simple-react-full-stack.svg?branch=master)](https://travis-ci.org/crsandeep/simple-react-full-stack)

## A web platform for discovering social movements around the world

## Introduction

2020 has been a very hard year for all of us, we have all faced unique challenges and hardships. From COVID-19, to civil unrest, and plenty of injustice, people all over the world are fighting for a better future. In these unprecedented times, when we are more disconnected and isolated than ever, it is important to be informed of protests and other social movements around the world.

Somo is an intuitive map that displays where social movements are trending around the world. Our goal is to show the public where the support for these movements is coming from and raise further awareness for their cause.

## Tech Stack and Tools

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/) / [Express](https://expressjs.com/)
- [Ant Design](https://ant.design/)
- APIs: [Twitter](https://developer.twitter.com/en), [OpenCage](https://opencagedata.com/api), [GetDayTrends](https://getdaytrends.com/)

## Features

Somo is a full stack [React](https://reactjs.org/) application with a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) backend. Client side code is written in React and the backend API is written using Express.

### Example Page

![Somo Example](https://github.com/ashtan19/SoMo/blob/main/src/client/images/SomoFrontPage.png)

### Description

Somo provides a detailed description of all major social movements around the world

### Map

Our map provides a great view of where in the world a particular social movement is happening

### Twitter Feed

The Twitter Sidebar provides the top tweets of the social movement to keep you updated on the latest news

## Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/ashtan19/SoMo.git

# Go inside the directory
cd SoMo

# Install dependencies
npm install

# Start development server
npm run dev
```

## Folder Structure

All the source code will be inside **src** directory. Inside src, there is client and server directory. All the frontend code (react, css, js and any other assets) will be in client directory. Backend Node.js/Express code will be in the server directory.

## Future Developments

- Implement interactive markers on the map to display number of tweets & country
- Zoom function where the user can look at smaller countries in more detail
- Filter inappropriate and irrelevant tweets
- Auto generate trending hashtags and filter based on relevance
- Have links to learn more or donate to support causes
