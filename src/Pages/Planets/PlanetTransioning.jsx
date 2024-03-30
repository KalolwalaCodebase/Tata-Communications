import React from "react";

const PlanetTransioning = ({transationingObject}) => {
  return (
    <div className="description-main-section">
      <img
        className="small-square-btn-png"
        src="/small-square-btn.png"
        alt=""
      />
      <br />
      <b className="heading-main-section-climate-change">
       {transationingObject.heading}
      </b>
     
      <p className="description-main-section-climate-change">
        <span className="specail-transitioning">
      {transationingObject.specailPara}
        </span>
     <br />
      <br />
        {transationingObject.description}
      </p>
    </div>
  );
};

export default PlanetTransioning;
