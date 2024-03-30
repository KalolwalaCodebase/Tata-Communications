import React from 'react'
import PlanetTransioning from './PlanetTransioning'
import Accrodian from '../../Components/CustomeAccrodian/Accrodian'

const PlanetIntroducingEv = () => {

       const CommunityCarbonObject={
              heading:"Introducing EVs and Cleaner Fuel Options",
              specailPara:"In line with our emission reduction goals, we are also transitioning our corporate fleet to more environmentally friendly options.",
              description:"Specifically, we have introduced electric vehicles (EVs) for business travel in India, resulting in a commendable reduction in GHG emissions from this source. Supporting infrastructure, such as additional EV charging stations, is also under development.In Europe, we are promoting rail travel as a lower-carbon alternative to short-haul flights, which can potentially reduce emissions drastically. Our commitment extends to collaborating with our aviation partners to increase the usage of Sustainable Aviation Fuel (SAF), a significant step towards cleaner aviation practices."
            }
            const accrodianContent = [
              {
                heading: "Energy-Saving Opportunities Identified",
                span: "130 projects",
                description:
                  " focusing on HVAC, SMPS, UPS efficiency, smart lighting, and IoT applications",
              },
              {
                heading: "Energy-Saving Opportunities Identified",
                span: "130 projects",
                description:
                  " focusing on HVAC, SMPS, UPS efficiency, smart lighting, and IoT applications",
              },
            ];
  return (
    <div className="introducing-evs-parent-container">
          <div className="evs-child-component">
              <div className="wrapper-evs-intro">
              <PlanetTransioning transationingObject={CommunityCarbonObject}/>
              </div>
          <div className="accordian-main-section-climate-change spaical-last-accrodian">
            <b className="heading-accrodian">PROGRESS MADE</b>
            <div className="accrodian-parent-element">
              {accrodianContent.map((accrodian) => (
                <Accrodian
                  heading={accrodian.heading}
                  descriptions={accrodian.description}
                  span={accrodian.span}
                />
              ))}
            </div>
          </div>
          </div>
       
    </div>
  )
}

export default PlanetIntroducingEv
