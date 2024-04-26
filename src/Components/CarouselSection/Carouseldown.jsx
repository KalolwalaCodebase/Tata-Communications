import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import './Carouseldown.css';
import { motion } from 'framer-motion';

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
    <Carousel className="carousel-awards" indicators={false} interval={4000} activeIndex={activeIndex} onSelect={handleSlide}>
      <Carousel.Item>
        <motion.div transition={{staggerChildren:0.3,duration:0.4}}  className="d-flex justify-content-around">
          <motion.img initial={{ scale: 0.7, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }} transition={{duration:0.6,ease:"easeInOut"}} className="carousel-image" src="./award1.svg" alt="" />
          <motion.img initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }} transition={{duration:0.6,ease:"easeInOut"}} className="carousel-image" src="/awardsSustanable.svg" alt="" />
          <motion.img initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }} transition={{duration:0.6,ease:"easeInOut"}} className="carousel-image" src="/awardsEconomictime.svg" alt="" />
        </motion.div>
      </Carousel.Item>
      <Carousel.Item>
      <motion.div transition={{staggerChildren:0.3}} className="d-flex justify-content-around">
        <motion.img initial={{ scale: 0.7, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }} transition={{duration:0.6,ease:"easeInOut"}} className="carousel-image" src="/awardsOurRanked.svg" alt="" />
        <motion.img initial={{ scale: 0.7, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }} transition={{duration:0.6,ease:"easeInOut"}}  className="carousel-image" src="./award5.svg" alt="" />
        <motion.img initial={{ scale: 0.7, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }} transition={{duration:0.6,ease:"easeInOut"}} className="carousel-image" src="./award6.svg" alt="" />
        </motion.div>
      </Carousel.Item>
      <Carousel.Item>
      <motion.div transition={{staggerChildren:0.3}} className="d-flex justify-content-around">
        <motion.img initial={{ scale: 0.7, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }} transition={{duration:0.6,ease:"easeInOut"}}  className="carousel-image" src="./award7.svg" alt="" />
        <motion.img initial={{ scale: 0.7, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }} transition={{duration:0.6,ease:"easeInOut"}}  className="carousel-image" src="./award8.svg" alt="" />
        <motion.img initial={{ scale: 0.7, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }} transition={{duration:0.6,ease:"easeInOut"}} className="carousel-image" src="./award9.svg" alt="" />
        </motion.div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carouseldown;
