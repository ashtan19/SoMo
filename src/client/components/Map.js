import React, { Component } from "react";
import "../CSS/MapStyles.css";
import "antd/dist/antd.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import twitterLogo from "../images/PNG Twitter Map Marker.png"

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export default class Map extends Component {
  componentDidMount() {
    console.log(this.props.locationMap); 
  }

  render() {
    const MapChart = () => {
      return (
        <ComposableMap
          projectionConfig={{
            scale: 155,
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#65dabe"
                  stroke="white"
                />
              ))
            }
          </Geographies>
          {this.props.locationMap && this.props.locationMap.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
              <g transform="translate(-12, -30)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                transform="translate(100, 100) rotate(45)"
                viewBox="0 0 1280 1024"
                width="100"
                height="100"
                transform="translate(-500, -500)"
                
                // {...props}
              >
                
                <path
                  d="M774.53 637.7c0-62.69-50.22-113.58-112.38-114.11-62.52-.53-114.07 50.67-114.34 113.61-.22 50.15 31.71 92.82 76.23 108.35 5.37 1.87 10.07 5.3 13.35 9.96l23.78 33.84 22.94-32.65a31.29 31.29 0 0115.04-11.46c43.93-15.72 75.38-57.93 75.38-107.54z"
                  fill="#262626"
                  stroke="#262626"
                  strokeWidth={11}
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  transform="translate(-500, -500)"

                />
                <path
                  d="M730.86 596.3a55.37 55.37 0 01-16.42 4.67c5.9-3.67 10.44-9.49 12.57-16.43-5.53 3.4-11.64 5.87-18.16 7.2-5.22-5.77-12.65-9.38-20.87-9.38-15.79 0-28.59 13.29-28.59 29.69 0 2.33.25 4.59.74 6.77-23.76-1.24-44.83-13.06-58.94-31.02-2.46 4.38-3.87 9.48-3.87 14.93 0 10.3 5.05 19.39 12.72 24.71-4.69-.15-9.1-1.49-12.95-3.71v.37c0 14.38 9.86 26.38 22.94 29.11-2.4.68-4.93 1.04-7.53 1.04-1.84 0-3.63-.19-5.38-.53 3.64 11.79 14.2 20.38 26.71 20.62-9.79 7.96-22.12 12.71-35.51 12.71-2.31 0-4.58-.14-6.82-.42 12.65 8.42 27.68 13.34 43.83 13.34 52.6 0 81.36-45.24 81.36-84.47 0-1.29-.03-2.57-.08-3.84 5.57-4.18 10.41-9.4 14.25-15.36z"
                  fill="#f9f9f9"
                  transform="translate(-500, -500)"
                />
              </svg>
              </g>
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
              >
                {}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      );
    };

    return (
      <div className="map-container">
        <MapChart />
      </div>
    );
  }
}


// const markers = [
//   {
//     markerOffset: -30,
//     name: "Buenos Aires",
//     coordinates: [-58.3816, -34.6037],
//   },
//   { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
//   { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
//   { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
//   { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
//   { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
//   { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
//   { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
//   { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
//   { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
//   { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
//   { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] },
// ];