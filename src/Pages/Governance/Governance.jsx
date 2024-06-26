import React from 'react'
import "./Governance.css"
import { Mainsection } from '../../Components/HeroSection/Mainsection';
import Cards from '../../Components/Card';
import CardContainergov from '../../Components/CardContainerGovernance/CardContainergov';
const Governance = ({activeTab,HeroSectionContent}) => {
       const headingarr = [ ['LEADERSHIP AND INTEGRITY AT THE CORE','/cardimg01.svg','/cardimg07.svg','/Governance/leadership-and-integrity-at-the-core'],
        ['RISK AND RESILIENCE','/cardimg02.svg','cardimg08.svg','/Governance/risk-and-resilience'],
         ['HUMAN RIGHTS','/cardimg03.svg','/cardimg09.svg','/Governance/human-rights'],
        ['POLICIES AND PROCEDURES','/cardimg04.svg','/cardimg10.svg',"/Governance/policies-and-procedures"],
        ['ECONOMIC PERFORMANCE','/cardimg05.svg','/cardimg11.svg',"/Governance/economic-performance"]
        ,['CULTIVATING INNOVATIONS','/cardimg06.svg','/cardimg12.svg','/Governance/cultivating-innovations']];
  return (
   <>
 
         <Mainsection
        videolink={"/Main2.mp4"}
        activeTab={activeTab}
        HeroSectionContent={HeroSectionContent}
      />
         <div className='container-Governance'>
           {headingarr.map((heading, id) => (
                        <CardContainergov activeTab={activeTab} hoverCardColor={'#3D86C6'} cardsColor={'#3D86C6'} key={id} heading={heading} />
           ))}
         </div>
      </>
  )
}

export default Governance
