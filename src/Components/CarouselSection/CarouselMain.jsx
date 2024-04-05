import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carosoule.css";
import { Link } from "react-router-dom";
const CarouselMain = ({setActivetab}) => {
  return (
    <div className="carousel-container-down-flex">
      <Carousel>
        <Carousel.Item>
          <div className="video-conatiner">
            <video id="video-background2" autoPlay muted loop playsInline>
              <source src="/Home.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute-video-description">
              <img
                className="small-square-btn-png"
                src="/small-square-btn.png"
                alt=""
              />{" "}
              <br />
              <b className="heading-caresoules">tata communications</b>
              <p className="heading-description-carosoule">
                climate targets <br />
                approved by SBTi
              </p>
              <div className="carosoules-last-container">
                <p className="description-last-carosoule">
                  Iqui ut vel eati dolupta temquia tusciassi beris ulpa sit pra
                  doluptatur molenimus abores maiore niet doloribus ipsaepe
                  raescie nimpore rentur? Fero que eatem
                </p>
                <Link  to="/press/release" className="view-release-part">
                  view press release
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <video id="video-background2" autoPlay muted loop playsInline>
            <source src="/Main2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute-video-description">
            <img
              className="small-square-btn-png"
              src="/small-square-btn.png"
              alt=""
            />{" "}
            <br />
            <b className="heading-caresoules"> Net Zero by 2035</b>
            <p className="heading-description-carosoule">
              Accelerating the <br /> 3C Sustainability <br /> strategy
            </p>
            <div className="carosoules-last-container">
              <p className="description-last-carosoule">
                Empower enterprises through Climate Action, Customer GHG
                Savings, and Circular Economies in India
              </p>
              <Link  to="/press/release" className="view-release-part">
                  view press release
                </Link>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className="video-container">
            <video id="video-background3" autoPlay muted loop playsInline>
              <source src="/Main3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="absolute-video-description">
            <img
              className="small-square-btn-png"
              src="/small-square-btn.png"
              alt=""
            />{" "}
            <br />
            <p className="heading-description-carosoule">
              Inclusive. <br /> sustainable. <br />
              hyperconnected.
            </p>
            <div className="carosoules-last-container">
              <p className="description-last-carosoule">
                Focusing on new ways of harnessing technology, we combine our
                global scale and expertise to create Hyperconnected ecosystems
                to reimagine a landscape for an Inclusive and Sustainable future
              </p>
              <button className="view-release-part">
                view sustainability development report 2023
              </button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className="video-container">
            <video id="video-background3" autoPlay muted loop playsInline>
              <source src="/SUSDisclosure.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="absolute-video-description">
            <img
              className="small-square-btn-png"
              src="/small-square-btn.png"
              alt=""
            />{" "}
            <br />
            <b className="heading-caresoules">Comprehensive ESG Framework</b>
            <p className="heading-description-carosoule">
              Enhancing the <br /> Sustainability <br />
              Disclosures
            </p>
            <div className="carosoules-last-container">
              <p className="description-last-carosoule">
                Increasing transparency that augments the accountability to our
                stakeholders
              </p>
              <button className="view-release-part">
                View sustainability disclosures
              </button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className="video-container">
            <video id="video-background3" autoPlay muted loop playsInline>
              <source src="/CSR.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="absolute-video-description">
            <img
              className="small-square-btn-png"
              src="/small-square-btn.png"
              alt=""
            />{" "}
            <br />
            <p className="heading-description-carosoule">
              Corporate social <br /> Responsibility
            </p>
            <div className="carosoules-last-container">
              <p className="description-last-carosoule">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link  onClick={()=>setActivetab("Community")} to="/Community" className="view-release-part">
                  view Community page
                </Link>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselMain;
