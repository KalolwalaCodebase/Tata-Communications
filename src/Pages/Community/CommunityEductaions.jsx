import React from "react";
import HeadBar from "../../Components/Headbar/HeadBar";
import "./Community.css";
import AnimatedCounter from "../../Components/Animatedcounter/Animatedcounter";
import { Link } from 'react-router-dom';
const CommunityEductaions = () => {
  const handleClick = (event,id) => {
    //event.preventDefault(); // Prevent default anchor behavior
  
    const targetElement = document.querySelector(`#${id}`);
    if (targetElement) {
      // Calculate the offset based on the current scroll position
      const offset = targetElement.getBoundingClientRect().top - 100;
  
      // Scroll to the element with an offset
      window.scrollBy({
        top: offset,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className="community-student-container">
      <HeadBar
        icon={"/Education.svg"}
        heading={"EDUCATIONS"}
        theme={"#38D1DA"}
        headiconstyle={'#8CD3DA'}
      />
      <div className="wrapper-student-container">
        <div className="slide-left-container">
          <div className="Student-section-container">
            <div className="section-one-photo-text">
              <div className="education-section-main-section-description">
                <img
                  className="small-btn-svg"
                  src="/small-btn-alternative.svg"
                  alt=""
                />
                <br />
                <br />
                <h6 className="heading-main-section-education">
                  Empowering communities through education
                </h6>
                <br />
                <p className="student-section-text">
                Keeping community upliftment at the centre of our strategy, our primary focus is on providing world-class education. We believe that education serves as the cornerstone of equal opportunity, especially for individuals from underserved communities. Through tailored scholarship programmes and skill development initiatives, we pave the way for a future that is both elevating and more inclusive.
                </p>
                <br />
              </div>

              <img
                className="student-image-section"
                src="/peopleStudentimg1.png"
                alt=""
              />
            </div>
            <div className="data-student-community-container" style={{justifyContent:"flex-start",gap:"20%"}}>
              <div className="data-set-conatiner-below">
                <b className="big-size-data"><AnimatedCounter finalValue={17} />,<AnimatedCounter finalValue={3} />,<AnimatedCounter finalValue={843} /></b>
                <p className="small-size-paragraph">
                  Reduction in water consumption by 2030
                </p>
              </div>
              <div className="data-set-conatiner-below">
                <b className="big-size-data"><AnimatedCounter finalValue={53} />%</b>
                <p className="small-size-paragraph">Girls benefitted</p>
              </div>
            </div>
          </div>
          <div className="second-section-student-community">
            <div id='Case-Studies' className="container-one-second-section">
              <img
                className="small-btn-svg"
                src="/small-btn-alternative.svg"
                alt=""
              />
              <h6 className="heading-main-section-education">case studies</h6>
              <h4 className="normal-heading">
                Elevating the Quality of Education
              </h4>
              <br />
              <div className="container-flex-row">
                <div className="description-flex-row">
                  <p className="frist-paragraph">
                    {" "}
                    <span>A NEW 'A New Education Worldview' </span>aims at
                    elevating the quality of education for students in the Nuh
                    district of Haryana.
                  </p>
                  <p className="normal-paragraph">
                    Our comprehensive strategy goes beyond academics to promote
                    ethical internet use and raise awareness of online safety
                    and security. By nurturing digital-enabled and conscious
                    individuals, our initiative seeks to catalyse positive
                    societal change, shaping a future where knowledge meets
                    sustainability and empowerment.
                  </p>

                  <p className="last-paragraph">
                    Project partner: Kaivalya Education Foundation (KEF)
                  </p>
                </div>
                <div className="description-flex-row2">
                <div className="data-set-conatiner-below">
              <b className="big-size-data"><AnimatedCounter finalValue={30} />,000+</b>
              <p className="small-size-paragraph">
              Students benefited through this programme
              </p>
            </div>
            <div className="data-set-conatiner-below">
              <b className="big-size-data"><AnimatedCounter finalValue={120} /></b>
              <p className="small-size-paragraph">
              Rural communities impacted
              </p>
            </div>
                </div>
              </div>
            </div>
            <div className="container-one-second-section ">
              <div className="container-flex-row">
                <div className="description-flex-row specail-paragraph">
                  <h4 className="normal-heading">
                    Enabling Students through Various Programmes{" "}
                  </h4>
                  <br />
                  <p className="frist-paragraph">
                    {" "}
                    <span>Samarth </span> <br />
                    We offer scholarship and mentorship programmes, designed to
                    support students from socially and economically marginalised
                    backgrounds with Affirmative Action, empowering them to
                    reach their full potential.
                  </p>
                  <p className="normal-paragraph">
                    Through this initiative, we provide financial assistance and
                    invaluable mentorship, aiming to bridge gaps and unlock
                    opportunities for deserving individuals. We extend our
                    support to students enrolled in esteemed institutions such
                    as the College of Engineering Pune, Government Polytechnic
                    Pune, Government College of Engineering and Research Avasari
                    Khurd, Government College of Engineering Karad, and
                    Government Polytechnic Avasar.
                  </p>

                  <p className="last-paragraph">
                    Project partner: Kaivalya Education Foundation (KEF)
                  </p>
                </div>
              </div>
            </div>
            <div className="container-one-second-section ">
              <div className="container-flex-row">
                <div className="description-flex-row specail-paragraph">
                  <p className="frist-paragraph">
                    {" "}
                    <span>Karuna Fellowship Programme </span> <br />
                    We aim to enhance the educational transformation efforts of
                    Project ANEW (Phase II) through our two-year programme,
                    fostering a holistic approach to empower local women in Nuh.
                  </p>
                  <p className="normal-paragraph">
                    This programme enables the aspirational population of
                    Haryana to flourish and achieve their full potential. Our
                    programme encompasses many aspects ranging from nurturing
                    life skills, enhancing livelihoods and digital skill
                    development.
                    <br />
                    We provide our participants with constructive employment
                    opportunities after the completion of their fellowship
                    programme. We provide training on basic computer skill,
                    technical skill and communication skills, while empowering
                    underserved women to thrive in various pursuits of life.
                  </p>

                  <p className="last-paragraph">
                    Project partner: Kaivalya Education Foundation (KEF)
                  </p>
                </div>
              </div>
            </div>
            <div className="container-one-second-section ">
              <div className="container-flex-row">
                <div className="description-flex-row specail-paragraph">
                  <p className="frist-paragraph">
                    {" "}
                    <span>School Enrichment Programme </span> <br />
                    Our objective is to raise the bar of academic performance of
                    children belonging to socially and economically marginalised
                    backgrounds through the implementation of innovative
                    teaching-learning methods.
                  </p>
                  <p className="normal-paragraph">
                    We establish a network of community educators, referred to
                    as skilled para-teachers, who play a pivotal role in
                    facilitating conducive classroom environments. This project
                    extends its support to four Brihanmumbai Municipal
                    Corporation (BMC) schools located in Vakola and Oshiwara,
                    Mumbai.
                  </p>
                  <p className="last-paragraph">
                    Project partner: Ballygunj Society for Children In Pain
                    (CHIP)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="quick-link-sections">
          <b className="heading-links">QUICK LINKS</b>
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
            <li onClick={()=>handleClick(event,"Case-Studies")}>Case Studies</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityEductaions;
