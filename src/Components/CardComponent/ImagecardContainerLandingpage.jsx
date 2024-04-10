import React from "react";
import "./imagecard.css";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
const ImagecardContainerLandingpage = ({ imageurl, color, heading,activeTab,url}) => {
  console.log(url,"here is the url");
  console.log("here is sct",activeTab)
  const formatHeadingForLink = (heading) => {
    console.log(heading)
    return heading.replace(/\s+/g, '-').toLowerCase();
  };
  return (
    <div className="parent-image-card-component">
      <div className="image-container-card">
        <img src={imageurl} alt="" />
      </div>
      <div className="image-container-card-heading">
        <motion.h2 initial={{opacity:0,x:"-100px"}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,delay:0.3,ease:"easeIn"}} className="CardHeading-second-specail poppins-light span-inital">
          {Array.isArray(heading)?heading[0]:heading} <br />
          <Link className="read-more-btn-second poppins-regular specail-btn-show-on-hover" to={url}>
  READ MORE {">"}
</Link>
{" "}
        </motion.h2>
      </div>
    </div>
  );
};

export default ImagecardContainerLandingpage;
