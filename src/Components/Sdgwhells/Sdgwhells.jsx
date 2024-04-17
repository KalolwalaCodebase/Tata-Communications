import React, { useRef, useState } from 'react';
import './Sdgwhellstyle.css'; // Import your CSS file
import { color } from 'framer-motion';

const imagePaths = [
  "/1.svg", "/2.svg", "/3.svg", "/4.svg", "/5.svg", "/6.svg", "/7.svg", "/8.svg",
  "/9.svg", "/10.svg", "/11.svg", "/12.svg", "/13.svg", "/14.svg", "/15.svg", "/16.svg", "/17.svg"
];

// Define data for each image
const imageData = [
  {},
  {},
  {
    subheading: "SDG #3",
    heading: "GOOD HEALTH AND WELL-BEING",
    color: "#4FA54A",
    title: 'Promote A Healthier Workforce And Community',
    list: ["Improve workplace health and relationships", "Ensure safe working conditions", "Provide access to health services"],
    list2: ["Ergonomic workspaces", "IT solutions for safety monitoring", "Health awareness camps and workshops"]
  },
  {
    subheading: "SDG #4",
    heading: "QUALITY EDUCATION",
    color: "#C7243B",
    title: 'Empowering Education',
    list: ["Enhance access to quality education for underserved communities", "Support educational infrastructure development in maginalised areas", "Foster Partnerships with educational institutions and stakeholders to maximise impact", "Promote learning opportunities for all individuals"],
    list2: ["Offer a diverse range of courses and training modules accesible to all employees to enhance their skills and knowledge", "Extend learning opportunities to community members through informative sessions and training programmes", ]
  },
  {
    subheading: "SDG #5",
    heading: "GENDER EQUALITY",
    color: "#F0503A",
    title: 'Promoting Gender Equality',
    list: ["Promote gender equality within Tata Communications and let broader community", "Create a supportive and inclusive environment", "Foster awareness and advocacy to gender equality through educational programmes and community engagement activities"],
    list2: ["Offer vocational training opportunities to empower youth, particularly girls and women", "Provide access to new technologies and digital literacy programs to bridge the gender gap",]
  },
  {},
  {
    subheading: "SDG #7",
    heading: "AFFORDABLE AND CLEAN ENERGY",
    color: "#F4B30C",
    title: 'Sustainable Energy Transition',
    list: ["Allocate resources towards the development and utilization of renewable energy", "Implement energy saving measures and technologies accross operations", "Integrate innovative clean energy technologies and infrastructure solutions"],
    list2: ["Implement real-time monitoring systems to track energy consumption across facilities and operations", "Conduct training programmes and awareness campaigns to educate employees about energy conservation practices", "Collaborate with clean energy suppliers to support the development of clean energy infrastructure"]
  },
  {
    subheading: "SDG #8",
    heading: "DECENT WORK AND ECONOMIC GROWTH",
    color: "#4FA54A",
    title: 'Nurturing Sustainable Livelihoods',
    list: ["Ensure strict adherence to labour laws ad regulations across all operations and value chains", "Implement CSR programmes that focus on activities promoting economic empowerment",],
    list2: ["Offer skill enhancement programmes and vocational training to empower individuals with the skills needed for congenial work opportunities", "Facilitate access to microfinance services and promote financial inclusion",]
  },
  {
    subheading: "SDG #9",
    heading: "INDUSTRY, INNOVATION AND INFRASTRUCTURE",
    color: "#F3713A",
    title: 'Driving Connectivity and Innovation',
    list: ["FOcus on enhancing connectivity to promote innovation across all operations", "Develop innovative and ustainable solutions with scalable impact through collaboration with internal and external partners",],
    list2: ["Collaborate with external partners, including research institutions abd universities to develop innovative solutions", "Implement pilot programmes to test and evaluate the effectiveness of energy optimisation technologies and solutions",]
  },
  {},
  {
    subheading: "SDG #11",
    heading: "SUSTAINABLE CITIES AND COMMUNITES",
    color: "#F89C38",
    title: 'Building Sustainable And Safe Societies',
    list: ["Offer specific infrastructure solutions to support the development of sustainable and safer societies.", "Utilise technology to provide innovative services and solutions that contribute to building sustainable commuinities",],
    list2: ["Offer low carbon products and services that support sustainability efforts in cities and communities", "Develop web-based platforms that connect businesses and individuals, reducing the need for physical travel and promoting sustainable digital solutions",]
  },
  {
    subheading: "SDG #12",
    heading: "RESPONSIBLE CONSUMPTION AND PRODUCTION",
    color: "#4FA54A",

    title: 'Decarbonising Operations',
    list: ["Strive for continuous improvement in energy efficiency, across operations", "Set ambitious emission reduction  targets, aligned with climate science to contribute with the global efforts in combating climate change", "Enhance investment in the development of innovative low-carbon products and services"],
    list2: ["Establish targets to reduce water consumption across facilities", "Implement technology-driven interventions to reduce water and energy consumption",]
  },
  {
    subheading: "SDG #13",
    heading: "CLIMATE ACTION",
    color: "#41804E",
    title: 'Pioneering Solutions For Suatainable Consumption',
    list: ["Improve our understanding of the environment and social impacts of products and services", "Utilise innovation to design appropriate solutions that help reduce environmental impacts and enhance well-being ", ],
    list2: ["Align internal operations with the Sustainable Development Goals (SDGs) to tract, monitor and reduce consumption and emissions", "Conduct a detailed accounting of greenhouse gas (CHG) emissions at the customer end to understand the emission portfolio and identify improvement areas",]
  },

  // Define data for other images similarly
];

