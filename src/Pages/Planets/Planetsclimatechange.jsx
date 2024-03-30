import React from "react";
import HeadBar from "../../Components/Headbar/HeadBar";
import "../Community/Community.css";
import "./Planets.css";
import Accrodian from "../../Components/CustomeAccrodian/Accrodian";
import PlanetTransioning from "./PlanetTransioning";
import PlanetGreenSolutions from "./PlanetGreenSolutions";
import PlanetCuttingDownSolution from "./PlanetCuttingDownSolution";
import PlanetClimateLastThreeComponet from "./PlanetClimateLastThreeComponet";
import PlanetIntroducingEv from "./PlanetIntroducingEv";

const Planetsclimatechange = () => {
  const transationingObject={
  heading:"Transitioning to Renewable Energy",
  specailPara:"We are at the forefront of integrating renewable energy sources into our global electricity consumption mix.",
  description:"This strategic move aligns with our approach to sustainability and our efforts to mitigate the impact of our operations on the environment. We understand the critical importance of renewable energy in reducing carbon emissions and are actively exploring avenues to augment the share of renewables in our energy portfolio. In pursuit of this goal, significant steps have been taken, including the procurement of solar power and the engagement in renewable energy certificate programs internationally."
}

  const CommunityCarbonObject={
  heading:"Community Carbon Offset Programmes",
  specailPara:"We are engaged in initiatives that not only address the global challenge of climate change but also exert a positive influence within the communities where we have a presence.",
  description:"We are taking action against climate change by supporting projects that reduce carbon emissions and benefit local people. We carefully assess community needs and choose projects that are both effective and sustainable in the long run. By FY 2030, we aim to have generated 95,000 tonnes of Community based Carbon Credits, marking a substantial contribution to both local environments and the broader climate agenda."
}
  const accrodianContent = [
    {
      heading: "Energy-Saving Opportunities Identified",
      span: "130 projects",
      description:
        " focusing on HVAC, SMPS, UPS efficiency, smart lighting, and IoT applications",
    },
    {
      heading: "Additional Energy Savings",
      span: "103,200 kWh",
      description: " from MAN and NLD initiatives",
    },
    {
      heading: "Projects Completed",
      span: "118 out of 130,",
      description: " leading to substantial energy and cost savings",
    },
    {
      heading: "Additional Cost Savings",
      span: "10,331 USD (INR 8.3 lakh)",
      description: "Around ",
    },
    {
      heading: "Energy-Saving Opportunities Identified",
      span: "6.56 million kWh",
      description: "A cumulative total of ",
    },
    {
      heading: "GHG intensity(tonnes per million-unit revenue in US$)",
      span: "XX",
      description: "yy",
    },
    {
      heading: "Cost Savings",
      span: "794,125 USD (INR 6.38 crore) ",
      description: "Approximately,in energy costs",
    },
    {
      heading: "Energy intensity(MWh per million-unit revenue in USD)",
      span: "XX",
      description: "yy",
    },
    {
      heading:
        "Metro Access Network (MAN) and National Long Distance (NLD) Teams' Contributions",
      span: "794,125 USD (INR 6.38 crore),",
      description: "Approximately in energy costs",
    },
  ];
  const accrodianContentSecond = [
    {
      heading: "Renewable Energy Consumption",
      span: "18% of our electricity ",
      description: "used in FY 2023 came from renewable sources.",
    },
    {
      heading: "Renewable Certificates for Portland and Hillsboro",
      span: "Approximately",
      description: "  6 million units secured.",
    },
    {
      heading: "Solar Power for Dighi, Pune Campus",
      span: "8.4 million",
      description: "  units procured.",
    },
    {
      heading: "Solar Power Project in Seixal, Portugal",
      span: "Achieved solar generation",
      description: " equivalent to 44% of site capacity.",
    },
  ];
  const accrodianContentThree = [
    {
      heading: "GHG Intensity Reduction",
      span: "Improved by 10% to 40.72 metric tonnes ",
      description: " of CO2 per million US$ revenue from FY 2022.",
    },
    {
      heading: "Reduction in Scope 1 and Scope 2 Emissions",
      span: "Achieved a 28% reduction",
      description: " from the base year 2020.",
    },
    {
      heading: "Scope 3 Emissions",
      span: " Recorded at 128,251 metric tonnes",
      description: " of CO2e* for FY 2022-2023.",
    },
  ];
  return (
    <div className="planets-climate-change-container">
      <HeadBar
        icon={"/Demologo.png"}
        heading={"CLIMATE-CHANGE"}
        theme={"#4F570A"}
      />
      <div className="climate-change-intro-container">
        <div className="climate-change-intro-paragraph-inside-container">
          <p className="paragraph-inside-climate-change">
            Our core philosophy is grounded in the implementation of
            conservation initiatives that significantly reduce our ecological
            footprint, while simultaneously fostering innovation in our products
            to support global decarbonisation efforts. By setting ambitious,
            long-term sustainability goals, we address the critical issues of
            climate change, and generate customer savings. This strategic
            approach enables us to enhancing our contribution towards a
            sustainable and resilient future.
          </p>
          <p className="paragraph-inside-climate-change">
            In action, we rigorously adhere to environmental regulations across
            all regions of operation, maintaining a record of zero
            non-compliances or incidents. This discipline extends to our
            comprehensive efforts in resource optimisation and the adoption of
            the 3R principle—reduce, reuse, and recycle—across our water and
            waste management strategies.
          </p>
          <p className="paragraph-inside-climate-change">
            Our commitment to decarbonisation consists of over a decade of
            leading energy and carbon emission reduction projects. By embedding
            a robust climate change strategy within our operations, we position
            ourselves as industry forerunners in navigating the challenges and
            seizing the opportunities presented by energy transitions. Our
            ultimate goal is to achieve Net Zero emissions, thereby
            significantly diminishing our environmental footprint and actively
            contributing to global climate action initiatives
          </p>
        </div>
        <div className="climate-change-intro-photos-inside-container">
          <img
            className="intro-climate-image"
            src="/planetClimateChangeIntro.png"
            alt=""
          />
        </div>
      </div>
      <div className="plannet-climate-focus-section">
        <div className="focus-heading-section">
          <div className="parent-child-component">
            <span className="focus-heading1">Immediate Focus</span>
            <img src="/logo-traingle.png" alt="" />
          </div>
          <div className="parent-child-component">
            <span className="focus-heading2">Near-term Focus</span>
            <img src="/logo-taingle-dark.png" alt="" />
          </div>
          <div className="parent-child-component">
            <span className="focus-heading1">Medium-term Focus</span>
            <img src="/logo-traingle.png" alt="" />
          </div>
          <div className="parent-child-component">
            <span className="focus-heading2">Long-term Focus</span>
            <img src="/logo-taingle-dark.png" alt="" />
          </div>
        </div>
        <div className="focus-main-content-container">
          <div className="mainContainer-focus-sectin div-focus1">
            <div className="single-focus-container">
              <b className="single-focus-container-heading">
                Energy Efficiency Enhancement
              </b>
              <img
                src="/colorful-single-component-logo.png"
                alt=""
                className="single-compo-image"
              />
              <p className="single-focus-container-description">
                Enhance energy intensity by improving energy use in facilities
                and data centres
              </p>
              <img src="/line-dark.png" alt="" />
              <a href="" className="single-focus-conatiner-links">
                Read More{">"}
              </a>
            </div>
            <div className="single-focus-container">
              <b className="single-focus-container-heading">
                Transition to Renewable Energy (RE):
              </b>
              <img
                src="/colorful-single-component-logo.png"
                alt=""
                className="single-compo-image"
              />
              <p className="single-focus-container-description">
                Enhance energy intensity by improving energy use in facilities
                and data centres
              </p>
              <img src="/line-dark.png" alt="" />
              <a href="" className="single-focus-conatiner-links">
                Read More{">"}
              </a>
            </div>
          </div>
          <div className="mainContainer-focus-sectin div-focus2">
            <div className="single-focus-container single-focus-container-specail">
              <b className="single-focus-container-heading">
                Developing Green Solutions
              </b>
              <img
                src="/white-single-componet-logo.png"
                alt=""
                className="single-compo-image"
              />
              <p className="single-focus-container-description">
                Focus on green product innovation to reduce carbon footprint
              </p>
              <img src="/line-white.png" alt="" />
              <a href="" className="single-focus-conatiner-links">
                Read More{">"}
              </a>
            </div>
            <div className="single-focus-container single-focus-container-specail">
              <b className="single-focus-container-heading">
                Community Carbon Offset Programmes
              </b>
              <img
                src="/white-single-componet-logo.png"
                alt=""
                className="single-compo-image"
              />
              <p className="single-focus-container-description">
                Develop community based carbon offset programmes
              </p>
              <img src="/line-white.png" alt="" />
              <a href="" className="single-focus-conatiner-links">
                Read More{">"}
              </a>
            </div>
          </div>
          <div className="mainContainer-focus-sectin div-focus1">
            <div className="single-focus-container">
              <b className="single-focus-container-heading">
                Cutting Down on Value Chain Based Emissions
              </b>
              <img
                src="/colorful-single-component-logo.png"
                alt=""
                className="single-compo-image"
              />
              <p className="single-focus-container-description">
                Aim to reduce emissions across the value chain including
                upstream, downstream, and supply chain
              </p>
              <img src="/line-dark.png" alt="" />
              <a href="" className="single-focus-conatiner-links">
                Read More{">"}
              </a>
            </div>
            <div className="single-focus-container">
              <b className="single-focus-container-heading">
                Introducing EVs and Cleaner Based Options
              </b>
              <img
                src="/colorful-single-component-logo.png"
                alt=""
                className="single-compo-image"
              />
              <p className="single-focus-container-description">
                Initiate community carbon offset programmes and introduce EVs
                and cleaner fuel options to reduce commute-related emissions
              </p>
              <img src="/line-dark.png" alt="" />
              <a href="" className="single-focus-conatiner-links">
                Read More{">"}
              </a>
            </div>
          </div>
          <div className="mainContainer-focus-sectin div-focus2">
            <div className="single-focus-container single-focus-container-specail">
              <b className="single-focus-container-heading">
                Decarbonising Scope 1 Emissions
              </b>
              <img
                src="/white-single-componet-logo.png"
                alt=""
                className="single-compo-image"
              />
              <p className="single-focus-container-description">
                Decarbonise Scope 1 (Diesel-based) emissions
              </p>
              <img src="/line-white.png" alt="" />
              <a href="" className="single-focus-conatiner-links">
                Read More{">"}
              </a>
            </div>
            <div className="single-focus-container single-focus-container-specail">
              <b className="single-focus-container-heading">
                Driving Climate Action Through Collaboration
              </b>
              <img
                src="/white-single-componet-logo.png"
                alt=""
                className="single-compo-image"
              />
              <p className="single-focus-container-description">
                Engage in collaborative efforts to drive climate action and
                policy development with key stakeholders
              </p>
              <img src="/line-white.png" alt="" />
              <a href="" className="single-focus-conatiner-links">
                Read More{">"}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="planet-climate-last-section-parent">
        <div className="main-section-climate-change">
          <div className="description-main-section">
            <img
              className="small-square-btn-png"
              src="/small-square-btn.png"
              alt=""
            />
            <br />
            <b className="heading-main-section-climate-change">
              Maximizing Energy Efficiency
            </b>
            <p className="description-main-section-climate-change">
              By prioritising operational streamlining, the adoption of
              innovative technologies such as IoT, and transitioning to
              energy-saving LED lighting, significant strides have been made in
              reducing energy consumption and costs. The Indian operations team
              has been particularly proactive, focusing on improving the
              efficiency of{" "}
              <b>
                {" "}
                Heating, Ventilation and Air Conditioning (HVAC), Switched-Mode
                Power Supply (SMPS),
              </b>{" "}
              and <b> Uninterruptible Power Supply (UPS) systems.</b>
              <br />
              <br />
              Implementing best practices like setting air conditioners to a
              optimal temperature and installing grill tiles in front of Active
              Equipment Racks exemplifies our hands-on approach to energy
              management. Additionally, our efforts extend to smart lighting
              initiatives and leveraging{" "}
              <b>Facilities Infrastructure Management</b>
              (FIM) in India to identify and execute energy-saving
              opportunities.
              <br />
              <br />
              These targeted actions are part of a comprehensive strategy to
              down on energy use and to foster a culture of{" "}
              <b>sustainability awareness</b> throughout our global operations.
              <br />
            </p>
          </div>
          <div className="accordian-main-section-climate-change">
            <b className="heading-accrodian">PROGRESS MADE</b>
            <div className="accrodian-parent-element">
              {accrodianContent.map((accrodian) => (
                <Accrodian
                  heading={accrodian.heading}
                  descriptions={accrodian.description}
                  span={accrodian.span}
                />
              ))}
            </div>
            <div className="graph-parent-container">
              <img src="/chart1-mainsection.png" alt="" />
              <img src="/chart2-mainsection.png" alt="" />
            </div>
          </div>
          <div className="yellowish-background-container">
          <PlanetTransioning transationingObject={transationingObject} />
          <div className="small-accrodian-container">
            <div className="accordian-main-section-climate-changen accrodian-main-small-height">
              <b className="heading-accrodian">PROGRESS MADE</b>
              <div className="accrodian-parent-element">
                {accrodianContentSecond.map((accrodian) => (
                  <Accrodian
                    heading={accrodian.heading}
                    descriptions={accrodian.description}
                    span={accrodian.span}
                  />
                ))}
              </div>
            </div>
            <div className="small-paragraph-inside-small-accrodian-container">
             <br />
              <b className="small-paragraph-heading">
                Decarbonisation of Operations
              </b>
              <p className="specail-small-font-headings">
                Our approach to decarbonisation involves a comprehensive
                strategy aimed at reducing our operational carbon footprint.
              </p>
              <p className="small-accrodian-descriptions">
                Recognising the adverse consequences of climate change driven by
                greenhouse gas (GHG) emissions, we are committed to operational
                improvements that contribute to a significant reduction in our
                GHG intensity.
              </p>
              <p className="small-accrodian-descriptions">
                Through meticulous accounting of our GHG emissions, encompassing
                both Scope 1 and Scope 2 as per the GHG Protocol Corporate
                Accounting and Reporting Standard, we lay the groundwork for
                targeted actions to diminish our carbon impact. The analysis and
                reduction of Scope 3 emissions also form a crucial part of our
                strategy, addressing emissions from business travel, employee
                commute, and other indirect activities.
              </p>
            </div>
              <b className="heading-accrodian">PROGRESS MADE</b>
              <div className="accrodian-parent-element">
                {accrodianContentThree.map((accrodian) => (
                  <Accrodian
                    heading={accrodian.heading}
                    descriptions={accrodian.description}
                    span={accrodian.span}
                  />
                ))}
            </div>
          </div>
          </div>
          <PlanetGreenSolutions/>
          <div className="yellowish-background-container">
          <PlanetTransioning transationingObject={CommunityCarbonObject}/>
          <img className="specail-image-div" src="/Group 128.svg" alt="" />
          </div>
          <PlanetCuttingDownSolution/>
          <PlanetClimateLastThreeComponet/>
          <PlanetIntroducingEv/>
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
            <a href="">Enhancing Energy Efficiency</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Transition to Renewable Energy (RE)</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Developing Green Solutions</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Community Carbon Offset Programmes</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Cutting down on Value Chain Emissions</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Introducing EVs and Cleaner Based Options</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Decarbonising Scope 1 emissions</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Driving Climate Action Through Collaboration</a>
          </div>
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
            <a href="">GRI index</a>
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
            <a href="">CDP Reporting</a>
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

export default Planetsclimatechange;
