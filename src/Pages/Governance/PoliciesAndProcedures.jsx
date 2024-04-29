import React,{useEffect} from 'react'
import HeadBar from '../../Components/Headbar/HeadBar'
import { useLocation } from 'react-router-dom';
import { Link,useNavigate } from 'react-router-dom';
export const PoliciesAndProcedures = () => {
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
    <div>
      <HeadBar
        icon={"/cardimg10.svg"}
        heading={"POLICIES AND PROCEDURES"}
        theme={"#123C61"}
        headiconstyle={'#3B91DC'}
      />

      <div className="pp-quick-links-section">
        <div className='pp-sticky-links'>
          <h4>QUICK LINKS</h4>
          <ul>
            <li><Link target="_blank" to={'/Sustainability/fy24-goals-&-progress'}>Goals and Progress</Link></li>
            <li><Link onClick={(event)=>handleClick(event,'Policies')} >Policies</Link></li>
            <li><Link target="_blank" to="/gri-index">GRI index</Link></li>
            <li><Link target="_blank" to={'/Sustainability/sustainable-development-goals'} href="">SDG Linkage</Link></li>
          </ul>
        </div>
      </div>

      <div className="pp-sec1">
        <h2>
          We have implemented several policies and procedures that enable us to implement ethical practices across the organisation and lead a responsible business. <br /><br />
        </h2>
        <p>
          Our policies and procedures are regularly updated to ensure compliance with evolving laws, regulations and stakeholder expectations. <br /><br />
        </p>
        <h2>It empowers us to:</h2>

      </div>
      <div>
        <div className='pp-sec2-container '>
          <div className='pp-sec2-container-items flex'>
            <img className='pp-sec2-container-img-1' src="/pp-icon1.png" alt="" />
            <img className='pp-sec2-container-img-2' src="/pp-icon2.png" alt="" />
            <img className='pp-sec2-container-img-3' src="/pp-icon3.png" alt="" />
            <img className='pp-sec2-container-img-4' src="/pp-icon4.png" alt="" />
            <img className='pp-sec2-container-img-5' src="/pp-icon5.png" alt="" />
          </div>
        </div>
      </div>
      <div id="Policies" className='pp-sec3-container'>
        <h2 className='pp-sec3-container-h2'>Policies</h2>
        <div className='pp-sec3-table flex'>
          <div className="pp-sec3-table-data">
            <div className="pp-sec3-table-data-row1 flex">
              <div className='pp-sec3-table-h2-1'>
                <h2>
                  PEOPLE
                </h2>
              </div>
              <ul>
                <li><a target='_blank' href="https://www.tatacommunications.com/resource/corporate-resources/sustainability/occupational-health-safety-policy/">Occupational Health and Privacy Policy</a></li>
                <li><a target='_blank' href="https://www.tatacommunications.com/resource/corporate-resources/policies/tata-communications-remuneration-policy/">Tata Communications Remuneration Policy</a></li>
                <li><a target='_blank' href="/">Customer Privacy Policies</a></li>
              </ul>
              <ul>
                <li><a target='_blank' href="https://gamma.tatacommunications.com/assets/wp-content/uploads/2023/12/supplier-code-of-conduct.pdf">Supplier Code of Conduct</a></li>
                <li><a target='_blank' href="https://www.tatacommunications.com/resource/corporate-resources/policies/india-prevention-of-sexual-harassment-charter/">Prevention of Sexual Harassment Charter</a></li>
              </ul>
              <ul>
                <li><a target='_blank' href="https://gamma.tatacommunications.com/assets/wp-content/uploads/2022/02/Sustainable-Supply-Chain-Policy-2022.pdf">Sustainable Supply Chain Policy</a></li>
                <li><a target='_blank' href="https://www.tatacommunications.com/resource/corporate-resources/policies/board-diversity-policy/">Board Diversity Policy</a></li>
              </ul>
            </div>
            <div className="pp-sec3-table-data-row2 flex">
              <div className='pp-sec3-table-h2-2'>
                <h2>
                  PLANET
                </h2>
              </div>
              <ul>
                <li><a target='_blank' href="https://www.tatacommunications.com/resource/corporate-resources/sustainability/environment-policy/">Environment Policy</a></li>
              </ul>
            </div>
            <div className="pp-sec3-table-data-row3 flex">
              <div className='pp-sec3-table-h2-3'>
                <h2>
                  COMMUNITY
                </h2>
              </div>
              <ul>
                <li><a target='_blank' href="https://www.tatacommunications.com/resource/corporate-resources/policies/tata-communications-csr-policy/">CSR Policy</a></li>
              </ul>
            </div>
            <div className="pp-sec3-table-data-row4 flex">
              <div className='pp-sec3-table-h2-4'>
                <h2>
                  GOVERNANCE
                </h2>
              </div>
              <ul>
                <li><a target='_blank' href="https://www.tatacommunications.com/resource/corporate-resources/policies/tata-code-of-conduct/">Tata Code of Conduct</a></li>
                <li><a target='_blank' href="https://www.tatacommunications.com/policies/fair-use-policy-global-sip-connect/">Fair Use Policy For Global SIP Connect</a></li>
                <li><a target='_blank' href="https://gamma.tatacommunications.com/assets/wp-content/uploads/2023/02/business-and-human-rights-policy.pdf">Business and Human Rights Policy</a></li>
                <li><a target='_blank'href="https://www.tatacommunications.com/policies/privacy/">Privacy</a></li>
              </ul>
              <ul>
                <li><a target='_blank' href="/">Dignity at Workspace</a></li>
                <li><a target='_blank' href="https://www.tatacommunications.com/resource/corporate-resources/policies/anti-corruption/">Anti-Corruption Policy</a></li>
                <li><a target='_blank' href="https://www.tatacommunications.com/resource/corporate-resources/policies/business-responsibility-policies/">Business responsibility policies</a></li>
              </ul>
              <ul>
                <li><a target='_blank' href="https://www.tatacommunications.com/resource/corporate-resources/policies/whistleblowers-policy-english/">Whistleblowers Policy</a></li>
                <li><a target='_blank' href="https://www.tatacommunications.com/resource/corporate-resources/policies/anti-human-trafficking-and-modern-day-slavery-statement-for-fiscal-year-2022-23/">Anti-Human Trafficking and Modern-Day Slavery Statement</a></li>
                <li><a target='_blank' href="https://gamma.tatacommunications.com/assets/wp-content/uploads/2021/06/TC-Network-Shutdown-Policy-June-10-2021.pdf">Network Shutdown Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
