import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ activeTab, setActivetab }) => {
  return (
    <div className="Navbar-parent">
      <div className="logo">
        <img src="/Logo-main.png" alt="" />
        <span className="logo-small">SUSTAINABLITY</span>
        <img src="/Navbarseprator.png" alt="" />
      </div>
      <div className="navbar-elements">
        
        <li className={`People ${activeTab === "People" ? "active-tab" : " "}`}>
          {" "}
          <Link to="/People" onClick={() => setActivetab("People")}>
            People
          </Link>
        </li>
        <li className={`Planet ${activeTab === "Planet" ? "active-tab" : " "}`}>
          <Link
            to="/Planet"
            className={`Planet ${activeTab === "Planet" ? "active-tab" : ""}`}
            onClick={() => setActivetab("Planet")}
          >
            Planet
          </Link>
        </li>
        <li className={`Community ${activeTab === "Community" ? "active-tab" : " "}`}>
          <Link
            to="/Community"
            className={`Community ${
              activeTab === "Community" ? "active-tab" : ""
            }`}
            onClick={() => setActivetab("Community")}
          >
            Community
          </Link>
        </li>
        <li className={`Governance ${activeTab === "Governance" ? "active-tab" : " "}`}>
          <Link
            to="/Governance"
            className={`Governance ${
              activeTab === "Governance" ? "active-tab" : ""
            }`}
            onClick={() => setActivetab("Governance")}
          >
            Governance
          </Link>
        </li>
        <li className={`Sustainability ${activeTab === "Sustainability" ? "active-tab" : " "}`}>
          <Link
            to="/Sustainability"
            className={`Sustainability ${
              activeTab === "Sustainability" ? "active-tab" : ""
            }`}
            onClick={() => setActivetab("Sustainability")}
          >
            Sustainability
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
