import React from "react";
import HeadBar from "../../Components/Headbar/HeadBar";
import { Link } from "react-router-dom";

const RiskandResilance = () => {
  return (
    <div>
      <HeadBar
        icon={"/cardimg08.svg"}
        heading={"risk and rEsilience"}
        theme={"#123C61"}
        headiconstyle={'#3B91DC'}
      />
      <div className="main-conter-wrapper-main-section">
        <div className="main-scrollabale-container-leadership-integrity">
          <div className="upper-section-leadership-and-integrity">
            We integrate environmental, social and governance (ESG)
            considerations into our decision-making processes and business
            practices to adopt sustainable governance practices that promote
            long-term value creation.
          </div>
          <br />
          <br />
          <div className="normal-paragraph-leadership-and-integrity-upper">
            Our approach involves proactive engagement with stakeholders,
            transparent reporting on ESG performance and the incorporation of
            sustainability criteria into our strategic planning and risk
            management processes. By embracing sustainable governance
            principles, we aim to not only mitigate risks and enhance resilience
            but also contribute positively to the well-being of the planet and
            future generations.
          </div>
          <div className="deep-background-description-leadership-and-integrity-container">
            <div className="board-ofdirector-container">
              <b className="heading-blue">
                Enterprise risk management framework
              </b>
              <br />
              <br />
              <div className="normal-paragraph-leadership-and-integrity">
                Our comprehensive risk management framework proactively
                identifies potential threats and formulates strategic responses.
                This approach guarantees streamlined operations, promotes
                inclusivity, and secures our position as industry leaders. The
                Risk Management Committee diligently monitors significant risks,
                establishing appropriate controls and countermeasures. Moreover,
                the Board's Enterprise Risk Management approach facilitates
                early detection of risks, allowing for timely intervention.
                Rigorous internal control audits are conducted to verify the
                effectiveness of management practices and the reliability of
                financial reporting
              </div>
              <br />
              <div className="lower-section-leadership-and-integrity">
                In our Enterprise Risk Management (ERM) framework, we've
                identified the most important risks related to sustainability
                and ESG. Below, we've listed the main issues that are linked to
                these risks.
              </div>
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
            <Link target="_blank" to={'/Sustainability/fy24-goals-&-progress'}>Goals and Progress</Link>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <Link target="_blank" to="/Governance/policies-and-procedures#Policies">Policies</Link>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <Link target="_blank" to="/gri-index">GRI index</Link>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
           <Link target="_blank" to={'/Sustainability/sustainable-development-goals'} href="">SDG Linkage</Link>
          </div>
        </div>
      </div>
      <div className="risk-n-res-table">
        <div className="risk-tablw-divider"></div>
        <div className="risk-res-col">
          <div className="risk-res-h2-1">
            <h2>
              TOP ESG <br /> RISK
            </h2>
          </div>
          <div className="risk-res-table-content1">
            <h5>Environment Compliance and Sustainability</h5>
            <p className="risk-table-sec1">Minimizing our environmental impact, maximizing resource efficiency, and enhancing the adoption of renewable energy are imperative. Compliance with environmental legislation is equally critical. Failure to uphold stringent environmental standards could adversely affect our brand reputation and result in financial repercussions.</p>
            <h5>Human Resource Risk</h5>
            <p >The swift pace of change in our industry necessitates the retention and recruitment of talent. A company’s failure to cultivate a workforce that is both experienced and technically proficient can adversely affect its financial future. Additionally, excessive turnover and extended onboarding periods for new hires or replacements can amplify risks.</p>
          </div>
        </div>
        <div className="risk-res-col">
          <div className="risk-res-h2-2">
            <h2>
              MITIGATION <br /> MEASURES
            </h2>
          </div>
          <div className="risk-res-table-content2">

            <p className="risk-table-sec1">Our dedication to reducing environmental impact is unwavering. Our Environmental Management System (EMS) aligns with the ISO 14001:2015 standards. We regularly review our EMS to ensure compliance with all applicable national and regional regulations. By setting clear environmental targets, we steer our company towards achieving our sustainability goals</p>
            <p >A workforce enriched with technical skill and expertise is essential for our organization. Hence, we are devoted to securing and keeping individuals suited for specialized functions. We aim to create a nurturing atmosphere that encourages both professional and personal advancement, establishing a collaborative and inclusive culture that appreciates diversity and individual dignity. We also emphasize the growth and guidance of emerging talents, preparing them to navigate our organization to greater levels of accomplishment. Our proactive measures to ensure the well-being of our employees’ physical and mental health also signal a positive outlook for our team’s future.</p>
          </div>
        </div>

        <div className="risk-res-col">
          <div className="risk-res-h2-3">
            <h2>
              MATERIAL <br /> TOPICS
            </h2>
          </div>
          <div className="risk-res-table-content3">

            <ul className="risk-table-sec1">
              <li>Resource Management and environmental conservation</li>
              <br />
              <li>Climate Change</li>
            </ul>
            <ul >
              <li>Human capital development</li>
              <br />
              <li>Diversity and Inclusion</li>
              <br />
              <li>Health, Safety, and well-being</li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
};

export default RiskandResilance;