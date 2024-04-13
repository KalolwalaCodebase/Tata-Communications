import React from 'react'
// import './Materiality.css';
import HeadBar from '../../Components/Headbar/HeadBar';

const Materiality = () => {
  return (
    <div>
        <HeadBar heading={'MATERIALITY ASSESMENT'} icon={'/materiality-icon.png'} theme={'#7A63AB'} />
        <div className='materiality-sec1'>
        <div className="materiality-sec1-p flex poppins-light">
            <p className='purple-highlight-p'>
            We acknowledge and address key issues affecting our operations, as identified by stakeholders, in our pursuit of long-term responsible and sustainable business practices
            </p>
            <p>
            We continuously monitor, evaluate, and validate economic, environmental, social, and governance concerns critical to our ongoing value creation. The materiality process we employed to assess and prioritize our material topics, as guided by input from both internal and external stakeholders, is outlined below
            </p>
        </div>
        <div className="sec2-row flex poppins-light">
            <div className='m-row-card'>
                <img src="/m-row-i1.png" alt="" />
                <h4>IDENTIFY</h4>
                <p>
                Material issues are identified using various sources, such as GRI Standards, DJSI, CDP, regulations, peer benchmarking, and stakeholder engagement.                </p>
            </div>
            <div className='m-row-card'>
                <img src="/m-row-i2.png" alt="" />
                <h4>PRIORITISE</h4>
                <p>
                The prioritisation of material issues is based on their potential impact on the business, external environment, and key stakeholders, with a focus on mitigating negative outcomes.                </p>
            </div>
            <div className='m-row-card'>
                <img src="/m-row-i3.png" alt="" />
                <h4>VALIDATE</h4>
                <p>
                The material concerns that have been identified are validated by top management.
                </p>
            </div>
            <div className='m-row-card'>
                <img src="/m-row-i4.png" alt="" />
                <h4>DISCLOSE</h4>
                <p>
                The significant impact on stakeholders is identified, tracked, and communicated through our annual and sustainable development reports.                </p>
                
            </div>
            <img className='m-row-arrow-line' src="/m-row-arrow-line.svg" alt="" />

        </div>
        <div className='materiality-sec2'>
        <img src="/small-square-btn.png" alt="" />
        <br />
        <br />
        <h1>MATERIAL ISSUES</h1>
       
            <img className='materiality-graph' src="/materiality-graph.png" alt="" />
        </div>
    </div>
    </div>
  )
}

export default Materiality