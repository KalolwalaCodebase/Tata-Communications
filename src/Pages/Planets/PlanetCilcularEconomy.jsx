import React from "react";
import HeadBar from "../../Components/Headbar/HeadBar";

const PlanetCilcularEconomy = () => {
  return (
    <div>
      <HeadBar
        icon={"/Demologo.png"}
        heading={"CIRUCULAR-ECONOMY"}
        theme={"#4F570A"}
      />
      <div className="climate-change-intro-container specail-circular-economy">
        <div className="climate-change-intro-paragraph-inside-container">
          <p className="paragraph-inside-climate-change">
            Our sustainability efforts extend to a rigorous circular economy
            approach, focusing on the longevity and recyclability of resources.
            Our strategy is anchored in minimising waste, promoting the reuse of
            materials, and responsible recycling, thereby reducing our
            environmental footprint. We aim to implement a circular economy
            framework that goes beyond waste management, ensuring a sustainable
            life cycle for all products and materials used within our
            operations.
          </p>
        </div>
        <div className="climate-change-intro-photos-inside-container specail-circular-economy-img">
          <img
            className="intro-climate-image"
            src="/planetClimateChangeIntro.png"
            alt=""
          />
        </div>
      </div>
      <div className="img-container-circular-economy">
      <img src="/Group 129.svg" alt="" />
      </div>
      <div className="last-section-water-container">
        <div className="main-section-last-part-managment">
        <img
            className="small-square-btn-png"
            src="/small-square-btn.png"
            alt=""
          /> <br />
          <b className="greenish-planet-heading">
          Management of Hazardous and <br /> Non-Hazardous Waste
          </b>
          <br />
          <br />
          <div className="main-big-img-container">
            <img src="/Group 130.svg" alt="" />
          </div>
        </div>
      <div className="quick-link-sections">
          <b className="heading-links">QUICK LINKS</b><br />
          <img src="/quick-link-underline.png" alt="" />
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href=""> Waste Categorisation</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Management of Hazardous Waste & Non-hazardous Waste</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Goals and Progress GRI Index</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">SDG linkage</a>
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
            <a href="">Case studies</a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default PlanetCilcularEconomy;
