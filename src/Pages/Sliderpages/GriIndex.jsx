import React from "react";
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
        <span className="bold-span-gri-index">GRI (Global Reporting Initiative)</span>  standards to report on
        economic, environmental, and social impacts, showcasing our commitment
        to transparency and accountability in our sustainability practices. This
        enables us to effectively communicate how we contribute toward
        sustainable development goals and demonstrate our dedication to
        responsible corporate citizenship.
      </p>
      <div className="table-design-gri-index">
        <div className="table-heading-gri-index">
          <li>GRI Standard</li>
          <li>Disclosure</li>
          <li>Location</li>
        </div>
        <div className="table-description-gri-index">
          <div className="small-descp">
          <li>GRI 1: Foundation</li>
          <li>2-1 Organizational details</li>
          </div>
          <div className="large-descp"> 
          <li>2-2 Entities included <br />
             in the organization’s <br /> sustainability reporting</li>
          </div>
        </div>
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
