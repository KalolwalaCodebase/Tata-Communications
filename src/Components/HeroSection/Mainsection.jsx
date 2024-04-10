import React, { useEffect, useState,useRef } from "react";
import "./Mainsection.css";

const Mainsection = ({ activeTab,HeroSectionContent,videolink }) => {
  const [content, setContent] = useState({});
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (HeroSectionContent[activeTab]) {
     // console.log(HeroSectionContent[activeTab]);
      //console.log(HeroSectionContent[activeTab]?.Video);
      setContent(HeroSectionContent[activeTab]);
    }
  }, [activeTab, HeroSectionContent]);

  useEffect(() => {
  setAnimate(true);
    const animationDuration = 1800; 
    const timeoutId = setTimeout(() => {
      setAnimate(false);
    }, animationDuration);
    return () => clearTimeout(timeoutId);
  }, [activeTab]);
  
  return (
    <>

        <div className="Main-section-container">
          <video id="video-background" className={`${animate?"animate-video-main":""}`} autoPlay muted loop playsInline>
            <source src={videolink} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={`content-parent ${animate?"animate-content":""}`}>
            <img
              className="small-square-img"
              src="/small-square-btn.png"
              alt=""
            />
            <div className="main-section-heading">{content?.Heading}</div>
            <div className="main-section-content">{content?.Content}</div>
          </div>
        </div>
    </>
  );
};

export { Mainsection };
