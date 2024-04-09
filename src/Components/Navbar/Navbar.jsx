import React,{useState,useEffect,useRef} from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import TextAnimation from "../Animatedcounter/TextAnimation";
const Navbar = ({ activeTab, setActivetab }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= (navbarRef.current.offsetTop+50)) {
        navbarRef.current.classList.add("stickyparent");
      } else {
        console.log("removing.......");
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

  useEffect(() => {
    setActivetab(location.pathname.substring(1));
    sessionStorage.setItem("activeTab", location.pathname.substring(1));
    window.scrollTo(0, 0); // Scroll to top when location changes
  }, [location,activeTab]);
  return (
    <div ref={navbarRef} id="navbar" className="Navbar-parent">
    <div  className="upper-navbar-logo-container">
       <Link
            to="https://www.tatacommunications.com/"
            target="blank"
          ><div className="mainlogo-image">
          <img src="/TATA.svg" alt="" />
        </div>
        </Link>  
        <div className="parent-logo-image">
        <input type="text" placeholder="Search..." class="search-input"/>
        <Link
            to="/"
            onClick={() => setActivetab("Home")}
          ><div className="mainlogo-image">
           <img src="/main-parent-logo.svg" alt="" />
        </div>
        </Link> 
         
        </div>
       </div>
       <div className="parent-down-navbar-conatiner">
       <li className={`Sustainability specail-sustainablity ${activeTab === "Sustainability" ? "active-tab" : " "}`}>
          <Link
            to="/"
            className={`Sustainability ${
              activeTab === "Sustainability" ? "active-tab" : ""
            }`}
            onClick={() => setActivetab("Home")}
            style={{fontFamily:"sans-serif",letterSpacing:"0.3em"}}
          >
            <TextAnimation text={'Sustainability'}/>
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