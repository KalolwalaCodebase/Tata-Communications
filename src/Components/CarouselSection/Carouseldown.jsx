import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carosoule.css";
const Carouseldown = () => {
  return (
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/landing-page-slider-01.png"
        alt=""
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/landing-page-slider-02.png"
        alt=""
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/landing-page-slider-03.png"
        alt=""
      />
    </Carousel.Item>
  </Carousel>
  
  );
};

export default Carouseldown;

