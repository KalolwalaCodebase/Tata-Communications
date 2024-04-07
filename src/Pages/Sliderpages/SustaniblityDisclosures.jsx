import React from 'react'
import HeadBar from '../../Components/Headbar/HeadBar'
import CardContainergov from '../../Components/CardContainerGovernance/CardContainergov';
import CardContaniergovclone from '../../Components/CardContainerGovernance/CardContaniergovclone';

const SustaniblityDisclosures = ({activeTab}) => {
    const headingarr = [ ['ESG profile','/cardimg01.svg','/cardimg07.svg','https://esg.churchgatepartners.com/login/companyprofile?id=390033003700240024004100530048004F004B0041004E0041004E00590041004100560041004E004900410053004800570049004E00490024002400'],
    ['ESG Addendum','/cardimg02.svg','cardimg08.svg'],
     ['GRI index','/cardimg03.svg','/cardimg09.svg','/Gri-index'],
    ['BRSR','/cardimg04.svg','/cardimg10.svg','/Brsr'],
    ['cdp disclosure','/cardimg05.svg','/cardimg11.svg']
    ,['Assurance statement','/cardimg06.svg','/cardimg12.svg']];
  return (
    <div>
    <HeadBar  heading={"sustainability disclosures"} theme={ "#3D86C6"} />
    <div className='container-Governance'>
           {headingarr.map((heading, id) => (
                        <CardContaniergovclone activeTab={activeTab} hoverCardColor={'#7A63AB'} cardsColor={'#3D86C6'} key={id} heading={heading} />
           ))}
         </div>
    
  </div>
  )
}

export default SustaniblityDisclosures
