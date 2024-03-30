import React from "react";
import HeadBar from "../../Components/Headbar/HeadBar";

const PlanetsWaterManagment = () => {
  return (
    <div className="water-mamangment-intro-container">
      <HeadBar
        icon={"/Demologo.png"}
        heading={"WATER-MANAGMENT"}
        theme={"#4F570A"}
      />
      <div className="climate-change-intro-container water-mamngment-intro">
        <div className="climate-change-intro-paragraph-inside-container">
          <p className="paragraph-inside-climate-change">
            We approach water management with an acute awareness of its
            significance in sustaining both our operations and the environment.
            We recognise that while our activities are not heavily
            water-intensive, the responsible stewardship of this precious
            resource is essential to our commitment to sustainability. Our
            overarching water management strategy focuses on{" "}
            <b>
              {" "}
              meticulous consumption monitoring, proactive waste minimisation,
              and innovative recycling initiatives.
            </b>
          </p>
          <p className="specail-water-mamngment-para">Our Target</p>
          <b className="bold-span">20%</b>
          <br />
          <p className="specail-para-small">Reduction in Water</p>
          <p className="specail-para-small">Consumption by 2030</p>
        </div>
        <div className="climate-change-intro-photos-inside-container">
          <img
            className="intro-climate-image"
            src="/planetClimateChangeIntro.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PlanetsWaterManagment;
