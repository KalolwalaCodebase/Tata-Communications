import React from "react";
import "./Sustainability.css";
import Cards from "./../../Components/Card";
import { Mainsection } from "../../Components/HeroSection/Mainsection";

const Sustainability = ({ activeTab, HeroSectionContent }) => {
  const headingarr = [
    "SUSTAINABILITY GOVERNANCE",
    "Sustainability commitments",
    "FY24 GOALS & PROGRESS",
    "UNSUSTAINABLE DEVELOPMENT GOALS",
    "MATERIALITY",
    "STAKEHOLDER ENGAGEMENT",
  ];

  return (
    <>
      <Mainsection
        videolink={"/Sustainability.mp4"}
        activeTab={activeTab}
        HeroSectionContent={HeroSectionContent}
      />
      <div className="container-sustainability">
        {headingarr.map((heading, id) => (
          <Cards
            activeTab={activeTab}
            hoverCardColor={"#7A63AB"}
            key={id}
            heading={heading}
            cardsColor={"#9E92B4"}
            cardWidth={headingarr.length}
          /> 
        ))}
      </div>
    </>
  );
};

export default Sustainability;
