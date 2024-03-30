import React from 'react'
import { Mainsection } from '../../Components/HeroSection/Mainsection'
import Cards from '../../Components/Card'

const People = ({activeTab,HeroSectionContent}) => {
       const headingarr = [ 'Employee', 'Customer', 'Supply chain'];
  return (
       <>
 
       <Mainsection
      videolink={"/peoplevideo.mp4"}
      activeTab={activeTab}
      HeroSectionContent={HeroSectionContent}
    />
       <div className='container-sustainability'>
         {headingarr.map((heading, id) => (
           <Cards activeTab={activeTab} hoverCardColor={'#DC67B9'} cardsColor={'#F395D2'} key={id} heading={heading} cardWidth={headingarr.length} /> // Pass the heading directly as a string
         ))}
       </div>
    </>
  )
}

export default People
