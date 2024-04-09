import React from 'react'
import HeadBar from '../../Components/Headbar/HeadBar'
import { motion } from 'framer-motion';
import TextAnimation from '../../Components/Animatedcounter/TextAnimation';

const PeopleCustomers = () => {
  return (
    <div className='people-customer-container-main'>
      <HeadBar
        icon={"/Customers.svg"}
        heading={"CUSTOMERS"}
        theme={"#AD3088"}
        headiconstyle={'#E036AE'}
      />
      <div className="climate-change-intro-container people-main-parent-container">
        <div className="climate-change-intro-paragraph-inside-container">
          <p className="paragraph-inside-climate-change people-paragraph-style1">
          At the heart of our endeavour lies a commitment to empower customers, to create ecosystems that enable them to succeed in a new world of digital technologies.          </p>
          <p className="paragraph-inside-climate-change people-paragraph-style2">
          Our customer success team upholds a customer-centric approach throughout the customer journey. They also make sure to align internal stakeholders with customer success metrics to make the process seamless and convenient.          </p>
          
        </div>
        <div className="climate-change-intro-photos-inside-container">
          <img
            className="intro-climate-image intro-people-image"
            src="/peoplecustomerimg01.png"
            alt=""
          />
        </div>
      </div>
      <div className="planet-climate-last-section-parent">
        <div className="main-section-climate-change">
          <div className="description-main-section people-descriptions">
            <img
              className="small-square-btn-png"
              src="/small-btn-alternative.svg"
              alt=""
            />
            <br />
            <b className="heading-main-section-climate-change people-heading-main">
            Customer Experience
            </b>
            <h6 className="bigger-paragraph-people-descriptions specail-description-heading">
            At Tata Communications, we are dedicated to enrich the digital transformation journey of our customers. Our commitment to prioritise customer needs allows us to continuously refine our processes and systems. Leveraging the insights gained from customer feedback, we drive innovation and introduce new, cutting-edge solutions to meet emerging demands effectively.
            </h6>
          </div>
          <div className="people-customer-section-down">
            <img src="/people-customerimg03.svg" alt="" />
          </div>
          <div className="people-customer-section-down" style={{marginTop:"-20px"}}>
            <img src="/people-customerimg02.svg" alt="" />
          </div>
          <div className="people-customer-section-deep-pink">
          <b className="heading-black">
             Enhancing Customer Engagement
                </b>
                <div class="main-customer-section-design-content">
    <div class="each-container-main-design">
        <div class="slim-pink-container"></div>
        <div class="slim-pink-container-description">Through various touchpoints and a customer hierarchy, our ‘deeper with fewer’ strategy enhances our relationship with our top 1,000 customers.</div>
    </div>
    <div class="each-container-main-design">
        <div class="slim-pink-container"></div>
        <div class="slim-pink-container-description">Our Off-Shore Customer Success Management model in Pune uses the follow-the-sun methodology and is geared towards top enterprise customers.</div>
    </div>
    <div class="each-container-main-design">
        <div class="slim-pink-container"></div>
        <div class="slim-pink-container-description">Our CRM desk maintains the virtual customer interactions and takes into account customer life cycle management for the sector of digital customers</div>
    </div>
    <div class="each-container-main-design">
        <div class="slim-pink-container"></div>
        <div class="slim-pink-container-description">Our dedicated sales team works for the core segment accounts, which are above the top 1,000 accounts. For these accounts, we use the FIGITAL (Field + Digital) paradigm, with distinct responsibilities for account farming and account hunting.</div>
    </div>
    <div class="each-container-main-design">
        <div class="slim-pink-container"></div>
        <div class="slim-pink-container-description">With the aid of a designated customer success team (CST), our engagement methodology for large enterprise customers focuses on both customer experience and business outcomes.</div>
    </div>
</div>

          </div>
    <div className="our-ups-section-environment">
           <div className="imgate-heading-our-ups">
           <motion.p
        style={{ 
          textTransform: "uppercase",
          width:"20%",
          textAlign:"center",
          backgroundColor: "#AD3088", // Change background color based on isBlueHeading state
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="awards-green-title poppins-semibold"
      >
        OUR USP<span style={{textTransform:"lowercase"}}>s</span>
        </motion.p>
            </div> 
            <div className="our-ups-card-container">
                <div className="each-card-container-our-ups">
                    <motion.div className="img-section-our-ups" initial={{y:"100px",opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1,ease:"easeInOut"}}>
                     <img src="/peopleourupsimg01.png" alt="" />
                    </motion.div>
                    <motion.div initial={{y:"-100px",opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1,ease:"easeInOut"}} className="descreptions-section-our-ups"  style={{height:'130px'}}>
                    We are able to quickly integrate with the partner ecosystem to deliver the solution.
                    </motion.div>
                </div>
                <div className="each-card-container-our-ups">
                    <motion.div initial={{y:"100px",opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1,ease:"easeInOut"}} className="img-section-our-ups">
                     <img src="/peopleourupsimg02.png" alt="" />
                    </motion.div>
                    <motion.div  initial={{y:"-100px",opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1,ease:"easeInOut"}} className="descreptions-section-our-ups" style={{height:'130px'}}>
                    A smart light controller allows for remote switching (on/off) of lights with a dimming feature to optimise energy consumption                    </motion.div>
                </div>
                <div className="each-card-container-our-ups" >
                    <motion.div className="img-section-our-ups"initial={{y:"100px",opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1,ease:"easeInOut"}}>
                     <img src="/peopleourupsimg03.png" alt="" />
                    </motion.div>
                    <motion.div initial={{y:"-100px",opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1,ease:"easeInOut"}} className="descreptions-section-our-ups" style={{height:'130px'}}>
                    We provided gateways and a network platform to enable the setup of LoRaWAN®                    </motion.div>
                </div>
                <div className="each-card-container-our-ups">
                    <motion.div className="img-section-our-ups" initial={{y:"100px",opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1,ease:"easeInOut"}}>
                     <img src="/peopleourupsimg04.png" alt="" />
                    </motion.div>
                    <motion.div className="descreptions-section-our-ups" style={{height:'280px'}} initial={{y:"-100px",opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1,ease:"easeInOut"}}>
                    An application captures the metering of each individual streetlight and monitors light health, providing fault alerts for immediate resolution in case of issues. In addition, the solution includes features such as dead lamp notification, keeping track of lamp burn hours, auto-scheduling and electricity theft.                    </motion.div>
                </div>
                <div className="each-card-container-our-ups">
                    <motion.div className="img-section-our-ups" initial={{y:"100px",opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1,ease:"easeInOut"}}>
                     <img src="/peopleourupsimg05.png" alt="" />
                    </motion.div>
                    <motion.div className="descreptions-section-our-ups" style={{height:'280px'}} initial={{y:"-100px",opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1,ease:"easeInOut"}}>
                    Tata Communications’ IoT smart light solution is an end-to-end management platform for citywide streetlight management and it is a perfect fit to address our customers’ needs.                    </motion.div>
                </div>
            </div>
      </div>

        </div>
        
        < motion.div initial={{x:"100px",opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5,delay:0.3, type:"spring"}} className="quick-link-sections">
        <b className="heading-links">
          <TextAnimation text={'Quick'}/> <TextAnimation text={'Links'}/></b>
          <br />
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
            <a href="">Policies</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Customer Experience</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Enhancing Customer Engagement</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Our USPs</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">People Centric Policies</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">GRI index</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">SDG Linkage</a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PeopleCustomers
