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
            src="/energy-climate-change-banner.png"
            alt=""
          />
        </div>
      </div>


      <div className="planet-climate-last-section-parent">

        <div className="main-section-climate-change" style={{ background: '#F7F7F7', borderRadius: "20px" }}>
          <motion.p
            style={{
              textTransform: "uppercase",
              backgroundColor: '#B0BC25', // Change background color based on isBlueHeading state
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="awards-green-title poppins-semibold"
          >
            <TextAnimation text={'our'} /> <TextAnimation text={'footprint'} />
          </motion.p>
          <div className="description-main-section planet-climate-change-description" >
            <div className="data-student-community-container-environment " style={{ display: "flex" }}>
              <div className="data-set-conatiner-below">
                <b style={{ color: "#B0BC25" }} className="big-size-data"><AnimatedCounter finalValue={10} />%</b>
                <p className="small-size-paragraph-environment">
                  Improvement in GHG Intensity  Reduction to 40.72MT of CO2 per million USD revenue from FY 2022
                </p>
              </div>
              <div className="data-set-conatiner-below">
                <b style={{ color: "#B0BC25" }} className="big-size-data"><AnimatedCounter finalValue={28} />%</b>
                <p className="small-size-paragraph-environment">
                  Reduction in Scope 1 and <br /> Scope 2 Emissions from Base <br />Year 2020
                </p>
              </div>
              <div className="data-set-conatiner-below">
                <b style={{ color: "#B0BC25" }} className="big-size-data"><AnimatedCounter finalValue={128} />,<AnimatedCounter finalValue={251} />MT</b>
                <p className="small-size-paragraph-environment">
                  of Scope 3 Emissions <br /> Recorded for 2022-23
                </p>
              </div>
            </div>
            <div className="planate-climate-change-energy-effiecency" style={{ paddingTop: "2%" }}>
              <div className="ghg-intensity">
                <img src="/planetdata01.svg" alt="" />
              </div>
              <div className="energy-intensity">
                <img src="/planetdata02.svg" alt="" />
              </div>
            </div>
            <div className="planate-climate-change-energy-effiecency" style={{ borderBottom: "1px solid #B1B3B6", padding: "2%" }}>
              <div className="ghg-intensity" style={{ paddingRight: "6%" }}>
                <img src="/planetdata03.svg" alt="" />
              </div>
              <div className="energy-intensity">
                <img src="/planetdata04.svg" alt="" />
              </div>
            </div>
            <div className="planate-climate-change-energy-effiecency" style={{ borderBottom: "1px solid #B1B3B6", padding: "2%", borderTop: "none" }}>
              <div className="ghg-intensity" style={{ paddingRight: "6%" }}>
                <img src="/planetdata05.svg" alt="" />
              </div>
              <div className="energy-intensity">
                <img src="/planetdata06.svg" alt="" />
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

            <div className="focus-main-content-container">
              <div className="mainContainer-focus-sectin div-focus1">
                <div className="parent-child-component">
                  <span className="focus-heading1">Immediate Focus</span>
                  <img src="/ecm=polygon.svg" alt="" />
                </div>
                <div className="single-focus-container">
                  <div className="single-focus-container-heading-bar">

                    <b className="single-focus-container-heading">
                      Enhancing Energy Efficiency
                    </b>
                    <img
                      src="/ecc-heading-bar1.png"
                      alt=""
                      className="single-compo-image"
                    />
                  </div>

                  <p className="single-focus-container-description">
                    Increase energy efficiency by optimising energy consumption in facilities and data centres
                  </p>
                  <a href="" className="single-focus-conatiner-links">
                    Read More{">"}
                  </a>
                </div>
                <div className="single-focus-container">
                  <div className="single-focus-container-heading-bar">

                    <b className="single-focus-container-heading">
                      Transition to Renewable Energy (RE):
                    </b>
                    <img
                      src="/ecc-heading-bar5.png"
                      alt=""
                      className="single-compo-image"
                    />
                  </div>
                  <p className="single-focus-container-description">
                    Improve emission reduction by raising the proportion of renewable energy sources in the energy mix
                  </p>
                  <a href="" className="single-focus-conatiner-links">
                    Read More{">"}
                  </a>
                </div>
              </div>
              <div className="mainContainer-focus-sectin div-focus2">
                <div className="parent-child-component">
                  <span className="focus-heading2">Near-term Focus</span>
                  <img src="/ecm=polygon.svg" alt="" />
                </div>
                <div className="single-focus-container single-focus-container-specail">
                  <div className="single-focus-container-heading-bar">
                    <b className="single-focus-container-heading">
                      Avoided emissions through products and services
                    </b>
                    <img
                      src="/ecc-heading-bar2.png"
                      alt=""
                      className="single-compo-image"
                    />
                  </div>
                  <p className="single-focus-container-description">
                    Prioritising green product innovation to minimise our carbon footprint
                  </p>
                  <a href="" className="single-focus-conatiner-links">
                    Read More{">"}
                  </a>
                </div>
                <div className="single-focus-container single-focus-container-specail">
                  <div className="single-focus-container-heading-bar">

                    <b className="single-focus-container-heading">
                      Community Carbon Offset Programmes
                    </b>
                    <img
                      src="/ecc-heading-bar6.png"
                      alt=""
                      className="single-compo-image"
                    />
                  </div>
                  <p className="single-focus-container-description">
                    Implement carbon offset programmes at the community level
                  </p>
                  <a href="" className="single-focus-conatiner-links">
                    Read More{">"}
                  </a>
                </div>
              </div>
              <div className="mainContainer-focus-sectin div-focus1">

                <div className="parent-child-component">
                  <span className="focus-heading1">Medium-term Focus</span>
                  <img src="/ecm=polygon.svg" alt="" />
                </div>
                <div className="single-focus-container">
                  <div className="single-focus-container-heading-bar">

                    <b className="single-focus-container-heading">
                      Reducing Value Chain Based Emissions
                    </b>
                    <img
                      src="/ecc-heading-bar3.png"
                      alt=""
                      className="single-compo-image"
                    />
                  </div>
                  <p className="single-focus-container-description">
                    Objective is to reduce emissions throughout the entire value chain, encompassing upstream, downstream and supply chain operations.
                  </p>
                  <a href="" className="single-focus-conatiner-links">
                    Read More{">"}
                  </a>
                </div>
                <div className="single-focus-container">
                  <div className="single-focus-container-heading-bar">

                    <b className="single-focus-container-heading">
                      Introducing EVs and Cleaner Based Options
                    </b>
                    <img
                      src="/ecc-heading-bar7.png"
                      alt=""
                      className="single-compo-image"
                    />
                  </div>
                  <p className="single-focus-container-description">
                    Launch community-based carbon offset programmes and introduce cleaner fuel options for Electric Vehicles (EVs) to decrease emissions related to commuting.
                  </p>
                  <a href="" className="single-focus-conatiner-links">
                    Read More{">"}
                  </a>
                </div>
              </div>
              <div className="mainContainer-focus-sectin div-focus2">
                <div className="parent-child-component">
                  <span className="focus-heading2">Long-term Focus</span>
                  <img src="/ecm=polygon.svg" alt="" />
                </div>
                <div className="single-focus-container single-focus-container-specail">
                  <div className="single-focus-container-heading-bar">

                    <b className="single-focus-container-heading">
                      Decarbonising Scope 1 Emissions
                    </b>
                    <img
                      src="/ecc-heading-bar4.png"
                      alt=""
                      className="single-compo-image"
                    />

                  </div>
                  <p className="single-focus-container-description">
                    Decarbonise Scope 1
                    (Diesel-based) emissions.
                  </p>
                  <a href="" className="single-focus-conatiner-links">
                    Read More{">"}
                  </a>
                </div>
                <div className="single-focus-container single-focus-container-specail">
                  <div className="single-focus-container-heading-bar">

                    <b className="single-focus-container-heading">
                      Driving Climate Action Through Collaboration
                    </b>
                    <img
                      src="/ecc-heading-bar8.png"
                      alt=""
                      className="single-compo-image"
                    />
                  </div>
                  <p className="single-focus-container-description">
                    Participate in collaborative endeavours to promote climate action and contribute to policy development alongside key stakeholders.
                  </p>
                  <a href="" className="single-focus-conatiner-links">
                    Read More{">"}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="ecc-sec3-content">
            <img src="/small-square-btn.png" alt="" />
            <h2>
              ENHANCING ENERGY EFFICIENCY
            </h2>
            <h3>
              Energy efficiency is one of the key levers in our strategy which reduces our energy demand while accommodating the growing business needs.
            </h3>
            <p>
              We invest significantly in our energy efficiency projects to improve the operations of the offices, networking centres  and PoP locations while addressing the gaps in the infrastructure. To accomplish this, we undertake proactive actions by comprehensive planning and assessing the impacts of the initiatives at financial, technological, social and environmental level. These opportunities encompass all our equipments and facilities such as HVAC, SMP, UPS systems and illumination systems. With this holistic approach, we enable our operations to optimise energy usage and achieve our overall climate goals. <br /><br />
            </p>
            <p>
              We recognise monitoring and measurement activity as a critical element for us to maintain the efficiency of our infrastructure. Therefore, we ensure all our energy consumption across operations is monitored, measured, and reviewed at all levels. This helps in identifying performance issues, taking corrective actions, and benchmarking our systems with the global leading best practices. Furthermore, we conduct thorough internal energy audits to assess the current gaps and implement the opportunities.
            </p>

            <div className='bar-heading-parent' style={{ display: "flex", width: '100%', justifyContent: 'center' }}>
              <h3 className='planet-bar-heading-sec poppins-medium'>PROGRESS MADE</h3>
            </div>
            <div className="p-ecc-bcc-wrap-main">
              <div className="p-ecc-bcc-wrap flex">
                <img src="/ecc-bcc1.png" alt="" />
                <img src="/ecc-bcc2.png" alt="" />
              </div>
              <div className="p-ecc-bcc-wrap flex">
                <img src="/ecc-bcc3.png" alt="" />
                <img src="/ecc-bcc4.png" alt="" />
              </div>
            </div>
            <img src="/small-square-btn.png" alt="" />
            <h2>
              TRANSITION TO RENEWABLE ENERGY
            </h2>
            <h3>
              Recognising the crucial role of renewable energy in reducing carbon emissions, we are actively seeking opportunities to increase the proportion of renewables in our energy portfolio.
            </h3>
            <p>
              Our renewable energy portfolio is focused to bring cost effectiveness with less volatile prices and compete with conventional electricity tariffs. Keeping our future ambition to become Net Zero and RE outlook, we plan targeted opportunities with long term time horizons in mind.<br /><br />
            </p>
            <p>
              Our current portfolio includes Power purchase agreements (PPA), government green tariff schemes, Group captive models, solar rooftops and Energy Attribute Certificates.
            </p>
            <p>
              Our current portfolio includes Power purchase agreements (PPA), government green tariff schemes, Group captive models, solar rooftops and Energy Attribute Certificates. <br /><br /><br />
            </p>
            <div className="p-ecc-bcc-wrap-main">
              <h4>
                Decarbonisation of Operations
              </h4>
              <h3>
                Our comprehensive decarbonisation strategy seeks to reduce the carbon footprint associated with our operations.
              </h3>
              <p>
                Recognising the detrimental effects of climate change caused by greenhouse gas (GHG) emissions, we are committed to adopting operational enhancements that lower our GHG intensity. We have laid the foundation for targeted efforts to reduce our carbon footprint by <b>meticulously tracking our GHG emissions,</b> which include both Scope 1 and Scope 2 emissions, in accordance with the GHG Protocol Corporate Accounting and Reporting Standard. The <b>analysis and mitigation of Scope 3 emissions,</b> involving emissions from employee commuting, business travel and other indirect activities, are also integral components of our strategy.
              </p>
            </div>
            <div className='bar-heading-parent' style={{ display: "flex", width: '100%', justifyContent: 'center' }}>
              <h3 className='planet-bar-heading-sec poppins-medium'>PROGRESS MADE</h3>
            </div>
            <div className="p-ecc-bcc-wrap-main">
              <div className="p-ecc-bcc-wrap flex">
                <img src="/ecc-bcc5.png" alt="" />
                <img src="/ecc-bcc6.png" alt="" />
              </div>
              <div className="p-ecc-bcc-wrap flex">
                <img src="/ecc-bcc7.png" alt="" />
              </div>
            </div>

            <img src="/small-square-btn.png" alt="" />
            <h2>
              CUSTOMER GHG AVOIDANCE <br />
            </h2>
            <h3>
              At Tata Communications, we are developing environment-friendly products and solutions that seamlessly connect our business with the environment and society. <br />
            </h3>
            <p>
              By offering green solutions to our clients, we assist them in becoming more competitive and sustainable in their supply chains. Our low-carbon products and solutions, spanning robust network services, Internet of Things (IoT) solutions, Manufacturing Execution Systems (MES), cloud services and collaborative business solutions, are meticulously designed to deliver substantial reduction in greenhouse gas (GHG) emissions.<br />
            </p>
            <div className="p-ecc-bcc-wrap-main-grey">
              <div className='bar-heading-parent' style={{ display: "flex", width: '100%', justifyContent: 'center' }}>
                <h3 className='planet-bar-heading-sec poppins-medium'>PROGRESS MADE</h3>
              </div>
              <div className="p-ecc-bcc-wrap flex">
                <img src="/ecc-bcc8.png" alt="" />
                <img src="/ecc-bcc9.png" alt="" />
              </div>
              <div className="p-ecc-bcc-wrap flex">
                <img src="/ecc-bcc10.png" alt="" />
                <img src="/ecc-bcc11.png" alt="" />
              </div>
              <div className="p-ecc-bcc-wrap flex">
                <img src="/ecc-bcc12.png" alt="" />
                <img src="/ecc-bcc13.png" alt="" />
              </div>
              <div className="p-ecc-bcc-wrap flex">
                <img src="/ecc-bcc14.png" alt="" />
              </div>
            </div>
            <img src="/small-square-btn.png" alt="" />
            <h2>
              COMMUNITY CARBON OFFSET PROGRAMMES<br /><br />
            </h2>
            <h3>
              We remain resolute in our commitment to mitigating risks posed by climate change and to inspire positive change in the communities where we operate. <br /> <br />
            </h3>
            <p>
              Additionally, we have undertaken an extensive baseline and community needs assessment to find feasible carbon offset projects. Using this method, we have found projects that have been assessed both financially and operationally with the goal of enhancing plantations and cook stoves. By the fiscal year 2030, <b>our objective is to have produced 95,000 metric tonnes of Community-based Carbon Credits,</b> signifying a significant contribution to both the local environment and the broader climate agenda.<br />
            </p>
          </div>
          <div className="p-ecc-bcc-wrap-main-grey">
            <img src="/ecc-bcc15.png" alt="" />
          </div>
          <div className="p-ecc-bcc-wrap-main">
            <div className="p-ecc-bcc-wrap flex">
              <div className="p-ecc-bcc-wrap-context">
                <img className="ecc-bcc-lil-btn" src="/small-square-btn.png" alt="" />

                <h2>
                  CUTTING DOWN ON VALUE CHAIN BASED EMISSIONS<br /><br />
                </h2>
                <p>
                  We have adopted a strategic approach to reduce emissions throughout our value chain as part of our comprehensive Scope 3 emissions assessment. Recognising that a significant portion of our carbon footprint is linked to our suppliers, we have identified our top suppliers as key contributors.<br />
                </p>
                <p>
                  In response to this, we have devised our Climate Action in Supply Chain strategy under Sustainable Supply Chain Framework to enhance our engagement and collaboration with suppliers. With this strategy, each of the contributors have been assessed on their current climate performance and categorised on three levels based on their climate action maturity (GHG inventory, CDP disclosure and SBTi targets). For each maturity level, a set of engagement plan is implemented for the key contributors.<br />
                </p>
                <p>
                  With this guiding strategy, we are embarking in a crucial journey to educate suppliers about climate change and supporting them in their climate action journey while also assessing the impact on our supply chain based emissions to create a positive impact in global supply chains.<br />
                </p>
              </div>
              <img className="ecc-bcc16" src="/ecc-bcc16.png" alt="" />

            </div>
          </div>
          <div className="p-ecc-bcc-wrap-main">
            <div className="p-ecc-bcc-wrap-fnl flex">
              <img className="ecc-bcc17" src="/ecc-bcc17.png" alt="" />
              <div className="p-ecc-bcc-wrap-context">
                <img className="ecc-bcc-lil-btn" src="/small-square-btn.png" alt="" />

                <h2>
                  DECARBONISING DIESEL-BASED SCOPE 1 EMISSIONS<br /><br />
                </h2>
                <p>
                  Our commitment to advancing climate action transcends our direct operations. We actively <b>participate in advocacy</b> and <b>foster relationships with stakeholders</b> to navigate regulatory hurdles, particularly in the renewable energy sector. Our climate action teams are crafting detailed roadmaps and seeking partnerships to bolster our strategies and broaden the scope of our climate initiatives.<br />
                </p>

                <img className='ecc-bcc20 ' src="/ecc-bcc20.png" alt="" />
              </div>
            </div>
          </div>
          <div className="p-ecc-bcc-wrap-main">
            <div className="p-ecc-bcc-wrap-fnl flex">
              <div className="p-ecc-bcc-wrap-context">
                <img className="ecc-bcc-lil-btn" src="/small-square-btn.png" alt="" />

                <h2>
                  DRIVING CLIMATE ACTION THROUGH COLLABORATION<br /><br />
                </h2>
                <p>
                  We are tracking the environmental impact of our backup power sources. Traditional diesel generators, employed for energy continuity, contribute to Scope 1 emissions. To address this concern, we are exploring energy-efficient, emission-free alternatives, such as <b>battery energy storage systems.</b> These alternatives align with our decarbonisation goals by eliminating diesel usage and offering on-site energy storage solutions that enhance the resilience and sustainability of our operations<br />
                </p>
                <p>
                  We are also moving towards Dual fuel technologies and advanced emission control devices for our generators, thus, minimising the use of diesel.<br />
                </p>
                <img className='ecc-bcc20 ' src="/ecc-bcc21.png" alt="" />

              </div>
              <img className="ecc-bcc18" src="/ecc-bcc18.png" alt="" />

            </div>
          </div>
          <div className="p-ecc-bcc-wrap-main">
            <div className="p-ecc-bcc-wrap-fnl flex">
              <img className="ecc-bcc18" src="/ecc-bcc19.png" alt="" />

              <div className="p-ecc-bcc-wrap-context">
                <img className="ecc-bcc-lil-btn" src="/small-square-btn.png" alt="" />

                <h2>
                  ENSURING TRANSPARENCY AND ACCOUNTABILITY<br /><br />
                </h2>
                <p>
                  We emphasise transparency and accountability in our endeavour to address climate challenges. We adhere to various reporting frameworks and standards, ensuring that our stakeholders are kept informed about the progress of our climate actions.<br />
                </p>
                <p>
                  We respond to CDP annually and publicly disclose our climate action performance through our sustainable development reports. We ensure the climate action performance is also verified by an independent third-party assurance provider.<br />
                </p>
                <p>
                  We also engage with customers on our climate performance and ensure the transparency is maintained prior to the service commencement for the customers.<br />
                </p>

              </div>

            </div>
          </div>

          {/* <PlanetGreenSolutions /> */}
          <div className="yellowish-background-container">
            {/* <PlanetTransioning transationingObject={CommunityCarbonObject} /> */}
            {/* <img className="specail-image-div" src="/Group 128.svg" alt="" /> */}
          </div>
          {/* <PlanetCuttingDownSolution /> */}
          {/* <PlanetClimateLastThreeComponet /> */}
          {/* <PlanetIntroducingEv /> */}
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
            <a href="">Goals and Progress</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Policies</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Our Footprint</a>
          </div>
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
            <a href="">Customer GHG Avoidance</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Community Carbon Offset Programmes </a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Cutting Down on Value Chain Based Emissions</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Introducing EVs and Cleaner Fuel Options</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Decarbonising Diesel-Based Scope 1 Emissions</a>
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
            <a href="">Ensuring Transparency and Accountability</a>
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
            <a href="">SDG Linkages</a>
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