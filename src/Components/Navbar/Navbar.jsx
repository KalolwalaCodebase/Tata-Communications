import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ activeTab, setActivetab }) => {
  return (
    <div className="Navbar-parent">
       <div className="upper-navbar-logo-container">
        <div className="mainlogo-image">
          <img src="/mainlogoleft.png" alt="" />
        </div>
        <div className="parent-logo-image">
        <input type="text" placeholder="Search..." class="search-input"/>
          <img src="/main-parent-logo.svg" alt="" />
        </div>
       </div>
       <div className="parent-down-navbar-conatiner">
       <li className={`Sustainability specail-sustainablity ${activeTab === "Sustainability" ? "active-tab" : " "}`}>
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
        <div className="navbar-elements"> 
        <li className={`Peoples ${activeTab === "People" ? "active-tab" : " "}`}>
          {" "}
          <Link to="/People" onClick={() => setActivetab("People")}>
            People
          </Link>
        </li>
        <li>|</li>
        <li className={`Planet ${activeTab === "Planet" ? "active-tab" : " "}`}>
          <Link
            to="/Planet"
            className={`Planet ${activeTab === "Planet" ? "active-tab" : ""}`}
            onClick={() => setActivetab("Planet")}
          >
            Planet
          </Link>
        </li>
        <li>|</li>
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
        <li>|</li>
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
      </div>
       </div> 
    </div>
  );
};

export default Navbar;
