import React from 'react'
import { Mainsection } from '../../Components/HeroSection/Mainsection'
import Cards from '../../Components/Card'
import './Planets.css'
const Planets = ({activeTab,HeroSectionContent}) => {
  const headingarr = [ 'CLIMATE CHANGE', 'CIRCULAR ECONOMY', 'WATER MANAGMENT'];
  return (
    <>
    <div className="planet-main">
      <Mainsection videolink={'/Planetmainsection.mp4'} activeTab={activeTab} HeroSectionContent={HeroSectionContent} />
    </div>
    <div className='container-sustainability'>
      {headingarr.map((heading, id) => (
        <Cards activeTab={activeTab} hoverCardColor={'#4F570A'} cardsColor={'#B0BC25'} key={id} heading={heading} cardWidth={headingarr.length} /> // Pass the heading directly as a string
      ))}
    </div>
    </>
    
  )
}

export default Planets
