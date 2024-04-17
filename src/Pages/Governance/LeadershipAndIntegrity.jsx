import React,{useEffect} from "react";
import HeadBar from "../../Components/Headbar/HeadBar";
import "./Governance.css";
import { Link ,useLocation} from 'react-router-dom';
const LeadershipAndIntegrity = () => {
  const handleClick = (event,id) => {
    event.preventDefault(); // Prevent default anchor behavior
  
    const targetElement = document.querySelector(`#${id}`);
    if (targetElement) {
      // Calculate the offset based on the current scroll position
      const offset = targetElement.getBoundingClientRect().top - 100;
  
      // Scroll to the element with an offset
      window.scrollBy({
        top: offset,
        behavior: 'smooth'
      });
    }
  };
  const location = useLocation();
  useEffect(() => {
    const scrollToTarget = () => {
      if (location.hash) {
        console.log("here it is ",location.hash);
        const targetElement = document.querySelector(location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    // Call scrollToTarget when the location changes
    scrollToTarget();
  }, [location]);
  return (
    <div>
      <HeadBar
        icon={"/cardimg07.svg"}
        heading={"Leadership and Integrity"}
        theme={"#123C61"}
        headiconstyle={'#3B91DC'}
      />
      <div className="main-conter-wrapper-main-section">
        <div className="main-scrollabale-container-leadership-integrity">
          <div className="upper-section-leadership-and-integrity">
            To build a future-ready organisation, we strive to create a
            conducive environment for professional growth, nurture future
            leaders and create opportunities for skill development to meet
            evolving industry demands. Our commitment to upholding ethical
            values drives us to pursue sustainable business growth while
            maximising stakeholder value.
          </div>
          <div className="deep-background-description-leadership-and-integrity-container">
            <div id="Board-of-Directors" className="board-ofdirector-container">
              <b className="heading-blue">Board of Directors</b>
              <br />
              <br />
              <div className="upper-section-leadership-and-integrity">
                At Tata Communications, the Board of Directors plays a key role
                in navigating the company to achieve its long-standing business
                goals, managing strategic executions, and protecting stakeholder
                interests.
              </div>
              <br />
              <div className="normal-paragraph-leadership-and-integrity">
                The Board’s transparent approach to governance includes a
                nomination process that prioritizes diversity, thus contributing
                to a richer pool of decision-making perspectives. This
                foundational strategy underlies the company’s operational,
                strategic, and performance management, ensuring clear
                accountability and embracing inclusive leadership practices.
              </div>
              <div className="flexbox-board-of-director-image-photos">
                <div className="board-of-director-images-container">
                  <div className="image-container-single-div">
                    <img src="/md01.png" alt="" />
                    <b className="person-name-bold">
                    A.S. Lakshminarayanan
                    </b>
                    <p className="person-position">
                    Managing Director & <br />
                    Chief Executive Officer
                    </p>
                  </div>
                  <div className="image-container-single-div">
                    <img src="/md04.png" alt="" />
                    <b className="person-name-bold">
                    Ms. Renuka Ramnath
                    </b>
                    <p className="person-position">
                    Chairperson & Independent Director
                    </p>
                  </div>
                  <div className="image-container-single-div">
                    <img src="/md05.png" alt="" />
                    <b className="person-name-bold">
                    Mr. Ashok Sinha
                    </b>
                    <p className="person-position">
                    Independent Director
                    </p>
                    <br />
                  </div>
                  <div className="image-container-single-div">
                    <img src="/md03.png" alt="" />
                    <b className="person-name-bold">
                    Mr. Krishnakumar Natarajan
                    </b>
                    <p className="person-position">
                    Independent Director
                    </p>
                    <br />
                  </div>
                  <div className="image-container-single-div">
                    <img src="/md02.png" alt="" />
                    <b className="person-name-bold">
                    Mr. N. Ganapathy Subramaniam
                    </b>
                    <p className="person-position">
                    Non-Executive Director
                    <br />
                    </p>
                  </div>
                  <div className="image-container-single-div">
                    <img src="/md06.png" alt="" />
                    <b className="person-name-bold">
                    Mr. Ankur Verma
                    </b>
                    <p className="person-position">
                    Non-Executive Director
                    <br />
                    </p>
                  </div>
                </div>
                <div className="line1"></div>
                <div className="graph-image-conatainer-board-of-director">
                <img src="/boardofdirector.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div id="Board-Committees" className="board-ofdirector-container">
              <b className="heading-blue">Board Committees</b>
              <br />
              <br />
              <div className="upper-section-leadership-and-integrity">
              The specialized committees, organized by the Board, are tasked with overseeing critical governance areas such as financial oversight, stakeholder engagement, corporate social responsibility (CSR), safety, and environmental sustainability.
              </div>
              <br />
              <div className="normal-paragraph-leadership-and-integrity">
              These committees meticulously analyze relevant matters within their spheres of influence and provide well-thought-out recommendations for the Board's evaluation and endorsement. The Statutory Committees established by the Board consist of:
              </div>
              <img className="govn-board-committee-img" src="/govn-board-committee.png" alt="board commiteee images" />
            </div>
            <div id="Nominations-Evaluation-and-Performance" className="board-ofdirector-container">
              <b className="heading-blue"> <br />Nominations, Evaluation and Performance</b>
              <br />
              <br />
              
              <div className="normal-paragraph-leadership-and-integrity">
              At our organization, we uphold a structured and systematic protocol for Board nominations, evaluations, and performance evaluations. Each nomination undergoes rigorous examination by the Nomination and Remuneration Committee to confirm its alignment with our strategic direction. Furthermore, the Board conducts annual assessments of its own performance, as well as that of its committees and individual Directors.  <br /> <br />            </div>
            </div>
            <div id="Remuneration-and-Conflict-of-Interest" className="board-ofdirector-container">
              <b className="heading-blue"> <br /> Remuneration and Conflict of Interest</b>
              <br />
              <br />
              <div className="upper-section-leadership-and-integrity">
              The Board upholds a transparent and principled approach to remuneration and conflict of interest, guided by our strong corporate governance framework.
              </div>
            
              <div className="normal-paragraph-leadership-and-integrity">
              Compensation is judiciously set based on the performance of both the individual and the company, as assessed by the Nomination and Remuneration Committee alongside the Board. Our conflict of interest policy guarantees that the Board’s decisions consistently align with the organization’s best interests. This methodical practice affirms our commitment to transparency, accountability, and active stakeholder participation in our governance processes—key factors for achieving sustainable development and creating enduring value.
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
            <Link target="_blank" to="/Governance/policies-and-procedures#Policies">Policies</Link>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <li onClick={()=>handleClick(event,"Board-of-Directors")}>Board of Directors</li>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <li onClick={()=>handleClick(event,"Board-Committees")}>Board Committees</li>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <li onClick={()=>handleClick(event,"Nominations-Evaluation-and-Performance")}>Nominations, Evaluation and Performance</li>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <li onClick={()=>handleClick(event,"Remuneration-and-Conflict-of-Interest")}>Remuneration and Conflict of Interest</li>
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
          {/* <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">CDP reporting</a>
          </div> */}
          {/* <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Case Studies</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LeadershipAndIntegrity;
