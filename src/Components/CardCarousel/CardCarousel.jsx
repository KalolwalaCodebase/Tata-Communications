import React from "react";
import { Carousel } from "react-bootstrap";
// import "./Carosoule.css";
const CardCarousel = () => {
  return (
    <div className="carousel-container-down-flex">
      <Carousel>
        <Carousel.Item>
          {/* <div className="video-conatiner"> */}
          <img src="./award1.svg" alt="" />
          {/* </div> */}
        </Carousel.Item>
        <Carousel.Item>
          {/* <div className="video-conatiner"> */}
          <img src="./award2.svg" alt="" />
          {/* </div> */}
        </Carousel.Item>
        <Carousel.Item>
          {/* <div className="video-conatiner"> */}
          <img src="./award3.svg" alt="" />
          {/* </div> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CardCarousel;
