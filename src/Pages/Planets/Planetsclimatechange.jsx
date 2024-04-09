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
import { motion } from 'framer-motion';
import TextAnimation from '../../Components/Animatedcounter/TextAnimation';
import AnimatedCounter from "../../Components/Animatedcounter/Animatedcounter";
const Planetsclimatechange = () => {
  const transationingObject = {
    heading: "Transitioning to Renewable Energy",
    specailPara:
      "We are at the forefront of integrating renewable energy sources into our global electricity consumption mix.",
    description:
      "This strategic move aligns with our approach to sustainability and our efforts to mitigate the impact of our operations on the environment. We understand the critical importance of renewable energy in reducing carbon emissions and are actively exploring avenues to augment the share of renewables in our energy portfolio. In pursuit of this goal, significant steps have been taken, including the procurement of solar power and the engagement in renewable energy certificate programs internationally.",
  };
  const CommunityCarbonObject = {
    heading: "Community Carbon Offset Programmes",
    specailPara:
      "We are engaged in initiatives that not only address the global challenge of climate change but also exert a positive influence within the communities where we have a presence.",
    description:
      "We are taking action against climate change by supporting projects that reduce carbon emissions and benefit local people. We carefully assess community needs and choose projects that are both effective and sustainable in the long run. By FY 2030, we aim to have generated 95,000 tonnes of Community based Carbon Credits, marking a substantial contribution to both local environments and the broader climate agenda.",
  };
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
        theme={"#B0BC25"}
        headiconstyle={"rgb(184 198 25)"}
      />
      <div className="climate-change-intro-container">
        <div className="climate-change-intro-paragraph-inside-container">
          <p className="paragraph-inside-climate-change">
            Through our environment conservation initiatives, we aim to reduce
            our environmental footprint, while also pushing innovation within
            our product line to assist global decarbonisation endeavours. We
            acknowledge the necessity of climate action, shifting our focus
            towards combating climate change and mitigating its adverse effects.
          </p>
          <p className="paragraph-inside-climate-change">
            As a company in ICT, we are heavily reliant on our energy supplies
            to run our operations 24X7. To meet this energy demand, we utilise
            various sources across geographies. These sources can be categorised
            into energy from diesel generators for backup, energy from national
            grids and renewable energy from public as well as private suppliers.
             With the operational energy demand and our upstream and downstream
            operations, the associated GHG emissions are inherent part of our
            value chain.
          </p>
          <p className="paragraph-inside-climate-change">
            Our comprehensive decarbonisation strategy seeks to reduce the GHG
            emissions across our value chain. Recognising the detrimental
            effects of climate change caused by greenhouse gas (GHG) emissions,
            we are committed to adopting operational enhancements that lower our
            GHG intensity. We have laid the foundation for targeted efforts to
            reduce our carbon footprint by meticulously tracking our GHG
            emissions, which include both Scope 1 and Scope 2 and 3 emissions,
            in accordance with the GHG Protocol Corporate Accounting and
            Reporting Standard and Corporate Value Chain (Scope 3) Accounting
            and Reporting Standard. The analysis and mitigation of Scope 3
            emissions, involving emissions from employee commuting, business
            travel and other indirect activities, are also integral components
            of our strategy.
          </p>
        </div>
        <div className="climate-change-intro-photos-inside-container">
          <img
            className="intro-climate-image"
            src="/Planetimg04.png"
            alt=""
          />
        </div>
      </div>
      

      <div className="planet-climate-last-section-parent">
      
        <div className="main-section-climate-change" style={{background: '#F7F7F7',borderRadius:"20px"}}>
        <motion.p
        style={{ 
          textTransform: "uppercase",
          backgroundColor: '#B0BC25', // Change background color based on isBlueHeading state
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="awards-green-title poppins-semibold"
      >
        <TextAnimation text={'our'}/> <TextAnimation text={'footprint'}/>
      </motion.p>
          <div className="description-main-section planet-climate-change-description" >
          <div className="data-student-community-container-environment " style={{display:"flex"}}>
              <div className="data-set-conatiner-below">
              <b style={{color:"#B0BC25"}} className="big-size-data"><AnimatedCounter finalValue={10} />%</b>
                <p className="small-size-paragraph-environment">
                Improvement in GHG Intensity  Reduction to 40.72MT of CO2 per million USD revenue from FY 2022
                </p>
              </div>
              <div className="data-set-conatiner-below">
                <b style={{color:"#B0BC25"}} className="big-size-data"><AnimatedCounter finalValue={28} />%</b>
                <p className="small-size-paragraph-environment">
                Reduction in Scope 1 and <br /> Scope 2 Emissions from Base <br />Year 2020
                </p>
              </div>
              <div className="data-set-conatiner-below">
                <b style={{color:"#B0BC25"}}  className="big-size-data"><AnimatedCounter finalValue={128} />,<AnimatedCounter finalValue={251} />MT</b>
                <p className="small-size-paragraph-environment">
                of Scope 3 Emissions <br /> Recorded for 2022-23
                </p>
              </div>
          </div>
           <div className="planate-climate-change-energy-effiecency" style={{paddingTop:"2%"}}>
            <div className="ghg-intensity">
              <img src="/planetgraph01.svg" alt="" />
            </div>
            <div className="energy-intensity">
             <img src="/planetgraph02.svg" alt="" />
            </div>
           </div>
           <div className="planate-climate-change-energy-effiecency" style={{borderBottom:"1px solid #B1B3B6",padding:"2%"}}>
            <div className="ghg-intensity" style={{paddingRight:"6%"}}>
              <img src="/planetdata01.svg" alt="" />
            </div>
            <div className="energy-intensity">
             <img src="/planetdata02.svg" alt="" />
            </div>
           </div>
           <div className="planate-climate-change-energy-effiecency" style={{borderBottom:"1px solid #B1B3B6",padding:"2%",borderTop:"none"}}>
            <div className="ghg-intensity" style={{paddingRight:"6%"}}>
              <img src="/planetdata01.svg" alt="" />
            </div>
            <div className="energy-intensity">
             <img src="/planetdata02.svg" alt="" />
            </div>
           </div>
          </div>
          <div className="gresnnish-planet-environment-text-container">
          To realise our ambition of becoming climate action leaders, we recognise the need to take actions aligned with the 1.5-degree climate scenario. In lieu of our commitment, we have now established our science-based short-term emissions reduction targets aligned with the 1.5-degree emissions trajectory. The targets have also been validated by the Science-based Targets Initiative (SBTi).
          <br />
          <br />
          “Tata Communications Limited commits to reducing absolute Scope 1 and Scope 2 GHG emissions by 42% by FY2030 from a FY2022 base year. Tata Communications Limited also commits to reducing absolute Scope 3 GHG emissions by 25% within the same timeframe.”
          <br />
          <br />
          We have demonstrated climate leadership this year with our CDP disclosure as well. We have received an A-, which is in the Leadership band. This is higher than the Asia regional average of C and higher than the Media, telecommunications and data centre services sector average of B. The leadership band signifies the implementation of current best practices by Tata Communications in climate action.
          </div>
          <div className="normal-text-climate-change-vision">
            <p className="boiggrer-decription">
            In alignment with our forward-looking vision, we have devised a targeted climate action strategy that seamlessly integrates industry-leading practices.
            </p>
            <p className="normal-text-planet-vision">
            This strategy is informed by a comprehensive understanding of our business’s risks and opportunities. Within this framework, we’ve identified eight climate action levers, spanning operational enhancements and decarbonization initiatives across our value chain.
            <br />
            <br />
            To mitigate the adverse impact of emerging climate risks on our operations, we’ve implemented best practice measures supported by internal carbon pricing mechanisms. Our commitment extends to transparently documenting our progress toward established objectives and strategies, while closely adhering to mandated disclosure and reporting frameworks. Through this holistic approach, we are resolutely dedicated to reducing our carbon footprint and contributing to a sustainable future for all.
            </p>
          </div>
          <div className="text-center-climate-change-container">
            <p className="bold-green-text">
            Assessing existing and emerging climate related risks and opportunities
            Implementation of Internal Carbon Pricing mechanism in overall climate action levers
            </p>
            <div className="underlined-green"></div>
            <div className="smallsquare-rotate-btn"></div>
          </div>
           <div className="plannet-climate-focus-section">
        <div className="focus-heading-section">
          <div className="parent-child-component">
            <span className="focus-heading1">Immediate Focus</span>
            <img src="/traingalePolygonplanet.png" alt="" />
          </div>
          <div className="parent-child-component">
            <span className="focus-heading2">Near-term Focus</span>
            <img src="/traingalePolygonplanet.png" alt="" />
          </div>
          <div className="parent-child-component">
            <span className="focus-heading1">Medium-term Focus</span>
            <img src="/traingalePolygonplanet.png" alt="" />
          </div>
          <div className="parent-child-component">
            <span className="focus-heading2">Long-term Focus</span>
            <img src="/traingalePolygonplanet.png" alt="" />
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
          <div className="accordian-main-section-climate-change">
            {/* <b className="heading-accrodian">PROGRESS MADE</b>
            <div className="accrodian-parent-element">
              {accrodianContent.map((accrodian) => (
                <Accrodian
                  heading={accrodian.heading}
                  descriptions={accrodian.description}
                  span={accrodian.span}
                />
              ))}
            </div> */}
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
                  Recognising the adverse consequences of climate change driven
                  by greenhouse gas (GHG) emissions, we are committed to
                  operational improvements that contribute to a significant
                  reduction in our GHG intensity.
                </p>
                <p className="small-accrodian-descriptions">
                  Through meticulous accounting of our GHG emissions,
                  encompassing both Scope 1 and Scope 2 as per the GHG Protocol
                  Corporate Accounting and Reporting Standard, we lay the
                  groundwork for targeted actions to diminish our carbon impact.
                  The analysis and reduction of Scope 3 emissions also form a
                  crucial part of our strategy, addressing emissions from
                  business travel, employee commute, and other indirect
                  activities.
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
          <PlanetGreenSolutions />
          <div className="yellowish-background-container">
            <PlanetTransioning transationingObject={CommunityCarbonObject} />
            <img className="specail-image-div" src="/Group 128.svg" alt="" />
          </div>
          <PlanetCuttingDownSolution />
          <PlanetClimateLastThreeComponet />
          <PlanetIntroducingEv />
        </div>
        <div className="quick-link-sections">
          <b className="heading-links">QUICK LINKS</b>
          <br />
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
