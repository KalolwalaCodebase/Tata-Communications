import React from "react";
import Accrodian from "../../Components/CustomeAccrodian/Accrodian";
const PlanetGreenSolutions = () => {
       const accrodianContent = [
              {
                heading: "Total GHG Emission Reductions",
                span: "Achieved an estimated 3,354,004 metric tonnes ",
                description:
                  "of CO2e savings through our low-carbon products and solutions.",
              },
              {
                heading: "Unified Communications Contribution",
                span: " 159,157 MtCO2eq.",
                description: "Our CISCO powered solutions and voice services, promoting the avoidance of travel, contributed to a reduction of",
              },
              {
                heading: "IoT Solutions Impact",
                span: " 82,440 MtCO2eq,",
                description: "Our IoT solutions, including smart utility meters and energy monitoring systems, have led to a reduction of",
              },
              {
                heading: "Cloud and Managed Hosting Efficiency",
                span: "",
                description: "By facilitating remote working and managed cloud services, we achieved a reduction of 8,226 MtCO2eq.",
              },
              {
                heading: "Mobility and MOVE Initiatives",
                span: "",
                description: "Through improved fleet management and optimisation in transport, logistics, aviation, and telematics, we realised a reduction of 3,000,610 MtCO2eq.",
              },
              {
                heading: "Media and Entertainment Services Savings",
                span: "XX",
                description: "Our remote production solutions and managed cloud services resulted in a reduction of 103,540 MtCO2eq.",
              },
            ];
  return (
    <div className="description-main-section planet-green-solutions">
      <img
        className="small-square-btn-png"
        src="/small-square-btn.png"
        alt=""
      />
      <br />
      <b className="heading-main-section-climate-change">
      Developing green solutions
      </b>

      <p className="description-main-section-climate-change">
        At Tata Communications, we are crafting <b>cutting-edge, low-carbon
        products and solutions</b> that seamlessly integrate business operations
        with environmental and societal benefits. We empower our clients by
        providing <b>green solutions</b>  that enhance their competitive edge and
        strengthen their sustainability profile along their supply chains.
      </p>
      <p className="description-main-section-climate-change">
        Our suite of low-carbon offerings, ranging from our <b>robust network
        services</b>  to the Internet of Things (IoT), from Manufacturing Execution
        Systems (MES) to cloud services and collaborative business solutions,
        are designed to deliver substantial reductions in greenhouse gas (GHG)
        emissions.
      </p>
      <p className="description-main-section-climate-change">
        We have successfully leveraged our innovative products and services to
        facilitate potential <b>GHG emissions savings</b>  on a significant scale,
        creating tangible value that our green solutions bring to clients.
      </p>
      <div className="accordian-main-section-climate-change specail-accrodian">
            <b className="heading-accrodian">PROGRESS MADE</b>
            <div className="accrodian-parent-element">
              {accrodianContent.map((accrodian,id) => (
                <Accrodian key={id}
                  heading={accrodian.heading}
                  descriptions={accrodian.description}
                  span={accrodian.span}
                />
              ))}
            </div>
          </div>
    </div>
  );
};

export default PlanetGreenSolutions;
