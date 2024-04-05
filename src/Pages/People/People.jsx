import React from 'react'
import { Mainsection } from '../../Components/HeroSection/Mainsection'
import Cards from '../../Components/Card'
import ImageCard from '../../Components/CardComponent/ImageCard';

const People = ({activeTab,HeroSectionContent}) => {
       const headingarr = [ ['Employee','/peoplecard1.png'],[ 'Customer','/peoplecard2.png'], ['Supply chain','peoplecard3.png']];
  return (
       <>
 
       <Mainsection
      videolink={"/peoplevideo.mp4"}
      activeTab={activeTab}
      HeroSectionContent={HeroSectionContent}
    />
       <div className='container-sustainability'>
         {headingarr.map((heading, id) => (
           <ImageCard activeTab={activeTab} hoverCardColor={'#DC67B9'} cardsColor={'#F395D2'} key={id} heading={heading} imageurl={heading[1]} /> // Pass the heading directly as a string
         ))}
       </div>
    </>
  )
}

export default People
