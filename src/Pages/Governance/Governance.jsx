import React from 'react'
import "./Governance.css"
import { Mainsection } from '../../Components/HeroSection/Mainsection';
import Cards from '../../Components/Card';
const Governance = ({activeTab,HeroSectionContent}) => {
       const headingarr = [ 'Leadership and Integrity at the Core', 'Sustainability in Action', 'Human Rights','policies and procedure','economic perfomance','cultavating inovations'];
  return (
   <>
 
         <Mainsection
        videolink={"/Main2.mp4"}
        activeTab={activeTab}
        HeroSectionContent={HeroSectionContent}
      />
         <div className='container-sustainability'>
           {headingarr.map((heading, id) => (
             <Cards activeTab={activeTab} hoverCardColor={'#3D86C6'} cardsColor={'#3D86C6'} key={id} heading={heading} cardWidth={headingarr.length} /> // Pass the heading directly as a string
           ))}
         </div>
      </>
  )
}

export default Governance
