import React from "react";
import CarouselMain from "../../Components/CarouselSection/CarouselMain";
import "./Landingpages.css";
import Cards from "../../Components/Card";
import Carouseldown from "../../Components/CarouselSection/Carouseldown";
import Resources from "../../Components/Resources/Resources";
import Resourcesnew from "../../Components/Resources/Resourcesnew";
import Shadedcontainer from "../../Components/specailcontainer/Shadedcontainer";
import ImageCard from "../../Components/CardComponent/ImageCard";
// import CardCarousel from "../../Components/CardCarousel/CardCarousel";
const LandingPage = ({ activeTab }) => {
  const imageUrlarr = [
    "/landingpagecard1.png",
    "/landingpagecard2.png",
    "/landingpagecard3.png",
  ];
  const headingarr = [
    "Long-term commitments",
    "short-term commitments",
    "fY 2024 goals & Progress",
  ];
  return (
    <div className="landing-page-container-parent">
      <CarouselMain />

      <br />
      <div className="heading-main-section-landing-page">
        <img
          className="small-square-btn-png landing-page-small-square-btn"
          src="/small-square-btn.png"
          alt=""
        />{" "}
        <b className="heading-main-section">THE PILLARS OF</b>
        <b className="heading-main-section">OUR STRATEGY</b>
        <br />
        <b className="small-heading-landing-page">
          Our sustainability strategy has a 360-degree focus, comprising three
          dimensions –
        </b>
        <b className="small-heading-landing-page small-heading-landing-page-second">
          <span className="people-heading-color">People,</span>{" "}
          <span className="planet-heading-color">Planet </span> and{" "}
          <span className="community-heading-color">Community.</span>
        </b>
      </div>
      {/* triangle --section -- start--from--here */}
      <div className="traingle-parent-container">
        <div className="traingle-descriptions">
          <p className="people-color-heading-landing-page">
          Our holistic sustainability strategy is grounded in the pillars of People, Planet and Community
           with corporate governance at the heart of it.
          </p>
          <p className="normal-color-heading-landing-page">
          It is meticulously crafted to 
          foster our long-term success and deliver
           value to our stakeholders. Aligned with
            the UN Sustainable Development Goals, 
            the Tata Group Sustainability Strategy and 
            our own assessment of critical concerns,
             it reflects our commitment to addressing 
             diverse aspects such as social well-being, 
             environmental stewardship, community engagement
              and ethical governance. This comprehensive 
              framework serves as the foundation for our growth,
               ensuring that our business remains resilient and
                positively impacts the world around us.
          </p>
        </div>
      </div>
      {/* triangle --section -- end--from--here */}
      <div className="landing-page-card-container">
        <img
          className="small-square-btn-png landing-page-small-square-btn"
          src="/small-square-btn.png"
          alt=""
        />{" "}
        <br />
        <b className="heading-main-section-down">sustainability goals:</b>
        <b className="heading-main-section-down">long and short-term</b>
        <br />
        <img
          className="landing-page-section-heading-down"
          src="/landing-page-heading.png"
          alt=""
        />
        <div className="three-card-conatiner">
          {imageUrlarr.map((imageurl, id) => (
            <ImageCard
            key={id}
            color={"#6c1b54"}
              imageurl={imageurl}
              heading={headingarr[id]}
            /> // Pass the heading directly as a string
          ))}
        </div>
      </div>
      {/* card component ends here */}
      <div className="landing-page-second-caresoules">
        <img
          className="small-square-btn-png landing-page-small-square-btn"
          src="/small-square-btn.png"
          alt=""
        />{" "}
        <br />
        <b className="heading-main-section-down">Message from</b>
        <b className="heading-main-section-down">Managing director</b>
        <br />
        <div className="carousel-img-container flex">
          <img
            className="d-block w-100"
            src="/landing-page-slider-01.png"
            alt=""
          />
          <div className="carousel-img-container-content">
            <img className="quote-icon1" src="./quote-icon.svg" alt="" />
            <img className="quote-icon2" src="./quote-icon2.svg" alt="" />
            <p className="poppins-light md-msg">At Tata Communications, we believe in creating <br /> a world where everyone has equal access to <br />technology and can thrive in a sustainable and <br />interconnected manner. By embracing Inclusivity,<br /> Sustainability, and Hyperconnectivity, we<br /> envision a future that is conducive for individuals<br /> and communities. This includes access to clean<br /> energy, transforming existing production chains<br /> into circular processes, bringing innovations to<br /> future-proof our solutions and enhancing our<br /> operations towards sustainable development.</p>
            <h6 className="poppins-bold">Amur S Lakshminarayanan</h6>
            <p className="poppins-medium managing-director">Managing Director</p>
            <button className="poppins-medium">WATCH VIDEO</button>
          </div>
        </div>
        {/* <Carouseldown/> */}
        {/*  <div className="carousel-container-main">
           <Carouseldown/>
        </div> */}
        <br />
        <img
          className="small-square-btn-png landing-page-small-square-btn"
          src="/small-square-btn.png"
          alt=""
        />{" "}
      </div>
      <div className="sdg-wheell-heading-upper">
        <b className="heading-main-section-down">CONTRIBUTING</b>
        <b className="heading-main-section-down">TO UN SDGS</b>
      </div>
      <div className="sdg-wheel-landing-page-container">
        <img src="/sdg-wheel-landing-page.png" alt="" className="sdg-wheels" />
        <div className="sdg-wheel-descriptions">
          <p className="smae-font-para-sdg">
            Our sustainability strategy, focusing on  <span className="people-span">People</span> , <span className="planet-span">Planet</span> , <span className="community-span">Community</span> ,
            and <span className="governance-span"> Governance</span> , aims to create long-term stakeholder value and
            sustainable growth for our business. It aligns with the UN Sustainable
            Development Goals, the Tata Group Sustainability Strategy, and our
            company’s assessment of critical issues and their impact on the
            external environment.
            <br />
            This approach ensures we address the broad spectrum of sustainability,
            encompassing social well-being, environmental stewardship, community
            engagement, and ethical governance, thereby fostering a holistic
            development framework for enduring success.
          </p>
          <br />
          <img className="line-image-dashed" src="/line-dark.png" alt="" />
          <br />
          <button className="readmore-blue">read more {'>'}</button>
        </div>
      </div>
      <div className="awards-wrapper-parent">
      <img
          className="small-square-btn-png landing-page-small-square-btn"
          src="/small-square-btn.png"
          alt=""
        />{" "}
        <br />
      <Resourcesnew/>
      <br />
      <br />
      <Shadedcontainer/>
      <b className="heading-main-section-down">Awards</b>

      <p className="awards-green-title poppins-semibold">SUSTAINABILITY</p>

        <Carouseldown />
      <div className="resources-wrapper-parent">
        <img
          className="small-square-btn-png landing-page-small-square-btn"
          src="/small-square-btn.png"
          alt=""
        />{" "}
        <br />
        {/* <CardCarousel/> */}
        <Resourcesnew />
        <br />
        <br />
      </div>

    </div>
  );
};

export default LandingPage;
