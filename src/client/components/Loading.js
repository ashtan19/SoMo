import React from "react";
import logo from "../images/PNG Somo Text Logo and Tagline.png";
import "../CSS/LoadingStyles.css";

export const Loading = () => {
  return (
    <div className="loadingBackground">
      <img className="loading" src={logo} alt="Logo" />
    </div>
  );
};
