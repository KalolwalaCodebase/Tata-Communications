import React from "react";
import "./Sustainability.css";
import Cards from "./../../Components/Card";
import CardContainergov from '../../Components/CardContainerGovernance/CardContainergov';

import { Mainsection } from "../../Components/HeroSection/Mainsection";

const Sustainability = ({ activeTab, HeroSectionContent }) => {

  const headingarr = [ ['SUSTAINABILITY GOVERNANCE','/Strategy01.svg','/Strategy07.svg'],
  ['SUSTAINABILITY COMMITMENTS','/Strategy02.svg','/Strategy08.svg'],
   ['FY24 GOALS & PROGRESS','/Strategy03.svg','/Strategy09.svg'],
  ['SUSTAINABLE DEVELOPMENT GOALS','/Strategy04.svg','/Strategy10.svg'],
  ['MATERIALITY','/Strategy05.svg','/Strategy11.svg']
  ,['STAKEHOLDER ENGAGEMENT','/Strategy06.svg','/Strategy12.svg']];

  return (
    <>
      <Mainsection
        videolink={"/Sustainability.mp4"}
        activeTab={activeTab}
        HeroSectionContent={HeroSectionContent}
      />
      <div className="container-sustainability">
        {headingarr.map((heading, id) => (
          
          
          <CardContainergov activeTab={activeTab} hoverCardColor={'#7A63AB'} cardsColor={'#9E92B4'} key={id} heading={heading} />
          
          
        
        ))}
      </div>
    </>
  );
};

export default Sustainability;
