import React, { useState } from 'react'
import "./CardContainer.css"
import { Link } from 'react-router-dom';
const CardContainergov = ({heading,activeTab,hoverCardColor}) => {
    const [isHovered,setIsHovered]=useState(false);
    console.log("heding in governanceis",heading);
    const formatHeadingForLink = (heading) => {
        console.log(heading)
        return heading.replace(/\s+/g, '-').toLowerCase();
      };
  return (
    <div onMouseOver={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} className='card-container-div-main-gov' style={{ background: isHovered ? hoverCardColor : "white" }}>
         <img style={{height:"80px"}} src={isHovered?heading[2]:heading[1]} alt="" />
         <b style={{ color: !isHovered ? hoverCardColor : "white" ,marginTop:"15%"}} className="heading-card-container-governance">{heading[0]}</b>
        <Link to={heading[3]}><button className="reade-more-gov-sec" style={{ color: !isHovered ? hoverCardColor : "white" }}>
            read more {" > "}
         </button></Link> 
    </div>
    
  )
}

export default CardContainergov
