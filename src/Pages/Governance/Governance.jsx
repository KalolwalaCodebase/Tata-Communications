import React from 'react'
import "./Governance.css"
import { Mainsection } from '../../Components/HeroSection/Mainsection';
import Cards from '../../Components/Card';
import CardContainergov from '../../Components/CardContainerGovernance/CardContainergov';
const Governance = ({activeTab,HeroSectionContent}) => {
       const headingarr = [ ['Leadership and Integrity at the Core','/cardimg01.svg','/cardimg07.svg'],
        ['risk and risilience','/cardimg02.svg','cardimg08.svg'],
         ['Human Rights','/cardimg03.svg','/cardimg09.svg'],
        ['policies and procedure','/cardimg04.svg','/cardimg10.svg'],
        ['economic perfomance','/cardimg05.svg','/cardimg11.svg']
        ,['cultavating inovations','/cardimg06.svg','/cardimg12.svg']];
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
