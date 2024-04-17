import React,{useEffect} from "react";
import HeadBar from "../../Components/Headbar/HeadBar";
import "./sliderpages.css";
const GriIndex = () => {
  
  return (
    <div>
      <HeadBar heading={"GRI INDEX"} theme={"#3D86C6"} />
      <div className="gri-index-flex-container">
        <div className="flex-conatiner-wrapper">
        <p className="gri-index-decription-main">
        We apply the 
        <span className="bold-span-gri-index">{" "}GRI (Global Reporting Initiative)</span>  standards to report on
        economic, environmental, and social impacts, showcasing our commitment
        to transparency and accountability in our sustainability practices. This
        enables us to effectively communicate how we contribute toward
        sustainable development goals and demonstrate our dedication to
        responsible corporate citizenship.
      </p>
      <br />
      <br />
      <div className="staticic-image">
      <img style={{width:"1200px"}} src="GRI.svg" alt="" />
      </div>
      
        </div>
          <div className="quick-link-sections">
          <b className="heading-links">QUICK LINKS</b>
          <br />
          <img src="/quick-link-underline.png" alt="" />
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Goals and Progress</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Policies</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">GRI index</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">SDG Linkage</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">CDP Reporting</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Case Studies</a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default GriIndex;
