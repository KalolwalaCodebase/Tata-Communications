import React, { useState } from "react";
import { Link } from "react-router-dom";
const Cards = ({
  activeTab,
  heading,
  cardWidth,
  cardsColor,
  hoverCardColor,
}) => {
  const [cardColorIS, setCArdColor] = useState(cardsColor);
  const handleMouseOver = () => {
    setCArdColor(hoverCardColor);
  };

  const handleMouseOut = () => {
    setCArdColor(cardsColor);
  };
  const formatHeadingForLink = (heading) => {
    // Replace spaces with dashes and convert to lowercase
    console.log("the heading is ",heading)
    return heading.replace(/\s+/g, "-").toLowerCase();
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="card-container"
      style={{ width: `${100 / cardWidth}%`, backgroundColor: cardColorIS }}
    >
      <div className="cardcustome">
        <h2 className="CardHeading poppins-light">{heading}</h2>
        <img className="globe" src="/Demologo.png" alt="" />
        <Link
          className="read-more-btn poppins-regular"
          to={`/${activeTab}/${formatHeadingForLink(heading)}`}
        >
          READ MORE{">"}
        </Link>
      </div>
    </div>
  );
};

export default Cards;
