import React from 'react'
import { Mainsection } from '../../Components/HeroSection/Mainsection';
import Cards from '../../Components/Card';
import Cardimg from './../../Components/Cardimg';

const Community = ({activeTab,HeroSectionContent}) => {
       const headingarr = [ ['Education','/planetStudent.png'], ['Sustainable Livelihoods',"/planetNaturesmall.png"], ['Healthcare and disaster relief','/PlanetHealthsmall.png'],['Environment','/planetEnvironmentsmall.png']];
       return (
         <>
         <div className="wrapper-community-cards">
           <div className="planet-main">
           <Mainsection videolink={'/Community.mp4'} activeTab={activeTab} HeroSectionContent={HeroSectionContent} />
         </div>
         <div className='container-sustainability'>
           {headingarr.map((heading, id) => (
             <Cardimg activeTab={activeTab} hoverCardColor={'#00B3BD'} cardsColor={'#38D1DA'} key={id} heading={heading} cardWidth={headingarr.length} /> // Pass the heading directly as a string
           ))}
         </div>
         </div>
        
         </>
         
       )
}

export default Community
