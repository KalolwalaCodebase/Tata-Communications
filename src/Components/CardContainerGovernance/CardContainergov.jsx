import React, { useState } from 'react'
import "./CardContainer.css"
import { Link } from 'react-router-dom';
const CardContainergov = ({heading,activeTab}) => {
    const [isHovered,setIsHovered]=useState(false);
    console.log("heding in governanceis",heading);
    const formatHeadingForLink = (heading) => {
        console.log(heading)
        return heading.replace(/\s+/g, '-').toLowerCase();
      };
  return (
    <div onMouseOver={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} className='card-container-div-main-gov' style={{ background: isHovered ? "#3D86C6" : "white" }}>
         <img src={isHovered?heading[2]:heading[1]} alt="" />
         <b style={{ color: !isHovered ? "#3D86C6" : "white" }} className="heading-card-container-governance">{heading[0]}</b>
        <Link to={`/${activeTab}/${formatHeadingForLink(heading[0])}`}><button className="reade-more-gov-sec" style={{ color: !isHovered ? "#3D86C6" : "white" }}>
            read more {" > "}
         </button></Link> 
    </div>
    
  )
}

export default CardContainergov
