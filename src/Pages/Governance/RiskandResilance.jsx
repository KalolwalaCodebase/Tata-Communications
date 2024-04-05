import React from "react";
import HeadBar from "../../Components/Headbar/HeadBar";

const RiskandResilance = () => {
  return (
    <div>
      <HeadBar
        icon={"/Demologo.png"}
        heading={"risk and rEsilience"}
        theme={"#123C61"}
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
          <div className="normal-paragraph-leadership-and-integrity">
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
                the Board’s Enterprise Risk Management approach facilitates
                early detection of risks, allowing for timely intervention.
                Rigorous internal control audits are conducted to verify the
                effectiveness of management practices and the reliability of
                financial reporting
              </div>
              <br />
              <div className="upper-section-leadership-and-integrity">
                In our Enterprise Risk Management (ERM) framework, we’ve
                identified the most important risks related to sustainability
                and ESG. Below, we’ve listed the main issues that are linked to
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
            <a href="">Enterprise Risk Management Framework</a>
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
        </div>
      </div>
    </div>
  );
};

export default RiskandResilance;
