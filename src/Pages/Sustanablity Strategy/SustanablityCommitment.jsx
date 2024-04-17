import React, { useState } from 'react';
import HeadBar from '../../Components/Headbar/HeadBar';
import CarosuselSusta from '../../Components/CarouselX/CarosuselSusta';

const SustanablityCommitment = () => {
    const [activeHeading, setActiveHeading] = useState('CLIMATE CHANGE');

    const toggleHeading = (heading) => {
        setActiveHeading(activeHeading === heading ? '' : heading);
    };

    const dataArr = {
        'CLIMATE CHANGE': [
            {
                "Specific Goal": "Net Zero by 2035", 
                "Target Year": "2030 For Carbon Neutral 2035 for Net Zero",
                "Base Year": "FY 2022",
                "Boundary": "Global Operations",
                "Inclusion/Scope": "Scope 1, 2 & 3 Emissions",
            },
            {
                "Specific Goal": "SBTI Goal - Reduce absolute scope 1 and 2 GHG Emissions 42% by FY2030",
                "Target Year": "Reduce absolute scope 1 and 2 GHG Emissions by FY2030",
                "Base Year": "FY 2022",
                "Boundary": "Global Operations",
                "Inclusion/Scope": "Scope 1 and Scope 2 GHG emissions",
            },
        ],
        'WATER CONSUMPTION': [
            {
                "Specific Goal": "20% Reduction by FY 2030",
                "Target Year": "2030",
                "Base Year": "FY 2020",
                "Boundary": "Indian Operations Only",
                "Inclusion/Scope": "Water Consumption",
            }
        ],
        'customer GHG avoidance': [
            {
                "Specific Goal": "GHG Avoidance Potential of 20x for Customers",
                "Target Year": "2027",
                "Base Year": "FY 2022",
                "Boundary": "Global Operations",
                "Inclusion/Scope": "Low Carbon Products as Identified",
            }
        ],
        'ZERO WASTE': [
            {
                "Specific Goal": "Zero Waste to Landfill by FY 2027",
                "Target Year": "2027",
                "Base Year": "-",
                "Boundary": "Indian Operations Only",
                "Inclusion/Scope": "-",
            }
        ],
    };

    const renderDataRows = (heading) => {
        if (activeHeading === heading) {
            const data = dataArr[heading];
            return (
                <div>
                    {data.map((goal, index) => (
                        <div className='data-row-wrapper-x' key={index} style={{ backgroundColor: '#F1F1F1' }}>
                            {Object.entries(goal).map(([key, value], index) => (
                                <div className='data-row-x' key={key} style={{ backgroundColor: '#F1F1F1' }}>
                                    <h3 className='poppins-medium'>{key}</h3>
                                    <p className={`poppins-light ${index === 0 ? 'poppins-medium first-child-color' : ''}`}>{value}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className='commitments'>
            <HeadBar heading={'SUSTAINABILITY COMMITMENTS'} icon={'/vector-commitments.svg'} theme={'#7A63AB'} />
            <div className='passthrough-wrapper'>
                <img className='bg-passthrough' src="/bg-passthrough.png" alt="" />
                <section className='cmmt1'>
                    <img className='banner-commitments' src="/banner-commitments.svg" alt="" />
                    <div className="cmmt1-content">
                        <br />
                        <img src="/small-square-btn.png" alt="" />
                        <br />
                        <br />
                        <h1 className="cmmt1-content poppins-light">SUSTAINABILITY COMMITMENTS</h1>
                        <br />
                        <p className='poppins-light popins-sus-board'>
                        Our sustainability strategy is aligned with the Board-approved long-term Sustainability Goals, which emphasises <span>climate change, circular economy</span>  and <span>customer GHG Avoidance.</span>  These objectives are consistent with the Tata Group’s Sustainability Policy, UN Sustainable Development Goals and our Company’s materiality assessment and peer benchmarking. We have also set short-term targets for FY2024 to FY2026, which support the long-term goals and focus on other important ESG aspects.                        </p>
                    </div>
                </section>
            </div>
            <section className='cmmt2'>
                <div className='bar-heading-parent' style={{ display: "flex", width: '100%', justifyContent: 'center', padding:"10px" }}>
                    <h3 className='bar-heading-sec poppins-medium'>LONG-TERM COMMITMENTS</h3>
                </div>
                <div className='table'>
                    <div className='table-head-wrapper'>
                        <div className='table-head-wrapper2 '>
                            <h3 className={`poppins-medium ${activeHeading !== 'CLIMATE CHANGE' ? 'inactive-heading-x' : 'active-heading-x'}`} onClick={() => toggleHeading('CLIMATE CHANGE')}>CLIMATE CHANGE</h3>
                            <h3 className={`poppins-medium ${activeHeading !== 'WATER CONSUMPTION' ? 'inactive-heading-x' : 'active-heading-x'}`} onClick={() => toggleHeading('WATER CONSUMPTION')}>WATER CONSUMPTION</h3>
                            <h3 className={`poppins-medium ${activeHeading !== 'customer GHG avoidance' ? 'inactive-heading-x' : 'active-heading-x'}`} onClick={() => toggleHeading('customer GHG avoidance')}>CUSTOMER GHG AVOIDANCE</h3>
                            <h3 className={`poppins-medium ${activeHeading !== 'ZERO WASTE' ? 'inactive-heading-x' : 'active-heading-x'}`} onClick={() => toggleHeading('ZERO WASTE')}>ZERO WASTE</h3>
                        </div>
                    </div>
                    <div className='cmmt-table-data-rows'>
                        {renderDataRows('CLIMATE CHANGE')}
                        {renderDataRows('WATER CONSUMPTION')}
                        {renderDataRows('customer GHG avoidance')}
                        {renderDataRows('ZERO WASTE')}
                    </div>
                </div>
            </section>
            <section>
                <CarosuselSusta />
            </section>
        </div>
    );
};

export default SustanablityCommitment;
