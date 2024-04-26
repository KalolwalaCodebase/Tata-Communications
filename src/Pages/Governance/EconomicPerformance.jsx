import React from 'react'
import HeadBar from '../../Components/Headbar/HeadBar'
import { Link ,useNavigate} from 'react-router-dom';

const EconomicPerformance = () => {
    const navigate = useNavigate();

    const handleClick = async(event, id) => {
        event.preventDefault(); // Prevent default link behavior
        const targetElement = document.querySelector(`#${id}`);
        if (targetElement) {
            // Calculate the offset based on the current scroll position
            const offset = targetElement.getBoundingClientRect().top - 100;

            // Scroll to the element with an offset
            window.scrollBy({
                top: offset,
                behavior: 'smooth'
            });

            // Update URL
            navigate(`${window.location.pathname}#${id}`);
        }
    };
   
   
    return (
        <div>
            <HeadBar
                icon={"/cardimg11.svg"}
                heading={"ECONOMIC PERFORMANCE"}
                theme={"#123C61"}
                headiconstyle={"#3B91DC"}
            />

            <div className="ep-quick-links-section">
                <div className='ep-sticky-links'>
                    <h4>QUICK LINKS</h4>
                    <ul>
                    <li><Link target="_blank" to={'/Sustainability/fy24-goals-&-progress'}>Goals and Progress</Link></li>
            <li><Link target="_blank" to="/Governance/policies-and-procedures#Policies">Policies</Link></li>
            <li><Link onClick={(event)=>handleClick(event,"Committed-to-Value-Creation")} >Committed to Value Creation</Link></li>
                        <li><Link onClick={(event)=>handleClick(event,"Value-Generated-for-key-stakeholders")}>Value Generated for key stakeholders</Link></li>
                        <li><Link target="_blank" to="/gri-index">GRI index</Link></li>
                        <li><Link target="_blank" to={'/Sustainability/sustainable-development-goals'} href="">SDG Linkage</Link></li>
                    </ul>
                </div>
            </div>

            <div className="ep-sec1">
                <h2>Our Mission</h2>
                <p>
                    Through optimum utilisation of financial capital we seek to maximise shareholder value while maintaining a sharp focus on deploying sustainable solutions. Our ability to seize emerging opportunities and make strategic investments have enabled us to nurture business resilience. It has not only positioned us for continuous growth but also fortified our market leadership. <br /><br />
                </p>
                <p>
                    Our consistent financial performances have paved the path for sustained value creation. It has also reinforced the trust and confidence of stakeholders in our robust business model.
                </p>
                <div className="ep-sec1-undersection">
                    <div id='Committed-to-Value-Creation' className="ep-sec1-undersection-row flex">
                        <div className='ep-sec1-undersection-row-text '>
                            <h3>Committed to Value Creation</h3>
                            <p>
                                Our economic performance continues to reflect our commitment to stakeholder value creation.
                            </p>
                        </div>
                        <img src="/ep-bar-graph1.svg" alt="" />
                    </div>
                    <div className="ep-sec1-undersection-row flex">
                        <img src="/ep-bar-graph2.svg" alt="" />
                        <img src="/ep-bar-graph3.svg" alt="" />
                    </div>
                </div>
                <div id='Value-Generated-for-key-stakeholders' className='ep-sec2-heading'>
                    <h5>VALUE GENERATED FOR KEY STAKEHOLDERS</h5>
                </div>
            </div>
            <div className="ep-sec2 flex">
                <div className="ep-sec2-part1">
                    <div className='ep-sec2-part-card'>
                        <img src="/ep-chart-tab-1.png" alt="" />
                        <p>
                            We make regular investments in employee welfare and development initiatives, demonstrating our continuous commitment to growth and excellence.
                        </p>
                    </div>
                    <div className='ep-sec2-part-card'>
                        <img src="/ep-chart-tab-2.png" alt="" />
                        <p>
                            Our global engagement with suppliers, fostering upskilling opportunities and meaningful relationships.
                        </p>

                    </div>
                    <div className='ep-sec2-part-card'>
                        <img src="/ep-chart-tab-3.png" alt="" />
                        <p>
                            Aligning our increased focus on sustainable development with our core values, strengthening communities and contributing to a thriving future.
                        </p>

                    </div>
                </div>
                <div className="ep-sec2-part2">
                    <div className='ep-sec2-part-card'>
                        <img src="/ep-chart-tab-4.png" alt="" />
                        <p>
                            Our financial strength enables ongoing investment in technology and innovative solutions. It has resulted in the development of advanced solutions that are tailored to elevate experiences and enhance customer satisfaction
                        </p>
                    </div>
                    <div className='ep-sec2-part-card'>
                        <img src="/ep-chart-tab-5.png" alt="" />
                        <p>
                            We guarantee continuous growth and stable returns by strategically managing our finances and incorporating ESG indicators into our operations. It has also enabled transparency in our annual disclosures.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EconomicPerformance