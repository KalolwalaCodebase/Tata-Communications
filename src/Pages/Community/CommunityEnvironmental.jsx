import React from "react";
import HeadBar from "../../Components/Headbar/HeadBar";
import "./Community.css";
const CommunityEnvironmental = () => {
  return (
    <div className="community-student-container">
      <HeadBar
        icon={"/Demologo.png"}
        heading={"ENVIRONMENT"}
        theme={"#38D1DA"}
      />
      <div className="wrapper-student-container">
        <div className="Student-section-container-environment">
          <div className="section-one-photo-text-specail">
            <p className="student-section-text">
              We are dedicated to integrating action on climate change,
              biodiversity, water, and energy into our community initiatives. By
              forging partnerships and promoting environmental restoration and
              regeneration, we strive to make a positive impact on the planet.
              <br />
              <br />
            </p>
            <p className="specailText">
                Through collaborative efforts, we are committed to creating
                sustainable solutions that safeguard the environment for future
                generations, ensuring a healthier and more resilient world for
                all.
              </p>
          </div>
          <div className="data-student-community-container-environment">
            <div className="data-set-conatiner-below">
              <b className="big-size-data">73,424</b>
              <br />
              <p className="small-size-paragraph-environment">
                Reduction in water consumption by 2030
              </p>
            </div>
            <div className="data-set-conatiner-below">
              <b className="big-size-data">3000</b>
              <p className="small-size-paragraph-environment">Trees planted</p>
            </div>
            <div className="data-set-conatiner-below">
              <b className="big-size-data">5</b>
              <p className="small-size-paragraph-environment">Public health centres powered by solar panels</p>
            </div>
            <div className="data-set-conatiner-below">
              <b className="big-size-data">210</b>
              <p className="small-size-paragraph-environment">
              Households powered with solar power
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

export default CommunityEnvironmental;
