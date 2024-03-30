import React from "react";
import HeadBar from "../../Components/Headbar/HeadBar";
import "./Community.css";
const CommunityHealthCare = () => {
  return (
    <div className="community-student-container">
      <HeadBar
        icon={"/Demologo.png"}
        heading={"SUSTANIBLITY-LIVEHOOD"}
        theme={"#38D1DA"}
      />
      <div className="wrapper-student-container">
        <div className="Student-section-container">
          <div className="section-one-photo-text">
            <p className="student-section-text-second">
              We prioritize enhancing access to quality healthcare services for
              the underserved segment of society. With a focus on preventing and
              treating non-communicable diseases, we are committed to promoting
              well-being for all.
            </p>
            <p
              className="student-section-text-second"
              style={{
                color: "black",
                fontSize: "23px",
                marginTop: "-10px",
                marginLeft: "10px",
              }}
            >
              Through our initiatives, we strive to ensure that everyone,
              regardless of their background or circumstances, has access to the
              healthcare they need to lead healthy and fulfilling lives.
            </p>
          </div>
          <div className="data-student-community-container">
            <div className="data-set-conatiner-below">
              <b className="big-size-data">11,840</b>
              <p className="small-size-paragraph">Lives impacted</p>
            </div>
            <div className="data-set-conatiner-below">
              <b className="big-size-data">1,440</b>
              <p className="small-size-paragraph">
                Socio-economically disadvantaged cancer patients sponsored from
                26 states
              </p>
            </div>
            <div className="data-set-conatiner-below">
              <b className="big-size-data">27</b>
              <p className="small-size-paragraph">
              Medical equipment provided for primary health care
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

export default CommunityHealthCare;
