import React from 'react'
import HeadBar from '../../Components/Headbar/HeadBar'
import CardContainergov from '../../Components/CardContainerGovernance/CardContainergov';
import CardContaniergovclone from '../../Components/CardContainerGovernance/CardContaniergovclone';

const SustaniblityDisclosures = ({activeTab}) => {
    const headingarr = [ ['ESG profile','/Disclosure01.svg','/Disclosure07.svg','https://esg.churchgatepartners.com/login/companyprofile?id=390033003700240024004100530048004F004B0041004E0041004E00590041004100560041004E004900410053004800570049004E00490024002400'],
    ['ESG Addendum','/Disclosure02.svg','/Disclosure08.svg'],
     ['GRI index','/Disclosure03.svg','/Disclosure09.svg','/Gri-index'],
    ['BRSR','/Disclosure04.svg','/Disclosure10.svg','/Brsr'],
    ['cdp disclosure','/Disclosure05.svg','/Disclosure11.svg']
    ,['Assurance statement','/Disclosure06.svg','/Disclosure12.svg']];
  return (
    <div>
    <HeadBar  heading={"sustainability disclosures"} theme={ "#3D86C6"} />
    <div className='container-Governance'>
           {headingarr.map((heading, id) => (
                        <CardContaniergovclone activeTab={activeTab} hoverCardColor={'#3D86C6'} cardsColor={'#3D86C6'} key={id} heading={heading} />
           ))}
         </div>
    
  </div>
  )
}

export default SustaniblityDisclosures
