import React, { useState } from 'react';
import './DropdownComponent.css';
import { motion } from 'framer-motion';

const DropdownComponent = ({ hoveredNavItem }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [modifiedMenuItems, setModifiedMenuItems] = useState([]);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    // Reset menuItems when hoveredNavItem changes
    React.useEffect(() => {
        if (hoveredNavItem !== null) {
            switch (hoveredNavItem) {
                case 0: // People
                    setModifiedMenuItems([
                        {
                            imgSrc: '/dropdown-img-ppl.png',
                            headings: ['EMPLOYEES', 'CUSTOMERS', 'SUPPLY CHAIN'],
                            listItems: [
                                [
                                    { text: 'Diversity and Inclusion', link: '#' },
                                    { text: 'Learning and Skill Development', link: '#' },
                                    { text: 'Towards Zero Harm', link: '#' },
                                    // Add more items here...
                                ],
                                [
                                    { text: 'Customer Experience', link: '#' },
                                    { text: 'Enhancing Customer Engagement', link: '#' },
                                    { text: 'Our USPs', link: '#' },
                                    // Add more items here...
                                ],
                                [
                                    { text: 'Responsible Sourcing', link: '#' },
                                    { text: 'Sustainable Supply Chain Framework', link: '#' },
                                    { text: 'Supplier Diversity', link: '#' },
                                    { text: 'ESG Due Diligence', link: '#' },
                                    // Add more items here...
                                ],
                            ],
                        },
                    ]);
                    break;
                case 1: // Planet
                    setModifiedMenuItems([

                        {
                            imgSrc: '/dropdown-img-planet.png',
                            headings: ['ENERGY & CLIMATE CHANGE', 'WASTE MANAGEMENT', 'WATER RESOURCE MANAGEMENT'],
                            listItems: [
                                [
                                    { text: 'Our Footprint', link: '#' },
                                    { text: 'Enhancing Energy Efficiency', link: '#' },
                                    { text: 'Transition to Renewable Energy (RE)', link: '#' },
                                    { text: 'Developing Green Solutions', link: '#' },
                                    { text: 'Community Carbon Offset Programmes', link: '#' },
                                    { text: 'Cutting Down on Value Chain Based Emissions', link: '#' },
                                    { text: 'Introducing EVs and Cleaner Fuel Options', link: '#' },
                                    { text: 'Decarbonising Diesel-Based Scope 1 Emissions', link: '#' },
                                    { text: 'Driving Climate Action Through Collaboration', link: '#' },
                                    { text: 'Ensuring Transparency and Accountability', link: '#' },
                                    // Add more items here...
                                ],
                                [
                                    { text: 'Waste Categorisation', link: '#' },
                                    { text: 'Non-hazardous waste', link: '#' },
                                    { text: 'Hazardous waste', link: '#' },
                                    // Add more items here...
                                ],
                                [
                                    { text: 'Water Resource Management', link: '#' },
                                    { text: 'Wastewater management', link: '#' },
                                    // Add more items here...
                                ],
                            ],
                        },
                        
                    ]);
                    break;
                case 2: // Community
                    setModifiedMenuItems([
                        {
                            imgSrc: '/dropdown-img-com.png',
                            headings: ['EDUCATION', 'SUSTAINABLE LIVELIHOOD', 'ENVIRONMENT'],
                            listItems: [
                                [
                                    { text: 'Education', link: '#' },

                                ],
                                [
                                    { text: 'Sustainable Livelihood', link: '#' },

                                ],
                                [
                                    { text: 'Environment', link: '#' },

                                ],
                            ],
                        },
                    ]);
                    break;
                case 3: // Governance
                    setModifiedMenuItems([
                        {
                            imgSrc: '/dropdown-img-gov.png',
                            headings: ['LEADERSHIP AND INTEGRITY', 'HUMAN RIGHTS', 'RISK AND RESILIENCE', 'ECONOMIC PERFORMANCE', 'CULTIVATING INNOVATION', 'POLICIES AND PROCEDURES'],
                            listItems: [
                                [
                                    { text: 'Board of Directors', link: '#' },
                                    { text: 'Board Committees', link: '#' },
                                    { text: 'Nominations, Evaluation and Performance', link: '#' },
                                    { text: 'Remuneration and Conflict of Interest', link: '#' },
                                    // Add more items here...
                                ],
                                [
                                    { text: 'Policy Framework', link: '#' },
                                    { text: 'Ensuring Dignity at work', link: '#' },
                                    { text: 'Assessment and Engagement', link: '#' },
                                    { text: 'Awareness and training', link: '#' },
                                    { text: 'Vendor and third party compliance', link: '#' },
                                    // Add more items here...
                                ],
                                [
                                    { text: 'Enterprise Risk Management Framework', link: '#' },
                                    // Add more items here...
                                ],
                                [
                                    { text: 'Board of Directors', link: '#' },
                                    { text: 'Board Committees', link: '#' },
                                    { text: 'Nominations, Evaluation and Performance', link: '#' },
                                    { text: 'Remuneration and Conflict of Interest', link: '#' },
                                    // Add more items here...
                                ],
                                [
                                    { text: 'Board of Directors', link: '#' },
                                    { text: 'Board Committees', link: '#' },
                                    { text: 'Nominations, Evaluation and Performance', link: '#' },
                                    { text: 'Remuneration and Conflict of Interest', link: '#' },
                                    // Add more items here...
                                ],
                                [
                                    { text: 'Policies and Procedures', link: '#' },

                                ],
                            ],
                        },
                    ]);
                    break;
                default:
                    break;
            }
        }
    }, [hoveredNavItem]);

    return (
        <motion.div
            className={`dropdown-comp-container flex ${isDropdownOpen ? 'open flex' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: -20 }}
            exit={{ opacity: 0, y: 20 }} // Exit animation
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
        >
            {modifiedMenuItems.map((item, index) => (
                <div className='dropdown-comp-container-child' key={index}>
                    <img src={item.imgSrc} alt='' />
                    <div className='dropdown-child-content'>
                        {item.headings.map((heading, headingIndex) => (
                            <motion.div className='dropdown-comp-container-card' key={`${index}-${headingIndex}`}
                                initial={{ opacity: 0, }}
                                exit={{ opacity: 0,}} // Exit animation
                                animate={{ opacity: 1,}}
                                transition={{ duration: 0.9 }}
                            >
                                <h3>{heading}</h3>
                                <ul>
                                    {item.listItems[headingIndex].map((listItem, listItemIndex) => (
                                        <a href={listItem.link} key={listItemIndex}>
                                            <li>{listItem.text}</li>
                                        </a>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
            {modifiedMenuItems.length > 1 && <div className='dropdown-comp-container-divider'></div>}
        </motion.div>
    );
};

export default DropdownComponent;
