import React from "react";

const PlanetClimateLastThreeComponet = () => {
  return (
    <div className="three-componet-parent-container">
      <div className="three-component-child-container conatiner-1">
        <img
          src="/Last-climate-change-img01.png"
          alt=""
          className="small-size-component-image"
        />
        <div className="child-componet-descriptions">
          <img
            className="small-square-btn-png"
            src="/small-square-btn.png"
            alt=""
          />
          <br />
          <b className="heading-child-component">
            Decarbonising Diesel-based
            <br /> Scope 1 Emissions
          </b>
          <p className="description-child-component">
            We are addressing the environmental impacts of our backup power
            sources. Diesel generators, traditionally used for energy
            continuity, contribute to Scope 1 emissions. To mitigate this, we
            are exploring energy-efficient, emission-free alternatives, such as
           <b>battery energy storage systems.</b>   These alternatives support our
            decarbonisation objectives by not only eliminating the use of diesel
            but also providing <b>on-site energy storage solutions</b> that strengthen
            the resilience and sustainability of our operations.
          </p>
        </div>
      </div>
      <div className="three-component-child-container conatiner-2">
        <div className="child-componet-descriptions">
          <img
            className="small-square-btn-png"
            src="/small-square-btn.png"
            alt=""
          />
          <br />
          <b className="heading-child-component">
            Driving Climate Action <br />
            Through Collaboration
          </b>
          <p className="description-child-component">
            Our efforts to drive climate action extend beyond our immediate
            operations. We engage in <b>advocacy</b> and <b>cultivate relationships</b>  that
            help navigate regulatory challenges, especially in the renewable
            energy domain. Our climate action teams are developing <b> comprehensive
            roadmaps</b> and actively pursuing partnerships to strengthen our
            strategies and expand our climate initiatives.
          </p>
        </div>
        <img
          src="/Last-climate-change-img02.png"
          alt=""
          className="small-size-component-image"
        />
      </div>
      <div className="three-component-child-container conatiner-3">
        <img
          src="/last-climate-change-img03.png"
          alt=""
          className="small-size-component-image"
        />
        <div className="child-componet-descriptions">
          <img
            className="small-square-btn-png"
            src="/small-square-btn.png"
            alt=""
          />
          <br />
          <b className="heading-child-component">
            Ensuring Transparency and <br /> Accountability
          </b>
          <p className="description-child-component">
            We place a strong emphasis on <b>transparency</b>  and <b>accountability</b> in our
            climate response. We adhere to several reporting frameworks and
            standards, ensuring that our stakeholders are informed of our
            climate actions and performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanetClimateLastThreeComponet;
