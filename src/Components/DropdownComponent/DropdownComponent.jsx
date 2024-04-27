import React, { useState,useEffect } from "react";
import "./DropdownComponent.css";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link ,useLocation} from 'react-router-dom';

const DropdownComponent = ({ hoveredNavItem, onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [modifiedMenuItems, setModifiedMenuItems] = useState([]);
  const [ref, inView] = useInView();
  const location = useLocation();
  const callafterdelay=()=>{
    setTimeout(()=>{
  onClose();
    },300)
  }
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
  const handleCloseDropdown = () => {
    setHoveredNavItem(null);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  // Reset menuItems when hoveredNavItem changes
  React.useEffect(() => {
    if (hoveredNavItem !== null) {
      switch (hoveredNavItem) {
        case 0: // People
          setModifiedMenuItems([
            {
              imgSrc: "/dropdown-img-ppl.png",
              headings: ["EMPLOYEES", "CUSTOMERS", "SUPPLY CHAIN"],
              listItems: [
                [
                  { text: "Diversity and Inclusion", link: "/People/employees#Diversity-and-Inclusion" },
                  { text: "Learning and Skill Development", link: "/People/employees#Learning-and-Skill-Development" },
                  { text: "Towards Zero Harm", link: "/People/employees#towards-zero-harm" },
                  // Add more items here...
                ],
                [
                  { text: "Customer Experience", link: "/People/customers#Customer-experiences" },
                  { text: "Enhancing Customer Engagement", link: "/People/customers#Enhancing-Customer-Engagement" },
                  { text: "Our USPs", link: "/People/customers#our-usps-id" },
                  // Add more items here...
                ],
                [
                  { text: "Responsible Sourcing", link: "/People/supply-chain#Responsible-sourcinge" },
                  { text: "Sustainable Supply Chain Framework", link: "/People/supply-chain#Sustainable-Supply-Chain-Framework" },
                  { text: "Supplier Diversity", link: "/People/supply-chain#Supplier-Diversity" },
                  { text: "ESG Due Diligence", link: "/People/supply-chain#ESG-Due-Diligence" },
                  // Add more items here...
                ],
              ],
            },
          ]);
          break;
        case 1: // Planet
          setModifiedMenuItems([
            {
              imgSrc: "/dropdown-img-planet.png",
              headings: [
                "ENERGY & CLIMATE CHANGE",
                "WASTE MANAGEMENT",
                "WATER RESOURCE MANAGEMENT",
              ],
              listItems: [
                [
                  { text: "Our Footprint", link: "/Planet/energy-&-climate-change#Our-Footprint" },
                  { text: "Enhancing Energy Efficiency", link: "/Planet/energy-&-climate-change#Enhancing-Energy-Efficiency" },
                  { text: "Transition to Renewable Energy ", link: "/Planet/energy-&-climate-change#Transition-to-Renewable-Energy" },
                  { text: "Developing Green Solutions", link: "/Planet/energy-&-climate-change#Customer-GHG-Avoidance" },
                  { text: "Community Carbon Offset Programmes", link: "/Planet/energy-&-climate-change#Community-Carbon-Offset-Programmes" },
                  {
                    text: "Cutting Down on Value Chain Based Emissions",
                    link: "/Planet/energy-&-climate-change#Cutting-Down-on-Value-Chain-Based-Emissions",
                  },
                  {
                    text: "Introducing EVs and Cleaner Fuel Options",
                    link: "/Planet/energy-&-climate-change#Introducing-EVs-and-Cleaner-Fuel-Options",
                  },
                  {
                    text: "Decarbonising Diesel-Based Scope 1 Emissions",
                    link: "/Planet/energy-&-climate-change#Decarbonising-Diesel-Based-Scope-1-Emissions",
                  },
                  {
                    text: "Driving Climate Action Through Collaboration",
                    link: "/Planet/energy-&-climate-change#Driving-Climate-Action-Through-Collaboration",
                  },
                  {
                    text: "Ensuring Transparency and Accountability",
                    link: "/Planet/energy-&-climate-change#Ensuring-Transparency-and-Accountability",
                  },
                  // Add more items here...
                ],
                [
                  { text: "Waste Categorisation", link: "/Planet/waste-management#Waste-Categorisation" },
                  { text: "Non-hazardous waste", link: "/Planet/waste-management#NON-HAZARDOUS-WASTE" },
                  { text: "Hazardous waste", link: "/Planet/waste-management#Hazardous-Waste" },
                  // Add more items here...
                ],
                [
                  { text: "Water Resource Management", link: "/Planet/water-managment#Water-Resource-Management" },
                  { text: "Wastewater management", link: "/Planet/water-managment#Wastewater-management" },
                  // Add more items here...
                ],
              ],
            },
          ]);
          break;
        case 2: // Community
          setModifiedMenuItems([
            {
              imgSrc: "/dropdown-img-com.png",
              headings: ["EDUCATION", "SUSTAINABLE LIVELIHOOD", "ENVIRONMENT"],
              listItems: [
                [{ text: "Education", link: "/Community/education" }],
                [{ text: "Sustainable Livelihood", link: "/Community/sustainable-livelihoods" }],
                [{ text: "Environment", link: "/Community/environment"}],
              ],
            },
          ]);
          break;
        case 3: // Governance
          setModifiedMenuItems([
            {
              imgSrc: "/dropdown-img-gov.png",
              headings: [
                "LEADERSHIP AND INTEGRITY",
                "HUMAN RIGHTS",
                "RISK AND RESILIENCE",
                "ECONOMIC PERFORMANCE",
                "CULTIVATING INNOVATION",
                "POLICIES AND PROCEDURES",
              ],
              listItems: [
                [
                  { text: "Board of Directors", link: "/Governance/leadership-and-integrity-at-the-core#Board-of-Directors" },
                  { text: "Board Committees", link: "/Governance/leadership-and-integrity-at-the-core#Board-Committees" },
                  {
                    text: "Nominations, Evaluation and Performance",
                    link: "/Governance/leadership-and-integrity-at-the-core#Nominations-Evaluation-and-Performance",
                  },
                  { text: "Remuneration and Conflict of Interest", link: "/Governance/leadership-and-integrity-at-the-core#Remuneration-and-Conflict-of-Interest" },
                  // Add more items here...
                ],
                [
                  { text: "Policy Framework", link: "/Governance/human-rights#Policy-Framework" },
                  { text: "Ensuring Dignity at work", link: "/Governance/human-rights#Ensuring-safety-at-work" },
                  { text: "Assessment and Engagement", link: "/Governance/human-rights#Ethics-Helpline" },
                  { text: "Awareness and training", link: "/Governance/human-rights#Awareness-and-training" },
                  { text: "Vendor and third party compliance", link: "/Governance/human-rights#Vendor-and-third-party-compliance" },
                  // Add more items here...
                ],
                [
                  { text: "Enterprise Risk Management Framework", link: "/Governance/risk-and-resilience#Enterprise-Risk-Management-Framework" },
                  // Add more items here...
                ],
                [
                  { text: "Committed to Value Creation", link: "/Governance/economic-performance#Committed-to-Value-Creation" },
                  { text: "Value Generated for key stakeholders", link: "/Governance/economic-performance#Value-Generated-for-key-stakeholders" },
                ],
                [
                  {
                    text: "Strategic Collaboration for technological Advancement",
                    link: "/Governance/cultivating-innovations#Strategic-Collaboration-for-technological-Advancement",
                  },
                  {
                    text: "Building-intellectual-ecosystem",
                    link: "/Governance/cultivating-innovations#Building-intellectual-ecosystem",
                  },
                  {
                    text: "Empowering innovators",
                    link: "/Governance/cultivating-innovations#Empowering-innovators",
                  },
                  {
                    text: "Innovation and Sustainability",
                    link: "/Governance/cultivating-innovations#Innovation-and-Sustainability",
                  },
                  { text: "Assessment and engagement", link: "/Governance/cultivating-innovations#Assessment-and-engagement" },
                  // Add more items here...
                ],
                [{ text: "Policies and Procedures", link: "/Governance/policies-and-procedures#Policies" }],
              ],
            },
          ]);
          break;
        default:
          break;
      }
    }
  }, [hoveredNavItem]);

  return (
    <motion.div
      className={`dropdown-comp-container flex ${
        isDropdownOpen ? "open flex" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: -20 }}
      exit={{ opacity: 0, y: 20 }} // Exit animation
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {modifiedMenuItems.map((item, index) => (
        <div className="dropdown-comp-container-child" key={index}>
          <motion.img
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={item.imgSrc}
            alt=""
          />
          <div className="dropdown-child-content">
            {item.headings.map((heading, headingIndex) => (
              <motion.div
                className="dropdown-comp-container-card"
                key={`${index}-${headingIndex}`}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }} // Exit animation
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
              >
                <motion.h3
                  initial={{ x: "-40px" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                >
                  {" "}
                  {heading}
                </motion.h3>
                <h3>{item.heading}</h3>
                <ul>
                  {item.listItems[headingIndex].map(
                    (listItem, listItemIndex) => (
                      <Link onClick={callafterdelay} to={listItem.link} key={listItemIndex}>
                        <li>{listItem.text}</li>
                      </Link>
                    )
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
      {modifiedMenuItems.length > 1 && (
        <div className="dropdown-comp-container-divider"></div>
      )}

      <button className="drop-exit-button" onClick={onClose}>
        <img src="/cross-svg.svg" alt="" />
      </button>
    </motion.div>
  );
};

export default DropdownComponent;
