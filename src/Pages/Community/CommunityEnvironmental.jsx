import React from "react";
import HeadBar from "../../Components/Headbar/HeadBar";
import "./Community.css";
import AnimatedCounter from "../../Components/Animatedcounter/Animatedcounter";
import { Link ,useNavigate} from "react-router-dom";
const CommunityEnvironmental = () => {
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
  
  return (
    <div className="community-student-container">
       <HeadBar
        icon={"/Layer_1.png"}
        heading={"EDUCATION"}
        theme={"#38D1DA"}
        headiconstyle={'#8CD3DA'}
      />
      <div className="wrapper-student-container">
        <div className="slide-left-container">
          <div className="Student-section-container-environment">
            <div className="section-one-photo-text-specail">
              <p className="student-section-text">
                At Tata Communications, combating climate change and protecting
                the environment are our key priorities. Therefore, we are
                focussed on creating a positive impact on the natural
                environment. Our commitment lies in incorporating efforts to
                address climate change, biodiversity conservation, water
                management, and energy sustainability into our community
                initiatives.
                <br />
                <br />
              </p>
              <p className="specailText">
                Through partnerships and advocacy for environmental restoration
                and regeneration, we aim to catalyse positive change on a global
                scale. Through collaborative endeavours, we are dedicated to
                devising sustainable solutions that help protect our planet for
                generations to come, ensuring a healthier and more resilient
                world for everyone.
              </p>
            </div>
            <div className="data-student-community-container-environment">
              <div className="data-set-conatiner-below">
                <b className="big-size-data"><AnimatedCounter finalValue={73} />,<AnimatedCounter finalValue={424} /></b>
                <br />
                <p className="small-size-paragraph-environment">
                  Reduction in water consumption by 2030
                </p>
              </div>
              <div className="data-set-conatiner-below">
                <b className="big-size-data"><AnimatedCounter finalValue={3} />,000</b>
                <p className="small-size-paragraph-environment">
                  Trees planted
                </p>
              </div>
              <div className="data-set-conatiner-below">
                <b className="big-size-data"><AnimatedCounter finalValue={5} /></b>
                <p className="small-size-paragraph-environment">
                  Public health centres powered by solar panels
                </p>
              </div>
              <div className="data-set-conatiner-below">
                <b className="big-size-data"><AnimatedCounter finalValue={210} /></b>
                <p className="small-size-paragraph-environment">
                  Households powered with solar power
                </p>
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

              <div className="container-flex-row">
                <div className="description-flex-row specail-paragraph">
                  <p className="frist-paragraph">
                    {" "}
                    <span>
                      {" "}
                      Driving Climate Sustainability Through Horticulture
                      <br />
                    </span>
                    This initiative aims to fulfil the specific needs of tribal
                    families, aiming to establish sustainable sources of income,
                    while also enhancing the environment.
                  </p>
                  <p className="normal-paragraph">
                    After 4-5 years of plantation efforts, horticulture and
                    forestry plantations become productive, providing a steady
                    income each season. We have commenced tree plantation
                    initiatives at schools, temples and panchayat offices, as
                    well as along pathways. Our programme also includes
                    initiatives to raise community awareness about the
                    importance of increasing green cover and conserving the
                    environment. These efforts will have a positive impact on
                    the climate by reducing carbon footprint.
                  </p>

                  <p className="last-paragraph">
                    Project partner: Tata Trusts Central India Initiative (CInI){" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="data-container-inner">
              <div className="data-student-community-container">
                <div className="data-set-conatiner-below">
                  <b className="big-size-data"><AnimatedCounter finalValue={500} /></b>
                  <p className="small-size-paragraph">
                    Mango orchards <br />
                    planted
                  </p>
                </div>
              </div>
            </div>
            <div className="container-one-second-section ">
              <div className="container-flex-row">
                <div className="description-flex-row specail-paragraph">
                  <p className="frist-paragraph">
                    {" "}
                    <span>Nanneer</span> <br />
                    We are primarily focused on revitalising and rehabilitating
                    Nagan Thangal Lake to facilitate effective groundwater
                    recharge.
                  </p>
                  <p className="normal-paragraph">
                    We focus on promoting biodiversity enhancement in
                    Upparapalayam, Pothur village, Villivakkam block,
                    Thiruvallur district of Tamil Nadu.
                  </p>
                  <p className="last-paragraph">
                    Project partner: Auroville Foundation{" "}
                  </p>
                </div>
              </div>
            </div>
  <div className="container-one-second-section" style={{display:"flex",justifyContent:"flex-start"}}>
  <span style={{fontSize:"42px",lineHeight:"32px",color:"#008189",fontWeight:"600",width:"55%"}}>Blue-Green Centre <br /><span style={{fontSize:"20px",color:"black",lineHeight:"10px"}}>Built for students to learn about biodiversity, indigenous plant species and flora and fauna</span></span>
  <br />
       <div className="data-set-conatiner-below" style={{marginLeft:"5%"}}>
                    <b className="big-size-data"><AnimatedCounter finalValue={3} />,000</b>
                    <p className="small-size-paragraph">
                    Trees planted
                    </p>
                  </div>
  </div>
            <div className="container-one-second-section">
              <div className="container-flex-row">
                <div className="description-flex-row">
                  <p className="frist-paragraph">
                    {" "}
                    <span>Climate-Resilient Village Programme</span>
                    <br />
                    We aim at improving the community’s access to clean energy
                    and health in the Garo Hills region of Meghalaya through
                    solar electrification of households, upgradation of health
                    centres and solar electrification, and the distribution of
                    clean cookstoves to households.
                  </p>
                  <p className="last-paragraph">
                    Project partner: North-East Slow Food and Agrobiodiversity
                    Society{" "}
                  </p>
                </div>
                <div className="description-flex-row2">
                  <div className="data-set-conatiner-below">
                    <b className="big-size-data">6,050</b>
                    <p className="small-size-paragraph">
                      Households were distributed clean cookstoves{" "}
                    </p>
                  </div>
                  <div className="data-set-conatiner-below">
                    <b className="big-size-data">210</b>
                    <p className="small-size-paragraph">
                      Households were supported through solar electrification{" "}
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
                    <span>Schools at the Forefront of Planet Action </span>{" "}
                    <br />
                    We are dedicated to fostering education for sustainable
                    development among young students and teachers.
                  </p>
                  <p className="normal-paragraph">
                    Through our project, we offer specially curated modules
                    spanning ecological, social and cultural aspects of
                    sustainable development, complemented by field-based
                    learning experiences. Implemented across Government-aided
                    schools in Chennai, our initiative aims to instil a deep
                    understanding of sustainability principles, while equipping
                    both students and teachers with the knowledge and skills
                    needed to contribute positively to their communities and the
                    environment.
                  </p>
                  <p className="last-paragraph">
                    Project partner: Auroville Foundation
                  </p>
                </div>
              </div>
            </div>
            <div className="data-container-inner">
              <div className="data-student-community-container">
                <div className="data-set-conatiner-below">
                  <b className="big-size-data"><AnimatedCounter finalValue={20} /></b>
                  <p className="small-size-paragraph">
                    Government schools were <br />
                    supported
                  </p>
                </div>
              </div>
            </div>
            <div className="container-one-second-section ">
              <div className="container-flex-row">
                <div className="description-flex-row specail-paragraph">
                  <p className="frist-paragraph">
                    {" "}
                    <span>Neerina Shakti</span> <br />
                    We are embarking on a river rejuvenation project in the Palar River basin with the objective of increasing water availability for crops, livestock and human consumption through an integrated watershed management programme.
                  </p>
                  <p className="normal-paragraph">
                    Based on studies conducted in similar projects, it is
                    estimated that there will be a significant augmentation of
                    1.625% in available runoff. This mini-watershed initiative
                    spans 22 villages in Kolar District, covering an area of
                    32.33 square kilometres. Additionally, several thousand
                    individuals downstream will also experience indirect
                    benefits from this project.
                  </p>
                  <p className="last-paragraph">
                    Project partner: International Association for Human Values
                    (IAHV){" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="data-container-inner">
              <div className="data-student-community-container">
                <div className="data-set-conatiner-below">
                  <b className="big-size-data">~<AnimatedCounter finalValue={15} />,000</b>
                  <p className="small-size-paragraph">
                  people were <br />
                  benefited
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
            <li onClick={(event)=>handleClick(event,"Case-Studies")}>Case Studies</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityEnvironmental;
