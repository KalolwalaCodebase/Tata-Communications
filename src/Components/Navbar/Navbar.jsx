import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import TextAnimation from "../Animatedcounter/TextAnimation";
import DropdownComponent from "../DropdownComponent/DropdownComponent";

const Navbar = ({ activeTab, setActivetab, hoveredNavItem, setHoveredNavItem }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredNavItem(index);
    setIsDropdownOpen(true); // Open dropdown when hovering navbar item
  };
  const handleMouseLeave = () => {
    if (!isDropdownOpen) {
      setHoveredNavItem(null);
    }
  };
  const handleDropdownMouseOver = () => {
    setIsDropdownOpen(true);
  };
  const handleDropdownMouseOut = () => {
    setIsDropdownOpen(false);
  };
  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
    setHoveredNavItem(null);
  };
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!navbarRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setHoveredNavItem(null);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= (navbarRef.current.offsetTop + 50)) {
        navbarRef.current.classList.add("stickyparent");
      } else {
        navbarRef.current.classList.remove("stickyparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const storedActiveTab = sessionStorage.getItem("activeTab");
    if (storedActiveTab) {
      setActivetab(storedActiveTab);
    } else {
      setActivetab("Home");
      sessionStorage.setItem("activeTab", "Home");
    }
  }, []);

  // useEffect(() => {
  //   setActivetab(location.pathname.substring(1));
  //   sessionStorage.setItem("activeTab", location.pathname.substring(1));
  //   window.scrollTo(0, 0);
  // }, [location, activeTab]);

  return (
    <div ref={navbarRef} id="navbar" className="Navbar-parent">
      <div className="upper-navbar-logo-container">
        <Link to="https://www.tatacommunications.com/" target="blank">
          <div className="mainlogo-image">
            <img src="/TATA.svg" alt="" />
          </div>
        </Link>
        <div className="parent-logo-image">
          <input type="text" placeholder="Search..." className="search-input" />
          <Link to="/" onClick={() => setActivetab("Home")}>
            <div className="mainlogo-image">
              <img src="/main-parent-logo.svg" alt="" />
            </div>
          </Link>
        </div>
      </div>
      <div className="parent-down-navbar-conatiner">
        <li className={`Sustainability specail-sustainablity ${activeTab === "Sustainability" ? "active-tab" : ""}`} onClick={()=>handleCloseDropdown()} >
          <Link to="/" className={`Sustainability ${activeTab === "Sustainability" ? "active-tab" : ""}`} onClick={() => setActivetab("Home")}>
            <TextAnimation text={'Sustainability'} />
          </Link>
        </li>
        <div className="navbar-elements">
          <li className={`People ${activeTab === "People" ? "active-tab" : ""}`} onClick={()=>handleCloseDropdown()} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave()}>
            <Link to="/People" className={`People ${activeTab === "People" ? "active-tab" : ""}`} onClick={() => setActivetab("People")}>
              People
            </Link>
          </li>
          <li>|</li>
          <li className={`Planet ${activeTab === "Planet" ? "active-tab" : ""}`} onClick={()=>handleCloseDropdown()} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave()}>
            <Link to="/Planet" className={`Planet ${activeTab === "Planet" ? "active-tab" : ""}`} onClick={() => setActivetab("Planet")}>
              Planet
            </Link>
          </li>
          <li>|</li>
          <li className={`Community ${activeTab === "Community" ? "active-tab" : ""}`} onClick={()=>handleCloseDropdown()} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave()}>
            <Link to="/Community" className={`Community ${activeTab === "Community" ? "active-tab" : ""}`} onClick={() => setActivetab("Community")}>
              Community
            </Link>
          </li>
          <li>|</li>
          <li onClick={()=>handleCloseDropdown()} className={`Governance ${activeTab === "Governance" ? "active-tab" : ""}`} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave()}>
            <Link to="/Governance" className={`Governance ${activeTab === "Governance" ? "active-tab" : ""}`} onClick={() => setActivetab("Governance")}>
              Governance
            </Link>
          </li>
        </div>
        {(hoveredNavItem !== null || isDropdownOpen) && ( // Show dropdown if navbar item is hovered or dropdown is open
            <DropdownComponent
              className="DropdownComponent"
              hoveredNavItem={hoveredNavItem}
              onMouseOver={handleDropdownMouseOver}
              onMouseOut={handleDropdownMouseOut}
              onClose={handleCloseDropdown}
            />
        )}
      </div>
    </div>
  );
};

export default Navbar;
