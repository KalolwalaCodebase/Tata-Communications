import React, { lazy, useState } from "react";
import CarouselMain from "../../Components/CarouselSection/CarouselMain";
import "./Landingpages.css";
import Cards from "../../Components/Card";
import Carouseldown from "../../Components/CarouselSection/Carouseldown";
import Resources from "../../Components/Resources/Resources";
import Resourcesnew from "../../Components/Resources/Resourcesnew";
import Shadedcontainer from "../../Components/specailcontainer/Shadedcontainer";
import ImageCard from "../../Components/CardComponent/ImageCard";
import { motion, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import CardCarousel from "../../Components/CardCarousel/CardCarousel";
import { Link } from "react-router-dom";
import AnimatedMessage from "../../Components/Animatedcounter/AnimatedHeading";
import TextAnimation from "../../Components/Animatedcounter/TextAnimation";
import Textanimation2 from '../../Components/Animatedcounter/Textanimation2';
import ImagecardContainerLandingpage from "../../Components/CardComponent/ImagecardContainerLandingpage";
const LandingPage = ({ activeTab, setActivetab }) => {
  //  video section part added here
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8, // Adjust as needed
  });
  const [isBlueHeading, setIsBlueHeading] = useState(false);
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const customEase = [0.6, -0.05, 0.01, 0.99];
  const textVariants = {
    hidden: { opacity: 0, y: -30, rotateX: -90 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: 1 },
  };

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust as needed
  });

  const containerVariants = {
    hidden: { y: "-100px" },
    visible: {
      y: 0,
      transition: {
        staggerChildren: 0.4, duration: 0.3, ease: easeInOut // Adjust as needed for desired stagger effect
      },

    },
  };

  const cardVariants = {
    hidden: { y: "-100px", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7, // Adjust as needed
      },
    },
  };
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const videoId = "YOUR_YOUTUBE_VIDEO_ID"; // Replace this with your YouTube video ID
  const videoUrl = `https://www.youtube.com/watch?v=3MpkofjVCs8`;

  //  video section part added here
  const imageUrlarr = [
    "/landingpagecard1.png",
    "/landingpagecard2.png",
    "/landingpagecard3.png",
  ];
  const urlToGo = [
    "/Sustainability/sustainability-commitments",
    "/Sustainability/sustainability-commitments",
    "/Sustainability/fy24-goals-&-progress",
  ];
  const headingarr = [
    "Long-term commitments",
    "short-term commitments",
    "fY 2024 goals & Progress",
  ];
  return (
    <div className="landing-page-container-parent">
      <CarouselMain setActivetab={setActivetab} />

      <br />
      <div className="heading-main-section-landing-page">
        <motion.img
        initial={{ opacity: 0,scale:0.5 }}
        whileInView={{ opacity: 1, scale:0.5 }}
        transition={{ duration: 1, ease:"easeInOut" }}
        style={{width:"200px",height:"15px"}}
          className="small-square-img"
          src="/small-square-btn.png"
          alt=""
        />{" "}
        <motion.b
          initial={{ opacity: 0, x: "-30px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease:"easeInOut" }}
          className="heading-main-section-down"
        >
          THE PILLARS OF
        </motion.b>
        <motion.b
          initial={{ opacity: 0, x: "30px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease:"easeInOut" }}
          className="heading-main-section-down"
        >
          OUR STRATEGY
        </motion.b>
        <br />
        <motion.b initial={{ opacity: 0, y: "-10px", scale: 0.8 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5, ease: "easeIn" }} className="small-heading-landing-page">
          {/* <Textanimation2 text={''} /> */}
          Our sustainability strategy has a 360-degree focus, comprising three dimensions –
        </motion.b>
        <b className="small-heading-landing-page small-heading-landing-page-second">
          <motion.span initial={{ opacity: 0, x: "-10px", scale: 0.9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.3, ease: "easeIn", delay: 0.4 }} className="people-heading-color">People,</motion.span>{" "}
          <motion.span initial={{ opacity: 0, x: "-10px", scale: 0.9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.3, ease: "easeIn", delay: 0.6 }} className="planet-heading-color">Planet </motion.span> and{" "}
          <motion.span initial={{ opacity: 0, x: "10px", scale: 0.9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.3, ease: "easeIn", delay: 0.8 }} className="community-heading-color">Community.</motion.span>
        </b>
      </div>
      {/* triangle --section -- start--from--here */}
      <motion.div className="traingle-parent-container">
      <motion.div initial={{y:"100px"}}
       whileInView={{y:0}}
       transition={{ duration: 0.5,ease:"easeInOut" }} className="landing-page-ppc-triangle">
      <motion.div
      >
        <Link onClick={() => setActivetab("Governance")} to={"/Governance"}>
          <img className="img1" src="/landingpage-triangle-corp-gov.svg" alt="" />
        </Link>
      </motion.div>
      <motion.div
      >
        <Link onClick={() => setActivetab("People")} to={"/People"}>
          <img className="img2" src="/landingpage-triangle-people.svg" alt="" />
        </Link>
      </motion.div>
      <motion.div
        
      >
        <Link onClick={() => setActivetab("Planet")} to={"/Planet"}>
          <img className="img3" src="/landingpage-triangle-planet.svg" alt="" />
        </Link>
      </motion.div>
      <motion.div
        
      >
        <Link onClick={() => setActivetab("Community")} to={"/Community"}>
          <img className="img4" src="/landingpage-triangle-community.svg" alt="" />
        </Link>
      </motion.div>
    </motion.div>
        <motion.div initial={{ opacity: 0, x: "-40px" }} whileInView={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "-40px" }} transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }} className="traingle-descriptions">
          <p className="people-color-heading-landing-page">
            Our holistic sustainability strategy is grounded in the  pillars of
            People, Planet and Community with corporate governance at the heart
            of it.
          </p>
          <br />
          <p className="normal-color-heading-landing-page">
            It is meticulously crafted to foster our long-term success and
            deliver value to our stakeholders. Aligned with the UN Sustainable
            Development Goals, the Tata Group Sustainability Strategy and our
            own assessment of critical concerns, it reflects our commitment to
            addressing diverse aspects such as social well-being, environmental
            stewardship, community engagement and ethical governance.This
            comprehensive framework serves as the foundation for our growth,
            ensuring that our business remains resilient and positively impacts
            the world around us.
          </p>
          <br />
          <motion.p initial={{opacity:0,x:"-100px"}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,ease:"easeInOut"}} className="linking-sustabanility">
            {/* <Textanimation2 text={''} /> */}To read more about our Sustainability Strategy:
            {" "}
            <Link
              onClick={() => setActivetab("Sustainability")}
              to={"/Sustainability"}
            >
              Click Here
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
      {/* triangle --section -- end--from--here */}
      <div className="landing-page-card-container">
        <img
        style={{width:"200px",height:"15px"}}
          className="small-square-img"
          src="/small-square-btn.png"
          alt=""
        />{" "}
        <br />
        <motion.b
          ref={ref}
          initial={{ opacity: 0, y: "-60px" }}
          animate={{ ...(inView && { opacity: 1, y: 0 }) }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className="heading-main-section-down"
        >
          sustainability goals:
        </motion.b>
        <motion.b
          initial={{ opacity: 0, y: "60px" }}
          animate={{ ...(inView && { opacity: 1, y: 0 }) }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className="heading-main-section-down"
        >
          long and short-term
        </motion.b>
        <br />
        <motion.p
        style={{ 
          textTransform: "uppercase",
          backgroundColor: "#EA7926", // Change background color based on isBlueHeading state
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="awards-green-title poppins-semibold"
      >
        Long-Term Commitments For 2030 and beyond




        </motion.p>
        <motion.div
          className="three-card-conatiner"
          ref={ref1}
          variants={containerVariants}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
        >
          {imageUrlarr.map((imageurl, id) => (
            <motion.div
              key={id}
              variants={cardVariants}
              style={{ marginBottom: "20px", width: "27%" }} // Adjust as needed
            >
              <ImagecardContainerLandingpage
                color={"#6c1b54"}
                imageurl={imageurl}
                heading={headingarr[id]}
                url={urlToGo[id]}
                activeTab={activeTab}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* card component ends here */}
      <div className="landing-page-second-caresoules">
      <img
        style={{width:"200px",height:"15px"}}
          className="small-square-img"
          src="/small-square-btn.png"
          alt=""
        />{" "}
        <br />
        <motion.b
          initial={{ opacity: 0, y: "-30px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className="heading-main-section-down"
        >
          Message from
        </motion.b>
        <motion.b
          initial={{ opacity: 0, y: "30px" }}
          whileInView={{ opacity: 1, y: 0, }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          className="heading-main-section-down"
        >
          Managing director
        </motion.b>

        <br />
        {showPopup && (
          <div className="width-full-span">
            <motion.span initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px", }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }} className="close" onClick={togglePopup}>
              &times;
            </motion.span>
          </div>

        )}
        <div className="carousel-img-container flex">
          <img
            className="d-block w-100"
            src="/landing-page-slider-01.png"
            alt=""
          />
          {showPopup && (
            <motion.div className="video-popup"
              initial={{ opacity: 0, width: 0, borderRadius: "100%" }}
              animate={{ opacity: 1, width: "100%", borderRadius: 0 }}
              exit={{ opacity: 0, width: 0, borderRadius: "100%", transition: { duration: 1 } }}
              transition={{ duration: 0.8, ease: "easeInOut" }}>
              <div className="video-popup-content">
                <iframe
                  title="YouTube Video Popup"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3MpkofjVCs8?si=C_Lb4cBeTfYubxI3&autoplay=1" // Change "?" to "&"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          )}
          <div className="carousel-img-container-content">
            <motion.img initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: 100, transition: { duration: 0.8 } }}
              transition={{ duration: 0.8, ease: "easeInOut", }}
              className="quote-icon1" src="./quote-icon.svg" alt="" />
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0, transition: { duration: 0.8 } }}
              transition={{ duration: 0.8, ease: "easeInOut",  }}
              className="quote-icon2" src="./quote-icon2.svg" alt="" />
            < motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100, transition: { duration: 0.5 } }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="poppins-light md-msg">
              At Tata Communications, we believe in creating <br /> a world
              where everyone has equal access to <br />
              technology and can thrive in a sustainable and <br />
              interconnected manner. By embracing Inclusivity,
              <br /> Sustainability, and Hyperconnectivity, we
              <br /> envision a future that is conducive for individuals
              <br /> and communities. This includes access to clean
              <br /> energy, transforming existing production chains
              <br /> into circular processes, bringing innovations to
              <br /> future-proof our solutions and enhancing our
              <br /> operations towards sustainable development.
            </motion.p>
            <h6 className="poppins-bold"> Amur S Lakshminarayanan</h6>
            <p className="poppins-medium managing-director">
              Managing Director & CEO
            </p>
            < motion.button
              initial={{ opacity: 0, width: "39%", borderRadius: 0 }}
              whileInView={{ opacity: 1, width: "40%", borderRadius: "50px" }}
              exit={{ opacity: 0, width: "39%", borderRadius: 0, transition: { duration: 1 } }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="poppins-medium" onClick={togglePopup}>
              WATCH VIDEO
            </motion.button>
          </div>
        </div>
        {/* <Carouseldown/> */}
        {/*  <div className="carousel-container-main">
           <Carouseldown/>
        </div> */}
        <br />
        <img
        style={{width:"200px",height:"15px"}}
          className="small-square-img"
          src="/small-square-btn.png"
          alt=""
        />{" "}
        <br />
      </div>
      <div className="sdg-wheell-heading-upper">
        <motion.b
          initial={{ opacity: 0, y: "-10px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className="heading-main-section-down special-cls"
          style={{fontSize:"55px"}}
        >
          CONTRIBUTING To
        </motion.b>
        <b className="heading-main-section-down"></b>
        <motion.b
          initial={{ opacity: 0, y: "10px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.5 }}
          className="heading-main-section-down special-cls"
          style={{fontSize:"55px"}}
        >
    UN
Sustainable Development Goals
        </motion.b>
        <br />
        <br />
      </div>
      <div className="sdg-wheel-landing-page-container">
        <motion.img initial={{ opacity: 0, scale: 0.5, rotate: "30deg" }} whileHover={{ scale: 1.001, rotate: "5deg" }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, ease: "easeInOut" }} src="/sdg-wheel-landing-page.png" alt="" className="sdg-wheels" />
        <div className="sdg-wheel-descriptions">
          <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="smae-font-para-sdg">
            <p className="sdg-wheel-colorful-paragaraph">
            The UN SDGs serves as key benchmarks to plan initiative, measure our impact, and prioritise our areas of focus.

            </p>
            Our strategies closely align with these goals as we serve as a digital ecosystem enabler. Recognising the significance of contributing to global sustainability, we have prioritised and mapped direct and indirect SDGs, based on risk, relevance and our organisational contribution and pursue their achievement.
          </motion.p>
          <br />
          <br />
          <Link to={'/Sustainability/sustainable-development-goals'} className="readmore-blue"> <motion.span initial={{ opacity: 0, y: "-100px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.2 }} >read more{">"}</motion.span> </Link>
        </div>
      </div>
      <div className="awards-wrapper-parent">
      <img
        style={{width:"200px",height:"15px"}}
          className="small-square-btn-png landing-page-small-square-btn"
          src="/small-square-btn.png"
          alt=""
        />{" "}
        <br />
        {/* <Resourcesnew/> */}
        <motion.b
          initial={{ opacity: 0, y: "-10px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className="heading-main-section-down"
          
        >
         AWARDS
        </motion.b>
        <motion.p
        style={{ 
          textTransform: "uppercase",
          backgroundColor: isBlueHeading ? '#00B3BD' : '#B0BC25', // Change background color based on isBlueHeading state
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="awards-green-title poppins-semibold"
      >
        {isBlueHeading ? 'corporate social responsibility' : 'SUSTAINABILITY'}
      </motion.p>
        <Carouseldown setIsBlueHeading={setIsBlueHeading} />
        <div className="resources-wrapper-parent">
        <img
        style={{width:"200px",height:"15px"}}
          className="small-square-img"
          src="/small-square-btn.png"
          alt=""
        />{" "}
          <br />
          {/* <CardCarousel/> */}
          <Resourcesnew />
          <br />
          <br />
          <Shadedcontainer />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
