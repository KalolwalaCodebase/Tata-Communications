import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import './Carouseldown.css';

const Carouseldown = ({ setIsBlueHeading }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlide = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    // Check if the third slide is in view (assuming zero-based index)
    if (selectedIndex === 2) {
      // Trigger state change in the parent component
      setIsBlueHeading(true);
    } else {
      // Reset state if not on the third slide
      setIsBlueHeading(false);
    }
  };

  return (
    <Carousel className="carousel-awards" indicators={false} interval={2000} activeIndex={activeIndex} onSelect={handleSlide}>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <img className="carousel-image" src="./award1.svg" alt="" />
          <img className="carousel-image" src="./award2.svg" alt="" />
          <img className="carousel-image" src="./award3.svg" alt="" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <img className="carousel-image" src="./award4.svg" alt="" />
          <img className="carousel-image" src="./award5.svg" alt="" />
          <img className="carousel-image" src="./award6.svg" alt="" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <img className="carousel-image" src="./award7.svg" alt="" />
          <img className="carousel-image" src="./award8.svg" alt="" />
          <img className="carousel-image" src="./award9.svg" alt="" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carouseldown;