function Sdgwhells() {
  const itemRef = useRef(null);
  const [selectedImageData, setSelectedImageData] = useState(imageData[2]);

  const handleClick = (event) => {
    event.preventDefault();
    const item = itemRef.current;
    const rect = item.getBoundingClientRect();
    const middle_x = rect.left + (rect.width / 2);
    const middle_y = rect.top + (rect.height / 2);
    const x = event.clientX - middle_x;
    const y = event.clientY - middle_y;
    const angle = Math.atan2(y, x) + (Math.PI / 2);
    item.style.transform = `rotate(${angle}rad)`;
  };

  const handleImageClick = (index) => {
    setSelectedImageData(imageData[index]);
  };

  const renderImages = () => {
    const totalImages = imagePaths.length;
    const radius = 220; // Adjust the radius as needed
    const tiltAngle = Math.PI / 20; // Angle to tilt the circle (adjust as needed)
    const angleIncrement = (2 * Math.PI) / totalImages;

    return imagePaths.map((path, index) => {
      const adjustedIndex = (index + 13) % totalImages; // Adjusted index starting from the 15th position
      const angle = (adjustedIndex * angleIncrement) + tiltAngle;
      const x = Math.cos(angle) * radius + 200; // Adjusted x-coordinate to center the circle
      const y = Math.sin(angle) * radius + 200; // 200 is the center y-coordinate of the circle

      const imageDataExists = index < imageData.length && Object.keys(imageData[index]).length > 0;

      return (
        <img
          key={index}
          src={path}
          className="circle-img"
          style={{ top: `${y}px`, left: `${x}px` }}
          onClick={() => handleImageClick(index)}
        />
      );
    });
  };

  return (
    <div className='sdg-section'>
      <div className="circle-container" onClick={handleClick}>
        <div className='circle-inner'>
          {renderImages()}
        </div>
        <img id='item' ref={itemRef} src="/SDG-control-arrow.png" alt="" style={{ position: 'absolute', transition: 'transform 0.2s ease' }} />
        <img className='new-sdg' src="/new-sdg2.svg" alt="" />
      </div>
      <div className="sdg-image-data">
        {selectedImageData && Object.keys(selectedImageData).length > 0 && (
          <div className='sdg-data-card'>
            <p>{selectedImageData.subheading}</p>
            <h1 style={{color: selectedImageData.color}}>{selectedImageData.heading}</h1>
            <h3>OBJECTIVE</h3>
            <h2>{selectedImageData.title}</h2>

            <ul>
              {selectedImageData.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>INITIATIVES</h3>
            <ul>
              {selectedImageData.list2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sdgwhells;
