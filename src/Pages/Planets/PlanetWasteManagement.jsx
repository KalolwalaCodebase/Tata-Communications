import React from "react";
import HeadBar from "../../Components/Headbar/HeadBar";
import { Link ,useNavigate} from "react-router-dom";

const PlanetWasteManagement = () => {
  const navigate = useNavigate();

  const handleClick = async (event, id) => {
      event.preventDefault(); // Prevent default link behavior
      const targetElement = document.querySelector(`#${id}`);
      if (targetElement) {
        // Calculate the offset based on the current scroll position
        const offset = targetElement.getBoundingClientRect().top - 100;
  
        // Scroll to the element with an offset
        window.scrollBy({
          top: offset,
          behavior: "smooth",
        });
  
        // Update URL
        navigate(`${window.location.pathname}#${id}`);
      }
    }
  return (
    <div>
      <HeadBar
        heading={"WASTE MANAGEMENT"}
        icon={"/planetpage002.svg"}
        theme={"#B0BC25"}
        headiconstyle={"rgb(184 198 25)"}
      />

      <div className="wm-quick-links-section">
        <div className="wm-sticky-links">
          <h4>QUICK LINKS</h4>
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
              <a onClick={(event) => handleClick(event, "Waste-Categorisation")}>
              Waste Categorisation
              </a>
            </div>
            <div className="quicklinks-button-div">
              <img
                className="quick-links-logo"
                src="/quickLinkArrow.png"
                alt=""
              />
              <a onClick={(event) => handleClick(event, "NON-HAZARDOUS-WASTE")}>
              Non-Hazardous Waste
              </a>
            </div>
            <div className="quicklinks-button-div">
              <img
                className="quick-links-logo"
                src="/quickLinkArrow.png"
                alt=""
              />
              <a onClick={(event) => handleClick(event, "Hazardous-Waste")}>
              Hazardous Waste
              </a>
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
            <div className="quicklinks-button-div">
              <img
                className="quick-links-logo"
                src="/quickLinkArrow.png"
                alt=""
              />
              <a>
                CDP reporting
              </a>
            </div>
        </div>
      </div>

      <div className="planet-wm-sec1 flex" style={{justifyContent:"flex-start"}}>
        <div className="planet-wm-sec1-text">
          <h2 style={{color:"#7B8422"}}>
          At the heart of our sustainability ethos lies a robust waste management system. As a Company focused on service provision, our waste production primarily consists of non-hazardous refuse from everyday operations and hazardous materials like E-waste and batteries from our service apparatus. <br />
          </h2>
          <br />
          <p>
          Our reliance on external suppliers for this equipment constrains our influence over their waste generation. Additionally, the intangible nature of our products translates to minimal waste creation on the client's end. Despite these factors, we are dedicated to diminishing waste-related impacts through effective and eco-friendly disposal methods. Non-hazardous waste is channelled to local recycling centres or municipal collection services, while hazardous waste is disposed of conscientiously via certified recycling firms. <br />
          </p>
          <br />
          <p>
          Our strategy for waste management is centred on the principles of efficient recycling and the reduction of waste streams wherever feasible, highlighting our pledge to environmental guardianship. This strategy encompasses the composting of organic refuse, and we are actively developing plans to expand these initiatives and incorporate a circular economy approach into our business model, in line with our aspiration of achieving zero waste to landfill by the financial year 2027. We utilise an in-house automated system alongside facility-specific data logs to monitor and regulate waste, ensuring adherence to both national and regional regulations. We advocate for the uptake of sustainable practices in the disposal or recycling of end-of-life waste, collaborating with accredited partners. Through these measures, we have successfully averted the disposal of waste in landfills, significantly curtailing our ecological footprint.
          </p>
        </div>
        <img src="/planet003.png" alt="" />
      </div>

      <div id='Waste-Categorisation' className="planet-wm-sec2 flex">
        <div className="planet-wm-sec2-card1">
          <div className="planet-wm-sec2-card-header flex">
            <h2>
              WASTE <br />
              MINIMISATION
            </h2>
            <img src="/planet-wm-sec2-card-header-icon1.png" alt="" />
          </div>
          <div className="planet-wm-sec2-card-divider"></div>
          <ul>
            <li>
              Elimination of non-recyclable <br />
              material from the operations
            </li>
            <li>
              Ensuring continuous vigilance <br />
              on single-use plastics within the <br />
              campuses
            </li>
          </ul>
        </div>

        <div className="planet-wm-sec2-card2">
          <div className="planet-wm-sec2-card-header flex">
            <h2>
              RECYCLING <br />
              AND REUSE
            </h2>
            <img src="/planet-wm-sec2-card-header-icon2.png" alt="" />
          </div>
          <div className="planet-wm-sec2-card-divider"></div>
          <ul>
            <li>
              100% recycling of recyclable, non- <br />
              hazardous waste
            </li>
            <li>
              Maintaining 100% recycling for <br />
              regulatory waste such as e-waste, <br />
              battery waste and other hazardous <br />
              waste
            </li>
          </ul>
        </div>

        <div className="planet-wm-sec2-card3">
          <div className="planet-wm-sec2-card-header flex">
            <h2>
              MONITORING <br />
              AND AWARENESS
            </h2>
            <img src="/planet-wm-sec2-card-header-icon3.png" alt="" />
          </div>
          <div className="planet-wm-sec2-card-divider"></div>
          <ul>
            <li>
              Segregation of non-hazardous waste <br />
              in 12 different waste streams
            </li>
            <li>
              Awareness to employees and ground <br />
              staff on waste management and <br />
              waste handling.
            </li>
          </ul>
        </div>
      </div>
      <div id='NON-HAZARDOUS-WASTE' className="planet-wm-sec3">
        <br />
        <img src="/small-square-btn.png" alt="" />
        <br />
        <br />
        <h2>NON-HAZARDOUS WASTE</h2>
        <h3>
        Non-hazardous waste primarily consists of municipal solid waste, which we segregate into paper, food, plant trimmings, plastic, metal and cartons.
        </h3>
        <br />
        <p>
        These waste types are responsibly disposed of by authorized recyclers or municipal corporations. Our Organic Waste Converters (OWCs) transform cafeteria food waste into valuable manure. Furthermore, we've proactively banned single-use plastic across all our facilities, opting for sustainable alternatives. Glass bottles now replace PET bottles in our meeting rooms, and reusable ceramic or acrylic mugs have replaced plastic cups in the cafeteria. We actively encourage employees to minimise their use of single-use plastics in their daily routines.
        </p>
      </div>
      <div className="planet-wm-sec4">
        <div className="planet-wm-sec4-content">
          <div
            className="bar-heading-parent"
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <h3 className="planet-bar-heading-sec poppins-medium">
              PROGRESS MADE
            </h3>
          </div>
          <p className="planet-wm-sec4-p1">
            We recycled <span>72%</span> of the 93,481 kg of municipal solid
            waste that we generated using in-house OWCs and third-party
            recyclers. By using in house OWCs, almost <span>86%</span> of
            biodegradable waste was composted.
          </p>
          <br />
          <br />
          <div className="planet-wm-sec4-row flex">
            <div className="planet-wm-sec4-row-cont">
              <h1>68 tonnes</h1>
              <p>
                Food and Plant Waste <br />
                Composted
              </p>
            </div>
            <div className="planet-wm-sec4-row-cont">
              <h1>67%</h1>
              <p>
                Non-hazardous Waste <br />
                Recycled
              </p>
            </div>
          </div>
          <div className="planet-wm-sec4-row-divider"></div>
          <div className="planet-wm-sec4-row-graph">
            <img src="/planet-wm-sec4-graph.png" alt="" />
          </div>
        </div>
      </div>
      <div id='Hazardous-Waste' className="planet-wm-sec5">
        <div className="planet-wm-sec5-content flex">
          <div className="planet-wm-sec5-content-text">
            <br />
            <img src="/small-square-btn.png" alt="" />
            <br />
            <br />
            <h2>HAZARDOUS WASTE</h2>
            <h3>
              At Tata Communications, we maintain a 100% recycling rate for our
              waste through authorized recyclers.
            </h3>
            <br />
            <p>
              Some of the hazardous waste generated at our facilities includes
              used oil, oil filters, oil-soaked cotton from diesel generator
              sets, used batteries from energy utilities, and e-waste from
              electronic equipment.
            </p>
            <p>
            Our waste handlers receive comprehensive training to prevent spills and contamination risks. Metal Scrap Trade Corporation Limited, an authorised recycler and processor, ensures compliance with waste management regulations in the relevant regions or countries.
            </p>
            <br />
            <br />
            <h1>187,263 kg</h1>
            <h6>
              of hazardous waste <br />
              generated in FY 24
            </h6>
          </div>
          <img
            className="planet-wm-sec5-graph"
            src="/planet-wm-sec5-graph.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PlanetWasteManagement;
