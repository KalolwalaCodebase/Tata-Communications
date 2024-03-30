import React from "react";
import HeadBar from "../../Components/Headbar/HeadBar";
import "./Community.css";
const CommunityEductaions = () => {
  return (
    <div className="community-student-container">
      <HeadBar
        icon={"/Demologo.png"}
        heading={"EDUCATIONS"}
        theme={"#38D1DA"}
      />
      <div className="wrapper-student-container">
        <div className="Student-section-container">
          <div className="section-one-photo-text">
            <img
              className="student-image-section"
              src="/peopleStudentimg1.png"
              alt=""
            />
            <p className="student-section-text">
              We are dedicated to providing quality education as a fundamental
              objective. We firmly believe that education serves as a gateway to
              equality, offering marginalized individuals the chance to break
              free from socioeconomic barriers and pursue their aspirations.
            </p>
          </div>
          <div className="data-student-community-container">
            <div className="data-set-conatiner-below">
              <b className="big-size-data">173,843</b>
              <p className="small-size-paragraph">
                Reduction in water consumption by 2030
              </p>
            </div>
            <div className="data-set-conatiner-below">
              <b className="big-size-data">53%</b>
              <p className="small-size-paragraph">
              Girls benefitted
              </p>
            </div>
            <div className="data-set-conatiner-below">
              <b className="big-size-data">4</b>
              <p className="small-size-paragraph">
              Computer Labs set up
              </p>
            </div>
            <div className="data-set-conatiner-below">
              <b className="big-size-data">528+</b>
              <p className="small-size-paragraph">
              Students attending computer classes
              </p>
            </div>
          </div>
        </div>
        <div className="quick-link-sections">
          <b className="heading-links">QUICK LINKS</b>
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
            <a href="">GRI Index</a>
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
            <a href="">CDP reporting</a>
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

export default CommunityEductaions;
