import React,{useState} from 'react'
import "./Resources.css"
const Resourcesnew = () => {
    const [btnId,setBtnId]=useState(1);
  return (
    <>
            <b className="heading-main-section-down">Resources</b>
            <br />
            <br />
    <div className='parent-resources-component'>
      <div className="resources-heading-tab">
       <div className="resources-heading-tab-heading" style={{background:"#5CA4E3"}}>Compalinces</div>
       <div className="resources-heading-tab-heading">corporate social responsibility</div>
       <div className="resources-heading-tab-heading">certifications</div>
       <div className="resources-heading-tab-heading">public consultaion</div>
      </div>
      <div className="resources-main-section-tab-container">
        <div className="resources-content-container">
            <div className="resources-content">
             <span>Environmental Clearance 2022</span>
             <span>Post EC compliance July To December 2021-MoEF</span>
             <span>Six Monthly Post EC Compliance Report - July 2022 to December 2022 - To MPCB</span>
            </div>
            <img src="/verticalline.png" alt="" />
        </div>
        <div className="resources-content-container">
            <div className="resources-content">
             <span>Environmental Clearance 2011</span>
             <span>Post EC compliance - 
January to June 2022</span>
             <span>Six Monthly Post EC Compliance Report - July 2021 to December 2021- To MOEF</span>
            </div>
            <img src="/verticalline.png" alt="" />
            </div>
        <div className="resources-content-container">
        <div className="resources-content">
             <span>Environment Clearance Revalidation 2018</span>
             <span>Post EC Compliance Report -
January 2022 to June 2022 - To MOEF</span>
             <span></span>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Resourcesnew
