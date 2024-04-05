import React from 'react'
import { Mainsection } from '../../Components/HeroSection/Mainsection';
import Cards from '../../Components/Card';
import Cardimg from './../../Components/Cardimg';
import ImageCard from '../../Components/CardComponent/ImageCard';

const Community = ({activeTab,HeroSectionContent}) => {
       const headingarr = [ ['Education','/communitycard1.png'], ['Sustainable Livelihoods',"/communitycard2.png"],['Environment','/communitycard3.png']];
       const imageurl=["communitycard1.png","communitycard2.png","communitycard3.png"]
       return (
         <>
         <div className="wrapper-community-cards">
           <div className="planet-main">
           <Mainsection videolink={'/Community.mp4'} activeTab={activeTab} HeroSectionContent={HeroSectionContent} />
         </div>
         <div className='container-sustainability'>
           {headingarr.map((heading, id) => (
             <ImageCard activeTab={activeTab} hoverCardColor={'#00B3BD'} cardsColor={'#38D1DA'} key={id} heading={heading} imageurl={heading[1]}  /> // Pass the heading directly as a string
           ))}
         </div>
         </div>
         </>
         
       )
}

export default Community
