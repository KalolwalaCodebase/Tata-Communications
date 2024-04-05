import React, { useState } from "react";
import "./Resources.css";

const Resourcesnew = () => {
  const [btnId, setBtnId] = useState(1);

  const handleButtonClick = (id) => {
    setBtnId(id);
  };

  return (
    <>
      <b className="heading-main-section-down">Resources</b>
      <br />
      <br />
      <div className="parent-resources-component">
        <div className="resources-heading-tab">
          <div
            className="resources-heading-tab-heading"
            style={{ background: btnId === 1 ? "#5CA4E3" : "" }}
            onClick={() => handleButtonClick(1)}
          >
            Compalinces
          </div>
          <div
            className="resources-heading-tab-heading"
            style={{ background: btnId === 2 ? "#5CA4E3" : "" }}
            onClick={() => handleButtonClick(2)}
          >
            Corporate Social Responsibility
          </div>
          <div
            className="resources-heading-tab-heading"
            style={{ background: btnId === 3 ? "#5CA4E3" : "" }}
            onClick={() => handleButtonClick(3)}
          >
            Certifications
          </div>
          <div
            className="resources-heading-tab-heading"
            style={{ background: btnId === 4 ? "#5CA4E3" : "" }}
            onClick={() => handleButtonClick(4)}
          >
            Public Consultaion
          </div>
        </div>
        <div className="resources-main-section-tab-container">
          {btnId == 1 && (
            <>
              <div className="resources-content-container">
                <div className="resources-content">
                  <span>Environmental Clearance 2022</span>
                  <span>Post EC compliance July To December 2021-MoEF</span>
                  <span>
                    Six Monthly Post EC Compliance Report - July 2022 to
                    December 2022 - To MPCB
                  </span>
                </div>
                <img src="/verticalline.png" alt="" />
              </div>
              <div className="resources-content-container">
                <div className="resources-content">
                  <span>Environmental Clearance 2011</span>
                  <span>Post EC compliance - January to June 2022</span>
                  <span>
                    Six Monthly Post EC Compliance Report - July 2021 to
                    December 2021- To MOEF
                  </span>
                </div>
                <img src="/verticalline.png" alt="" />
              </div>
              <div className="resources-content-container">
                <div className="resources-content">
                  <span>Environment Clearance Revalidation 2018</span>
                  <span>
                    Post EC Compliance Report - January 2022 to June 2022 - To
                    MOEF
                  </span>
                  <span></span>
                </div>
              </div>
            </>
          )}
          {btnId == 2 && (
            <>
              <div className="resources-content-container">
                <div className="resources-content">
                  <span>Composition of the CSR Committee</span>
                  <span></span>
                  <span></span>
                </div>
                <img src="/verticalline.png" alt="" />
              </div>
              <div className="resources-content-container">
                <div className="resources-content">
                  <span>Corporate Social Responsibility Policy</span>
                  <span></span>
                  <span></span>
                </div>
                <img src="/verticalline.png" alt="" />
              </div>
              <div className="resources-content-container">
                <div className="resources-content">
                  <span>List of CSR projects</span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </>
          )}
          {btnId == 3 && (
            <>
              <div className="resources-content-container">
                <div className="resources-content">
                  <span>Business and Human Rights Policy</span>
                  <span>
                    ISO 45001:2018 – Occupational Health and Safety Management
                    System Certificate
                  </span>
                  <span>Supplier Code of Conduct</span>
                </div>
                <img src="/verticalline.png" alt="" />
              </div>
              <div className="resources-content-container">
                <div className="resources-content">
                  <span>Environment Policy</span>
                  <span>Occupational Health & Safety Policy</span>
                  <span>
                  Sustainability Linked Loan Framework
                  </span>
                </div>
                <img src="/verticalline.png" alt="" />
              </div>
              <div className="resources-content-container">
                <div className="resources-content">
                  <span>ISO 14001:2015 – Environmental Management System Certificate</span>
                  <span>
                  Sustainable Supply Chain Policy
                  </span>
                  <span></span>
                </div>
              </div>
            </>
          )}
          {btnId == 4 && (
            <>
              <div className="resources-content-container">
                <div className="resources-content">
                  <span>Climate Resilient Village Program Stakeholder Consultation Report</span>
                  <span>Smart Cookstove Programme_ Mpowered Odisha_Stakeholder Consultation Report</span>
                  <span>
                  Smart Cookstove Programme_ Mpowered Jharkhand_VPA Design Document
                  </span>
                </div>
                <img src="/verticalline.png" alt="" />
              </div>
              <div className="resources-content-container">
                <div className="resources-content">
                  <span>Climate Resilient Village Program_VPA Design Document</span>
                  <span>Smart Cookstove Programme_ Mpowered Odisha_VPA Design Document</span>
                  <span>
                  Smart Cookstove Programme_ Mpowered Odisha_VPA Design Document
                  </span>
                </div>
                <img src="/verticalline.png" alt="" />
              </div>
              <div className="resources-content-container">
                <div className="resources-content">
                  <span>Impact Assessment report of Project ANEW</span>
                  <span>
                  Smart Cookstove Programme_ Mpowered Jharkhand_Stakeholder Consultation Report
                  </span>
                  <span></span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Resourcesnew;
