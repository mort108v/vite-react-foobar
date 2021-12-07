import React from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
