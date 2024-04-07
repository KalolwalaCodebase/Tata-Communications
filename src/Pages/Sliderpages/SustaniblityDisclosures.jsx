import React from 'react'
import HeadBar from '../../Components/Headbar/HeadBar'
import CardContainergov from '../../Components/CardContainerGovernance/CardContainergov';

const SustaniblityDisclosures = ({activeTab}) => {
    const headingarr = [ ['ESG profile','/cardimg01.svg','/cardimg07.svg'],
    ['ESG Addendum','/cardimg02.svg','cardimg08.svg'],
     ['GRI index','/cardimg03.svg','/cardimg09.svg'],
    ['BRSR','/cardimg04.svg','/cardimg10.svg'],
    ['cdp disclosure','/cardimg05.svg','/cardimg11.svg']
    ,['Assurance statement','/cardimg06.svg','/cardimg12.svg']];
  return (
    <div>
    <HeadBar  heading={"sustainability disclosures"} theme={ "#3D86C6"} />
    <div className='container-Governance'>
           {headingarr.map((heading, id) => (
                        <CardContainergov activeTab={activeTab} hoverCardColor={'#3D86C6'} cardsColor={'#3D86C6'} key={id} heading={heading} />
                          
           
           ))}
         </div>
    
  </div>
  )
}

export default SustaniblityDisclosures
