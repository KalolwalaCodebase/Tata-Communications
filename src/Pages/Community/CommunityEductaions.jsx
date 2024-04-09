import React from "react";
import HeadBar from "../../Components/Headbar/HeadBar";
import "./Community.css";
import AnimatedCounter from "../../Components/Animatedcounter/Animatedcounter";
const CommunityEductaions = () => {
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
                <h6 className="heading-main-section-education">
                  Empowering communities through education
                </h6>
                <p className="student-section-text">
                  We are dedicated to providing quality education as a
                  fundamental objective. We firmly believe that education serves
                  as a gateway to equality, offering marginalized individuals
                  the chance to break free from socioeconomic barriers and
                  pursue their aspirations.
                </p>
              </div>

              <img
                className="student-image-section"
                src="/peopleStudentimg1.png"
                alt=""
              />
            </div>
            <div className="data-student-community-container">
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
            <div className="container-one-second-section">
              <img
                className="small-btn-svg"
                src="/small-btn-alternative.svg"
                alt=""
              />
              <h6 className="heading-main-section-education">case studies</h6>
              <h4 className="normal-heading">
                Elevating the Quality of Education
              </h4>
              <div className="container-flex-row">
                <div className="description-flex-row">
                  <p className="frist-paragraph">
                    {" "}
                    <span>ANEW ‘A New Education Worldview’ </span>aims at
                    elevating the quality of education for students in the Nuh
                    district of Haryana.
                  </p>
                  <p className="normal-paragraph">
                    Our comprehensive strategy goes beyond academics to promote
                    ethical internet use and raise awareness of online safety
                    and security.  By nurturing digital-enabled and conscious
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
            <a href="">Goals and Progress</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">GRI Index</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">SDG Linkage</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">CDP reporting</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Case Studies</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityEductaions;
