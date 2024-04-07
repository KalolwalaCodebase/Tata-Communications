import React from 'react'
import HeadBar from '../../Components/Headbar/HeadBar'

export const PoliciesAndProcedures = () => {
  return (
    <div>
      <HeadBar
        icon={"/Demologo.png"}
        heading={"POLICIES AND PROCEDURES"}
        theme={"#123C61"}
      />

      <div className="pp-quick-links-section">
        <div className='pp-sticky-links'>
          <h4>QUICK LINKS</h4>
          <ul>
            <li><a href="/">Goals and Progress</a></li>
            <li><a href="/">Policies</a></li>
            <li><a href="/">GRI index</a></li>
            <li><a href="/">SDG Linkages</a></li>
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
        <div className='pp-sec2-container flex'>
          <img src="/pp-icon1.png" alt="" />
          <img src="/pp-icon2.png" alt="" />
          <img src="/pp-icon3.png" alt="" />
          <img src="/pp-icon4.png" alt="" />
          <img src="/pp-icon5.png" alt="" />
        </div>
      </div>
      <div className='pp-sec3-container'>
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
                <li><a href="/">Occupational Health and Privacy Policy</a></li>
                <li><a href="/">EOHS Policy</a></li>
              </ul>
              <ul>
                <li><a href="/">Supplier Code of Conduct</a></li>
                <li><a href="/">Customer Privacy Policies</a></li>
              </ul>
              <ul>
                <li><a href="/">Sustainable Supply</a></li>
                <li><a href="/">Chain Policy</a></li>
              </ul>
            </div>
            <div className="pp-sec3-table-data-row2 flex">
              <div className='pp-sec3-table-h2-2'>
                <h2>
                  PLANET
                </h2>
              </div>
              <ul>
                <li><a href="/">Environment Policy</a></li>
              </ul>
            </div>
            <div className="pp-sec3-table-data-row3 flex">
              <div className='pp-sec3-table-h2-3'>
                <h2>
                  COMMUNITY
                </h2>
              </div>
              <ul>
                <li><a href="/">CSR Policy</a></li>
              </ul>
            </div>
            <div className="pp-sec3-table-data-row4 flex">
              <div className='pp-sec3-table-h2-4'>
                <h2>
                  GOVERNANCE
                </h2>
              </div>
              <ul>
                <li><a href="/">Tata Code of Conduct</a></li>
                <li><a href="/">Fair Use Policy For Global SIP Connect</a></li>
                <li><a href="/">Business and Human Rights Policy</a></li>
              </ul>
              <ul>
                <li><a href="/">Dignity at Workspace</a></li>
                <li><a href="/">Anti-Corruption Policy</a></li>
                <li><a href="/">Privacy</a></li>
              </ul>
              <ul>
                <li><a href="/">Whistleblowers Policy</a></li>
                <li><a href="/">Anti-Human Trafficking and Modern-Day Slavery Statement</a></li>
                <li><a href="/">Network Shutdown Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
