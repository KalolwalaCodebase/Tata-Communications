import React, { useState } from 'react'
import "./CardContainer.css"
import { Link } from 'react-router-dom';
const CardContaniergovclone = ({heading,activeTab,hoverCardColor,url}) => {
    const [isHovered,setIsHovered]=useState(false);
    console.log("heding in governanceis",heading);
    const formatHeadingForLink = (heading) => {
        console.log(heading)
        return heading.replace(/\s+/g, '-').toLowerCase();
      };
  return (
    <Link to={heading[3]} onMouseOver={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} className='card-container-div-main-gov' style={{ background: isHovered ? hoverCardColor : "white" }}>
         <img src={isHovered?heading[2]:heading[1]} alt=""  style={{width:"70px",height:"100px"}}/>
        <br />
        <br />
         <b style={{ color: !isHovered ? "#3D86C6" : "white" ,textTransform:"uppercase"}} className="heading-card-container-governance" >{heading[0]}</b>
        <Link to={heading[3]}>
          <button className="reade-more-gov-sec" style={{ color: !isHovered ? "#3D86C6" : "white" }}>
            read more {" > "}
         </button></Link> 
    </Link>
    
  )
}

export default CardContaniergovclone;
