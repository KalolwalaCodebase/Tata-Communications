import React from "react";
import HeadBar from "../../Components/Headbar/HeadBar";
import "./Community.css";
import AnimatedCounter from '../../Components/Animatedcounter/Animatedcounter';
import { Link } from 'react-router-dom';
const CommunitySustinableLivehood = () => {
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
        icon={"/SustainableLivelihoods.svg"}
        heading={"SUSTANIBLITY-LIVEHOOD"}
        theme={"#38D1DA"}
        headiconstyle={'#8CD3DA'}
      />
      <div className="wrapper-student-container">
        <div className="slide-left-container">
          <div className="Student-section-container">
            <div className="section-one-photo-text">
              <p className="student-section-text-second">
                Empowering youth, rural communities, especially women and
                Persons with Disabilities (PwD) by offering comprehensive
                vocational, entrepreneurial and life skills training remains our
                priority.
              </p>
              <p
                className="student-section-text-second"
                style={{
                  color: "#606060",
                  fontSize: "23px",
                  marginTop: "-10px",
                  marginLeft: "10px",
                }}
              >
                Through sustained efforts, we strive to broaden their access to
                resources, embrace new technologies, and utilise financial
                services, fostering their ability to participate and contribute
                to the economy.
              </p>
            </div>
            <div className="data-student-community-container">
              <div className="data-set-conatiner-below">
                <b className="big-size-data"><AnimatedCounter finalValue={2} />,<AnimatedCounter finalValue={618} />,<AnimatedCounter finalValue={471} /></b>
                <p className="small-size-paragraph">Lives impacted</p>
              </div>
              <div className="data-set-conatiner-below">
                <b className="big-size-data"><AnimatedCounter finalValue={5} />,<AnimatedCounter finalValue={800} />+</b>
                <p className="small-size-paragraph">Youth Trained</p>
              </div>
              <div className="data-set-conatiner-below">
                <b className="big-size-data"><AnimatedCounter finalValue={15} />,<AnimatedCounter finalValue={169} /></b>
                <p className="small-size-paragraph">Direct beneficiaries</p>
              </div>
              <div className="data-set-conatiner-below">
                <b className="big-size-data"><AnimatedCounter finalValue={72} />%</b>
                <p className="small-size-paragraph">Affirmative Action</p>
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
                A Comprehensive Rural Development Strategy
              </h4>
              <div className="container-flex-row">
                <div className="description-flex-row specail-paragraph">
                  <p className="frist-paragraph">
                    {" "}
                    <span style={{fontWeight:"normal"}}> Lakhpati Kisan - Smart Villages 2.0 </span>is an
                    initiative that embodies a comprehensive rural development
                    strategy, empowering households to craft their way out of
                    poverty and enhance their overall quality of life.
                  </p>
                  <p className="normal-paragraph">
                    Through this intervention our aim is to transform the
                    Dhadgaon block in Maharashtra into a catalyst for regional
                    growth and prosperity, employing a community-centric
                    approach to development. This entails the establishment of
                    village institutions (VIs) and the implementation of
                    demand-driven and market-oriented interventions. This
                    multifaceted initiative spans various sectors, including
                    irrigation development, the creation of agricultural
                    clusters focusing on high-value and precision farming,
                    improvement of livestock management practices, integration
                    of technology in education, enhancement of access to potable
                    drinking water by strengthening water sources,
                    implementation of Community Based Nutrition Initiatives, and
                    the establishment of Village Institutions to drive rural
                    development initiatives forward.
                  </p>

                  <p className="last-paragraph">
                    Project partner: Tata Trusts Central India Initiative (CInI)
                  </p>
                </div>
              </div>
            </div>
            <div className="data-container-inner" style={{justifyContent:"space-between"}}>
              <div className="data-student-community-container">
                <div className="data-set-conatiner-below">
                  <b className="big-size-data"><AnimatedCounter finalValue={6} />,000</b>
                  <p className="small-size-paragraph">
                    households benefited (including 98% of tribal households)
                  </p>
                </div>
                <div className="data-set-conatiner-below">
                  <b className="big-size-data"><AnimatedCounter finalValue={36} />,000</b>
                  <p className="small-size-paragraph">
                    beneficiaries in 41 villages were benefitted
                  </p>
                </div>
              </div>
            </div>
            <div className="container-one-second-section ">
              <div className="container-flex-row">
                <div className="description-flex-row specail-paragraph">
                  <p className="frist-paragraph">
                    {" "}
                    <span>Tata STRIVE</span> <br />
                    Our employment-linked skill development programme provides
                    training in industry-specific, demand-driven trades to
                    underserved youth.
                  </p>
                  <p className="normal-paragraph">
                    Our programme prioritises inclusivity and gender diversity
                    among project participants. We conduct psychometric aptitude
                    assessment tests to match individuals with different trades,
                    ensuring they are prepared for the job market.
                    <br />
                    These trades span a variety of sectors, including android
                    app development, solar technology, banking, financial
                    services & insurance (BFSI), cybersecurity analysis,
                    business process outsourcing (BPO), retail sales, electrical
                    assistance, hygiene support, beauty therapy assistance, auto
                    sales consulting, and general duty assistance.
                  </p>
                  <p className="last-paragraph">
                    Project partner: Tata Community Initiatives Trust
                  </p>
                </div>
              </div>
            </div>
            <div className="container-one-second-section">
              <div className="container-flex-row">
                <div className="description-flex-row">
                  <p className="frist-paragraph">
                    {" "}
                    <span>MPowered Plus Pilot Cluster</span>
                    <br />
                    We focus to empower marginalised women from Self Help
                    Groups, guiding them towards resilient and sustainable
                    livelihoods.
                  </p>
                  <p className="normal-paragraph">
                    Through our efforts, we strive to increase their incomes and
                    foster deeper integration within societal economic
                    structures. By providing support and resources, we aim to
                    enable these women to break free from the cycle of poverty
                    and achieve greater financial stability. Through tailored
                    programmes and initiatives, we are not just offering
                    assistance, but also creating pathways for long-term success
                    and prosperity. Together, we are building a future where
                    every woman has the opportunity to thrive and contribute
                    meaningfully to society.
                  </p>

                  <p className="last-paragraph">
                    Project partner: Trickle Up India Foundation{" "}
                  </p>
                </div>
                <div className="description-flex-row2">
                  <div className="data-set-conatiner-below">
                    <b className="big-size-data">~<AnimatedCounter finalValue={6} />,000</b>
                    <p className="small-size-paragraph">
                      marginalised women supported
                    </p>
                  </div>
                  <div className="data-set-conatiner-below">
                    <b className="big-size-data"><AnimatedCounter finalValue={500} /></b>
                    <p className="small-size-paragraph">
                      Self Help Groups supported
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-one-second-section ">
              <div className="container-flex-row">
                <div className="description-flex-row specail-paragraph">
                  <p className="frist-paragraph">
                    {" "}
                    <span>Umang </span> <br />
                    Our vocational training programme emphasised on the economic
                    empowerment of women residing in peri-urban neighbourhoods
                    of Pune, Maharashtra, India.
                  </p>
                  <p className="normal-paragraph">
                    Our initiative prioritises skill development training,
                    offering participants vocational training in diverse areas
                    such as bag making, tailoring, beauty care and art & craft.
                    We provide comprehensive life skills and entrepreneurial
                    training to equip these women with the necessary tools to
                    establish and manage their own business enterprises. Through
                    this holistic approach, we aim to foster self-reliance and
                    sustainable livelihoods among women in the community, paving
                    the way for their socio-economic advancement.
                  </p>
                  <p className="last-paragraph">
                    Project partner: Initiatives in Development and Education
                    for All (IDEA)
                  </p>
                </div>
              </div>
            </div>
            <div className="container-one-second-section ">
              <div className="container-flex-row">
                <div className="description-flex-row specail-paragraph">
                  <p className="frist-paragraph">
                    {" "}
                    <span>Udaya</span> <br />
                    We are committed to uplift women from marginalised communities and increase their participation in the workforce. Through our unwavering focus on developing entrepreneurial capacity and providing access to essential business resources, we aim to create sustainable income sources for these women.
                  </p>
                  <p className="normal-paragraph">
                  Across Pune and Raigad, Maharashtra, India, we concentrate on strengthening the knowledge, skills and behavioural attributes of marginalised women. This approach empowers them to identify and analyse business opportunities effectively. In addition, we offer relentless support and facilitate relationships with local financial institutions after training, ensuring a seamless transition into entrepreneurship.
                  </p>
                  <p className="last-paragraph">
                  Entrepreneurship Development Institute of India (EDII)
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

export default CommunitySustinableLivehood;
