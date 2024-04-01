import React, { useEffect } from "react";
import "./loadingstyle.css";
import loadingPace from './loadingPace';
import Pace from 'pace-js';

const LoadingScreen = ({ isloading }) => {
  useEffect(() => {
    let bodyEl = document.querySelector("body");

    if (isloading) {
      // Initialize Pace only if loading
      Pace.start();
      loadingPace();
      if (bodyEl.classList.contains("hideX")) bodyEl.classList.remove("hideX");
    } else {
      bodyEl.classList.add("hideX");
    }
  }, [isloading]);

  return (
    <>
      <div className={`${isloading === true ? "showX" : "hideX"}`}>
        <div className="loading">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
        <div id="preloader"></div>
      </div>
    </>
  );
};

export default LoadingScreen;
