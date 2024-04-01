import React from "react";
import "./imagecard.css";
import { Link } from "react-router-dom";
const ImageCard = ({ imageurl, color, heading,activeTab}) => {
  console.log(heading,"here is the heading")
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
        <h2 className="CardHeading-second-specail poppins-light span-inital">
          {Array.isArray(heading)?heading[0]:heading} <br />
          <Link className="read-more-btn-second poppins-regular specail-btn-show-on-hover" to={`/${activeTab}/${formatHeadingForLink(heading[0])}`}>
  READ MORE {">"}
</Link>
{" "}
        </h2>
      </div>
    </div>
  );
};

export default ImageCard;
