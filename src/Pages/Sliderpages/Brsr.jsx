import React from "react";
import HeadBar from "../../Components/Headbar/HeadBar";
import "./sliderpages.css";
const Brsr = () => {
  return (
    <div>
      <HeadBar heading={"BRSR"} theme={"#AD3088"} />
      <div className="gri-index-flex-container">
        <div className="flex-conatiner-wrapper">
        
        <p className="gri-index-decription-main">
        SEBI introduced the
        <span className="bold-span-gri-index">Business Responsibility and Sustainability Reporting (BRSR)</span>  standards to report on
          framework, which mandates certain listed companies, including ours, to disclose their ESG-related information as a mandatory process. This initiative aims to enhance transparency and encourages companies to adopt responsible and sustainable business practices.
      </p>
      <p className="normal-text">
      By adhering to the BRSR framework, we ensure stakeholders have access to standardized disclosures on ESG parameters. This transparent communication fosters trust among investors, customers, and the wider stakeholder community, strengthening our reputation as a responsible organization committed to a sustainable future.
      </p>
      <br />
      <br />
      <li className="section-list-brsr">Section A (General Disclosures)</li>
      <li className="section-list-brsr">Section B (Management and Process Disclosures)</li>
      <li className="section-list-brsr">Section C (Principle-Wise Performance Disclosures)</li>
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

export default Brsr;
