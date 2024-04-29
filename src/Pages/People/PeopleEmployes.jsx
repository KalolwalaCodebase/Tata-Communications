import React,{useEffect} from "react";
import "./People.css";
import HeadBar from "../../Components/Headbar/HeadBar";
import AnimatedCounter from "../../Components/Animatedcounter/Animatedcounter";
import { motion } from 'framer-motion';
import Textanimation2 from "../../Components/Animatedcounter/Textanimation2";
import TextAnimation from "../../Components/Animatedcounter/TextAnimation";
import { Link,useLocation,useNavigate } from 'react-router-dom';
const PeopleEmployes = () => {

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
  const location = useLocation();
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

  return (
    <div className="people-supply-chain-intro-parent-container">
      <HeadBar
        icon={"/EMPLOYEE.svg"}
        heading={"EMPLOYEES"}
        theme={"#AD3088"}
        headiconstyle={'#E036AE'}

      />
      <div className="climate-change-intro-container people-main-parent-container">
        <div className="climate-change-intro-paragraph-inside-container">
          <motion.p initial={{x:"-100px",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,type:"spring"}} className="paragraph-inside-climate-change people-paragraph-style1">
            We believe in fostering a dynamic and inclusive work environment
            where every employee is empowered to thrive and contribute to our
            collective success. As a global leader in digital infrastructure, we
            are dedicated to pushing the boundaries of innovation and technology
            while maintaining a strong commitment to our values of integrity,
            excellence and diversity.
          </motion.p>
          <motion.p initial={{x:"-100px",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,type:"spring"}} className="paragraph-inside-climate-change people-paragraph-style2">
            As part of a dynamic team, we are driven by passion and
            collaboration. We prioritise the growth and well-being of our
            employees, offering ample opportunities for professional development
            and advancement. Together, we strive to create impactful solutions
            that shape the future of connectivity and transform the way the
            world communicates.
          </motion.p>
        </div>
        <motion.div initial={{y:"100px",opacity:0,scale:0.5}} animate={{y:0,opacity:1,scale:1}} transition={{duration:1.3,type:"spring"}} className="climate-change-intro-photos-inside-container">
          <img
            className="intro-climate-image intro-people-image"
            src="/peopleemployee.jpeg"
            alt=""
          />
        </motion.div>
      </div>
      <div className="planet-climate-last-section-parent">
        <div  className="main-section-climate-change">
          <motion.div id="Diversity-and-Inclusion" initial={{y:"100px",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1.5,type:"spring"}} className="description-main-section people-descriptions">
            <img
              className="small-square-btn-png"
              src="/small-btn-alternative.svg"
              alt=""
            />
            <br />
            <b className="heading-main-section-climate-change people-heading-main">
              diversity and inclusion
            </b>
            <br />
            <br />
            <p className="bigger-paragraph-people-descriptions">
              At Tata Communications, we have implemented gender-neutral
              policies and procedures to ensure equal opportunities in the
              workplace.{" "}
            </p>
            <p className="smaller-paragraph-people-descriptions">
              We are dedicated to fostering diversity, preventing discrimination
              and prioritising performance-based rewards to create a respectful
              and inclusive work environment. We have also established a
              strategic business imperative, 'Winning Mix', aimed at leveraging
              the strength of a diverse and inclusive talent pool.{" "}
            </p>
          </motion.div>
          <div className="data-container-inner ">
            <div className="data-student-community-container">
              <div className="data-set-conatiner-below people-data-inner">
                <b
                  className="big-size-data people-big-data"
                  style={{ color: " #AD3088" }}
                >
                  <AnimatedCounter finalValue={26} />%
                </b>
                <motion.p initial={{y:"-10px",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1.3,type:"spring"}} className="small-size-paragraph">
                  Women Colleagues Hired <br />
                  in FY 2024 planted
                </motion.p>
              </div>
            </div>
          </div>
          <motion.div initial={{scale:0.5,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:2,type:"spring",}} className="image-people-environment-section-container">
            <img src="/Info.svg" alt="" />
          </motion.div>
          <div className="flex people-enviroment-section-third-container">
            <motion.p  initial={{x:"-20px",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1.3,type:"spring",delay:0.3}} className="paragraph-people-climate-1">
              This aligns with our broader objective of fostering a culture of
              respect and equality where every employee feels valued and
              appreciated.
            </motion.p>
            <motion.p  initial={{x:"20px",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1.3,type:"spring",delay:0.3}} className="paragraph-people-climate-2">
              Therefore, our compensation packages are structured on the basis
              of merit, performance and experience, instead of being influenced
              by an individual's gender. The gender ratio of entry-level wages
              to the minimum wage is maintained at 1:1.
            </motion.p>
          </div>
          <div className="people-environment-image-text-container">
            <motion.img initial={{y:"100px",opacity:0,scale:0.5}} animate={{y:0,opacity:1,scale:1}} transition={{duration:1.3,type:"spring"}}   src="/people-environemnt-img04.jpeg" alt="" />
            <motion.div id="Learning-and-Skill-Development" initial={{x:"100px",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1.1,type:"spring"}}  className="text-environemt-image-text-container">
              <img
                className="small-square-btn-png"
                src="/small-btn-alternative.svg"
                alt=""
              />
              <br />
              <b className="heading-main-section-climate-change people-heading-main">
                Learning and Skill
                <br /> Development
              </b>
              <br />
              <br />
              <p className="description-main-section-climate-change">
                At Tata Communications, we prioritise continuous learning to
                drive innovation and business growth. Our strategy focuses on
                future readiness, aligning with our vision of becoming a global
                digital ecosystem enabler. Through comprehensive training
                programmes, we empower employees to reach their full potential.
                Our culture emphasises meritocracy and excellence with regular
                performance assessments and career development opportunities.
                Utilising a platform-based, six-tiered approach, we democratise
                learning to enhance our competitive edge.{" "}
              </p>
            </motion.div>
          </div>

          <motion.div initial={{scale:0.9,opacity:0,y:"-10px"}} animate={{scale:1,opacity:1,y:0}} transition={{duration:2,type:"spring",delay:0.3}} className="image-people-environment-section-container">
            <img src="/PeopleEmployeeGroup.svg" alt="" />
          </motion.div>
          <div className="people-environment-section-learning-environment">
            <motion.div initial={{opacity:0,y:"-30px"}} animate={{opacity:1,y:0}} transition={{duration:1.4,type:"spring",delay:0.3}} className="learning-environment-descriptions">
              <b className="heading-black">
                Tata Communications Learning Academy (TCLA)
              </b>
              <p className="bigger-paragraph-people-descriptions">
                Our comprehensive learning platform, TCLA, empowers employees to
                pursue personal and professional development through a variety
                of multi-modal learning options, including byte-sized modules
                and deep-learning courses.
              </p>
              <p className="smaller-paragraph-people-descriptions">
                With a consumer-grade user interface, TCLA offers world-class
                learning avenues accessible anytime, anywhere, fostering a
                culture of continuous learning. Employees have access to online
                resources, industry accreditations and customised learning
                opportunities to upskill, reskill and cross-skill, supported by
                self-paced learning and a robust ecosystem of tools and
                technology.
              </p>
            </motion.div>
          </div>
          <motion.div initial={{opacity:0.8,y:"40px"}} animate={{opacity:1,y:0}} transition={{duration:1.5,type:"spring",delay:0.3}} className="data-student-community-container people-data-set">
            <div className="data-set-conatiner-below">
              <b className="big-size-data" style={{ color: "#9F0C73" }}>
              <AnimatedCounter finalValue={130} />,<AnimatedCounter finalValue={713}/>
              </b>
              <p className="small-size-paragraph">
              Total learning person days in FY2023
              </p>
            </div>
            <div className="data-set-conatiner-below">
              <b className="big-size-data" style={{ color: "#9F0C73" }}>
              <AnimatedCounter finalValue={4} />,<AnimatedCounter finalValue={442}/>
              </b>
              <p className="small-size-paragraph">
              Total Targeted Skill Development in FY2023
              </p>
            </div>
            <div className="data-set-conatiner-below">
              <b className="big-size-data" style={{ color: "#9F0C73" }}>
              <AnimatedCounter finalValue={9} />.89
              </b>
              <p className="small-size-paragraph">
              Average learning person days
              </p>
            </div>
            {/* <div className="data-set-conatiner-below">
              <b className="big-size-data" style={{ color: "#9F0C73" }}>
              <AnimatedCounter finalValue={7} />,<AnimatedCounter finalValue={290}/>
              </b>
              <p className="small-size-paragraph">
                Repeat learners on TCLA in FY2024
              </p>
            </div> */}
          </motion.div>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,type:"spring",delay:0.2}}  className="people-environment-specail-design-div">
            <div className="small-square-shape"></div>
            <motion.div   className="bigsquare-div-environment">
              <motion.div initial={{y:"-40px",opacity:0}} animate={{opacity:1,y:0}} transition={{duration:1,type:"spring",delay:0.3}} className="learning-environment-descriptions">
                <b className="heading-black">
                  Tata Communications Learning Academy (TCLA)
                </b>
                <p className="bigger-paragraph-people-descriptions">
                  Our comprehensive learning platform, TCLA, empowers employees
                  to pursue personal and professional development through a
                  variety of multi-modal learning options, including byte-sized
                  modules and deep-learning courses.
                </p>
                <p className="smaller-paragraph-people-descriptions">
                  With a consumer-grade user interface, TCLA offers world-class
                  learning avenues accessible anytime, anywhere, fostering a
                  culture of continuous learning. Employees have access to
                  online resources, industry accreditations and customised
                  learning opportunities to upskill, reskill and cross-skill,
                  supported by self-paced learning and a robust ecosystem of
                  tools and technology.
                </p>
                <div
                  className="data-student-community-container people-data-set"
                  style={{ margin: 0, padding: 0 }}
                >
                  <div className="data-set-conatiner-below">
                    <b className="big-size-data" style={{ color: "#9F0C73" }}>
                    <AnimatedCounter finalValue={8} />,<AnimatedCounter finalValue={746}/>
                    </b>
                    <p className="small-size-paragraph">
                    Certifications Completed in FY23 Across Skill Categories
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div initial={{x:"-40px"}} animate={{x:0}} transition={{duration:1,type:"spring"}}  className="people-environment-section-learning-environment">
            <div className="learning-environment-descriptions">
              <b className="heading-black">Learning Organisation (LO)</b>
              <p className="bigger-paragraph-people-descriptions">
                We prioritise learning by establishing a Learning Organisation
                (LO) that encourages continuous learning through informal
                channels.
              </p>
              <p className="smaller-paragraph-people-descriptions">
                Our in-house experts, part of the Tata Communications
                Facilitators' Club, share their expertise through teach-back
                sessions and digital journeys, fostering effective knowledge
                sharing across the organisation. This initiative enables us to
                nurture transformative growth through upskilling and training.{" "}
              </p>
            </div>
          </motion.div>
          <motion.div initial={{x:"40px"}} animate={{x:0}} transition={{duration:1,type:"spring"}} className="data-student-community-container people-data-set" >
            <div className="data-set-conatiner-below" style={{width:"20%"}}>
              <b className="big-size-data" style={{ color: "#9F0C73" }}>
                <AnimatedCounter finalValue={70} />
              </b>
              <p className="small-size-paragraph">Sessions conducted</p>
            </div>
            <div className="data-set-conatiner-below"  style={{width:"30%"}}>
              <b className="big-size-data" style={{ color: "#9F0C73" }}>
              <AnimatedCounter finalValue={4} />,<AnimatedCounter finalValue={249} />
              </b>
              <p className="small-size-paragraph">
              Participants 
              </p>
            </div>
            <div className="data-set-conatiner-below"  style={{width:"40%"}}>
              <b className="big-size-data" style={{ color: "#9F0C73" }}>
              USD <AnimatedCounter finalValue={548} />,<AnimatedCounter finalValue={917}/>
              </b>
              <p className="small-size-paragraph">
              (INR 4.41 Crores) Approx. saved by leveraging our internal experts
              </p>
            </div>
            {/* <div className="data-set-conatiner-below">
              <b className="big-size-data" style={{ color: "#9F0C73" }}>
              <AnimatedCounter finalValue={7} />,<AnimatedCounter finalValue={501}/><AnimatedCounter finalValue={3} />
              </b>
              <p className="small-size-paragraph">
                Learning person days in FY2024
              </p>
            </div> */}
          </motion.div>
          <motion.div initial={{scale:0.7,opacity:0.5}} animate={{scale:1,opacity:1}} transition={{duration:1,type:"spring"}} className="award-section-people-environment">
            <img
              className="small-square-btn-png"
              src="/small-btn-alternative.svg"
              alt=""
            />
            <b className="heading-black">
              During FY2024, Tata Communications has been honoured with the
              prestigious
            </b>
            <p className="bigger-paragraph-people-descriptions">
              Brandon Hall Group Award for Excellence in the Learning &
              Development category
            </p>
            <div className="award-container-main">
              <img src="/peopleaward01.svg" alt="" />
              <img src="/peopleaward02.svg" alt="" />
            </div>
          </motion.div>
          <div className="employee-engagment-surevey-people">
            <motion.div initial={{x:"-40px",opacity:0.5}} animate={{x:0,opacity:1}} transition={{duration:1,type:"spring"}} className="employee-engagment-survey-descriptions">
              <b className="heading-black">Employee Engagement Survey</b>
              <br />
              <br />
              <p className="smaller-paragraph-people-descriptions">
                At Tata Communications, we conduct routine employee engagement
                surveys to enhance employee experience. It enables us to gauge
                employee satisfaction and the effectiveness of our learning and
                development programmes.{" "}
              </p>
            </motion.div>

            <motion.div initial={{x:"40px",opacity:0.5}} animate={{x:0,opacity:1}} transition={{duration:1,type:"spring"}}  className="data-set-conatiner-below">
              <b className="big-size-data" style={{ color: "#9F0C73" }}>
              <AnimatedCounter finalValue={87} />%
              </b>
              <p className="small-size-paragraph">
                Employee Engagement Survey Score
              </p>
            </motion.div>
          </div>
          <div className="people-environment-image-text-container">
            <motion.div id="towards-zero-harm" initial={{x:"-40px",opacity:0.5}} animate={{x:0,opacity:1}} transition={{duration:1,type:"spring"}}  className="text-environemt-image-text-container">
              <img
                className="small-square-btn-png"
                src="/small-btn-alternative.svg"
                alt=""
              />
              <br />
              <b className="heading-main-section-climate-change people-heading-main">
                Towards Zero Harm
              </b>
              <br />
              <br />
              <p className="description-main-section-climate-change">
                We prioritise the health and safety of our people and aspire to
                create a secure working environment. Our safety management
                systems are strategically implemented with the use of advanced
                technology. Every year, we conduct assessments to identify
                hazards and risks at the workplace.{" "}
              </p>
            </motion.div>
            <motion.img initial={{scale:0.5,opacity:0.5}} animate={{scale:1,opacity:1}} transition={{duration:1,type:"spring",delay:0.1}}  src="/employesurveypeople.jpeg" alt="" />
          </div>
          <motion.div initial={{y:"-90px"}} animate={{y:0}} transition={{duration:1.5,type:"spring"}}  className="people-environment-section-learning-environment">
            <div className="learning-environment-descriptions">
              <b className="heading-black">OH&S Management System</b>
              <p className="bigger-paragraph-people-descriptions">
                Our proactive approach to occupational health and safety (OH&S)
                prioritises risk mitigation strategies for permanent employees
                as well as the contract workforce.{" "}
              </p>
              <p className="smaller-paragraph-people-descriptions">
                In India, we have implemented an Integrated Management System
                (EOHS-MS) aligned with the Tata Group Health and Safety
                Management System, ISO 45001:2018 and ISO 14001:2015 Standards
                across our domestic and international facilities. This
                implementation is based on various factors such as workforce
                size, ownership, inherent H&S risk and strategic or
                customer-driven H&S requirements. Consequently, we have fully
                integrated the H&S Management System into all our major
                facilities in India (totalling 10) and key international
                facilities (3 in Canada, 2 in Singapore and 1 in Australia). It
                defines organisational structure, responsibilities, procedures,
                processes and resources for developing, implementing, achieving,
                reviewing and maintaining the organisation's OH&S policy and
                other commitments. It encompasses the well-being and safety of
                our employees, subcontractors, visitors and neighbouring
                communities. These systems provide a structured framework for
                effectively managing Environment, Occupational Health & Safety
                (EOHS) risks and fostering a culture of continuous improvement.{" "}
              </p>
            </div>
          </motion.div>
          <div className="environment-people-svg-flex-container">
            <motion.img initial={{scale:0.6,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.8,type:"spring",delay:0.1}}  src="/environment-managmnetsytem01.svg" alt="" />
            <motion.img initial={{scale:0.6,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.8,type:"spring",delay:0.2}} src="/environment-managmnetsytem02.svg" alt="" />
            <motion.img initial={{scale:0.6,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.8,type:"spring",delay:0.3}} src="/environment-managmnetsytem03.svg" alt="" />
          </div>
          <div className="split-section-equal-people">
            <motion.div initial={{x:"-50px"}} animate={{x:0}} transition={{duration:1.2,type:"spring"}} className="people-environment-section-learning-environment">
              <div className="learning-environment-descriptions">
                <b className="heading-black">Leadership and Accountability</b>
                <br />
                <p className="bigger-paragraph-people-descriptions ohs-managment-system-desc">
                  Our leaders set a strong precedent for our 'Zero Harm'
                  objective. Our approach, outlining roles and responsibilities
                  for leadership, is clearly defined in the EOHS - MS Apex
                  Manual. Some of the key measures that reflect our leadership's
                  commitment to our Health & Safety Management system include:
                </p>
              </div>
            </motion.div>
            <div  className="pink-bg-description-main">
              <motion.div initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.8,type:"spring",delay:0.1}} className="each-container-inside-pink-bg ">
                <div className="static-stick-container">1.</div>
                <div className="description-container-bg-pink border-top-right">
                  MD & CEO’s approval of the OHS Policy, release of safety
                  communications, and endorsement of the short-term Health and
                  Safety objectives.
                </div>
              </motion.div>
              <motion.div initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.8,type:"spring",delay:0.2}} className="each-container-inside-pink-bg ">
                <div className="static-stick-container">2.</div>
                <div className="description-container-bg-pink ">
                  The leadership team proposed and increased the remit of the
                  existing Board-level CSR committee to add Safety and
                  Sustainability elements.{" "}
                </div>
              </motion.div>
              <motion.div initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.8,type:"spring",delay:0.3}} className="each-container-inside-pink-bg ">
                <div className="static-stick-container">3.</div>
                <div className="description-container-bg-pink">
                  The establishment of a Global Safety Council (GSC) that
                  conducts quarterly safety performance reviews, which comprises
                  senior management and relevant business function heads; the
                  GSC ensures adequate resources, operational-level performance
                  reviews and the sharing of best practices.{" "}
                </div>
              </motion.div>
              <motion.div initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.8,type:"spring",delay:0.4}} className="each-container-inside-pink-bg ">
                <div className="static-stick-container">4.</div>
                <div className="description-container-bg-pink border-bottom-right">
                  Active participation of the leadership team in safety events
                  like Safety Carnival, including the release of promotional
                  videos.{" "}
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div initial={{x:"-100px"}} animate={{x:0}} transition={{duration:1,type:"spring"}} className="learning-environment-descriptions">
            <b className="heading-black">Health and Safety Risk Assessment</b>
            <p className="smaller-paragraph-people-descriptions">
              In addition to adhering to ISO 45001 standards, the Company has
              instituted Health and Safety (H&S) Management processes and
              protocols for its operations in different parts of the world. The
              risk-based approach, along with its associated processes and
              programmes, has enabled us to either eliminate or mitigate the
              impacts and risks associated with operational activities while
              identifying new opportunities. These initiatives encompass all
              employees, including those engaged by subcontractors as well as
              other stakeholders such as visitors, neighbouring communities and
              stakeholders.
            </p>
          </motion.div>
          <motion.div initial={{scale:0.5,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:1.3,type:"spring"}} className="main-container-fire">
            <img src="/fire-people02.png" alt="" />
            <div className="fire-svg-long-container">
              <img src="/people-fire.svg" alt="" />
            </div>
          </motion.div>
          <div className="people-environment-section-learning-environment">
            <motion.div initial={{x:"100px"}} animate={{x:0}} transition={{duration:1,type:"spring"}} className="learning-environment-descriptions">
              <p className="smaller-paragraph-people-descriptions">
                Each business unit bears the responsibility of identifying
                hazardous activity and conducting thorough Hazard Identification
                and Risk Assessment (HIRA). This assessment involves breaking
                down each activity into individual steps and evaluating the
                associated risks. Subsequently, control measures are proposed
                and implemented. It is mandatory for HIRA activities to be
                conducted every three years, with their effectiveness evaluated
                through annual internal audits and ISO 45001 surveillance
                audits. All audit findings are internally tracked, corrective
                actions are identified with predefined timelines and their
                implementation is monitored closely. The findings are then
                horizontally closed and implemented within the Company's
                Management Information Systems (MIS) framework.
              </p>
            </motion.div>
          </div>
          <div className="split-section-equal-people" style={{justifyContent:"space-between",padding:"3%"}}>
            <div className="people-environment-section-learning-environment"  style={{width:"50%"}}>
              <motion.div initial={{x:"-100px"}} animate={{x:0}} transition={{duration:1,type:"spring"}} className="learning-environment-descriptions" style={{width:"100%"}}>
                <b className="heading-black">Our Health and Safety Performance</b>
                <br />
                <p className="bigger-paragraph-people-descriptions ohs-managment-system-desc">
                We conduct safety audits and extensive training to improve health and safety performance. It has also helped to reduce Lost Time Injury Frequency Rate (LTI-FR) by 5% in comparison to the previous fiscal year.
                </p>
                <p className="smaller-paragraph-people-descriptions">
                Ensuring the well-being and safety of our employees and contractors remains our top priority. Single Points of Contact (SPOCs) carry out audits and investigate incidents diligently, promptly closing reported incidents. Lessons learned from these incidents are circulated to all internal stakeholders for comprehensive understanding.
              </p>
              </motion.div>
            </div>
            <motion.div initial={{scale:0.7,x:"100px"}} animate={{scale:1,x:0}} transition={{duration:1,type:"spring",delay:0.1}} className="graph-image-container">
              <img src="/graph-environment.svg" alt="" />
            </motion.div>
          </div>
          <div className="data-small-div-container">
          <div className="data-student-community-container people-data-set">
            <div className="data-set-conatiner-below">
              <b className="big-size-data" style={{ color: "#9F0C73" }}>
              <AnimatedCounter finalValue={676} />
              </b>
              <p className="small-size-paragraph">Safety observations reported</p>
            </div>
            <div className="data-set-conatiner-below">
              <b className="big-size-data" style={{ color: "#9F0C73" }}>
              <AnimatedCounter finalValue={8} />,<AnimatedCounter finalValue={782} />
              </b>
              <p className="small-size-paragraph">
              Training sessions conducted
              </p>
            </div>
            <div className="data-set-conatiner-below">
              <b className="big-size-data" style={{ color: "#9F0C73" }}>
              <AnimatedCounter finalValue={53} />,<AnimatedCounter finalValue={883} />
              </b>
              <p className="small-size-paragraph">
              Participants trained
              </p>
            </div>
          </div>
          </div>
         
        </div>
        < motion.div initial={{x:"100px",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:0.3, type:"spring"}} className="quick-link-sections">
          <b style={{textTransform:"uppercase  "}} className="heading-links"><TextAnimation text={'Quick'}/>{" "}<TextAnimation text={'Links'}/></b>
          <br />
          <img src="/quick-link-underline.png" alt="" />
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
            <li onClick={(event)=>handleClick(event,"Diversity-and-Inclusion")} >Diversity and Inclusion</li>
          
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <li onClick={(event)=>handleClick(event,"Learning-and-Skill-Development")}>Learning and Skill Development</li>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <li onClick={(event)=>handleClick(event,"towards-zero-harm")}>Towards Zero Harm</li>
          </div>
          {/* <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
<Link target="_blank" to="/Governance/policies-and-procedures#Policies">People Centric Policies</Link>
          </div> */}
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
            <a href="">Case Studies</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PeopleEmployes;