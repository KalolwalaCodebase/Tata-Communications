import React from "react";
import "./Sustainability.css";
import Cards from "./../../Components/Card";
import CardContainergov from '../../Components/CardContainerGovernance/CardContainergov';

import { Mainsection } from "../../Components/HeroSection/Mainsection";

const Sustainability = ({ activeTab, HeroSectionContent }) => {

  const headingarr = [ ['SUSTAINABILITY GOVERNANCE','/cardimg01.svg','/cardimg07.svg'],
  ['SUSTAINABILITY COMMITMENTS','/cardimg02.svg','cardimg08.svg'],
   ['FY24 GOALS & PROGRESS','/cardimg03.svg','/cardimg09.svg'],
  ['SUSTAINABLE DEVELOPMENT GOALS','/cardimg04.svg','/cardimg10.svg'],
  ['MATERIALITY','/cardimg05.svg','/cardimg11.svg']
  ,['STAKEHOLDER ENGAGEMENT','/cardimg06.svg','/cardimg12.svg']];

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
