import React from 'react'
import HeadBar from '../../Components/Headbar/HeadBar'
import { Link } from 'react-router-dom';

const CultivatingInnovation = () => {
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
        <div>
            <HeadBar
                icon={"/cardimg12.svg"}
                heading={"CULTIVATING INNOVATION"}
                theme={"#123C61"}
                headiconstyle={"#3B91DC"}
            />

<div className="wm-quick-links-section" style={{marginTop:"5%"}}>
        <div className="wm-sticky-links">
          <h4>QUICK LINKS</h4>
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
              <a onClick={() => handleClick(event, "Strategic-Collaboration-for-technological-Advancement")}>
              Strategic Collaboration for technological Advancement
              </a>
            </div>
            <div className="quicklinks-button-div">
              <img
                className="quick-links-logo"
                src="/quickLinkArrow.png"
                alt=""
              />
              <a onClick={() => handleClick(event, "Building-intellectual-ecosystem")}>
              Building-intellectual-ecosystem
              </a>
            </div>
            <div className="quicklinks-button-div">
              <img
                className="quick-links-logo"
                src="/quickLinkArrow.png"
                alt=""
              />
              <a onClick={() => handleClick(event, "Empowering-innovators")}>
              Empowering-innovators
              </a>
            </div>
            <div className="quicklinks-button-div">
              <img
                className="quick-links-logo"
                src="/quickLinkArrow.png"
                alt=""
              />
              <a onClick={() => handleClick(event, "Assessment-and-engagement")}>
              Assessment and engagement
              </a>
            </div>
            <div className="quicklinks-button-div">
              <img
                className="quick-links-logo"
                src="/quickLinkArrow.png"
                alt=""
              />
              <a onClick={() => handleClick(event, "Innovation-and-Sustainability")}>
              Innovation and Sustainability
              </a>
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
              <a>
                CDP reporting
              </a>
            </div>
        </div>
      </div>

            <div className="ci-sec1">
                <h2>
                    Our research and development endeavours are directed to create sustainable solutions for a better tomorrow. We prioritise novel concepts, leverage cutting-edge technologies and have developed a culture of curiosity and collaboration to ensure operational efficiency, simplify complexities and aspire for better client outcomes. <br /><br />
                </h2>

                <h1 id='Strategic-Collaboration-for-technological-Advancement'>
                    Strategic Collaborations for Technological Advancements
                </h1>
                <br />
                <p>
                    Our R&D team is committed to advancing products and services that foster energy efficiency, diminish carbon emissions and facilitate sustainable operations. We invest in emerging technologies like AI, ML and IoT to innovate sustainable solutions for our marquee clientele. Our IoT-powered smart building solution exemplifies our dedication to crafting sustainable alternatives, assisting customers to optimise energy usage and minimise its environmental impact.
                </p>
            </div>
            <div id='Building-intellectual-ecosystem' className="ci-sec2">
                <h1>Building Intellectual Ecosystems</h1>
                <div className="ci-sec2-row flex">
                    <div className='ci-sec2-row-col'>
                        <h2>
                            Knowledge Sharing and Collaboration
                        </h2>
                        <p>
                            Our collaboration with venture capitalists, start-ups and industry associations aim to enrich our technology portfolio and cultivate innovative solutions for the future.
                        </p>

                        <h2>
                            Innovation through Open Collaboration
                        </h2>
                        <p>
                            The Corporate Venturing and Innovations Group (CVIG) leads our open innovation strategy, with a focus on AI and strategic technological progress.
                        </p>
                    </div>
                    <div className='ci-sec2-row-col'>
                        <h1>
                            58
                        </h1>
                        <h2>
                            Initiatives identified by CVIG in FY 2023
                        </h2>
                        <br />
                        <h1>
                            90+
                        </h1>
                        <h2>
                            Ideas received in FY 2023
                        </h2>
                    </div>
                </div>
            </div>
            <div id='Empowering-innovators' className="ci-sec3">
                <h2 className="ci-sec3-h2">Empowering Innovators</h2>
                <br />
                
                <h6 className="ci-sec3-h6">tata communication's <br />
internal innovation programme</h6>
                <h5 className="ci-sec3-h5">SHAPE THE FUTURE</h5>
                
                <div className="ci-sec3-row flex">
                    <div className="ci-sec3-row-col">
                        <h3>
                        'shape the future'
                        <br />
                            DISRUPT
                        </h3>
                        <div className="ci-sec3-col-divider" ></div>
                        <p>
                            A cornerstone for fostering an innovative mindset, this program encourages employees to build new products and solutions, promising the incubation of groundbreaking ideas.
                        </p>
                    </div>
                    <div className="ci-sec3-row-divider"></div>
                    <div className="ci-sec3-row-col" style={{marginTop:"0",paddingTop:"0"}}>
                        <h3>
                        'shape the future'
                        Think-A-Thon & Sprints
                        </h3>
                        <div className="ci-sec3-col-divider"></div>
                        <p>
                            Aimed at identifying unmet customer needs and business unit challenges, these initiatives inspire all employees to propose impactful solutions.
                        </p>
                    </div>
                </div>
            </div>
            <div id='Assessment-and-engagement' className="ci-sec4">
                <h5 className="ci-sec4-h5">ASSESSMENT AND ENGAGEMENT</h5>
                <div className='ci-flowchart-table-container'>
                    <div className='ci-flowchart-table'>
                        <div className='ci-flowchart-table-row1 flex'>
                            <div className='ci-flowchart-table-card-small'>
                                <h5>STAGE 0</h5>
                                <p>Ideation</p>
                            </div>
                            <div className='ci-flowchart-table-card-small'>
                                <h5>STAGE 1</h5>
                                <p>Customer Discovery</p>
                            </div>
                            <div className='ci-flowchart-table-card-small'>
                                <h5>STAGE 2</h5>
                                <p>Customer Validation</p>
                            </div>
                            <div className='ci-flowchart-table-card-small'>
                                <h5>STAGE 3</h5>
                                <p>Customer Creation</p>
                            </div>
                            <div className='ci-flowchart-table-card-small'>
                                <h5>STAGE 4</h5>
                                <p>Product Buildup</p>
                            </div>
                        </div>
                        <h1>
                            INCUBATION
                        </h1>
                        <div  className='ci-flowchart-table-row2 flex'>
                            <div className='ci-flowchart-table-card'>
                                <h6>IDEATION</h6>
                                <ul>
                                    <li>Idea submission and feedback loop</li>
                                    <li>Training + Immersion + Mentorship for selected ideas</li>
                                    <li>Prototype build and selection of a winning idea for next stages</li>
                                </ul>
                            </div>
                            <div className='ci-flowchart-table-card'>
                                <img className='ci-chart-polygon' src="/ci-chart-polygon.png" alt="" />
                                <h6>MVP</h6>
                                <ul>
                                    <li>Creation of Minimum Viable Product</li>
                                    <li>Customer Validation of MVP through multiple customer POCS</li>
                                    <li>Widened customer funnel/portfolio for validation</li>
                                </ul>
                            </div>
                            <div className='ci-flowchart-table-card'>
                                <img className='ci-chart-polygon' src="/ci-chart-polygon.png" alt="" />
                                <h6>SEED</h6>
                                <ul>
                                    <li>Stage 1-3: Signing up of 1-3 customer for the product</li>
                                    <li>Focus: Product feature tweaks based on feedbacks & requirements</li>
                                    <li>Product expansion and revenue generation</li>
                                </ul>
                            </div>
                            <div className='ci-flowchart-table-card'>
                                <img className='ci-chart-polygon' src="/ci-chart-polygon.png" alt="" />
                                <h6>BREAKOUT</h6>
                                <ul>
                                    <li>Fold into existing product line, or incubate as a separate product of our product portfolio</li>
                                    <li>Incubate as a separate product of our product portfolio</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="ci-sec5 flex">
                <div className='ci-sec5-part1'>
                    <h4>CUSTOMER CO-INNOVATION: <br />
                        COLLABORATIVE GROWTH
                    </h4>
                    <br />
                    <p>
                        Launched to harness Tata Communications’ innovation engine in partnership with strategic customers, this program focuses on thought leadership and innovative solutions to address business challenges, enabling disruptive use-case discovery and delivery.
                    </p>
                </div>
                <div className='ci-sec5-part2'>
                    <h4>
                        INNOVISTA: <br />
                        CELEBRATING INNOVATION AT <br />
                        TATA COMMUNICATIONS
                    </h4>
                    <br />
                    <p>
                        InnoVista at Tata Communications celebrates innovation through categories:
                    </p>
                    <ul>
                        <li>Implemented Innovation</li>
                        <li>Pioneered Technologies</li>
                        <li>Valiant Efforts</li>
                    </ul>
                    <p>
                        This approach acknowledges the practical application of new ideas, the introduction of novel technologies, and the lessons learned from ambitious projects that didn't pan out as expected. By recognising these diverse outcomes, InnoVista encourages a realistic and supportive environment for innovation at every stage, fostering a culture of continuous exploration and adaptation.
                    </p>
                </div>
            </div>
            <div className="ci-sec6">
                <div className='ci-sec6-content flex'>
                    <img src="/Governance002.png" alt="" />
                    <div className='ci-sec6-img1-card'>
                        <h4>
                            HARNESSING <br />
                            ACADEMIC EXCELLENCE
                        </h4>
                        <p>
                            Collaborations with universities and research institutions bring domain knowledge and innovation into our ecosystem.
                        </p>
                    </div>
                </div>
                <div className='ci-sec6-content flex'>
                    <div className='ci-sec6-img2-card'>
                        <h4>
                        STARTUP <br />
                        SYNERGIES
                        </h4>
                        <p>
                            Collaborations with universities and research institutions bring domain knowledge and innovation into our ecosystem.
                        </p>
                    </div>
                    <img src="/ci-sec6-img2.png" alt="" />
                </div>
            </div>
            <div id='Innovation-and-Sustainability' className="ci-sec7 flex">
                <div className='ci-sec7-card'>
                    <h2>
                    Innovation and Sustainability
                    </h2>
                    <p>
                    Carrying forward our objective of introducing sustainable solutions for enterprises, we have formed a multi-year collaboration with Formula E as the <b>Official Broadcast Distribution Provider for the ABB FIA Formula E World Championship.</b> With the innovative remote broadcast set up, we aim to introduce a new dimension to live telecasts by reducing its environmental impact. It has resulted in cost-effective production processes that have successfully limited carbon emissions.
                    </p>
                </div>
                <img src="/ci-sec7-diagram.png" alt="" />
            </div>
            <div className="ci-sec8 ">
            Report concerns via our <a href="">Ethics Helpline</a> or the <a href="">Get in touch with us</a> section on our website.
            </div>
        </div>
    )
}

export default CultivatingInnovation