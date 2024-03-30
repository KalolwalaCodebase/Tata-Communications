import React from "react";
import HeadBar from "../../Components/Headbar/HeadBar";
import "./Community.css";
const CommunitySustinableLivehood = () => {
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
            <p className="student-section-text-second" >
              We are dedicated to empowering youth, rural communities with our
              focus on women, and Persons with Disabilities (PwD) by providing
              them with vocational, entrepreneurial, and life skills training.
            </p>
            <p className="student-section-text-second"style={{color:"black",fontSize:"23px",marginTop:"-10px",marginLeft:"10px"}}>
              Our aim is to enhance their access to resources, new technology,
              and financial services, thereby enabling them to become active
              contributors to the economy.
            </p>
          </div>
          <div className="data-student-community-container">
            <div className="data-set-conatiner-below">
              <b className="big-size-data">2,618,471</b>
              <p className="small-size-paragraph">Lives impacted</p>
            </div>
            <div className="data-set-conatiner-below">
              <b className="big-size-data">5,800+</b>
              <p className="small-size-paragraph">Youth and adults trained</p>
            </div>
            <div className="data-set-conatiner-below">
              <b className="big-size-data">700+</b>
              <p className="small-size-paragraph">
                Self-Help Groups formed under institution building
              </p>
            </div>
            <div className="data-set-conatiner-below">
              <b className="big-size-data">~2,000</b>
              <p className="small-size-paragraph">
                Families received government entitlements
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

export default CommunitySustinableLivehood;
